import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-sign-up',
  templateUrl: './login-sign-up.component.html',
  styleUrls: ['./login-sign-up.component.scss']
})
export class LoginSignUpComponent implements OnInit {

  isLoginStep = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(eventData) {
    console.log('click', eventData);
    this.router.navigate(['/dashboard']);
  }
}
