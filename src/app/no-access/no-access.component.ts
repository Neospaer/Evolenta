import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-no-access',
  templateUrl: './no-access.component.html',
  styleUrls: ['./no-access.component.css']
})
export class NoAccessComponent{

  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }

}
