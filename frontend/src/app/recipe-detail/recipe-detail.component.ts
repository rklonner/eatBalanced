import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer  } from '@angular/platform-browser';

import { RecipeService }  from '../recipe.service';
import { Recipe } from '../recipe';
import { MenuplanService } from '../menuplan.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
	private menuplanService: MenuplanService,
    private location: Location,
	private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getRecipe();
  }
  
  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');  //+ converts string to number
    this.recipeService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }
  
  onClickAddToMenuplan(recipe: Recipe): void {
	this.menuplanService.add(recipe);
  }
  
  goBack(): void {
    this.location.back();
  }
  
  // use DomSanitizer to secure background-image url
  getBackgroundImage(recipe: Recipe) {
	//TODO: get baseurl from somewhere else
	const recipeImageUrl = "http://localhost:8000/" + recipe.image_filename;
    const style = `background-image: url(${recipeImageUrl})`;
	return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
