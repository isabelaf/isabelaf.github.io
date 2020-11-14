import { Component, OnInit } from '@angular/core';

import { NavElement } from '../models/nav-element.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  navElements: NavElement[] = [];
  dropdownNavElements: NavElement[] = [];

  ngOnInit(): void {
    this.navElements = [
      {
        path: '/home',
        name: 'Home',
      },
      {
        path: '/projects',
        name: 'Projects',
      },
      {
        path: '/portofolio',
        name: 'Portofolio',
      }
    ];
    this.dropdownNavElements = [
      {
        path: '/-',
        name: '-'
      }
    ]
  }
}
