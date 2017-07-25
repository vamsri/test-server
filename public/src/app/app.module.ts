import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { AuthService } from './auth.service';
import { ManageComponent } from './manage/manage.component';
import { AuthGuard } from './auth-guard.service';
import { PagerService } from './PagerService';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ReceipeItemComponent } from './recipes/recipe-list/receipe-item/receipe-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantsComponent,
    SignupComponent,
    LoginComponent,
    CartComponent,
    ManageComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ReceipeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService,AuthGuard,PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
