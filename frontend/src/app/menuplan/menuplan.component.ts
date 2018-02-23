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

  constructor(
    public menuplanService: MenuplanService,
	private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }
  
  // use DomSanitizer to secure background-image url
  getBackgroundImage(recipe: Recipe) {
	//TODO: get baseurl from somewhere else
	const recipeImageUrl = "http://localhost:8000/" + recipe.image_filename;
    const style = `background-image: url(${recipeImageUrl})`;
	return this.sanitizer.bypassSecurityTrustStyle(style);
  }

}
