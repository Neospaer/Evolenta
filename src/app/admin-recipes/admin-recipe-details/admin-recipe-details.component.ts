import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Ingredient, RecipeById, Step } from 'src/app/Interfaces/recipe';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-admin-recipe-details',
  templateUrl: './admin-recipe-details.component.html',
  styleUrls: ['./admin-recipe-details.component.css']
})
export class AdminRecipeDetailsComponent {
  constructor(){}
}