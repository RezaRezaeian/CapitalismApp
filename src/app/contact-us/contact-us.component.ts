import { Component } from '@angular/core';

@Component({
  selector: 'capitalism-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  formData: any = {};

  submitForm() {
    console.log(this.formData);
  }
}
