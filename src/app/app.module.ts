import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { PostComponent } from './post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import { AccessRoleGuard } from './access-role.guard';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostDetailsComponent } from './post/post-details/post-details.component';
@NgModule({
  declarations: [		
    AppComponent,
      ErrorComponent,
      PostComponent,
      PostDetailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [DataService,AccessRoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
