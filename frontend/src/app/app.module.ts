import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeService } from './recipe.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { MenuplanComponent } from './menuplan/menuplan.component';
import { MenuplanService } from './menuplan.service';
import { UserService } from './user.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { MenuplanDetailComponent } from './menuplan-detail/menuplan-detail.component';
import { MenuplanUsersSelectComponent } from './menuplan-users-select/menuplan-users-select.component';

import { RoundPipe } from './pipes/round.pipe';
import { MultiplyPipe } from './pipes/multiply.pipe';




@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    RecipesComponent,
    RecipeDetailComponent,
    MessagesComponent,
    MenuplanComponent,
    ShoppingListComponent,
	MenuplanDetailComponent,
	RoundPipe,
	MultiplyPipe,
	MenuplanUsersSelectComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	NgbModule.forRoot(),
	FormsModule,
	AppRoutingModule,
	HttpClientModule,
	AngularFontAwesomeModule,
	ToastModule.forRoot()
  ],
  providers: [RecipeService, MessageService, MenuplanService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
