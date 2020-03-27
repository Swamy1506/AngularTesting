import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'AngularTesting';

  message$: Observable<string>;

  constructor(private store: Store<AppState>) {

    this.message$ = this.store.select('message');

  }

  changetoSpanish() {
    this.store.dispatch({ type: 'SPANISH' });
  }
  changetoFrench() {
    this.store.dispatch({ type: 'FRENCH' });
  }


}
