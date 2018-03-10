import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer  } from '@angular/platform-browser';

import { MenuplanService } from '../menuplan.service';
import { Recipe, RecipeMenuplan } from '../recipe';

@Component({
  selector: 'app-menuplan-detail',
  templateUrl: './menuplan-detail.component.html',
  styleUrls: ['./menuplan-detail.component.css']
})
export class MenuplanDetailComponent implements OnInit {
  recipeMenuplan: RecipeMenuplan;
  
  constructor(
    private menuplanService: MenuplanService,
    private route: ActivatedRoute,
	private location: Location,
	private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getRecipeMenuplan();
  }
  
  getRecipeMenuplan(): void {
	//+ converts string to number
	// use - 1 because we add + 1 in template to have nice
	// urls where first id points to 1 not zero
    const id = +this.route.snapshot.paramMap.get('id') - 1;
    this.recipeMenuplan = this.menuplanService.getRecipeMenuplan(id);
	console.log("Get recipe '" + id + " from current menuplan");
  }
  
  goBack(): void {
    this.location.back();
  }
  
  // use DomSanitizer to secure background-image url
  getBackgroundImage(recipe: Recipe) {
	//TODO: get baseurl from somewhere else
	const recipeImageUrl = "http://backend-eatbalanced.a3c1.starter-us-west-1.openshiftapps.com/" + recipe.image_filename;
    const style = `background-image: url(${recipeImageUrl})`;
	return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
