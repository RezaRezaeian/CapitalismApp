import { style } from '@angular/animations';
import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  OnDestroy,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ListTableComponent } from './list-table/list-table.component';
import { MapComponent } from './map/map.component';
import { StartComponent } from './start/start.component';
import { ImageComponent } from './image/image.component';
import { InvestmentOpportunitiesComponent } from './investment-opportunities/investment-opportunities.component';
import { CapacityComponent } from './capacity/capacity.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CapitalismApp';

  @ViewChild('dynamicComponentContainer', {
    read: ViewContainerRef,
    static: true,
  })
  dynamicComponentContainer!: ViewContainerRef;

  componentMap: { [key: string]: any } = {
    LoginComponent: LoginComponent,
    ListTableComponent: ListTableComponent,
    MapComponent: MapComponent,
    StartComponent: StartComponent,
    ImageComponent: ImageComponent,
    InvestmentOpportunitiesComponent: InvestmentOpportunitiesComponent,
    CapacityComponent: CapacityComponent,
  };

  componentRef!: ComponentRef<any>;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  // addComponent() {
  //   const componentFactory =
  //     this.componentFactoryResolver.resolveComponentFactory(LoginComponent);
  //   const componentRef =
  //     this.dynamicComponentContainer.createComponent(componentFactory);
  // }

  // replaceComponent() {
  //   // Destroy the existing component
  //   if (this.componentRef) {
  //     this.componentRef.destroy();
  //   }

  //   // Resolve the factory for the new component
  //   const componentFactory =
  //     this.componentFactoryResolver.resolveComponentFactory(ListTableComponent);

  //   // Create the new component
  //   this.componentRef =
  //     this.dynamicComponentContainer.createComponent(componentFactory);
  // }

  // ngOnDestroy(): void {
  //   // Destroy the component reference when the component is destroyed
  //   if (this.componentRef) {
  //     this.componentRef.destroy();
  //   }
  // }

  openComponent(componentKey: string) {
    console.log(componentKey);

    // Destroy the existing component
    if (this.componentRef) {
      this.componentRef.destroy();
    }

    // Resolve the factory for the selected component
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        this.componentMap[componentKey]
      );

    // Create the new component
    this.componentRef =
      this.dynamicComponentContainer.createComponent(componentFactory);
  }
}
