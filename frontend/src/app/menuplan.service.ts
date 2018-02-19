import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class MenuplanService {

  selectedRecipes: Recipe[] = [];
  
  add(recipe: Recipe) {
	this.selectedRecipes.push(recipe);
	console.log("added new recipe to menuplan: #", this.selectedRecipes.length);
  }
  
  delete(index: number) {
	this.selectedRecipes.splice(index,1);
  }
  
  clear() {
	this.selectedRecipes = [];
  }
  constructor() { }

}
