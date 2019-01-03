import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Recipe } from 'src/app/recipes/recipe.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addToIngredients() {
    const newRecipe = {
      name: this.ingredientName.nativeElement.value,
      amount: this.ingredientAmount.nativeElement.value
    };
    this.shoppingListService.addsIngredient(newRecipe);
  }
}
