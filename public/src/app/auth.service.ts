import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{
	servers: any[];
	userInfo: any[];
	token: String;

	constructor(private http: Http,private router: Router){}
	registerUser(credentails : any[]) {
		console.log('credentails from client=>',JSON.stringify(credentails[0]));
		const headers = new Headers({
						'Content-Type': 'text/plain'
				});
		return this.http.post('http://139.59.47.154:3000/users',credentails,{headers:headers});
	}
	
	signinUser(email: string,password: string){
		const headers = new Headers({
				'content-type': 'text/plain'
		});
		this.servers = [{
	      email: email,
	      password: password
	    }];

	    //console.log(this.servers);
		this.http.post('http://139.59.47.154:3000/users/login',this.servers,{headers:headers})
			.subscribe(
		        (response) => {
		        	this.router.navigate(['/restaurants']); 
		        	this.token = response.headers.get('x-auth')
		        	//console.log(this.token)
		        },
		        (error) => console.log(error)
		    );
	}
	addUserDetails(name: string,contact: string,pincode:string,lat:string,lon:string){
		const headers = new Headers({
				'content-type': 'text/plain'
		});
		this.userInfo = [{
	      name: name,
	      contact: contact,
	      pincode: pincode,
	      lat: lat,
	      lon: lon
	    }];

	    console.log(this.userInfo);
		this.http.post('http://139.59.47.154:3000/admin',this.userInfo,{headers:headers})
			.subscribe(
		        (response) => console.log(response),
		        (error) => console.log(error)
		    );
	}
	getToken(){
		console.log('token in getToken Method',this.token);
		return this.token;
	}

	isAuthenticated(){
		return this.token != null;
	}

	logout(){
		this.token = null;
		this.router.navigate(['/login']);
	}
}