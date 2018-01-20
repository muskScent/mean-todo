import { Component, OnInit } from '@angular/core';
import { Task } from '../todo/task.model';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  userId: String;
  tasks: Task[] = [];

  constructor(private todoService: TodoServiceService) { }

  ngOnInit() {
    this.todoService.getUserTasks()
      .subscribe(
        (response: any) => { this.tasks = response },
      (errors) => { console.log('errors occurred: ' + errors) });
  }

  deleteTask(event: any) {
    this.tasks = this.tasks.filter((task) => { 
      return task.task_id != event
    })
  }

  addTask(event: any) {
    this.tasks.push(event);
  }

}