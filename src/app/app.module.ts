import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatToolbarModule, 
  MatCardModule 
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCardComponent } from './image-card/image-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageCardComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
