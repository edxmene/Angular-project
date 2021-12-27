import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [
  ]
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'This is a test recipe 1','https://i0.hippopx.com/photos/653/692/24/recipe-chicken-bacon-meat-preview.jpg'),
    new Recipe('Test Recipe 2', 'This is a test recipe 2','https://i0.hippopx.com/photos/653/692/24/recipe-chicken-bacon-meat-preview.jpg'),
    new Recipe('Test Recipe 3', 'This is a test recipe 3','https://i0.hippopx.com/photos/653/692/24/recipe-chicken-bacon-meat-preview.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
