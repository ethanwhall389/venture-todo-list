import { venturesArray } from "./ventures";

let tasksContainer = document.querySelector('.tasks-section');


const appendToDom = (() => {

    const appendVenture = (name) => {
        let venturesContainer = document.querySelector('.ventures-section');
        let newVenture = document.createElement('h3');
        newVenture.textContent = name;
        newVenture.classList.add('venture')
        newVenture.setAttribute('data-name', name);
        venturesContainer.appendChild(newVenture);
    }

    const appendTask = (name) => {
        
        let newTaskDiv = document.createElement('div');
        newTaskDiv.classList.add('task-div');

        let checkBox = document.createElement('div');
        checkBox.classList.add('task-checkbox');
        
        let newTaskTitle = document.createElement('p');
        newTaskTitle.textContent = name;
        

        tasksContainer.appendChild(newTaskDiv);
        newTaskDiv.appendChild(checkBox);
        newTaskDiv.appendChild(newTaskTitle);
    }

    return {
        appendVenture,
        appendTask
    };

})();


function changeElementText (elementToGrab, newText) {
    let element = document.querySelector(elementToGrab);
    element.textContent = newText;
}


function displayTasks (currentVenture) {
    tasksContainer.textContent = '';
    let currentVentureIndex = venturesArray.findIndex((element) => element.ventureName === currentVenture);
    if (currentVentureIndex != -1) {
        let tasksArray = venturesArray[currentVentureIndex].tasks;
        if (tasksArray.length >= 1) {
            tasksArray.forEach(element => {
                appendToDom.appendTask(element.taskName);
            });
        }
    } else {
        console.log('the displayTasks function currentVentureIndex returned ' + currentVentureIndex);
        return;
    }
}




export { appendToDom, changeElementText, displayTasks };