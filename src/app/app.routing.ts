import  { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { RegisterComponent } from './register/register.component';
import { IndexComponent } from './index/index.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'tasks', component: TasksComponent },
    { path: 'taskslist', component: TasksListComponent},
    { path: 'login', component: LoginComponent },
    { path: 'index', component: IndexComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);