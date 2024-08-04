import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../Service/data.service';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  createRecipeForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private dataService: DataService) {
    this.createRecipeForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      tags: this.fb.array([]),
      image: ['', Validators.required],
      timeCooking: ['', Validators.required],
      foodValue: this.fb.group({
        calories: ['', Validators.required],
        fats: ['', Validators.required],
        carbohydrates: ['', Validators.required],
        proteins: ['', Validators.required]
      }),
      cookingSteps: this.fb.array([]),
      ingredients: this.fb.array([])
    });
  }

  ngOnInit(): void { }

  get tags(): FormArray {
    return this.createRecipeForm.get('tags') as FormArray;
  }

  get cookingSteps(): FormArray {
    return this.createRecipeForm.get('cookingSteps') as FormArray;
  }

  get ingredients(): FormArray {
    return this.createRecipeForm.get('ingredients') as FormArray;
  }

  addTag(): void {
    this.tags.push(this.fb.control(''));
  }

  addCookingStep(): void {
    this.cookingSteps.push(this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    }));
  }

  addIngredient(): void {
    this.ingredients.push(this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    }));
  }

  onSubmit(): void {
    // if (this.createRecipeForm.valid) {
      this.dataService.createRecipe(this.createRecipeForm.value)
        .subscribe(
          response => {
            Notiflix.Notify.success('Рецепт успешно создан');
            this.createRecipeForm.reset();
          },
          error => {
            Notiflix.Notify.failure('Ошибка при создании рецепта');
          }
        );
    // } else {
    //   Notiflix.Notify.warning('Пожалуйста, заполните все обязательные поля');
    // }
  }
}
