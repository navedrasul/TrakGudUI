import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TestChartComponent } from './test-chart/test-chart.component';
import { BuyComponent } from './main-pages/buy/buy.component';
import { AddItemComponent } from './shared-parts/add-item/add-item.component';
import { MatRippleModule } from '@angular/material/core';
import { ItemDetailsComponent } from './shared-parts/item-details/item-details.component';
import { ItemsListComponent } from './shared-parts/items-list/items-list.component';
import { TgApiService } from './services/tg-api.service';
import { DataService } from './services/data.service';
import { AppStateService } from './services/app-state.service';
import { HttpClientModule } from '@angular/common/http';
import { LoggerService } from './services/logger.service';
import { AddItemBatchComponent } from './shared-parts/add-item-batch/add-item-batch.component';
import { EditItemComponent } from './shared-parts/edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainContentComponent,
    TestChartComponent,
    BuyComponent,
    AddItemComponent,
    ItemDetailsComponent,
    ItemsListComponent,
    AddItemBatchComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatRippleModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatStepperModule,
    MatAutocompleteModule,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LoggerService,
    TgApiService,
    DataService,
    AppStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
