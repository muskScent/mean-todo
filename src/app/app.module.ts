import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { HeaderComponent } from './header/header.component';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { RouterModule, Router } from '@angular/router';
import { TaskService } from './task.service';
import { NewTaskComponent } from './new-task/new-task.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskComponent,
    TasksComponent,
    TasksListComponent,
    HeaderComponent,
    NewTaskComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing, ReactiveFormsModule, HttpModule, HttpClientModule
  ],
  providers: [AuthenticationService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
