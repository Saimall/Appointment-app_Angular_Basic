import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //selector is basically an HTML tag
  templateUrl: './app.component.html', //this is the html file that needs to be displaced
  styleUrl: './app.component.css' //these are styles used in html file
})
export class AppComponent {
  title = 'Appointment life cycle';
}
