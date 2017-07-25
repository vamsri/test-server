import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
  	const name = form.value.hotelname;
    const contact = form.value.contact;
    const pincode = form.value.pincode;
    const lat = form.value.lat;
    const lon = form.value.long;
    this.authService.addUserDetails(name,contact,pincode,lat,lon);    
  }
}
