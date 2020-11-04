import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  elements = [];

  public constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.elements = [
      {
        path: '/home',
        href: '/home',
        name: 'Home',
      },
      {
        path: '/projects',
        href: '/projects',
        name: 'Projects',
      },
      {
        path: '/portofolio',
        href: '/portofolio',
        name: 'Portofolio',
      }
    ];

    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          if (child != null)
          {
            while (child.firstChild)
              child = child.firstChild;
            if (child.snapshot.data['title']) {
              return child.snapshot.data['title'];
            }
          }
          return '404';
        })
      )
      .subscribe((title: string) => {
        this.titleService.setTitle(title);
      });
  }
}
