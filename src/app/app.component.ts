import { Component } from '@angular/core';
import { interval, map, Observable, Subscription } from 'rxjs';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  sequenceNumbers: number[] = [];
  randomNumbers: string[] = [];
  sequenceSubscription$!: Subscription;
  randomSubscription$!: Subscription;
  lastSequenceNumber: number = 0;
  sequenceActive = false;
  randomActive = false;

  constructor(public counterService: CounterService) {}

  startSequence() {
    if (!this.sequenceActive) {
      this.sequenceSubscription$ = this.counterService.setCounter().subscribe((value) => {
        this.sequenceNumbers.push(value);
      });
      this.sequenceActive = true;
    }
  }

  startRandom() {
    if (!this.randomActive) {
      this.randomSubscription$ = interval(2000).pipe(
        map(() => `Random Value: ${Math.floor(Math.random() * 100)}`)
      ).subscribe((value) => {
        this.randomNumbers.push(value);
      });
      this.randomActive = true;
    }
  }

  stopSequence() {
    if (this.sequenceActive) {
      this.sequenceSubscription$.unsubscribe();
    }
    this.sequenceActive = false;
  }

  stopRandom() {
    if (this.randomActive) {
      this.randomSubscription$.unsubscribe();
    }
    this.randomActive = false;
  }

}
