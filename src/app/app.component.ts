import { style } from '@angular/animations';
import {
  Component,
  ElementRef,
  Renderer2,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CapitalismApp';

  @ViewChild('dynamicComponentContainer', {
    read: ViewContainerRef,
    static: false,
  })
  dynamicComponentContainer!: ViewContainerRef;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  addComponent() {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(LoginComponent);
    const componentRef =
      this.dynamicComponentContainer.createComponent(componentFactory);
  }

  isCorrect: boolean = false;

  n(value: Element) {
    this.renderer.setStyle(value, 'color', '#ffe000');
  }
}
