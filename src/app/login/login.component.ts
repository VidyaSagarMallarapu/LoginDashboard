import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  hide = true;
  password;
  LoginOrNot;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    if (this.username == '123' && this.password == '123') {
      this.LoginOrNot = 'successfully logged in';
      console.log(this.LoginOrNot);

      this.router.navigate(['dashboard'], { queryParams: { id: this.username} });
    }
  }


}
