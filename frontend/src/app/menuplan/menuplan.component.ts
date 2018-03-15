import { Component, OnInit } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

import { Recipe } from '../recipe';
import { MenuplanService } from '../menuplan.service';


@Component({
  selector: 'app-menuplan',
  templateUrl: './menuplan.component.html',
  styleUrls: ['./menuplan.component.css']
})
export class MenuplanComponent implements OnInit {

  toogleViewUserStatus: boolean = false;

  constructor(
    public menuplanService: MenuplanService,
	private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }
  
  toogleViewUserSelectAll() {
	this.toogleViewUserStatus = !this.toogleViewUserStatus;
	for (let recipe of this.menuplanService.selectedRecipes) {
	  recipe.viewUserSelect = this.toogleViewUserStatus;
	}
  }
  
  // use DomSanitizer to secure background-image url
  getBackgroundImage(recipe: Recipe) {
	//TODO: get baseurl from somewhere else
	const recipeImageUrl = "http://backend-eatbalanced.a3c1.starter-us-west-1.openshiftapps.com/" + recipe.image_filename;
    const style = `background-image: url(${recipeImageUrl})`;
	return this.sanitizer.bypassSecurityTrustStyle(style);
  }

}
