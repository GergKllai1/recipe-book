import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Crispy chicken with rice and vegtables', 'Difficulty: 1, Estimated time: 30 minutes',
    'https://saglikliyasamuzmani.com/wp-content/uploads/2018/03/meat-and-chicken-recipes.jpg',
    [
    new Ingredient('Rice', 25),
    new Ingredient('Chicken', 2),
    new Ingredient('Vegtables', 5),
  ]),
    new Recipe('Hamburger with fried onions', 'Difficulty: 1, Estimated time: 25 minutes',
    'https://amp.businessinsider.com/images/5a7dc169d03072af008b4bf2-750-562.jpg',
    [
      new Ingredient('Beef', 1),
      new Ingredient('Hamburger buns', 2),
      new Ingredient('Fried onion', 2),
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
