import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count = 0;
  constructor() {
    this.count = 1;
  }

  ngOnInit() {
  }

  DecrementCount() {
    this.count--;
  }

  IncrementCount() {
    this.count++;

  }
}
