import { createVenture, deleteVenture } from "./create-venture";
import { createTask, deleteTask } from "./create-task";
import CurrentVenture from "./ventures";
import { appendToDom, changeElementText, displayTasks, changeIcon } from "./dom-control";


// Add new venture
let bttnNewVenture = document.querySelector('.new-venture-bttn');
let formNewVenture = document.querySelector('.new-venture-form');
let bttnAddVenture = document.querySelector('.venture-submit-bttn');
let newVentureInput = document.querySelector('#venture-name-input');
let bttnCancelVenture = document.querySelector('.venture-cancel-bttn');
bttnNewVenture.addEventListener('click', () => {
    // let ventureName = prompt('What should the name for this venture be?')
    formNewVenture.style.display = 'flex';
    newVentureInput.focus();
})

bttnAddVenture.addEventListener('click', (event) => {
    event.preventDefault();
    createVenture(newVentureInput.value);
    formNewVenture.style.display = 'none';
    newVentureInput.value = '';
})

bttnCancelVenture.addEventListener('click', () => {
    formNewVenture.style.display = 'none';
    newVentureInput.value = '';
})



let bttnNewTask = document.querySelector('.new-task-bttn');

bttnNewTask.addEventListener('click', () => {
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

//remove menu 
document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('task-menu')) {
        appendToDom.closeOptionsMenu();
    }
})

// show task options when the verticle menu is clicked
let tasksSection = document.querySelector('.tasks-section');
tasksSection.addEventListener('click', (event) => {
    if (event.target.classList.contains('task-menu')) {
        console.log('menu-clicked');
        appendToDom.createOptionsMenu(event.clientX, event.clientY, ['Edit', 'Delete'], 'task');
    }
})


// show options when a venture or task is right clicked
let dataName;
window.addEventListener('contextmenu', (event) => {
    if (event.target.classList.contains('venture-bttn')) {
        event.preventDefault();
        appendToDom.createOptionsMenu(event.clientX, event.clientY, ['Rename', 'Delete'], 'venture');
    } else if (event.target.classList.contains('task')) {
        event.preventDefault();
        appendToDom.createOptionsMenu(event.clientX, event.clientY, ['Edit', 'Delete'], 'task');
    }
    dataName = event.target.getAttribute('data-name');
})



// delete a task or venture when delete menu option is chosen
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-task')) {
        console.log('delete clicked')
        deleteTask(dataName);
    } else if (event.target.classList.contains('delete-venture')) {
        deleteVenture(dataName);
    }
})

//edit a venture when the option is chosen
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('rename-venture')) {
        //rename
    }
})