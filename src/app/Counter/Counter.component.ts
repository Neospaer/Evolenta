import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-Counter',
  templateUrl: './Counter.component.html',
  styleUrls: ['./Counter.component.css']
})
export class CounterComponent implements OnInit {

  count:  number = 0;

  @Output() countChanged = new EventEmitter<number>();

  ngOnInit() {
    setInterval(() => {
      this.count++;
      this.countChanged.emit(this.count);
    }, 1000);
  }

}
