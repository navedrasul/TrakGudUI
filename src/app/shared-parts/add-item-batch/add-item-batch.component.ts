import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { LoggerService } from 'src/app/services/logger.service';
import { TgApiService } from 'src/app/services/tg-api.service';

import { CmContact, DBuyer, DItem, DItemBatchSourceType, DItemBatchType, DProductUnit, DReceivedItemBatch, FimTransaction } from '../../api-models/api-models';
import { DProduct, DSeller, DWarehouse } from '../../api-models/api-models';

@Component({
  selector: 'app-add-item-batch',
  templateUrl: './add-item-batch.component.html',
  styleUrls: ['./add-item-batch.component.scss']
})
export class AddItemBatchComponent implements OnInit {

  addFormStep1: FormGroup;
  addFormStep2: FormGroup;
  addFormStep3: FormGroup;

  itemBatch: DReceivedItemBatch = new DReceivedItemBatch();
  item: DItem = new DItem();

  itemBatchSourceTypes: DItemBatchSourceType[];
  products: DProduct[];
  itemSource: DSeller;
  itemTransaction: FimTransaction;
  productUnits: DProductUnit[];

  filteredSources: Observable<DSeller[]>;

  dataIsLoading = false;
  pBarMode = 'query';
  loadDataError: string;

  unitLbl: string;
  sourceLbl: string;

  constructor(
    private router: Router,
    private logger: LoggerService,
    private tgapiSvc: TgApiService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initForms();
    this.loadData();
  }

  initForms(): void {
    this.unitLbl = 'Select Product first';
    this.sourceLbl = 'Select Source Type first';

    // Create FormGroups for each step.

    this.addFormStep1 = new FormGroup({
      productId: new FormControl(),
      qty: new FormControl(),
      unitId: new FormControl()
    });

    this.addFormStep2 = new FormGroup({
      sourceType: new FormControl(),
      sourceId: new FormControl()
    });

    this.addFormStep3 = new FormGroup({
      transactionId: new FormControl()
    });
  }

  loadData(): void {
    this.pBarMode = 'query';
    this.loadDataError = null;

    // Get all Products

    this.dataIsLoading = true;
    const prodsReqObs = this.tgapiSvc.getAll<DProduct>(DProduct.name);

    // Get all Item-Batch-Source-Types

    const stReqObs = this.tgapiSvc.getAll<DItemBatchSourceType>(DItemBatchSourceType.name);

    forkJoin([
      prodsReqObs,
      stReqObs
    ])
      .subscribe(
        (res) => {
          this.pBarMode = 'indeterminate';

          console.log('Data received from TgApiService: ');

          this.products = (res[0] as DProduct[]).map(obj => ({ ...obj }));
          console.log('Products:');
          console.table(this.products);

          this.itemBatchSourceTypes = (res as DItemBatchSourceType[]).map(obj => ({ ...obj }));
          console.log('Item Batch Source Types:');
          console.table(this.itemBatchSourceTypes);

          this.subscribeToFormEvents();
        },
        (err) => {
          this.pBarMode = 'indeterminate';

          this.logger.error('Error while receiving data from TgApiService: ');
          this.logger.error(err);

          this.loadDataError = 'Problem loading data. Please try later.';
          this.openSnackBar(this.loadDataError, 3000);

          this.dataIsLoading = false;
        },
        () => {
          this.dataIsLoading = false;
        }
      );
  }

  subscribeToFormEvents(): void {
    this.addFormStep1.get('prodId').valueChanges
      .subscribe(pRes => {
        this.loadProdIdDependantValues(pRes);
      });

    this.addFormStep1.get('sourceType').valueChanges
      .subscribe(pRes => {
        this.loadSourceTypeDependantValues(pRes);
      });

    this.addFormStep2.get('sourceId').valueChanges
      .pipe(
        // startWith(''),
        map(value => this.sourcesFilterAsync(value))
      )
      .subscribe(res => {
        this.filteredSources = res;
      });
  }

  loadProdIdDependantValues(prodId: number): void {
    if (prodId !== null) {
      this.unitLbl = 'Loading...';
      this.addFormStep3.get('unitId').setValue(null, {
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

  loadSourceTypeDependantValues(prodId: number): void {
    if (prodId !== null) {
      this.sourceLbl = 'Loading...';
      this.addFormStep3.get('unitId').setValue(null, {
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

            this.sourceLbl = 'Source';
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
      this.sourceLbl = 'Select Source Type first';
    }
  }


  cancelBtnOnClicked(): void {
    this.router.navigate(['/buy']);
  }

  public onStepChange(event: any): void {
    // Todo: Implement!
    console.log('Step changed to (index): ', event.selectedIndex);
  }


  // API-Service Response Error Handler.
  handleApiResErr(error: any, redirect: boolean = false): void {
    this.logger.error('Error while receiving data from TgApiService: ');
    this.logger.error(error);

    if (redirect) {
      // --- Redirect to the Items-list view ---
      this.router.navigate(['/shared/items-list']).then((navigated: boolean) => {
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

  private sourcesFilterAsync(value: string): Observable<DSeller[]> {
    if (value.length < 2) {
      return of([]);
    }

    const params = new HttpParams().set('filter', value);
    // params.append('filter', value);
    params.append('count', '5');

    return this.tgapiSvc.getAllWithParams<DSeller>(
      DSeller.name,
      params
    );
  }
}
