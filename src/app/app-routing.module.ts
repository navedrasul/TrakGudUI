import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyComponent } from './main-pages/buy/buy.component';
import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './shared-parts/add-item/add-item.component';
import { ItemDetailsComponent } from './shared-parts/item-details/item-details.component';
import { ItemsListComponent } from './shared-parts/items-list/items-list.component';
import { EditItemComponent } from './shared-parts/edit-item/edit-item.component';
import { SettingsComponent } from './main-pages/settings/settings.component';
import { SetCurrencyNUnitComponent } from './settings-parts/set-currency-n-unit/set-currency-n-unit.component';
import { SetCompanyInfoComponent } from './settings-parts/set-company-info/set-company-info.component';
import { AdminUsersComponent } from './admin-pages/admin-users/admin-users.component';
import { AdminEditDataComponent } from './admin-pages/admin-edit-data/admin-edit-data.component';
import { AddItemBatchComponent } from './shared-parts/add-item-batch/add-item-batch.component';

const routes: Routes = [
  {
    path: 'buy',
    component: BuyComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'settings/cur-n-unt',
    component: SetCurrencyNUnitComponent
  },
  {
    path: 'settings/cmp-inf',
    component: SetCompanyInfoComponent
  },
  {
    path: 'admin/usr',
    component: AdminUsersComponent
  },
  {
    path: 'admin/edt-dat',
    component: AdminEditDataComponent
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
    path: 'shared/add-item-batch',
    component: AddItemBatchComponent
  },
  {
    path: '**',
    // component: HomeComponent
    component: AddItemBatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
