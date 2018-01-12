import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo/todo.model';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  userId: String;
  tasks: Todo[] = [];

  constructor(private todoService: TodoServiceService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.todoService.getUserTasks('1')
      .subscribe(
        (response: any) => { this.tasks = response[0].tasks},
      (errors) => { console.log('errors occurred: ' + errors) });
  }

  editClicked() {    
  }

}