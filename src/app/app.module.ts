import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { ErrorComponent } from './error/error.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminRecipesComponent } from './admin-recipes/admin-recipes.component';
import { AdminerGuard } from './Guards/adminer.guard';
import { RegisterGuard } from './Guards/register.guard';
import { RoleService } from './Service/role.service';
import { DataService } from './Service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [							
    AppComponent,
      ErrorComponent,
      AuthorizationComponent,
      RegistrationComponent,
      RecipesComponent,
      CreateRecipeComponent,
      AdminUsersComponent,
      AdminRecipesComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDividerModule,
    HttpClientModule
  ],
  providers: [AdminerGuard,RegisterGuard,RoleService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
