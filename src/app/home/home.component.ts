import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { Details } from '../models/details.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  details: Details = new Details();
  ageOnMars: number = 0;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getDetails().subscribe(
      details => {
        this.details = details;
        this.formatAboutText();
      }
    );
  }

  formatAboutText(): void {
    this.details.about.text = this.details.about.text.replace('\r\n', '<br>');
    this.details.about.text = this.details.about.text.replace('{0}', this.appService.calculateAgeOnMarts(this.details.about.birthdate).toString());
  }
}
