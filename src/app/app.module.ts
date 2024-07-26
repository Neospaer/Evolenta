import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { ModifyInterceptor } from './modify.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AlertModule.forRoot()
  ],
  providers: [DataService,{
    provide: HTTP_INTERCEPTORS,
    useClass: ModifyInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
