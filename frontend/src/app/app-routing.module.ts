import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent }      from './recipes/recipes.component';
import { RecipeDetailComponent }  from './recipe-detail/recipe-detail.component';
import { MenuplanComponent }  from './menuplan/menuplan.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'detail/:id', component: RecipeDetailComponent },
  { path: 'menuplan', component: MenuplanComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}