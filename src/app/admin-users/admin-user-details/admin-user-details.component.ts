import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { RecipeById } from 'src/app/Interfaces/recipe';
import { UserById } from 'src/app/Interfaces/User';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-admin-user-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.css']
})
export class AdminUserDetailsComponent implements OnInit {

  user!: UserById;
  recipes: RecipeById[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if(userId){
      this.dataService.getUser(userId).subscribe({
        next: (user: UserById) => {
        this.user = user;
        this.loadUserRecipes();
      }
      });
    }
  }

  loadUserRecipes(): void {
    const postIds = this.user.posts.map(post => post.id);
    postIds.forEach(id => {
      this.dataService.getRecipe(id).subscribe({
        next: (recipe: RecipeById) => {
          this.recipes.push(recipe);
        }
      });
    });
  }

  onDeleteUser(): void {
    Notiflix.Confirm.show(
      'Подтверждение удаления',
      'Вы уверены, что хотите удалить этого пользователя?',
      'Да',
      'Нет',
      () => {
        this.dataService.deleteUser(this.user.id).subscribe(() => {
          Notiflix.Notify.success('Пользователь удален');
        });
        this.router.navigate(['/admin/users']);
      },
      () => {
        Notiflix.Notify.info('Удаление отменено');
      }
    );
  }
}
