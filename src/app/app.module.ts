import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './tasks/task/task.component';
import { TasksComponent } from './tasks/display/tasks.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { HeaderComponent } from './common/header/header.component';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication/shared/authentication.service';
import { RouterModule, Router } from '@angular/router';
import { TaskService } from './tasks/shared/task.service';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { RegisterComponent } from './authentication/register/register.component';
import { IndexComponent } from './authentication/index/index.component';
import { FooterComponent } from './common/footer/footer.component';
import { PasswordMatchValidatorDirective } from './custom-directives/password-match-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskComponent,
    TasksComponent,
    TasksListComponent,
    HeaderComponent,
    NewTaskComponent,
    LogoutComponent,
    RegisterComponent,
    IndexComponent,
    FooterComponent,
    PasswordMatchValidatorDirective
  ],
  imports: [
    BrowserModule, FormsModule, routing, ReactiveFormsModule, HttpModule, HttpClientModule
  ],
  providers: [AuthenticationService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
