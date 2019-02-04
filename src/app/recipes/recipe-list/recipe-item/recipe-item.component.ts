import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {


@Input() recipes: Recipe[] = [
    new Recipe("Basta", "makrona w gbna w ay 7aga tanya", "https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_960_720.jpg"),
    new Recipe("Negresko", "fra5 w makrona w gbna w brdo 4wyet 7agat kda", "https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_960_720.jpg")
  ];



  constructor() { }

  ngOnInit() {
  }

}
