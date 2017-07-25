import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Headers,Http } from '@angular/http';
import { RequestOptions,Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import * as _ from 'underscore';
 
import { PagerService } from './../PagerService'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  Hotels: any[];
  //ListHotels = [];
  constructor(private http: Http,
              private authService: AuthService,
              private pagerService: PagerService,
              private router: Router) { }

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  ngOnInit() {
    this.allItems = [];  

    this.http.get('http://139.59.47.154:3000/admin?pincode=')
      .subscribe(
        (response: Response) => {
          this.Hotels = response.json();
          for(var Hotel in this.Hotels){
            for(var Item in this.Hotels[Hotel]){
              //console.log(this.Hotels[Hotel][Item]);
              this.allItems.push(this.Hotels[Hotel][Item]);  
            }            
          }
          // initialize to page 1
          this.setPage(1);         
        },
        (error) => console.log(error)
      );
  }
  
  onGet(form: NgForm){

    this.allItems = [];  

    this.http.get('http://139.59.47.154:3000/admin?pincode=' + form.value.pincode)
      .subscribe(
        (response: Response) => {
          this.Hotels = response.json();
          for(var Hotel in this.Hotels){
            for(var Item in this.Hotels[Hotel]){
              //console.log(this.Hotels[Hotel][Item]);
              this.allItems.push(this.Hotels[Hotel][Item]);  
            }            
          }
          // initialize to page 1
          this.setPage(1);         
        },
        (error) => console.log(error)
      );
  }

  setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
 
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
 
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

  onDeleteItem(item){
    console.log('item ondex of -->',this.allItems.indexOf(item));
    const itemIndex = this.allItems.indexOf(item);
    this.allItems.splice(itemIndex, 1);    
  }

  onSelectRestaurant(pincode:string,name:string){
    console.log(pincode,name);
    this.router.navigate(['/receipe',pincode,name]);
  }
}
