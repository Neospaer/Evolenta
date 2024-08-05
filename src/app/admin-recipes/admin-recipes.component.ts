import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { DataService } from '../Service/data.service';
import { Router } from '@angular/router';
import { Recipe } from '../Interfaces/recipe';

@Component({
  selector: 'app-admin-recipes',
  templateUrl: './admin-recipes.component.html',
  styleUrls: ['./admin-recipes.component.css']
})
export class AdminRecipesComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getRecipes().subscribe({
      next: (data: Recipe[]) => {
        this.recipes = data;
        console.log("Данные: ",this.recipes)
      },
      error: () => {
        console.log('Ошибка')
      }
    })
  }

  onViewRecipe(recipeId: string): void {
    this.router.navigate([`/admin/recipes/${recipeId}`]);
  }

  onDeleteRecipe(recipeId: string): void {
    Notiflix.Confirm.show(
      'Подтверждение удаления',
      'Вы уверены, что хотите удалить этот рецепт?',
      'Да',
      'Нет',
      () => {
        this.dataService.deleteRecipe(recipeId).subscribe(() => {
          Notiflix.Notify.success('Рецепт удален');
          this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
        });
      },
      () => {
        Notiflix.Notify.info('Удаление отменено');
      }
    );
  }

  getShortDescription(body: string): string {
    return body.split(' ').slice(0, 4).join(' ') + '...';
  }

  getShortId(id: string): string {
    return id.slice(0, 12) + '...';
  }
}
