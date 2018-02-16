import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { DomSanitizer  } from '@angular/platform-browser';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  
  recipes: Recipe[];
  
  selectedRecipe: Recipe;

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
  
  getRecipes(): void {
    this.recipeService.getRecipes()
        .subscribe(recipes => this.recipes = recipes);
  }
  
  // use DomSanitizer to secure background-image url
  getBackgroundImage(recipe: Recipe) {
	//TODO: get baseurl from somewhere else
	const recipeImageUrl = "http://localhost:8000/" + recipe.image_filename;
    const style = `background-image: url(${recipeImageUrl})`;
	return this.sanitizer.bypassSecurityTrustStyle(style);
  }
  
  constructor(private recipeService: RecipeService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
	this.getRecipes();
  }

}
