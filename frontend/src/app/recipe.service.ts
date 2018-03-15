import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';
import { MessageService } from './message.service';

@Injectable()
export class RecipeService {

  private recipesUrl = 'http://backend-eatbalanced.a3c1.starter-us-west-1.openshiftapps.com' + '/api/recipes';  // URL to web api
  private recipesSearchUrl = 'http://backend-eatbalanced.a3c1.starter-us-west-1.openshiftapps.com' + '/api/recipesSearch'
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { } 
  
/*  getRecipes(): Observable<Recipe[]> {
    // Todo: send the message _after_ fetching the recipes
    //this.messageService.add('RecipeService: fetched recipes');
    //return of(RECIPES);
	//console.log(this.http.get(this.recipesUrl))
	return this.http.get<Recipe[]>(this.recipesUrl)
  }
*/

/*  
  getRecipe(id: number): Observable<Recipe> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`RecipeService: fetched recipe id=${id}`);
    return of(RECIPES.find(recipe => recipe.id === id));
  }*/
  
  getRecipes (): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl)
      .pipe(
	    tap(recipes => this.log(`fetched recipes`)),
        catchError(this.handleError('getRecipes', []))
      );
  }

  /** GET recipe by id. Will 404 if id not found */
  getRecipe(id: number): Observable<Recipe> {
    const url = `${this.recipesUrl}/${id}`;
    return this.http.get<Recipe>(url).pipe(
      tap(_ => this.log(`fetched recipe id=${id}`)),
      catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
    );
  }

  /* GET recipes whose name contains search term */
  searchRecipes(term: string): Observable<Recipe[]> {
	const url = `${this.recipesSearchUrl}/${term}`;
	//console.log("call search url", url);
    return this.http.get<Recipe[]>(url).pipe(
      tap(_ => this.log(`found recipes matching "${term}"`)),
      catchError(this.handleError<Recipe[]>('searchRecipes', []))
    );
  }
  
  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('RecipeService: ' + message);
  }
}
