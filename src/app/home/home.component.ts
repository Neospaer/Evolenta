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
  email = '';
  create_email!: string;
  
  onSubmit(){
    this.email = this.create_email;
    Notiflix.Notify.info('Вы подписались на рассылку')
  }
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

  features = [
    {
      title: 'Проверенные рецепты',
      description: 'Вы можете найти множество проверенных рецептов, которые помогут вам приготовить вкусные и разнообразные блюда для всей семьи.',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ce090627a235fcda488fd640814d5293c28f3b3c9f537b3cca1523d09fedb9b1?apiKey=25534841c82449f2985f9814cb770144&&apiKey=25534841c82449f2985f9814cb770144'
    },
    {
      title: 'Для всех',
      description: 'Вы сможете найти легкие и вкусные блюда, которые понравятся и детям, и взрослым.',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ce090627a235fcda488fd640814d5293c28f3b3c9f537b3cca1523d09fedb9b1?apiKey=25534841c82449f2985f9814cb770144&&apiKey=25534841c82449f2985f9814cb770144'
    },
    {
      title: 'Огромное разнообразие',
      description: 'Разнообразие рецептов для всех порадует самых разносторонних гурманов',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ce090627a235fcda488fd640814d5293c28f3b3c9f537b3cca1523d09fedb9b1?apiKey=25534841c82449f2985f9814cb770144&&apiKey=25534841c82449f2985f9814cb770144'
    },
    {
      title: 'Храним рецепты для вас',
      description: 'Это отличный способ организовать и хранить свою коллекцию кулинарных рецептов. Вместо того, чтобы хранить бумажные копии или оставлять их в разных кулинарных книгах.',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ce090627a235fcda488fd640814d5293c28f3b3c9f537b3cca1523d09fedb9b1?apiKey=25534841c82449f2985f9814cb770144&&apiKey=25534841c82449f2985f9814cb770144'
    }
    ];
}