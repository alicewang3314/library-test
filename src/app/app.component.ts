import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CaptorThemeService } from 'components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fg = new FormGroup({
    tel: new FormControl(),
    ssn: new FormControl('222'),
    email: new FormControl('awef@gmail.com'),
    date: new FormControl(),
    dateMinMax: new FormControl(),
    dateRange: new FormControl(),
    dateRangeMinMax: new FormControl(),
    textarea: new FormControl('qqqqq'),
    zipcode: new FormControl(),
    zipcodeExt: new FormControl(),
    default: new FormControl(),
    number: new FormControl(),
    singleSelect: new FormControl(),
    multiSelect: new FormControl()
  });

  maxDate = new Date();
  minDate = new Date(2020, 12);

  selectEntries: { name: string, value: any }[] = [
    { name: 'one', value: 1 },
    { name: 'two', value: 2 },
    { name: 'three', value: 3 },
    { name: 'four', value: 4 }
  ];

  submit() {
    if (this.fg.valid) {
      alert(JSON.stringify(this.fg.value));
    }
  }

  constructor(
    private _theme: CaptorThemeService
  ) {
    this._theme.loadTheme();
  }
}