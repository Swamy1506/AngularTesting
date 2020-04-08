import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges, DoCheck, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CounterComponent implements OnInit, DoCheck {

  @Input() count: number[];
  constructor(private cd: ChangeDetectorRef) {
    // this.count.push(Math.random());
  }


  // ngOnChanges(changes: SimpleChanges): void {
  //   debugger;
  // }

  ngOnInit() {
    this.cd.detach();

  }

  ngDoCheck(): void {
    debugger;
    // this.cd.markForCheck();
    // this.cd.detectChanges();
    this.cd.reattach();
    // throw new Error("Method not implemented.");
  }

  DecrementCount() {
    // this.count--;
    this.count.push(Math.random());

  }

  IncrementCount() {
    // this.count++;
    this.count.push(Math.random());


  }
}
