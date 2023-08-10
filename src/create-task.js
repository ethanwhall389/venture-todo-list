import { venturesArray } from "./ventures";

class Task {
    constructor (taskName, dueDate, important, notes) {
        this.taskName = taskName;
        this.dueDate = dueDate;
        this.isImportant = important;
        this.notes = notes;
    }
}

function createTask (name, dueDate, important, notes) {
    let task = new Task (name, dueDate, important, notes);
    venturesArray[0].tasks.push(task);
    console.log(venturesArray);
}

export default createTask;
