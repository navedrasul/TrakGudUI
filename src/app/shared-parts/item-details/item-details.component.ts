import { HttpParams } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
// import { retry } from 'rxjs/operators';
import { ApiDItem, DItem, DProduct, DProductUnit } from 'src/app/api-models/api-models';
import { LoggerService } from 'src/app/services/logger.service';
import { TgApiService } from 'src/app/services/tg-api.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit, OnDestroy {

  @Input() itemId: number;
  private routeSub: Subscription;

  item: DItem;
  product: DProduct;
  productUnit: DProductUnit;
  products: DProduct[];

  dataLoadCount = 0;
  pBarMode = 'query';
  loadDataError: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private logger: LoggerService,
    private tgapiSvc: TgApiService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params) //log the entire params object
      console.log('id (from params): ', params.id); // log the value of id
      this.itemId = params.id;
      this.loadData();
    });
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.routeSub.unsubscribe();
  }

  // dataIsLoading(): boolean {
  //   return this.dataLoadCount > 0;
  // }

  loadData(): void {
    if (!this.itemId) {
      this.loadDataError = 'Invalid item-id.';
      this.openSnackBar(this.loadDataError, 5000);
      return;
    }

    this.pBarMode = 'query';
    this.loadDataError = null;

    // // Get all Products

    // this.dataLoadCount++;
    // // console.log('dataLoadCount: ' + this.dataLoadCount);
    // this.tgapiSvc.getAll<DProduct>(DProduct.name)
    //   .subscribe(
    //     (res) => {
    //       this.products = (res as DProduct[]).map(obj => ({ ...obj }));
    //       // console.log('Data received from TgApiService.getAll(): ', this.products);

    //       if (this.item) {
    //         this.product = this.products.find(p => p.id === this.item.prodId);
    //       }
    //     },
    //     (err) => {
    //       this.logger.error('Error while receiving data from TgApiService.getAll(): ');
    //       this.logger.error(err);
    //       this.loadDataError = 'Problem loading data. Please try later.';
    //       this.openSnackBar(this.loadDataError, 3000);
    //       this.dataLoadCount--;
    //       // console.log('dataLoadCount: ' + this.dataLoadCount);
    //     },
    //     () => {
    //       this.dataLoadCount--;
    //       // console.log('dataLoadCount: ' + this.dataLoadCount);
    //     }
    //   );

    // Get the Item with id = itemId

    const params = new HttpParams().set('withProduct', 'true');
    // params.append('withProduct', 'true');

    this.dataLoadCount++;
    // console.log('dataLoadCount: ' + this.dataLoadCount);
    this.tgapiSvc.getByIdWithParams<DItem>(DItem.name, this.itemId, params)
      .subscribe(
        (res) => {
          const apiItem = (res as ApiDItem);
          this.item = apiItem.item;
          this.product = apiItem.product;
          this.productUnit = apiItem.productUnit;
          // console.log('Data received from TgApiService.getById(): ', this.item);
        },
        (err) => {
          this.logger.error('Error while receiving data from TgApiService.getById(): ');
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

    // TEST CODE: Start

    // this.products = [
    //   {
    //     id: 1,
    //     name: 'Chips'
    //   },
    //   {
    //     id: 2,
    //     name: 'Biscuits'
    //   },
    // ];

    // this.item = {
    //   id: 1,
    //   prodId: 1,
    //   prod: this.products[0],
    //   qty: 13,
    //   price: 3
    // };

    // TEST CODE: End

    this.pBarMode = 'indeterminate';
  }

  openSnackBar(message: string, duration: number): void {
    this.snackBar.open(message, null, {
      duration,
    });
  }

  editBtnOnClicked(): void {
    this.router.navigate(['/shared/edit-item/' + this.item.id]);
  }

  backBtnOnClick(): void {
    this.router.navigate(['/shared/items-list']);
  }
}
