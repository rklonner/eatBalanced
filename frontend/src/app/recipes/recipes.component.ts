import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';
import { Toast, ToastsManager } from 'ng2-toastr/ng2-toastr';// for toast msg

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { MenuplanService } from '../menuplan.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  
  recipes: Recipe[];
  
  constructor(private recipeService: RecipeService,
              private menuplanService: MenuplanService,
              private sanitizer: DomSanitizer,
			  public toastr: ToastsManager, vcr: ViewContainerRef // for toast msg
			  ) {
				  this.toastr.setRootViewContainerRef(vcr); // for toast msg
			  }
  
  ngOnInit() {
	this.getRecipes();
  }
  
  getRecipes(): void {
    this.recipeService.getRecipes()
        .subscribe(recipes => this.recipes = recipes);
  }
  
  // use DomSanitizer to secure background-image url
  getBackgroundImage(recipe: Recipe) {
	//TODO: get baseurl from somewhere else
	const recipeImageUrl = "http://backend-eatbalanced.a3c1.starter-us-west-1.openshiftapps.com/" + recipe.image_filename;
    const style = `background-image: url(${recipeImageUrl})`;
	return this.sanitizer.bypassSecurityTrustStyle(style);
  }
  
  onClickAddToMenuplan(recipe: Recipe): void {
	this.menuplanService.add(recipe);
	let msg = 'Rezept wurde hinzugefügt';
	this.showInfo(msg);
  }
  
  // define toast messages
  showInfo(msg: string) {
    //this.toastr.info(msg);
	this.toastr.info(msg, '', {dismiss: 'controlled'})
    .then((toast: Toast) => {
        setTimeout(() => {
            this.toastr.dismissToast(toast);
        }, 1500);
    });
  }
}
