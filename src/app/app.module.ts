import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewContactsListComponent } from './view-contacts-list/view-contacts-list.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { MatDividerModule } from '@angular/material/divider';
import { ViewContactDetailComponent } from './view-contact-detail/view-contact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewContactsListComponent,
    PlaceholderComponent,
    ViewContactDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
