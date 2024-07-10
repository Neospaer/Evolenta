import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date_now = new Date();
  array_cars = [{name: 'Volvo' }, {name: 'Lada' }, {name: 'BMW' }];
  number = 6;
}
