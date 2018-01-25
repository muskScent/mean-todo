import  { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'tasks', component: TasksComponent },
    { path: 'taskslist', component: TasksListComponent},
    { path: 'login', component: LoginComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);