
export class Task {
    task_id: Number;
    task_description: String;
    //user_id: Number;

    // constructor(task_id: Number, task_description: String, user_id: Number) {
    constructor(task_description: String) {        
        // this.task_id = task_id;
        this.task_description = task_description;
        // this.user_id = user_id;
    }
}