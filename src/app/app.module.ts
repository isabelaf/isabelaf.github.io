import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { GoTopButtonModule } from 'ng-go-top-button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataService } from './services/data.service';

import { EmptyPageComponent } from './empty-page/empty-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyPageComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PortofolioComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PdfViewerModule,
    GoTopButtonModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
