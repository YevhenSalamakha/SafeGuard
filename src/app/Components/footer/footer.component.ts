import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  message!: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.message = 'The form is VALID';
    }
    if (f.invalid) {
      this.message = 'The form is INVALID';
    }
  }

  OnlyNumbersAllowed(event: { which: any; keyCode: any }) {
    const charCode = event.which ? event.which : event.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
