import  { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { LoginComponent } from './login/login.component';
import { TodosListComponent } from './todos-list/todos-list.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/todos', pathMatch: 'full' },
    { path: 'todos', component: TodosComponent },
    { path: 'todolist', component: TodosListComponent},
    { path: 'login', component: LoginComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);