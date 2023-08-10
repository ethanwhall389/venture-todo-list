export const venture = [];

class Task {
    constructor(name, dueDate, priority, notes) {
        this.name = name;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

function createTask (name, dueDate, priority, notes) {
    let task = new Task(name, dueDate, priority, notes);
    venture.push(task);
}


export default createTask;
