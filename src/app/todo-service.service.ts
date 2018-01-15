import { Injectable, EventEmitter } from '@angular/core';
import { Todo } from './todo/todo.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TodoServiceService {
  tasks: Todo[] = [];
  token: String;
  taskIsEdit = new EventEmitter<Todo>();

  constructor(private http: HttpClient) {}

  createTask(task: Todo) {
    this.tasks.push(task);
  }

  getUserTasks() {
    this.token = localStorage.getItem('token');
    return this.http.get('http://localhost:3000/api/todos',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token),})
      .map((response: Response) => {return response});
  }

  editTask(todo: Todo) {
    this.taskIsEdit.emit(todo);
  }

  deleteTask(task: Todo) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

}