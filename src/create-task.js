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
    }

    static createTask (name, dueDate, important, notes) {
        let task = new Task (name, dueDate, important, notes);
        // push to the index of the currentSelectedVenture
        // const index = (element) => element === CurrentVenture.getCurrentSelectedVenture;
        let currentVentureIndex = venturesArray.findIndex((element) => element.ventureName === CurrentVenture.getCurrentSelectedVenture());
        if (venturesArray[currentVentureIndex] > -1) {            
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
    
}

// function createTask (name, dueDate, important, notes) {
//     let task = new Task (name, dueDate, important, notes);
//     // push to the index of the currentSelectedVenture
//     // const index = (element) => element === CurrentVenture.getCurrentSelectedVenture;
//     let currentVentureIndex = venturesArray.findIndex((element) => element.ventureName === CurrentVenture.getCurrentSelectedVenture());
//     venturesArray[currentVentureIndex].tasks.push(task);
//     console.log(venturesArray);

//     UpdateDom.displayTasks(CurrentVenture.getCurrentSelectedVenture());

// }

// function deleteTask (name) {
//     let currentVentureIndex = venturesArray.findIndex((element) => element.ventureName === CurrentVenture.getCurrentSelectedVenture());
//     let taskIndex = venturesArray[currentVentureIndex].tasks.findIndex((element) => element.taskName === name);
//     venturesArray[currentVentureIndex].tasks.splice(taskIndex, 1);

//     console.log(venturesArray);

//     UpdateDom.displayTasks(CurrentVenture.getCurrentSelectedVenture());
// }


export {
    Task
}
