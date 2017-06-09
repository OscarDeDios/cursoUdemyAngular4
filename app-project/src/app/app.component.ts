import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes = true;
  shoppingList = false;

  title = 'app works!';
  name = '';

  showRecipes() {
    this.recipes = true;
    this.shoppingList = false;
  }

  showShoppingList() {
    this.recipes = false;
    this.shoppingList = true;
  }
}
