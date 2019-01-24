import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// to use input form in html page should declare it and import it in imports 
import {FormsModule} from '@angular/forms'; 

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
