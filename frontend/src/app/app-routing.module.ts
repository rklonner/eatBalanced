import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { MenuplanComponent } from './menuplan/menuplan.component';
import { MenuplanDetailComponent } from './menuplan-detail/menuplan-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { LoginComponent } from './login/login.component';
import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';

const routes: Routes = [
  // routes are protected by LoggedInGuard
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, canActivate: [ LoggedInGuard ]},
  { path: 'detail/:id', component: RecipeDetailComponent, canActivate: [ LoggedInGuard ]},
  
  { path: 'menuplan', component: MenuplanComponent, canActivate: [ LoggedInGuard ] },
  { path: 'menuplan-detail/:id', component: MenuplanDetailComponent, canActivate: [ LoggedInGuard ] },
  
  { path: 'shoppinglist', component: ShoppingListComponent, canActivate: [ LoggedInGuard ] },
  
  { path: 'login', component: LoginComponent },
  { path: 'user-profile', component: UserProfileComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}