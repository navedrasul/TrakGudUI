import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './shared-parts/add-item/add-item.component';
import { ListItemsComponent } from './shared-parts/list-items/list-items.component';

const routes: Routes = [
  {
    path: 'buy',
    component: BuyComponent
  },
  {
    path: 'shared/list-items',
    component: ListItemsComponent
  },
  {
    path: 'shared/add-item',
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
