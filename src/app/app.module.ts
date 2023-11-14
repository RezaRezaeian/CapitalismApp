import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { ImageComponent } from './image/image.component';
import { MapComponent } from './map/map.component';
import { ListTableComponent } from './list-table/list-table.component';
import { CapacityComponent } from './capacity/capacity.component';
import { InvestmentOpportunitiesComponent } from './investment-opportunities/investment-opportunities.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartComponent,
    ImageComponent,
    MapComponent,
    ListTableComponent,
    CapacityComponent,
    InvestmentOpportunitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
