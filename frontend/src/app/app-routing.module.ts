import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { MenuplanComponent } from './menuplan/menuplan.component';
import { MenuplanDetailComponent } from './menuplan-detail/menuplan-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'detail/:id', component: RecipeDetailComponent },
  { path: 'menuplan', component: MenuplanComponent },
  { path: 'menuplan-detail/:id', component: MenuplanDetailComponent },
  { path: 'shoppinglist', component: ShoppingListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}