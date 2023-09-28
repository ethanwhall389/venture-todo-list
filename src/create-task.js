import { venturesArray } from "./ventures";
import CurrentVenture from "./ventures";
import UpdateDom from "./dom-control/update-dom.js";
// import currentSelectedVenture from "./index";

class Task {
    constructor (taskName, dueDate, important, notes) {
        this.taskName = taskName;
        this.dueDate = dueDate;
        this.isImportant = important;
        this.notes = notes;
        this.isCompleted = false;
    }

    updateTaskName (newName) {
        this.taskName = newName;
    }

    updateDueDate (newDate) {
        this.dueDate = newDate;
    }

    updateNotes (newNotes) {
        this.notes = newNotes;
    }

    updateIsImportant (important) {
        this.isImportant = important;
    }

    updateCompleted () {
        this.isCompleted === true ? this.isCompleted = false : this.isCompleted = true;
    }

    get nameOfTask() {
        return this.taskName;
    }


    static createTask (name, dueDate, important, notes) {
        let task = new Task (name, dueDate, important, notes);
        // push to the index of the currentSelectedVenture
        // const index = (element) => element === CurrentVenture.getCurrentSelectedVenture;
        let currentVentureIndex = venturesArray.findIndex((element) => element.ventureName === CurrentVenture.getCurrentSelectedVenture());
        if (currentVentureIndex > -1) {            
            venturesArray[currentVentureIndex].tasks.push(task);
            console.log(venturesArray);
        
            UpdateDom.displayTasks(CurrentVenture.getCurrentSelectedVenture());
        } else {
            alert('An error has occurred. Please add a venture before trying to add tasks.');
        }
    }

    static deleteTask (name) {
        let currentVentureIndex = venturesArray.findIndex((element) => element.ventureName === CurrentVenture.getCurrentSelectedVenture());
        let taskIndex = venturesArray[currentVentureIndex].tasks.findIndex((element) => element.taskName === name);
        venturesArray[currentVentureIndex].tasks.splice(taskIndex, 1);
    
        console.log(venturesArray);
    
        UpdateDom.displayTasks(CurrentVenture.getCurrentSelectedVenture());
    } 

    static editTask (oldTaskName, name, dueDate, important, notes) {
        let currentVentureIndex = venturesArray.findIndex((element) => element.ventureName === CurrentVenture.getCurrentSelectedVenture());
        let taskIndex = venturesArray[currentVentureIndex].tasks.findIndex((element) => element.taskName === oldTaskName);

        venturesArray[currentVentureIndex].tasks[taskIndex].updateTaskName(name);
        venturesArray[currentVentureIndex].tasks[taskIndex].updateDueDate(dueDate);
        venturesArray[currentVentureIndex].tasks[taskIndex].updateIsImportant(important);
        venturesArray[currentVentureIndex].tasks[taskIndex].updateNotes(notes);
    }

    static completeTask (name) {
        let currentVentureIndex = venturesArray.findIndex((element) => element.ventureName === CurrentVenture.getCurrentSelectedVenture());
        let taskIndex = venturesArray[currentVentureIndex].tasks.findIndex((element) => element.taskName === name);
        venturesArray[currentVentureIndex].tasks[taskIndex].updateCompleted();
    }
    
}

export {
    Task
}
