import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { Todo } from './todo.model';

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
  @ViewChild('textAreaContent') textAreaContent;
  defaultTextAreaContent: String = 'Enter new description here';

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.editClicked.emit(this.textAreaContent.nativeElement.value);
  } 

  resetTextArea() {
    this.textAreaContent.nativeElement.value = "reset";
  }

  clearTextArea() {
    this.textAreaContent.nativeElement.value = '';
  }

}