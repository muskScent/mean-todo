import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @ViewChild('newTaskDescription') textAreaContent;
  @Output() taskCreated = new EventEmitter<Task> ();
  taskDescription: String = "rrr";

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onAdd() {
    if (this.textAreaContent.nativeElement.value != "") {
      this.taskService.createTask(new Task(this.textAreaContent.nativeElement.value))
      .subscribe(
        (response: any) => { this.taskCreated.emit(new Task(response.task_description)) },
        (errors) => { console.log('errors occurred: ' + errors) });    
    }
  }

}