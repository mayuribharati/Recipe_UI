import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CookbookComponent } from './cookbook/cookbook.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { SettingsComponent } from './settings/settings.component';
import { RecipeShortViewComponent } from './recipe-short-view/recipe-short-view.component';
import { RecipeBoxViewComponent } from './recipe-box-view/recipe-box-view.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginSignUpComponent,
    DashboardComponent,
    HomeComponent,
    RecipesComponent,
    CookbookComponent,
    CartComponent,
    OrdersComponent,
    SettingsComponent,
    RecipeShortViewComponent,
    RecipeBoxViewComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
