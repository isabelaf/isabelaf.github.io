import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  details = {};

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.details = this.appService.getDetails().subscribe(
      details => {
        this.details = details;
      }
    );
  }
}
