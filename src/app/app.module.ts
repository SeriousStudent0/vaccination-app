import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import { FormsModule } from '@angular/forms';
import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {HttpClientModule } from '@angular/common/http';
import { CenterSearchbarComponent } from './center-searchbar/center-searchbar.component';
import { CenterBoxComponent } from './center-box/center-box.component';
import { CenterDetailsComponent } from './center-details/center-details.component';
@NgModule({
  declarations: [
    AppComponent,
    VaccinationCenterComponent,
    VaccinationCenterListComponent,
    FirstComponent,
    SecondComponent,
    CenterSearchbarComponent,
    CenterBoxComponent,
    CenterDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
