import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyPageComponent } from './empty-page/empty-page.component';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './portofolio/portofolio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    component: HomeComponent, 
    data: { title: 'Home' }
  },
  {
    path: 'projects',
    component: EmptyPageComponent,
    data: { title: 'Projects' }
  },
  {
    path: 'portofolio',
    component: PortofolioComponent,
    data: { title: 'Portofolio' }
  },
  { 
    path: '**', 
    component: EmptyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
