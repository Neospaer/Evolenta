import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';
import { Recipe } from '../Interfaces/recipe';
import * as Notiflix from 'notiflix';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService,private meta: Meta, private titleService: Title) { }
  recipes: Recipe[] = [];
  recipes4: Recipe[] = [];
  allRecipes: Recipe[] = [];
  firstThreeRecipes: Recipe[] = [];
  email = '';
  create_email!: string;
  showLoadMoreButton = true;
  
  onSubmit(){
    this.email = this.create_email;
    Notiflix.Notify.info('Вы подписались на рассылку')
  }

  ngOnInit() {
    this.loadInitialRecipes();
    this.meta.addTag({ name: 'Foodie: Главная', content: 'Сборник кулинарных рецептов, для всей семьи' });
  }

  loadInitialRecipes() {
    this.dataService.getRecipes().subscribe({
      next: (response: Recipe[]) => {
        this.allRecipes = response;
        this.firstThreeRecipes = this.allRecipes.splice(0, 3);
        this.recipes4 = this.getRandomRecipes(4);
        this.recipes = this.getRandomRecipes(3, this.recipes4);
      }
    });
  }

  loadMoreRecipes() {
    const newRecipes = this.getRandomRecipes(3, this.recipes);
    this.recipes.push(...newRecipes);
    this.showLoadMoreButton = false;
  }

  getRandomRecipes(count: number, exclude: Recipe[] = []): Recipe[] {
    const selectedRecipes: Recipe[] = [];
    const excludeIds = new Set(exclude.map(recipe => recipe.id));
    const availableRecipes = this.allRecipes.filter(recipe => !excludeIds.has(recipe.id));
    for (let i = 0; i < count; i++) {
      if (availableRecipes.length === 0) break;
      const randomIndex = Math.floor(Math.random() * availableRecipes.length);
      selectedRecipes.push(availableRecipes.splice(randomIndex, 1)[0]);
    }
    return selectedRecipes;
  }

  features = [
    {
      title: 'Проверенные рецепты',
      description: 'Вы можете найти множество проверенных рецептов, которые помогут вам приготовить вкусные и разнообразные блюда для всей семьи.',
    },
    {
      title: 'Для всех',
      description: 'Вы сможете найти легкие и вкусные блюда, которые понравятся и детям, и взрослым.',
    },
    {
      title: 'Огромное разнообразие',
      description: 'Разнообразие рецептов для всех порадует самых разносторонних гурманов',
    },
    {
      title: 'Храним рецепты для вас',
      description: 'Это отличный способ организовать и хранить свою коллекцию кулинарных рецептов. Вместо того, чтобы хранить бумажные копии или оставлять их в разных кулинарных книгах.',
    }
    ];
}