import { Component } from '@angular/core';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    showIndicator = true;
 
    switchIndicator(): void {
      this.showIndicator = !this.showIndicator;
      if(this.showIndicator){
        Notify.info('Indicator is visible');
      }
      else {
        Notify.info('Indicator is not visible')
      }
    } 
}
