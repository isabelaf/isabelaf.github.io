import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-empty-page',
  templateUrl: './empty-page.component.html'
})
export class EmptyPageComponent implements OnInit {
  isValidRoute = false;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.isValidRoute = this.titleService.getTitle() !== AppConstants.notFoundTitle;
  }
}
