import { venturesArray } from "./ventures";
import CurrentVenture from "./ventures";
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
    let currentVentureIndex = venturesArray.findIndex((element) => element.ventureName === CurrentVenture.currentSelectedVenture);
    venturesArray[currentVentureIndex].tasks.push(task);
    console.log(venturesArray);
}


export default createTask;
