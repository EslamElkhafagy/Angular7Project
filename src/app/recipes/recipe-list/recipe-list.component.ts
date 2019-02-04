import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  // recipes: Recipe[] = [
  //   new Recipe("Basta", "makrona w gbna w ay 7aga tanya", "https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_960_720.jpg"),
  //   new Recipe("Negresko", "fra5 w makrona w gbna w brdo 4wyet 7agat kda", "https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_960_720.jpg")
  // ];
  recipes: Recipe;
  
  constructor() { }

  ngOnInit() {
  }

}
