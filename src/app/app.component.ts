import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fg = new FormGroup({
    tel: new FormControl(),
    ssn: new FormControl('222'),
    email: new FormControl('adsf'),
    date: new FormControl(),
    dateRange: new FormControl(),
    textarea: new FormControl(),
    zipcode: new FormControl('333'),
    zipcodeExt: new FormControl(),
    default: new FormControl(),
    number: new FormControl(3),
    singleSelect: new FormControl(),
    multiSelect: new FormControl()
  });

  maxDate = new Date();
  minDate = new Date(2020, 12);

  submit() {
    console.log('>>>>>>>>> formValue', this.fg.value);
    console.log('>>>>>>>>> errors', this.fg);
  }
}
