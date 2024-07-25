import { Component } from '@angular/core';
import { interval, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  sequenceNumbers: number[] = [];
  randomNumbers: string[] = [];
  sequenceSubscription$: Subscription | undefined;
  randomSubscription$: Subscription | undefined;
  lastSequenceNumber: number = 0;
  sequenceActive = false;
  randomActive = false;

  startSequence() {
    if (!this.sequenceActive) {
      this.sequenceSubscription$ = interval(2000).subscribe(() => {
        this.sequenceNumbers.push(this.lastSequenceNumber);
        this.lastSequenceNumber++;
      });
      this.sequenceActive = true;
    }
  }

  startRandom() {
    if (!this.randomActive) {
      this.randomSubscription$ = interval(2000).pipe(
        map(() => `Random Value: ${Math.floor(Math.random() * 10000)}`)
      ).subscribe(value => {
        this.randomNumbers.push(value);
      });
      this.randomActive = true;
    }
  }

  stopSequence() {
    if (this.sequenceSubscription$ && this.sequenceActive) {
      this.sequenceSubscription$.unsubscribe();
      this.sequenceActive = false;
    }
  }

  stopRandom() {
    if (this.randomSubscription$ && this.randomActive) {
      this.randomSubscription$.unsubscribe();
      this.randomActive = false;
    }
  }

}
