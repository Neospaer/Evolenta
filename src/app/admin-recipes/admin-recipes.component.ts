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

  recipes1: Recipe[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getRecipes().subscribe((data: Recipe[]) => {
      this.recipes1 = data;
    });
    console.log(this.recipes1)
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
          this.recipes1 = this.recipes1.filter(recipe1 => recipe1.id !== recipeId);
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
