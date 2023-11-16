import { Component } from '@angular/core';

@Component({
  selector: 'capitalism-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  logInputValue(value: string) {
    console.log('Input value:', value);
  }
  
}
