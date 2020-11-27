import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './inventory/add-item/add-item.component';

const routes: Routes = [
  {
    path: 'buy',
    component: BuyComponent
  },
  {
    path: 'buy/add-item',
    component: AddItemComponent
  },
  {
    path: '**',
    // component: HomeComponent
    component: BuyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
