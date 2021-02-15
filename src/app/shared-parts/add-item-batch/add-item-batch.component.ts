import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlainDialogData } from 'src/app/models/plain-dialog-data';
import { PlainDialogOptions } from 'src/app/models/plain-dialog-options';
import { DialogService } from 'src/app/services/dialog.service';

import { LoggerService } from 'src/app/services/logger.service';
import { TgApiService } from 'src/app/services/tg-api.service';

import { ApiDItemBatch, ApiDSeller, DBuyer, DItem, DItemBatch, DItemBatchSourceType, DProductUnit, DReceivedItemBatch, DWarehouse, FimTransaction } from '../../api-models/api-models';
import { DProduct, DSeller } from '../../api-models/api-models';
import { AddProductComponent } from '../product/add-product/add-product.component';

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

  // filteredSources: DSeller[] | DBuyer[] | DWarehouse[];
  filteredSources: DSeller[];

  dataIsLoading = false;
  pBarMode = 'query';
  loadDataError: string;

  unitLbl: string;
  sourceLbl: string;
  addProdDlgRef: any;

  constructor(
    private router: Router,
    private logger: LoggerService,
    private tgapiSvc: TgApiService,
    private snackBar: MatSnackBar,
    private dlgSvc: DialogService
  ) { }

  ngOnInit(): void {
    this.initForms();
    this.loadData();
  }

  initForms(): void {
    this.unitLbl = 'Select Product first';
    this.sourceLbl = 'Source';

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

    const params = new HttpParams().set('mode', 'add');

    this.dataIsLoading = true;
    const prodsReqObs = this.tgapiSvc.getByIdWithParams<ApiDItemBatch>(DItemBatch.name, 0, params)
      .subscribe(
        (res) => {
          this.pBarMode = 'indeterminate';

          console.log('Data received from TgApiService: ');

          const apiItemB = (res as ApiDItemBatch);
          this.products = apiItemB.products?.map(obj => ({ ...obj }));
          console.log('Products:');
          console.table(this.products);

          this.itemBatchSourceTypes = apiItemB.itemBatchSourceTypes?.map(obj => ({ ...obj }));
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
    this.addFormStep1.get('productId').valueChanges
      .subscribe(pRes => {
        this.loadProdIdDependantValues(pRes);
      });

    // this.addFormStep1.get('sourceType').valueChanges
    //   .subscribe(pRes => {
    //     this.loadSourceTypeDependantValues(pRes);
    //   });

    // this.addFormStep2.get('sourceId').valueChanges
    // .pipe(
    //   map(value => this.sourcesFilterAsync(value))
    // )
    // .subscribe(res => {
    //   const sourceType = this.addFormStep2.get('sourceType').value as string;
    //   const sourceTypeTxt = this.itemBatchSourceTypes.find(st => st.value === sourceType).text;

    //   if (sourceTypeTxt.toUpperCase() === 'SELLER') {
    //     this.filteredSources = (res as Observable<DSeller[]>);
    //   } else if (sourceTypeTxt.toUpperCase() === 'BUYER') {
    //     this.filteredSources = (res as Observable<DBuyer[]>);
    //   } else if (sourceTypeTxt.toUpperCase() === 'WAREHOUSE') {
    //     this.filteredSources = (res as Observable<DWarehouse[]>);
    //   } else {
    //     this.logger.errorMessage('Unrecognised Item-Batch-Source-Type while updating Item-Source values.');
    //   }

    //   console.log('Item Source values received: ');
    //   console.table(this.filteredSources);
    // });

    this.addFormStep2.get('sourceId').valueChanges
      .subscribe(sRes => {
        this.filterSources(sRes);
      });
  }

  loadProdIdDependantValues(prodId: number): void {
    if (prodId !== null) {
      this.unitLbl = 'Loading...';
      this.addFormStep1.get('unitId').setValue(null, {
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

  // loadSourceTypeDependantValues(prodId: number): void {
  //   if (prodId !== null) {
  //     this.sourceLbl = 'Loading...';
  //     this.addFormStep3.get('unitId').setValue(null, {
  //       emitEvent: false
  //     });

  //     // Get all Sources

  //     const params = new HttpParams().set('prodId', prodId.toString());

  //     this.dataIsLoading = true;
  //     this.tgapiSvc.getAllWithParams<DProductUnit>(DProductUnit.name, params)
  //       .subscribe(
  //         puRes => {
  //           this.productUnits = (puRes as DProductUnit[]).map(obj => ({ ...obj }));
  //           console.log('Data received from TgApiService.getAllWithParams(): ', this.productUnits);

  //           this.sourceLbl = 'Source';
  //         },
  //         err => {
  //           this.handleApiResErr(err);
  //           this.dataIsLoading = false;
  //         },
  //         () => {
  //           this.dataIsLoading = false;
  //         }
  //       );
  //   } else {
  //     this.sourceLbl = 'Select Source Type first';
  //   }
  // }

  public onStepChange(event: any): void {
    // Todo: Implement!
    console.log('Step changed to (index): ', event.selectedIndex);
  }


  cancelBtnOnClicked(): void {
    this.router.navigate(['/buy']);
  }

  showAddProdDialog(): void {
    // Show modal dialog to show 'Add Product' dialog.

    const dlgData: PlainDialogData = {
      embeddedComponentClass: AddProductComponent
    };

    const dlgOptions: PlainDialogOptions = {
      width: '450px',
      data: dlgData
    };

    this.addProdDlgRef = this.dlgSvc.openPlainDialog(dlgOptions);

    this.addProdDlgRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if (result === true) {
          // Todo: Re-fetch the Products list and select the newly added Product.
        }
      });
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

  // private sourcesFilterAsync(value: string): Observable<DSeller[]> {
  //   if (value.length < 2) {
  //     return of([]);
  //   }

  //   const params = new HttpParams().set('filter', value);
  //   // params.append('filter', value);
  //   params.append('count', '5');

  //   return this.tgapiSvc.getAllWithParams<DSeller>(
  //     DSeller.name,
  //     params
  //   );
  // }

  private filterSources(filterKey: string): void {
    if (filterKey.length < 2) {
      return;
    }

    const params = new HttpParams().set('filter', filterKey);
    params.append('count', '5');

    this.tgapiSvc.getAllWithParams<ApiDSeller>(
      DSeller.name,
      params
    )
      .subscribe(res => {
        console.log('Filtered Sellers from API: ', res);
        this.filteredSources = res.map(obj => ({ ...(obj.seller) }));

        // const sourceType = this.addFormStep2.get('sourceType').value as string;
        // const sourceTypeTxt = this.itemBatchSourceTypes.find(st => st.value === sourceType).text;

        // if (sourceTypeTxt.toUpperCase() === 'SELLER') {
          // this.filteredSources = (res as DSeller[]);
        // } else if (sourceTypeTxt.toUpperCase() === 'BUYER') {
        //   this.filteredSources = (res as DBuyer[]);
        // } else if (sourceTypeTxt.toUpperCase() === 'WAREHOUSE') {
        //   this.filteredSources = (res as DWarehouse[]);
        // } else {
        //   this.logger.errorMessage('Unrecognised Item-Batch-Source-Type while updating Item-Source values.');
        // }

        console.log('Item Source values received: ');
        console.table(this.filteredSources);
      });
  }

  sourceDisplayFn(value?: number): string | undefined {
    return value ? this.filteredSources.find(s => s.id === value).name : undefined;
  }

  getWarehouseName(warehouse: DWarehouse): string {
    // Todo: Implement!
    return warehouse.locationId.toString();
  }
}
