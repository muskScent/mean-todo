export class Task {
    task_id: Number;
    task_description: String;

    constructor(task_id: Number, task_description: String) {
        this.task_id = task_id;
        this.task_description = task_description;
    }
}
