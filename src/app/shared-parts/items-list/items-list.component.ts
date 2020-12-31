import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
          this.logger.error('Error while receiving data from TgApiService.getAll(): ');
          this.logger.error(err);

          this.loadDataError = 'Problem loading data. Please try later.';
          this.openSnackBar(this.loadDataError, 3000);

          this.dataLoadCount--;
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

  openSnackBar(message: string, duration: number): void {
    this.snackBar.open(message, null, {
      duration,
    });
  }

  onRowClick(itemId: number): void {
    console.log('onRowClick():\nitemId: ', itemId);
    this.router.navigate(['shared/item-details/' + itemId]);
  }
}
