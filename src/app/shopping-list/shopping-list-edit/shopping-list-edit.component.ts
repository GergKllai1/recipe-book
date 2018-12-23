import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientAmount: ElementRef;
  @Output() ingredientInfo = new EventEmitter<Ingredient> ();

  constructor() { }

  ngOnInit() {
  }

  addToIngredients() {
    this.ingredientInfo.emit({
      name: this.ingredientName.nativeElement.value, 
      amount: this.ingredientAmount.nativeElement.value})
  }

}
