import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @ViewChild('newTaskDescription') textAreaContent;
  @Output() taskCreated = new EventEmitter<Task> ();

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onAdd() {
    if (this.textAreaContent.nativeElement.value !== '') {
      this.taskService.createTask(this.textAreaContent.nativeElement.value)
      .subscribe(
        (response: any) => { this.taskCreated.emit(new Task(response.task_id, response.task_description)) },
        (errors) => { console.log('errors occurred: ' + errors); });
    }
  }

}
