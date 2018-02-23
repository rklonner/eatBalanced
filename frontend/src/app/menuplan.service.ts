import { Injectable } from '@angular/core';
import { Recipe, RecipeMenuplan } from './recipe';
import { User, UserMenuplan } from './user';
import { USER, HOUSEHOLD } from './mock-user';

@Injectable()
export class MenuplanService {

  currentUser: User = USER;
  currentHousehold: User[] = HOUSEHOLD;
  selectedRecipes: RecipeMenuplan[] = [];
  
  add(recipe: Recipe) {
	let recipeMenuplan = new RecipeMenuplan(recipe, this.currentHousehold)
	this.selectedRecipes.push(recipeMenuplan);
	console.log("added new recipe to menuplan: #", this.selectedRecipes.length);
	
	//let recipeMenuplan = new RecipeMenuplan(recipe, this.currentHousehold);
	//console.log(recipeMenuplan);

  }
  
  getRecipeMenuplan(index: number): RecipeMenuplan {
	return this.selectedRecipes[index];
  }
  
  delete(index: number) {
	this.selectedRecipes.splice(index,1);
  }
  
  clear() {
	this.selectedRecipes = [];
  }
  constructor() { }

}
