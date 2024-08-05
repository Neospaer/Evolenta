import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { RecipeById } from 'src/app/Interfaces/recipe';
import { DataService } from 'src/app/Service/data.service';


@Component({
  selector: 'app-admin-recipe-details',
  templateUrl: './admin-recipe-details.component.html',
  styleUrls: ['./admin-recipe-details.component.css']
})
export class AdminRecipeDetailsComponent {
  editRecipeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {
    this.editRecipeForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      tags: this.fb.array([]),
      timeCooking: [0, Validators.required],
      foodValue: this.fb.group({
        calories: [0, Validators.required],
        fats: [0, Validators.required],
        carbohydrates: [0, Validators.required],
        proteins: [0, Validators.required],
      }),
      cookingSteps: this.fb.array([]),
      ingredients: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dataService.getRecipe(id).subscribe((recipe: RecipeById) => {
        this.editRecipeForm.patchValue({
          title: recipe.title,
          body: recipe.body,
          timeCooking: recipe.timeCooking,
          foodValue: recipe.foodValue
        });
        this.setTags(recipe.tags);
        this.setCookingSteps(recipe.cookingSteps);
        this.setIngredients(recipe.ingredients);
      });
    }
  }

  get tags(): FormArray {
    return this.editRecipeForm.get('tags') as FormArray;
  }

  get cookingSteps(): FormArray {
    return this.editRecipeForm.get('cookingSteps') as FormArray;
  }

  get ingredients(): FormArray {
    return this.editRecipeForm.get('ingredients') as FormArray;
  }

  setTags(tags: string[]): void {
    const tagFormArray = this.editRecipeForm.get('tags') as FormArray;
    tags.forEach(tag => {
      tagFormArray.push(this.fb.control(tag, Validators.required));
    });
  }

  setCookingSteps(steps: { title: string, description: string }[]): void {
    const stepFormArray = this.editRecipeForm.get('cookingSteps') as FormArray;
    steps.forEach(step => {
      stepFormArray.push(this.fb.group({
        title: [step.title, Validators.required],
        description: [step.description, Validators.required]
      }));
    });
  }

  setIngredients(ingredients: { title: string, description: string }[]): void {
    const ingredientFormArray = this.editRecipeForm.get('ingredients') as FormArray;
    ingredients.forEach(ingredient => {
      ingredientFormArray.push(this.fb.group({
        title: [ingredient.title, Validators.required],
        description: [ingredient.description, Validators.required]
      }));
    });
  }

  addTag(): void {
    this.tags.push(this.fb.control('', Validators.required));
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
    if (this.editRecipeForm.valid) {
      const id = this.route.snapshot.paramMap.get('id');
      const updatedRecipe = this.editRecipeForm.value;
      if (id) {
        this.dataService.updateRecipe(id, updatedRecipe).subscribe(() => {
          Notiflix.Notify.success('Рецепт обновлен');
          this.router.navigate(['/admin/recipes']); 
        });
      }
    }
  }
}