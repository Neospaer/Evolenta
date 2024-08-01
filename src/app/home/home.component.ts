import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';
import { Recipe } from '../Interfaces/recipe';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }
  recipes: Recipe[] =[];
  allRecipes: Recipe[] = [];
  ngOnInit() {
    this.loadInitialRecipes();
  }

  loadInitialRecipes() {
    this.dataService.getRecipes().subscribe({
      next: (response: Recipe[]) => {
        this.allRecipes = response;
        this.loadMoreRecipes();
      },
      error: (err) => {
        console.error('Ошибка при получении рецептов:', err);
      }
    });
  }

  loadMoreRecipes() {
    if (this.allRecipes.length > 0) {
      const randomRecipes = this.getRandomRecipes(3);
      this.recipes.push(...randomRecipes);
    } else {
      Notiflix.Notify.info('Все рецепты показаны.');
    }
  }

  getRandomRecipes(count: number): Recipe[] {
    const selectedRecipes: Recipe[] = [];
    for (let i = 0; i < count; i++) {
      if (this.allRecipes.length === 0) break;
      const randomIndex = Math.floor(Math.random() * this.allRecipes.length);
      selectedRecipes.push(this.allRecipes.splice(randomIndex, 1)[0]);
    }
    return selectedRecipes;
  }
}