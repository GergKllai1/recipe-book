import { RecipesComponent } from './../recipes.component';
import { RecipeService } from './../recipe.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output() recipeDetail = new EventEmitter<{name: string, description: string, imagePath: string}>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  openRecipeDetail(recipe) {
    this.recipeDetail.emit({
      name: recipe.name,
      description: recipe.description,
      imagePath: recipe.imagePath
    });
  }

}
