import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  // constructor(private auth: AuthService) {
  // }

  needsLogin() {
    // return !this.auth.isAuthenticated();
  }

}
