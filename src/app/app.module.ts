import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { HeaderComponent } from './header/header.component';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth-service.service';
import { RouterModule, Router } from '@angular/router';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoServiceService } from './todo-service.service';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    LoginComponent,
    TodoComponent,
    TodosComponent,
    TodosListComponent,
    HeaderComponent,
    TodoInputComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing, ReactiveFormsModule, HttpModule, HttpClientModule
  ],
  providers: [AuthService, TodoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
