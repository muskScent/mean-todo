import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { Todo } from './todo.model';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']/*,
  host: {
    '(document:click)': 'resetTextArea($event)',
  }*/
})
export class TodoComponent implements OnInit {
  @Input() task: Todo;
  @Output() editClicked = new EventEmitter<string>();
  @Output() taskDeleted = new EventEmitter<Todo> ();
  @ViewChild('textAreaContent') textAreaContent;
  defaultTextAreaContent: String = 'Enter new description here';

  constructor(private todoService: TodoServiceService) { }

  ngOnInit() {
  }

  onEdit() { 
    this.todoService.updateTask(this.task._taskNumber, this.textAreaContent.nativeElement.value, 'ASAP')
      .subscribe(
        (response: any) => { this.task.description = response.description },
      (errors) => { console.log('errors occurred: ' + errors) });
  } 

  resetTextArea() {
    this.textAreaContent.nativeElement.value = "reset";
  }

  clearTextArea() {
    this.textAreaContent.nativeElement.value = '';
  }

  onDelete() {
    this.todoService.deleteTask(this.task._taskNumber)
      .subscribe(
        (response: any) => { this.taskDeleted.emit(this.task) },
      (errors) => { console.log('errors occurred: ' + errors) });;
  }

}