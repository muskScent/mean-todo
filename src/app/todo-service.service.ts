import { Injectable } from '@angular/core';
import { Todo } from './todo/todo.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TodoServiceService {
  tasks: Todo[] = [];
  token: String;

  constructor(private http: HttpClient) {}

  createTask(task: Todo) {
    this.tasks.push(task);
  }

  getUserTasks(userId: String) {
    this.token = localStorage.getItem('token');
    return this.http.get('http://localhost:3000/api/todos/1',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token),})
      .map((response: Response) => {return response});
  }

  deleteTask(task: Todo) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

}