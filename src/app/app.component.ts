import { Component } from '@angular/core';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notiflix_alert(type: string) {
    switch (type) {
      case 'success':
        Notify.success('Success Alert');
        break;
      case 'warning':
        Notify.warning('Warning Alert');
        break;
      case 'error':
        Notify.failure('Error Alert');
        break;
      case 'info':
        Notify.info('Info Alert');
        break;
    }
  }
}
