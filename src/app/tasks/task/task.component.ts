import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from '../shared/task.service';

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

  clearTextArea() {
  }

  onEdit() {
    this.editing = !this.editing;
  }

  onSave() {
    this.editing = !this.editing;
    this.taskService.updateTask(this.task.task_id, this.textAreaContent.nativeElement.value)
      .subscribe(
        (response: any) => { },
      (errors) => { console.log('errors occurred: ' + errors); });
  }

  onDelete() {
    console.log('Deleting id: ' + this.task.task_id);
    this.taskService.deleteTask(this.task.task_id)
      .subscribe(
        (response: any) => { this.taskDeleted.emit(this.task.task_id); },
      (errors) => { console.log('Cannot delete task: ' + errors); });
  }

}
