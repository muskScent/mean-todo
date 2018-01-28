import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']/*,
  host: {
    '(document:click)': 'resetTextArea($event)',
  }*/
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() editClicked = new EventEmitter<string>();
  @Output() taskDeleted = new EventEmitter<Number> ();
  @ViewChild('textAreaContent') textAreaContent;
  editing: boolean = false;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  resetTextArea() {
    this.textAreaContent.nativeElement.value = "reset";
  }

  clearTextArea() {
    // if (this.textAreaContent.nativeElement.value === this.defaultTextAreaContent) {
    //   this.textAreaContent.nativeElement.value = '';
    // }
  }

  onEdit() { 
    this.editing = !this.editing;
  } 

  onSave() {
    this.editing = !this.editing;
    this.taskService.updateTask(this.task.task_id, this.textAreaContent.nativeElement.value)
      .subscribe(
        (response: any) => { this.task.task_description = this.textAreaContent.nativeElement.value },
      (errors) => { console.log('errors occurred: ' + errors) });
  }

  onDelete() {
    this.taskService.deleteTask(this.task.task_id)
      .subscribe(
        (response: any) => { this.taskDeleted.emit(this.task.task_id) },
      (errors) => { console.log('Cannot delete task: ' + errors) });;
  }

}