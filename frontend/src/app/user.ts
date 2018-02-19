export class User {
  id: number;
  name: string;
  username: string;
  password: string;
  calorie_requirement_diet: number;
  household_user_ids: number[];
  
  constructor(user: User) {
	this.id = user.id;
	this.name = user.name;
	this.username = user.username;
	this.password = user.password;
	this.calorie_requirement_diet = user.calorie_requirement_diet;
	this.household_user_ids = user.household_user_ids;
  }
}

export class UserMenuplan extends User {
	
  constructor(user: User) {
	  super(user);
  }
  
  isEatingMeal: boolean = true;
  
  getCalorieFactor(calories_diet_plan: number): number {
	return this.calorie_requirement_diet / calories_diet_plan;
  }
  
  switchEatMeal() {
	this.isEatingMeal = !this.isEatingMeal;
  }
}