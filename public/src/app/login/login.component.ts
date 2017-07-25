import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentails: any[];
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email,password);
  }
}
