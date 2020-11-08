import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { HttpClientModule } from '@angular/common/http';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataService } from './services/data.service';

import { EmptyPageComponent } from './empty-page/empty-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './portofolio/portofolio.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyPageComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PortofolioComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    PdfViewerModule,
    AppRoutingModule,
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
