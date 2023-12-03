import {
  Component,
  ComponentRef,
} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CapitalismApp';

  componentRef!: ComponentRef<any>;

  

  openComponent(componentKey: string) {
    console.log(componentKey);

    if (this.componentRef) {
      this.componentRef.destroy();
    }
   }
}
