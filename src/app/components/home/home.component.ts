import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

export const DATE_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
  ]
})
export class HomeComponent implements OnInit {
  models: string[] = [
    "My Bike One",
    "My Bike Two",
    "My Bike Three",
    "My Bike Four",
  ];
  bikeForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    serialNumber: new FormControl('', Validators.required),
    purchasePrice: new FormControl('', Validators.required),
    purchaseDate: new FormControl('', Validators.required),
    contact: new FormControl()
  });
  validMessage: string = "";
  messageColor: string = "";

  constructor(private bikeService:BikeService) { }

  ngOnInit(): void {
  }

  submitRegistration() {
    if (this.bikeForm.valid) {
      this.validMessage = "Your bike is registered. Thank you!"
      this.messageColor = "success"
      this.bikeService.createBikeRegistration(this.bikeForm.value).subscribe(
        data => {
//           this.bikeForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Error registering your bike."
      this.messageColor = "error"
    }
  }
}
