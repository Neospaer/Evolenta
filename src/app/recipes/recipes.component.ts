import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Interfaces/recipe';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getRecipes().subscribe((data: Recipe[]) => {
      this.recipes = data;
    });
  }
}