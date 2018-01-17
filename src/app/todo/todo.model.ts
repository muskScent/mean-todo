
export class Todo {
    _taskNumber: Number;
    description: String;
    dueDate: String;

    constructor(description: String, dueDate: String, _taskNumber: Number) {
        this._taskNumber = _taskNumber;
        this.description = description;
        this.dueDate = dueDate;
    }
}