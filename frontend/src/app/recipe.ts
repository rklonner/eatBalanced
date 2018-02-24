import { User, UserMenuplan } from './user';

export class Ingredient {
  name: string;
  unit: string;
  quantity: number;
  category: string;
  
  constructor(ingredient: Ingredient) {
	this.name = ingredient.name;
	this.unit = ingredient.unit;
	this.quantity = ingredient.quantity;
	this.category = ingredient.category;
  }
}

export class Recipe {
  id: number;
  name: string;
  calories: number;
  calories_diet_plan: number;
  category: string;
  ingredients: Array<Ingredient>
  preparation: string[];
  image_filename: string;
  
  constructor(recipe: Recipe) {
	this.id = recipe.id;
	this.name = recipe.name;
	this.calories = recipe.calories;
	this.calories_diet_plan = recipe.calories_diet_plan;
	this.category = recipe.category;
	
	this.ingredients = [];
	for (let i of recipe.ingredients) {
	  this.ingredients.push(new Ingredient(i));
	}
	
	this.preparation = recipe.preparation;
	this.image_filename = recipe.image_filename;
  }
}

export class RecipeMenuplan extends Recipe {

  userMenuplan: UserMenuplan[];
  viewUserSelect: boolean;
  householdIngredientFactor: number;
	
  constructor(recipe: Recipe, users: User[]) {
	super(recipe);
	
	this.userMenuplan = []
	this.viewUserSelect = false;
	this.householdIngredientFactor = 0;
	
	for (let u of users) {
	  let uM = new UserMenuplan(u, recipe.calories_diet_plan);
	  this.householdIngredientFactor += uM.ingredientFactor;
	  this.userMenuplan.push(uM);
	}
	
	// now we have all users and the householdIngredientFactor
	// we can set user specific householdPercentage
	this.setUserHouseholdPercentage();
  }
  
  toggleViewUserSelect() {
	this.viewUserSelect = !this.viewUserSelect;
  }
  
  private setUserHouseholdPercentage() {
	for (let uM of this.userMenuplan) {
	  uM.householdPercentage = (uM.ingredientFactor / this.householdIngredientFactor) * 100;
	}
  }
}