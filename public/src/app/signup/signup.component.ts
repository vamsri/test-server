import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  credentails: any[];
  signupResponse: string;
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm){
  	const email = form.value.email
  	const password = form.value.password;

    this.credentails = [{
      email: email,
      password: password
    }];    

    this.authService.registerUser(this.credentails)
      .subscribe(
        (response) => {
            console.log(response);
            this.signupResponse = "User Successfully Registered";
        },    
        (error) => {
            console.log(error);
            this.signupResponse = "Registration Failed:" + error; 
        }
    );
  }

}
