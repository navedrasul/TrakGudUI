import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-edit-data',
  templateUrl: './admin-edit-data.component.html',
  styleUrls: ['./admin-edit-data.component.scss']
})
export class AdminEditDataComponent implements OnInit {

  menuLinks: {
    route: string,
    text: string
  }[] = [
      {
        route: '/shared/items-list',
        text: 'Items'
      },
      {
        route: '/shared/products-list',
        text: 'Products'
      },
      {
        route: '/shared/sellers-list',
        text: 'Sellers'
      },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
