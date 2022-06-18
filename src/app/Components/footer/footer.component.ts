import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  formJSON: any;
  formValue: any;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(data: any) {
    this.formValue = data;

    this.sendData();
  }

  sendData() {
    this.formJSON = JSON.stringify(this.formValue);
    localStorage.setItem('UserData', this.formJSON);

  }

  OnlyNumbersAllowed(event: { which: any; keyCode: any }) {
    const charCode = event.which ? event.which : event.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
