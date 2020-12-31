import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { LoggerService } from 'src/app/services/logger.service';
import { TgApiService } from 'src/app/services/tg-api.service';

import { CmContact, DBuyer, DItemBatchSourceType, DItemBatchType, DReceivedItemBatch, FimTransaction } from '../../api-models/api-models';
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

  itemBatch: DReceivedItemBatch = {};
  itemBatchSourceTypes: DItemBatchSourceType[];
  products: DProduct[];
  itemSource: DSeller;
  itemTransaction: FimTransaction;

  filteredSellers: Observable<DSeller[]>;

  dataLoadCount = 0;
  pBarMode = 'query';
  loadDataError: string;

  constructor(
    private logger: LoggerService,
    private tgapiSvc: TgApiService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initForms();
    this.loadData();
  }

  initForms(): void {
    // Create FormGroups

    this.addFormStep1 = new FormGroup({
      productId: new FormControl(),
      sourceType: new FormControl()
    });

    this.addFormStep2 = new FormGroup({
      sourceId: new FormControl()
    });

    this.addFormStep3 = new FormGroup({
      transactionId: new FormControl()
    });

    // Setup FormControls

    this.addFormStep2.get('sourceId').valueChanges
      .pipe(
        // startWith(''),
        map(value => this.sellersFilterAsync(value))
      )
      .subscribe(res => {
        this.filteredSellers = res;
      });
  }

  loadData(): void {
    this.pBarMode = 'query';
    this.loadDataError = null;

    // Get all Products

    this.dataLoadCount++;
    // console.log('dataLoadCount: ' + this.dataLoadCount);
    this.tgapiSvc.getAll<DProduct>(DProduct.name)
      .subscribe(
        (res) => {
          this.products = (res as DProduct[]).map(obj => ({ ...obj }));
          console.log('Data received from TgApiService.getAll(): ', this.products);
        },
        (err) => {
          this.logger.error('Error while receiving data from TgApiService.getAll(): ');
          this.logger.error(err);
          this.loadDataError = 'Problem loading data. Please try later.';
          this.openSnackBar(this.loadDataError, 3000);
          this.dataLoadCount--;
          // console.log('dataLoadCount: ' + this.dataLoadCount);
        },
        () => {
          this.dataLoadCount--;
          // console.log('dataLoadCount: ' + this.dataLoadCount);
        }
      );

    // Get all Item-Batch-Source-Types

    this.dataLoadCount++;
    // console.log('dataLoadCount: ' + this.dataLoadCount);
    this.tgapiSvc.getAll<DItemBatchSourceType>(DItemBatchSourceType.name)
      .subscribe(
        (res) => {
          this.itemBatchSourceTypes = (res as DItemBatchSourceType[]).map(obj => ({ ...obj }));
          console.log('Data received from TgApiService.getAll(): ', this.products);
        },
        (err) => {
          this.logger.error('Error while receiving data from TgApiService.getAll(): ');
          this.logger.error(err);
          this.loadDataError = 'Problem loading data. Please try later.';
          this.openSnackBar(this.loadDataError, 3000);
          this.dataLoadCount--;
          // console.log('dataLoadCount: ' + this.dataLoadCount);
        },
        () => {
          this.dataLoadCount--;
          // console.log('dataLoadCount: ' + this.dataLoadCount);
        }
      );

    this.pBarMode = 'indeterminate';
  }

  openSnackBar(message: string, duration: number): void {
    this.snackBar.open(message, null, {
      duration,
    });
  }

  private sellersFilterAsync(value: string): Observable<DSeller[]> {
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
