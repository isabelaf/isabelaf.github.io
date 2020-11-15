import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

import { AppConstants } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          if (child) {
            while (child.firstChild)
              child = child.firstChild;
            if (child.snapshot.data.title)
              return child.snapshot.data.title;
          }
          return AppConstants.notFoundTitle;
        })
      )
      .subscribe((title: string) => {
        this.titleService.setTitle(title);
      });
  }
}
