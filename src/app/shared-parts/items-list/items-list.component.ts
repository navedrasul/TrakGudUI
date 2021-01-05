import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoggerService } from 'src/app/services/logger.service';
import { TgApiService } from 'src/app/services/tg-api.service';
import { ApiDItem, DItem, DProduct } from '../../api-models/api-models';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  displayedColumns: string[] = ['prodId', 'price', 'qty'];
  displayedColumnsTxt: string[] = ['Product', 'Price', 'Quantity'];

  items: ApiDItem[];
  products: DProduct[];

  dataLoadCount = 0;
  pBarMode = 'query';
  loadDataError: string;

  constructor(
    private router: Router,
    private logger: LoggerService,
    private tgapiSvc: TgApiService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    // Get all Items

    const params = new HttpParams().set('withTxt', true.toString());
    // params.append('withTxt', true.toString());

    this.dataLoadCount++;
    this.tgapiSvc.getAllWithParams<ApiDItem>(DItem.name, params)
      .subscribe(
        (res) => {
          this.items = (res as ApiDItem[]).map(obj => ({ ...obj }));
          console.log('Data received from TgApiService.getAll(): ', this.items);
        },
        (err) => {
          this.dataLoadCount--;
          this.handleApiResErr(err);
        },
        () => {
          this.dataLoadCount--;
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

    // this.items = [
    //   {
    //     item: {
    //       id: 1,
    //       prodId: 1,
    //       qty: 13,
    //       price: 3
    //     },
    //     product: this.products[0],
    //   },
    //   {
    //     item: {
    //       id: 2,
    //       prodId: 2,
    //       qty: 15,
    //       price: 5
    //     },
    //     product: this.products[1]
    //   },
    //   {
    //     item: {
    //       id: 3,
    //       prodId: 1,
    //       qty: 17,
    //       price: 7
    //     },
    //     product: this.products[0]
    //   },
    // ];

    // TEST CODE: End
  }

  onRowClick(itemId: number): void {
    // console.log('onRowClick():\nitemId: ', itemId);
    this.router.navigate(['/shared/item-details/' + itemId]);
  }

  addBtnOnClicked(): void {
    this.router.navigate(['/shared/add-item']);
  }

  // API-Service Response Error Handler.
  handleApiResErr(error: any): void {
    this.logger.error('Error while receiving data from TgApiService.getAll(): ');
    this.logger.error(error);

    this.loadDataError = 'Problem loading data. Please try later.';
    this.openSnackBar(this.loadDataError, 3000, 'warn');
  }

  openSnackBar(message: string, duration: number, color: string = null): void {
    const sbConfig = new MatSnackBarConfig();
    sbConfig.duration = duration;

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
      sbConfig.panelClass = colorClass;
    }

    this.snackBar.open(message, null, sbConfig);
  }
}
