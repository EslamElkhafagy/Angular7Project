import { Component } from '@angular/core';

@Component({
  // call it in index.html to run AppComponent.html first
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'My-App-Rev';
}
