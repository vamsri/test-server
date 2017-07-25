import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ManageComponent } from './manage/manage.component';
import { AuthGuard } from './auth-guard.service';
import { RecipesComponent } from './recipes/recipes.component';


const appRoutes: Routes = [
	{ path: '', redirectTo: '/login' ,pathMatch: 'full'},
	{ path: 'restaurants', component:RestaurantsComponent, canActivate:[AuthGuard]  },
	{ path: 'manage', component:ManageComponent },
	{ path: 'signup', component:SignupComponent },
	{ path: 'login', component:LoginComponent },
	{ path: 'cart', component:CartComponent },
	{ path: 'receipe/:pincode/:name', component:RecipesComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule{

}