import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  userId: String;
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getUserTasks()
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