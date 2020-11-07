import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Details } from '../models/details.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  details: Details = new Details();

  constructor(private appService: DataService) {}

  ngOnInit(): void {
    this.appService.getDetails().subscribe(
      details => {
        this.details = details;
        this.formatAboutText();
      }
    );
  }

  private formatAboutText(): void {
    this.details.about.text = this.details.about.text.replace('\r\n', '<br>');
    this.details.about.text = this.details.about.text.replace('{0}', this.appService.calculateAgeOnMarts(this.details.about.birthdate).toFixed(1));
  }
}
