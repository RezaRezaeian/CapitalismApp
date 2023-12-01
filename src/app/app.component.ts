import {
  Component,
  // ComponentFactoryResolver,
  // ViewChild,
  // ViewContainerRef,
  ComponentRef,
} from '@angular/core';
// import { LoginComponent } from './login/login.component';
// import { ListTableComponent } from './list-table/list-table.component';
// import { MapComponent } from './map/map.component';
// import { StartComponent } from './start/start.component';
// import { ImageComponent } from './image/image.component';
// import { InvestmentOpportunitiesComponent } from './investment-opportunities/investment-opportunities.component';
// import { CapacityComponent } from './capacity/capacity.component';
// import { ContactUsComponent } from './contact-us/contact-us.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CapitalismApp';

  // @ViewChild('dynamicComponentContainer', {
  //   read: ViewContainerRef,
  //   static: true,
  // })
  // dynamicComponentContainer!: ViewContainerRef;

  // componentMap: { [key: string]: any } = {
  //   LoginComponent: LoginComponent,
  //   ListTableComponent: ListTableComponent,
  //   MapComponent: MapComponent,
  //   StartComponent: StartComponent,
  //   ImageComponent: ImageComponent,
  //   InvestmentOpportunitiesComponent: InvestmentOpportunitiesComponent,
  //   CapacityComponent: CapacityComponent,
  //   ContactUsComponent: ContactUsComponent,
  // };

  componentRef!: ComponentRef<any>;

  // constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  openComponent(componentKey: string) {
    console.log(componentKey);

    if (this.componentRef) {
      this.componentRef.destroy();
    }

  //   const componentFactory =
  //     this.componentFactoryResolver.resolveComponentFactory(
  //       this.componentMap[componentKey]
  //     );

  //   this.componentRef =
  //     this.dynamicComponentContainer.createComponent(componentFactory);
   }
}
