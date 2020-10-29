import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuLinks: {
    route: string,
    text: string,
    icon: string
  }[] = [
      {
        route: '/',
        text: 'Home',
        icon: 'home'
      },
      {
        route: '/buy',
        text: 'Buy',
        icon: 'library_add'
      },
      {
        route: '/see',
        text: 'See',
        icon: 'preview'
      },
      {
        route: '/move',
        text: 'Move',
        icon: 'local_shipping'
      },
      {
        route: '/sell',
        text: 'Sell',
        icon: 'point_of_sale'
      },
      {
        route: '/finances',
        text: 'Finances',
        icon: 'monetization_on'
      },
      {
        route: '/contacts',
        text: 'Contacts',
        icon: 'contacts'
      },
      {
        route: '/employees',
        text: 'Employees',
        icon: 'groups'
      },
      {
        route: '/settings',
        text: 'Settings',
        icon: 'settings'
      },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
