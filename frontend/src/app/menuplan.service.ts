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
  
  moveRecipeUp(index: number) {
	// only move recipe if there are at least 2 entries
	if (this.selectedRecipes.length > 1) {
      let tmp = this.selectedRecipes.splice(index, 1)[0];
      if (index - 1 == -1) {
		// splice(-1, 0, tmp) does not work, puts it on vorletzte stelle, not last
		this.selectedRecipes.push(tmp);
	  }
	  else {
	    this.selectedRecipes.splice(index - 1, 0, tmp);
	  }
	}
  }

  moveDown(index: number) {
	// only move recipe if there are at least 2 entries
	if (this.selectedRecipes.length > 1) {
      let tmp = this.selectedRecipes.splice(index, 1)[0];
      if (index + 1 == this.selectedRecipes.length + 1) {
		// splice(index+1, 0, tmp) does not work at end beacuse array is not
		// this length any more because of previous splice,
		// use unshift to place it at beginning in this case
		this.selectedRecipes.unshift(tmp);
	  }
	  else {
	    this.selectedRecipes.splice(index + 1, 0, tmp);
	  }
	}
  }
  
  delete(index: number) {
	this.selectedRecipes.splice(index,1);
  }
  
  clear() {
	this.selectedRecipes = [];
  }
  constructor() { }

}
