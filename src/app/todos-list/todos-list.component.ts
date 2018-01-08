import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo/todo.model';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  userId: String
  tasks: Todo[] = [
    new Todo('Task 1', 'Due date 1'),
    new Todo('Task 2', 'Due date 2'),
    new Todo('Task 3', 'Due date 3'),
    new Todo('Task 4', 'Due date 4'),
    new Todo('Task 5', 'Due date 5')
  ];

  constructor(private todoService: TodoServiceService) { }

  ngOnInit() {
    this.tasks = this.todoService.getTasks(this.userId);
  }

  editClicked() {
    
  }

}
