import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ErrorComponent } from './error/error.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminRecipesComponent } from './admin-recipes/admin-recipes.component';
import { AdminRecipeDetailsComponent } from './admin-recipes/admin-recipe-details/admin-recipe-details.component';
import { AdminUserDetailsComponent } from './admin-users/admin-user-details/admin-user-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path: 'create-recipe ',
    component: CreateRecipeComponent
  },
  {
    path: 'authorization',
    component: AuthorizationComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },
  {
    path: 'admin/users',
    component: AdminUsersComponent,
    children:
    [
      {
        path: ':id',
        component: AdminUserDetailsComponent
      }
    ]
  },
  {
    path: 'admin/recipes',
    component: AdminRecipesComponent,
    children:
    [
      {
        path: ':id',
        component: AdminRecipeDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
