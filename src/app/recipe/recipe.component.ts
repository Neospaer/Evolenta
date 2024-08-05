import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Service/data.service';
import { AllCommit, RecipeById } from '../Interfaces/recipe';
import { RoleService } from '../Service/role.service';
import * as Notiflix from 'notiflix';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe!: RecipeById;
  newCommentText: string = '';
  AllCommit: AllCommit[] = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private roleService: RoleService,
    private meta: Meta, 
    private titleService: Title
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dataService.getRecipe(id).subscribe((data: RecipeById) => {
        this.recipe = data;
        this.initializeComments();
      });
    }
    this.meta.addTag({ property: 'Название', content: this.recipe.title });
    this.meta.addTag({ property: 'Описание', content: this.recipe.body });
    this.meta.addTag({ property: 'Изображение', content: this.recipe.image });
  }

  initializeComments(): void {
    if (this.recipe.comments) {
      this.AllCommit = this.recipe.comments.map(comment => ({
        User: comment.user,
        text: comment.text,
        createTime: new Date(comment.createdOn),
        updateTime: comment.updatedOn ? new Date(comment.updatedOn) : undefined
      }));
    }
  }
  
  onShareRecipe(): void {
    Notiflix.Confirm.show(
      'Поделиться рецептом',
      'Вы хотите поделиться рецептом?',
      'Да',
      'Нет',
      () => {
        Notiflix.Notify.success('Вы поделились рецептом');
      },
      () => {
        Notiflix.Notify.info('Отмена публикации');
      }
    );
  }
  
}
