import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DItem, DProduct, DProductUnit } from 'src/app/api-models/api-models';
import { LoggerService } from 'src/app/services/logger.service';
import { TgApiService } from 'src/app/services/tg-api.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  addForm: FormGroup;

  // item: DItem;
  products: DProduct[];
  productUnits: DProductUnit[];

  apiRequestsCount = 0;
  pBarMode = 'query';
  loadDataError: string;
  unitLbl: string;

  constructor(
    private router: Router,
    private logger: LoggerService,
    private tgapiSvc: TgApiService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadData();
  }

  initForm(): void {
    this.unitLbl = 'Select Product first';

    this.addForm = new FormGroup({
      prodId: new FormControl(),
      price: new FormControl(),
      qty: new FormControl(),
      unitId: new FormControl()
    });

    // Subscribe to form events.

    this.addForm.get('prodId').valueChanges
      .subscribe(pRes => {
        this.loadProdIdDependantValues(pRes);
      });
  }

  loadData(): void {
    // // Create an empty item object to bind with the form controls.
    // this.item = new DItem();

    // Get all Products

    this.apiRequestsCount++;
    this.tgapiSvc.getAll<DProduct>(DProduct.name)
      .subscribe(
        (res) => {
          this.products = (res as DProduct[]).map(obj => ({ ...obj }));
          console.log('Data received from TgApiService.getAll(): ', this.products);
        },
        (err) => {
          this.apiRequestsCount--;
          this.handleApiResErr(err, true);
        },
        () => {
          this.apiRequestsCount--;
        }
      );
  }

  loadProdIdDependantValues(prodId: number): void {
    if (prodId !== null) {
      this.unitLbl = 'Loading...';

      // Get all Product-Units

      const params = new HttpParams().set('prodId', prodId.toString());

      this.apiRequestsCount++;
      this.tgapiSvc.getAllWithParams<DProductUnit>(DProductUnit.name, params)
        .subscribe(
          puRes => {
            this.productUnits = (puRes as DProductUnit[]).map(obj => ({ ...obj }));
            console.log('Data received from TgApiService.getAllWithParams(): ', this.productUnits);

            this.unitLbl = 'Unit';
          },
          err => {
            this.apiRequestsCount--;
            this.handleApiResErr(err);
          },
          () => {
            this.apiRequestsCount--;
          }
        );
    } else {
      this.unitLbl = 'Select Product first';
    }
  }

  onSubmit(): void {
    const item = (this.addForm.value as DItem);
    console.log('Adding item: ', item);

    this.apiRequestsCount++;
    this.tgapiSvc.addSingle(DItem.name, item)
      .subscribe(
        (res) => {
          console.log('Item successfully saved. API Response: ', res);

          // --- Redirect to the Items-list view ---
          this.router.navigate(['/shared/items-list']).then((navigated: boolean) => {
            if (navigated) {
              this.openSnackBar('Successfully added the item', 3000, 'success');
            }
          });
        },
        (err) => {
          this.apiRequestsCount--;
          this.handleApiResErr(err);
        },
        () => {
          this.apiRequestsCount--;
        }
      );
  }

  cancelBtnOnClicked(): void {
    this.router.navigate(['/shared/items-list']);
  }

  // API-Service Response Error Handler.
  handleApiResErr(error: any, redirect: boolean = false): void {
    this.logger.error('Error while receiving data from TgApiService.getAll(): ');
    this.logger.error(error);

    this.loadDataError = 'Problem loading data. Please try later.';
    // this.openSnackBar(this.loadDataError, 3000, 'warn');

    if (redirect) {
      // --- Redirect to the Items-list view ---
      this.router.navigate(['/shared/items-list']).then((navigated: boolean) => {
        if (navigated) {
          this.openSnackBar(this.loadDataError, 3000, 'warn');
        }
      });
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
