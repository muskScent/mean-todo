import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { Task } from './task.model';
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
  @Input() task: Task;
  @Output() editClicked = new EventEmitter<string>();
  @Output() taskDeleted = new EventEmitter<Number> ();
  @ViewChild('textAreaContent') textAreaContent;
  defaultTextAreaContent: String = 'Enter new description here';

  constructor(private todoService: TodoServiceService) { }

  ngOnInit() {
  }

  resetTextArea() {
    this.textAreaContent.nativeElement.value = "reset";
  }

  clearTextArea() {
    if (this.textAreaContent.nativeElement.value === this.defaultTextAreaContent) {
      this.textAreaContent.nativeElement.value = '';
    }
  }

  onEdit() { 
    this.todoService.updateTask(this.task.task_id, this.textAreaContent.nativeElement.value)
      .subscribe(
        (response: any) => { this.task.task_description = this.textAreaContent.nativeElement.value },
      (errors) => { console.log('errors occurred: ' + errors) });
  } 

  onDelete() {
    this.todoService.deleteTask(this.task.task_id)
      .subscribe(
        (response: any) => { this.taskDeleted.emit(this.task.task_id) },
      (errors) => { console.log('Cannot delete task: ' + errors) });;
  }

}