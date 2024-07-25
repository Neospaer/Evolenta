import { Component } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  sequenceNumbers: number[] = [];
  randomNumbers: string[] = [];
  sequenceSubscription: Subscription | null = null;
  randomSubscription: Subscription | null = null;

  startSequence() {
    if (!this.sequenceSubscription) {
      this.sequenceSubscription = interval(2000).subscribe(num => {
        this.sequenceNumbers.push(num);
      });
    }
  }

  startRandom() {
    if (!this.randomSubscription) {
      this.randomSubscription = interval(2000).pipe(
        map(() => `Random Value: ${Math.floor(Math.random() * 10000)}`)
      ).subscribe(value => {
        this.randomNumbers.push(value);
      });
    }
  }

  stopSequence() {
    this.sequenceSubscription?.unsubscribe();
    this.sequenceSubscription = null;
  }

  stopRandom() {
    this.randomSubscription?.unsubscribe();
    this.randomSubscription = null;
  }

}
