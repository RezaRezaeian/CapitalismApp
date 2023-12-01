import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTableComponent } from './list-table/list-table.component';
import { MapComponent } from './map/map.component';
import { ImageComponent } from './image/image.component';
import { StartComponent } from './start/start.component';
import { CapacityComponent } from './capacity/capacity.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InvestmentOpportunitiesComponent } from './investment-opportunities/investment-opportunities.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'InvestmentOpportunitiesComponent',
    component: InvestmentOpportunitiesComponent,
  },
  { path: 'LoginComponent', component: LoginComponent },
  { path: 'ContactUsComponent', component: ContactUsComponent },
  { path: 'Capacity', component: CapacityComponent },
  { path: 'MapComponent', component: MapComponent },
  { path: 'ListTableComponent', component: ListTableComponent },
  { path: 'ImageComponent', component: ImageComponent },
  { path: 'StartComponent', component: StartComponent },
  { path: '', redirectTo: '/StartComponent', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
