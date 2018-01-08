import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() task: Todo;
  @Output() editClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.editClicked.emit('A new value');
  } 

}