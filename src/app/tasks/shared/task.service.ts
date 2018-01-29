import { Injectable, EventEmitter } from '@angular/core';
import { Task } from '../task/task.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class TaskService {
  tasks: Task[] = [];
  taskIsEdit = new EventEmitter<Task>();

  constructor(private http: HttpClient) {}

  getUserTasks() {
    return this.http.get(environment.apiUrl + '/api/tasks', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))})
      .map((response: Response) => response);
  }

  createTask(newTaskDescription: String) {
    return this.http.post(environment.apiUrl + '/api/newTask', { task_description: newTaskDescription },
    { headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')) });
  }

  updateTask(task_id: Number, newDescription: String) {
    return this.http.put(environment.apiUrl + '/api/updateTask/' + task_id + '/' + newDescription, null, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))})
      .map((response: Response) => response);
  }

  editTask(task: Task) {
    this.taskIsEdit.emit(task);
  }

  deleteTask(task_id: Number) {
    return this.http.delete(environment.apiUrl + '/api/deleteTask/' + task_id,
    { headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')) });
  }

}
