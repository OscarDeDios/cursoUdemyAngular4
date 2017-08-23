import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addIngredient(nameInput,amountInput) {
    this.newIngredient.emit(new Ingredient(nameInput,amountInput));
  }
}
