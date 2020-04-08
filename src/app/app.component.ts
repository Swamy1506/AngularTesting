import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';


interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularTesting';
  count = [];
  message$: Observable<string>;

  constructor(private store: Store<AppState>) {

    this.message$ = this.store.select('message');

  }

  ngOnInit(): void {
    this.count.push(1);
  }

  changetoSpanish() {
    this.store.dispatch({ type: 'SPANISH' });
    this.count.push(1);

  }
  changetoFrench() {
    this.store.dispatch({ type: 'FRENCH' });
    this.count.push(-1);
  }


}
