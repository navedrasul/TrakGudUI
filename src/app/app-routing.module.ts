import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyComponent } from './main-pages/buy/buy.component';
import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './shared-parts/add-item/add-item.component';
import { ItemDetailsComponent } from './shared-parts/item-details/item-details.component';
import { ItemsListComponent } from './shared-parts/items-list/items-list.component';
import { EditItemComponent } from './shared-parts/edit-item/edit-item.component';

const routes: Routes = [
  {
    path: 'buy',
    component: BuyComponent
  },
  {
    path: 'shared/items-list',
    component: ItemsListComponent
  },
  {
    path: 'shared/item-details/:id',
    component: ItemDetailsComponent
  },
  {
    path: 'shared/edit-item/:id',
    component: EditItemComponent
  },
  {
    path: 'shared/add-item',
    component: AddItemComponent
  },
  {
    path: '**',
    // component: HomeComponent
    component: ItemsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
