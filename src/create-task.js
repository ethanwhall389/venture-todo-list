import { venturesArray } from "./ventures";
import CurrentVenture from "./ventures";
import { displayTasks } from "./dom-control";
// import currentSelectedVenture from "./index";

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
    // push to the index of the currentSelectedVenture
    // const index = (element) => element === CurrentVenture.getCurrentSelectedVenture;
    let currentVentureIndex = venturesArray.findIndex((element) => element.ventureName === CurrentVenture.getCurrentSelectedVenture());
    venturesArray[currentVentureIndex].tasks.push(task);
    console.log(venturesArray);

    displayTasks(CurrentVenture.getCurrentSelectedVenture());

}

function deleteTask (name) {
    let currentVentureIndex = venturesArray.findIndex((element) => element.ventureName === CurrentVenture.getCurrentSelectedVenture());
    let taskIndex = venturesArray[currentVentureIndex].tasks.findIndex((element) => element.taskName === name);
    venturesArray[currentVentureIndex].tasks.splice(taskIndex, 1);

    console.log(venturesArray);

    displayTasks(CurrentVenture.getCurrentSelectedVenture());
}


export {
    createTask,
    deleteTask
}
