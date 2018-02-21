import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../recipe';
import { MenuplanService } from '../menuplan.service';
import { ShoppingList } from './shopping-list.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  allIngredients: Ingredient[] = [];
  shoppingList: ShoppingList;

  constructor(
    public menuplanService: MenuplanService) { }

  ngOnInit() {
	this.collectIngredients();
	this.shoppingList = new ShoppingList(this.allIngredients);
	console.log(this.shoppingList);
  }

  collectIngredients() {
	let ingredientContainer: Ingredient[] = [];
	
	for (let recipeMenuplan of this.menuplanService.selectedRecipes) {
	  console.log(recipeMenuplan.name);
	  for (let userMenuplan of recipeMenuplan.userMenuplan) {
		if (userMenuplan.isEatingMeal) {
		  console.log("User ", userMenuplan.name, " eats recipe,  User factor ", userMenuplan.ingredientFactor);
		  for (let i of recipeMenuplan.ingredients) {
			// clone class instance and set new quantity
			let clonedIngredient = Object.assign( Object.create( Object.getPrototypeOf(i)), i);
			clonedIngredient.quantity *= userMenuplan.ingredientFactor;
			ingredientContainer.push(clonedIngredient);
		  }
		}
		else {
		  console.log("User ", userMenuplan.name, " doesnt eat recipe");
		}
	  }
	}
	// save to component class attribute
	this.allIngredients = ingredientContainer;
	console.log("ALL INGREDIENTS", this.allIngredients);
  }
}
