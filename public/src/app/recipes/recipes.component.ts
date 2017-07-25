import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  outlet: {pincode:string,name:string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.outlet ={
  		pincode: this.route.snapshot.params['pincode'],
  		name: this.route.snapshot.params['name']
  	};
  	this.route.params
  		.subscribe(
  			(params: Params) => {
  				this.outlet.pincode = params['pincode'],
  				this.outlet.name = params['name']
  			}	
		);
  }

}
