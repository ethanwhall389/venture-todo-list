import createVenture from "./create-venture";
import createTask from "./create-task";
import CurrentVenture from "./ventures";
import { appendToDom, changeElementText, displayTasks, changeIcon } from "./dom-control";


let bttnAddVenture = document.querySelector('.new-venture-bttn');
let bttnAddTask = document.querySelector('.new-task-bttn');

bttnAddVenture.addEventListener('click', () => {
    let ventureName = prompt('What should the name for this venture be?')
    createVenture(ventureName);
})

bttnAddTask.addEventListener('click', () => {
    let taskName = prompt('Enter the task name');
    let taskDate = prompt('Enter the task due date (mm/dd/yy)');
    let taskImportant = prompt('Is this task of high important? True or false.');
    let taskNotes = prompt('Enter any notes for this task');
    createTask(taskName, taskDate, taskImportant, taskNotes);
})



// Set and display the current venture when a venture is clicked in the sidebar.
const optionsPanel = document.querySelector('.options-panel');
optionsPanel.addEventListener('click', (event) => {
    if (event.target.classList.contains('venture-bttn')) {
        // set the current venture
        CurrentVenture.updateSelectedVenture(event.target.getAttribute('data-name'));
        console.log(`Current selected venture: ${CurrentVenture.getCurrentSelectedVenture()}`);

        //update DOM
        console.log(event.target);
        changeElementText('.venture-panel-title', CurrentVenture.getCurrentSelectedVenture());

        //Display all of the venture's tasks
        displayTasks(CurrentVenture.getCurrentSelectedVenture());
    }
})


// show options when a venture is right clicked
optionsPanel.addEventListener('contextmenu', (event) => {
    if (event.target.classList.contains('venture-bttn')) {
        event.preventDefault();
        appendToDom.createOptionsMenu(event.clientX, event.clientY);
    }
})

//remove menu 
document.addEventListener('click', () => {
    appendToDom.closeOptionsMenu();
})


// export default currentSelectedVenture;