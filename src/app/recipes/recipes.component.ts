import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Interfaces/recipe';
import { DataService } from '../Service/data.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private dataService: DataService,private meta: Meta, private titleService: Title) {}

  ngOnInit(): void {
    this.dataService.getRecipes().subscribe((data: Recipe[]) => {
      this.recipes = data;
    });
    this.meta.addTag({ name: 'Foodie: Каталог рецептов', content: 'Все самые лучшие рецепты собраны здесь' });
  }
}