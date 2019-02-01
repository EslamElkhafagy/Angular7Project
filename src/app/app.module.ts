import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// to use input form in html page should declare it and import it in imports 
import {FormsModule} from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'; // to import component should write your ts path

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent // component calss name 
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
