import { Injectable } from '@angular/core';
import { Todo } from './todo/todo.model';

@Injectable()
export class TodoServiceService {
  tasks: Todo[] = [];

  createTask(task: Todo) {
    this.tasks.push(task);
  }

  getTasks(userId: String) {
    return this.tasks;
  }

  deleteTask(task: Todo) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  constructor() { }

}