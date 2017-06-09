import { Component, OnInit, EventEmitter, Output} from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    @Output() onShowRecipesEvent = new EventEmitter();
    @Output() onShowShoppingListEvent = new EventEmitter();

    
  constructor() { }

  ngOnInit() {
    
  }

  showRecipes() {
      this.onShowRecipesEvent.emit();
  }

  showShoppingList() {
      this.onShowShoppingListEvent.emit();
  }

}