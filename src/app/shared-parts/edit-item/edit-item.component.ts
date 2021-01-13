import { HttpParams } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable, forkJoin } from 'rxjs';
import { pairwise, startWith } from 'rxjs/operators';
// import { retry } from 'rxjs/operators';
import { ApiDItem, DItem, DProduct, DProductUnit } from 'src/app/api-models/api-models';
import { LoggerService } from 'src/app/services/logger.service';
import { TgApiService } from 'src/app/services/tg-api.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit, OnDestroy {

  @Input() itemId: number;
  private routeSub: Subscription;

  editForm: FormGroup;

  item: DItem;
  products: DProduct[];
  productUnits: DProductUnit[];

  pBarMode = 'query';
  loadDataError: string;
  unitLbl: string;
  dataIsLoading: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private logger: LoggerService,
    private tgapiSvc: TgApiService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initForm();

    this.loadValuesFromRouteParams();

    this.loadData();
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.routeSub.unsubscribe();
  }

  loadValuesFromRouteParams(): void {
    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params) //log the entire params object
      console.log('id (from params): ', params.id); // log the value of id

      // NOTE: convert id in params from string to number (by prepending it with + operator).
      this.itemId = +(params?.id) || this.itemId;
    });
  }

  initForm(): void {
    this.unitLbl = 'Select Product first';

    this.editForm = new FormGroup({
      prodId: new FormControl(),
      price: new FormControl(),
      qty: new FormControl(),
      unitId: new FormControl()
    });
  }

  updateFormValues(): void {
    if (this.item.unitId !== null) {
      this.unitLbl = 'Unit';
    }

    this.editForm.patchValue(this.item, {
      emitEvent: false
    });
  }

  subscribeToFormEvents(): void {
    this.editForm.get('prodId')
      .valueChanges
      .subscribe(res => {
        this.loadProdIdDependantValues(res);
      });
  }

  loadData(): void {
    if (!this.itemId) {
      // --- Redirect to the Items-list view ---
      this.router.navigate(['/shared/item-details/' + this.item.id]).then((navigated: boolean) => {
        if (navigated) {
          this.loadDataError = 'Invalid item-id.';
          this.openSnackBar(this.loadDataError, 5000, 'warn');
        }
      });
      return;
    }

    this.pBarMode = 'query';
    this.loadDataError = null;
    this.dataIsLoading = true;

    // Get all Products

    const params = new HttpParams().set('mode', 'edit');

    this.tgapiSvc.getByIdWithParams<ApiDItem>(DItem.name, this.itemId, params)
      .subscribe(
        (res) => {
          console.log('Data loaded from API.');

          const apiItemForEdit = { ...(res as ApiDItem) };
          this.item = { ...apiItemForEdit.item };
          this.products = apiItemForEdit.products.map(obj => ({ ...obj }));
          this.productUnits = apiItemForEdit.productUnits.map(obj => ({ ...obj }));

          console.log('item: ');
          console.table(this.item);
          console.log('products: ');
          console.table(this.products);
          console.log('productUnits: ');
          console.table(this.productUnits);
        },
        (err) => {
          this.dataIsLoading = false;
          this.handleApiResErr(err, true);
        },
        () => {
          this.dataIsLoading = false;

          this.updateFormValues();
          this.subscribeToFormEvents();
        }
      );
  }

  loadProdIdDependantValues(prodId: number): void {
    if (prodId !== null) {
      this.unitLbl = 'Loading...';
      this.editForm.get('unitId').setValue(null, {
        emitEvent: false
      });

      // Get all Product-Units

      const params = new HttpParams().set('prodId', prodId.toString());

      this.dataIsLoading = true;
      this.tgapiSvc.getAllWithParams<DProductUnit>(DProductUnit.name, params)
        .subscribe(
          puRes => {
            this.productUnits = (puRes as DProductUnit[]).map(obj => ({ ...obj }));
            console.log('Data received from TgApiService.getAllWithParams(): ', this.productUnits);

            this.unitLbl = 'Unit';
          },
          err => {
            this.handleApiResErr(err);
            this.dataIsLoading = false;
          },
          () => {
            this.dataIsLoading = false;
          }
        );
    } else {
      this.unitLbl = 'Select Product first';
    }
  }

  onSubmit(): void {
    const formItem = (this.editForm.value as DItem);
    formItem.id = this.itemId;
    console.log('Updating item: ', formItem);

    this.dataIsLoading = true;
    this.tgapiSvc.updateSingle(DItem.name, this.item.id, formItem)
      .subscribe(
        (res) => {
          console.log('Item successfully saved. API Response: ', res);

          // --- Redirect to the Items-list view ---
          this.router.navigate(['/shared/item-details/' + this.item.id]).then((navigated: boolean) => {
            if (navigated) {
              this.openSnackBar('Successfully updated the item', 3000, 'success');
            }
          });
        },
        (err) => {
          this.dataIsLoading = false;
          this.handleApiResErr(err);
        },
        () => {
          this.dataIsLoading = false;
        }
      );
  }

  cancelBtnOnClicked(): void {
    this.router.navigate(['/shared/item-details/' + this.item.id]);
  }

  // API-Service Response Error Handler.
  handleApiResErr(error: any, redirect: boolean = false): void {
    this.logger.error('Error while receiving data from TgApiService: ');
    this.logger.error(error);

    if (redirect) {
      // --- Redirect to the Items-list view ---
      this.router.navigate(['/shared/item-details/' + this.item.id]).then((navigated: boolean) => {
        if (navigated) {
          this.openSnackBar(this.loadDataError, 3000, 'warn');
        }
      });
    } else {
      this.loadDataError = 'Problem processing request. Please try later.';
      this.openSnackBar(this.loadDataError, 3000, 'warn');
    }
  }

  openSnackBar(message: string, duration: number, color: string = null): void {
    if (color) {
      let colorClass: string;

      if (color === 'theme') {
        colorClass = 'bg_theme';
      } else if (color === 'lightTheme') {
        colorClass = 'bg_lightTheme';
      } else if (color === 'info') {
        colorClass = 'bg_info';
      } else if (color === 'warn') {
        colorClass = 'bg_warn';
      } else if (color === 'success') {
        colorClass = 'bg_success';
      } else {
        colorClass = 'bg_darkGrey';
      }

      this.snackBar.open(
        message,
        null,
        {
          duration,
          panelClass: colorClass
        }
      );
    } else {
      this.snackBar.open(message, null, {
        duration,
      });
    }
  }
}
