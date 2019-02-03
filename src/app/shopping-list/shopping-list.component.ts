import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[]=[
    new Ingredient("ml7 w ay klam",10),
    new Ingredient("ay 7aga brdo ",7)
    ];
  constructor() { }

  ngOnInit() {
  }

}
