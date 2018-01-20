import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { Task } from '../todo/task.model';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  @ViewChild('newTaskDescription') textAreaContent;
  @Output() taskCreated = new EventEmitter<Task> ();

  constructor(private todoService: TodoServiceService) { }

  ngOnInit() {
  }

  onAdd() {
    this.todoService.createTask(new Task(this.textAreaContent.nativeElement.value))
      .subscribe(
        (response: any) => { this.taskCreated.emit(new Task(response.task_description)) },
        (errors) => { console.log('errors occurred: ' + errors) });    
  }

}