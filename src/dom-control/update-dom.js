import { venturesArray } from "../ventures";
import AppendToDom from "./append-to-dom";
import CurrentVenture from "../ventures";

const tasksContainer = document.querySelector('.tasks-section');


class UpdateDom {

    static updatePage () {
        
        this.displayVentures();
        
        if (venturesArray.length > 0) {
            // CurrentVenture.updateSelectedVenture(venturesArray[ventureIndex].ventureName);
            UpdateDom.changeElementText('.venture-panel-title', CurrentVenture.getCurrentSelectedVenture());
            UpdateDom.displayTasks(CurrentVenture.getCurrentSelectedVenture());
        } else {
            UpdateDom.displayNoVentures();
        }
    }
    
    static changeIcon (iconToGrab, newIconPath) {
        iconToGrab.setAttribute('src', newIconPath);

    }

    static changeTaskImportance (isImportant) {
        const starIcon = document.querySelector('.date-and-priority img');
        if (isImportant === true) {
            starIcon.setAttribute('src', 'icons/star-colored.svg');
        } else {
            starIcon.setAttribute('src', 'icons/star-filled.svg');
        }
    }

    static changeElementText (elementToGrab, newText) {
        let element = document.querySelector(elementToGrab);
        element.textContent = newText;
    }

    static displayNoVentures () {
        let addTaskBttn = document.querySelector('.new-task-bttn');
        let tasksSection = document.querySelector('.tasks-section');
        addTaskBttn.style.display = 'none';
        tasksSection.textContent = '';
    
        this.changeElementText('.venture-panel-title', 'Create a venture to get started');
    }

    static displayTasks (currentVenture) {
        tasksContainer.textContent = '';
        
        //make sure add tasks bttn is visible
        let addTaskBttn = document.querySelector('.new-task-bttn');
        addTaskBttn.style.display = 'block';
        
        let currentVentureIndex = venturesArray.findIndex((element) => element.ventureName === currentVenture);
        if (currentVentureIndex != -1) {
            let tasksArray = venturesArray[currentVentureIndex].tasks;
            if (tasksArray.length >= 1) {
                tasksArray.forEach(element => {
                    AppendToDom.appendTask(element.taskName, element.dueDate, element.isImportant, element.isCompleted);
                });
            }
        } else {
            console.log('the displayTasks function currentVentureIndex returned ' + currentVentureIndex);
            return;
        }
    }

    static displayVentures () {
        let venturesSection = document.querySelector('.ventures-section');
        venturesSection.textContent = '';
        venturesArray.forEach((element) => {
            AppendToDom.appendVenture(element.ventureName);
        } )    
    }
}


export default UpdateDom;