/*export class Recipe {
  id: number;
  name: string;
}*/

export class Ingredient {
  name: string;
  unit: string;
  quantity: number;
  category: string;
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
}