import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { Todo } from '../todo/todo.model';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  @ViewChild('newTaskDescription') textAreaContent;

  constructor(private todoService: TodoServiceService) { }

  ngOnInit() {
  }

  onAdd() {
    this.todoService.createTask(new Todo(this.textAreaContent.nativeElement.value, '' , 15))
      .subscribe(
      (errors) => { console.log('errors occurred: ' + errors) });;
  }

}