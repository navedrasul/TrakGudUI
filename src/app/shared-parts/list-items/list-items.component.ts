import { Component, OnInit } from '@angular/core';
import { DItem, DProduct } from '../../api-models/api-models';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  displayedColumns: string[] = ['prodId', 'qty', 'price'];
  displayedColumns_txt: string[] = ['Product', 'Quantity', 'Price'];

  items: DItem[];
  products: DProduct[];

  constructor() { }

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        name: 'Chips'
      },
      {
        id: 2,
        name: 'Biscuits'
      },
    ];

    this.items = [
      {
        id: 1,
        prodId: 1,
        prod: this.products[0],
        qty: 13,
        price: 3
      },
      {
        id: 2,
        prodId: 2,
        prod: this.products[1],
        qty: 15,
        price: 5
      },
      {
        id: 3,
        prodId: 1,
        prod: this.products[0],
        qty: 17,
        price: 7
      },
    ];
  }

}
