import { Ingredient, RecipeMenuplan } from '../recipe';

export class ShoppingList {
	
  public items: Ingredient[] = [];
  private itemsContainer = {};
  
  constructor(ingredients: Ingredient[]) {
	for (let i of ingredients) {
	  console.log("CLASS2", i);
	  this.addItem(i);
	  //this.items.push(i);
	}
  }
  
  private itemsContainerToItemArray() {
	/* to loop over array in template and not key values */
	this.items = [];
	console.log("CLASS 3", this.itemsContainer);
	/*Object.keys(this.itemsContainer).forEach(function (key) {
	  console.log("KEY", key);
      this.items.push(this.itemsContainer[key]);
	  console.log("X");
	  console.log("CLASS", this.itemsContainer[key]);
    });*/
	for (let iName in this.itemsContainer) {
	  console.log("CLASS", iName, this.itemsContainer[iName]);
	  this.items.push(this.itemsContainer[iName]);
	}
  }
  
  //addItem(ingredient: Ingredient) {
  addItem(ingredient) {
	console.log("CLASS 7", this.itemsContainer);
	let key = ingredient.name.toString();
	if (this.itemsContainer.hasOwnProperty(key) {
	  console.log("has property");
	  //this.itemsContainer[key].quantity += ingredient.quantity;
	}
	else {
      console.log("has not property");
	  
	  console.log("KEY", key, key.length)
	  this.itemsContainer[key] = {};
	  this.itemsContainer[key]['name'] = key;
	}
	console.log("CLASS 6", ingredient);
	console.log("CLASS 68", ingredient.name);
	console.log("CLASS 5", this.itemsContainer);
	// create new items array
	//this.itemsContainerToItemArray();
  }
}