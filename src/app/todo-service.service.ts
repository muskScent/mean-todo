import { Injectable, EventEmitter } from '@angular/core';
import { Task } from './todo/task.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TodoServiceService {
  tasks: Task[] = [];
  taskIsEdit = new EventEmitter<Task>();

  constructor(private http: HttpClient) {}

  getUserTasks() {
    return this.http.get('http://nodejs-angular-todolist.herokuapp.com/api/tasks', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))})
      .map((response: Response) => {return response});
  }

  createTask(task: Task) {
    return this.http.post('http://nodejs-angular-todolist.herokuapp.com/api/newTask', task, 
    { headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')) });
  }

  updateTask(task_id:Number, newDescription: String) {
    return this.http.put('http://nodejs-angular-todolist.herokuapp.com/api/updateTask/' + task_id + '/' + newDescription, null, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))})
      .map((response: Response) => {return response});
  }

  editTask(todo: Task) {
    this.taskIsEdit.emit(todo);
  }

  deleteTask(task_id: Number) {
    return this.http.delete('http://nodejs-angular-todolist.herokuapp.com/api/deleteTask/' + task_id,
    { headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')) });
  }

}