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
    return this.http.post('http://localhost:3000/api/newTask', task, 
    { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token) });
  }

  getUserTasks() {
    this.token = localStorage.getItem('token');

    return this.http.get('http://localhost:3000/api/todos', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token)})
      .map((response: Response) => {return response});
  }

  updateTask(_taskNumber:Number, newDescription: String, newDueDate: String) {
    this.token = localStorage.getItem('token');

    return this.http.put('http://localhost:3000/api/updateTodo/' + _taskNumber + '/' + newDescription + '/' + newDueDate, null, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token)})
      .map((response: Response) => {return response});
  }

  editTask(todo: Todo) {
    this.taskIsEdit.emit(todo);
  }

  deleteTask(taskNumber: Number) {
    return this.http.delete('http://localhost:3000/api/deleteTask/' + taskNumber,
    { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token) });
  }

}