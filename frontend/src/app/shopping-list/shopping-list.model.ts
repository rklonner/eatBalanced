import { Ingredient, RecipeMenuplan } from '../recipe';

export class ShoppingList {
  items: Ingredient[];
  itemsContainer: object;
  
  constructor(ingredients) {
    this.items = [];
    this.itemsContainer = {};
    for (let i of ingredients) {
  	console.log(i);
  	this.addItem(i);
    }
  }
  
  addItem(ingredient: Ingredient[]) {
  	if (this.itemsContainer.hasOwnProperty(ingredient.name)) {
  	  console.log('has property')
  	  this.itemsContainer[ingredient.name].quantity += ingredient.quantity;
  	} else {
  	  console.log('has not property')
  	  this.itemsContainer[ingredient.name] = Object.assign( Object.create( Object.getPrototypeOf(ingredient)), ingredient);
  	}
  	this.itemsContainerToItemsArray();
  }
  
  deleteItem(index: number) {
  	this.items.splice(index,1);
  }
  
  itemsContainerToItemsArray() {
  	this.items = [];
  	for (let i in this.itemsContainer) {
  		this.items.push(this.itemsContainer[i]);
  	}
  	// default sort when creating array
  	this.sortItemsByAttribute('category');
  }
  
  sortItemsByAttribute(attribute: string, order:string = 'asc') {
  	// only sort if there are items
  	if (this.items.length > 0) {
  	  // check type of items to use appropriate sort function
  	  let type = typeof this.items[0][attribute];
  	  if (type === 'number') {
  	  	//console.log("Sort number")
  	    this.items = this.items.sort((a, b) => b[attribute] - a[attribute]);
  	  }
  	  else if (type === 'string') {
  	  	//console.log("Sort string")
  	  	this.items = this.items.sort((a, b) => a[attribute].localeCompare(b[attribute]))
  	  }
  	  else {
  	  	console.log("Sorting of variable of type", type, " is not supported")
  	  }
  	  if (order == 'desc') {this.items = this.items.reverse()}
  	}  
  	console.log("SORTED ITEMS", this.items)
  }
}