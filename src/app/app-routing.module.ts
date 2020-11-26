import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'buy',
    component: BuyComponent
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
