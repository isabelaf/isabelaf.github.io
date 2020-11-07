import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Details } from '../models/details.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  details: Details = new Details();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDetails().subscribe(
      details => {
        this.details = details;
        this.formatAboutText();
      }
    );
  }

  private formatAboutText(): void {
    this.details.about.text = this.details.about.text.replaceAll('\r\n', '<br>');
    this.details.about.text = this.details.about.text.replace('{0}', this.dataService.calculateAgeOnMarts(this.details.about.birthdate).toFixed(1));
  }
}
