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

  apiRequestsCount = 0;
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

  loadData(): void {
    if (!this.itemId) {
      this.loadDataError = 'Invalid item-id.';
      this.openSnackBar(this.loadDataError, 5000);
      return;
    }

    this.pBarMode = 'query';
    this.loadDataError = null;

    // Get the Item with id = itemId

    const params = new HttpParams().set('withProduct', 'true');
    // params.append('withProduct', 'true');

    this.apiRequestsCount++;
    // console.log('dataLoadCount: ' + this.dataLoadCount);
    this.tgapiSvc.getByIdWithParams<ApiDItem>(DItem.name, this.itemId, params)
      .subscribe(
        (res) => {
          const apiItem = (res as ApiDItem);
          this.item = apiItem.item;
          this.product = apiItem.product;
          this.productUnit = apiItem.productUnit;
          // console.log('Data received from TgApiService.getById(): ', this.item);
        },
        (err) => {
          this.apiRequestsCount--;
          this.handleApiResErr(err);
        },
        () => {
          this.apiRequestsCount--;
          // console.log('dataLoadCount: ' + this.dataLoadCount);
        }
      );

    this.pBarMode = 'indeterminate';
  }

  editBtnOnClicked(): void {
    this.router.navigate(['/shared/edit-item/' + this.item.id]);
  }

  backBtnOnClick(): void {
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
