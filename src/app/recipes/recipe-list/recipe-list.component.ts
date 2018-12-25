import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test for the recipe',
    'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/enchiladas-aux-legumes-1a1102aa.jpg'),
    new Recipe('Another Test Recipe', 'This is also just a test recipe, but another one!',
    'https://amp.businessinsider.com/images/5a7dc169d03072af008b4bf2-750-562.jpg')
  ];
  @Output() recipeDetail = new EventEmitter<{name: string, description: string, imagePath: string}>();
  constructor() { }

  ngOnInit() {
  }

  openRecipeDetail(recipe) {
    this.recipeDetail.emit({
      name: recipe.name,
      description: recipe.description,
      imagePath: recipe.imagePath
    });
  }

}
