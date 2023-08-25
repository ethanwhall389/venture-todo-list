import { Venture, createVenture, deleteVenture } from "./create-venture";
import { Task, createTask, deleteTask } from "./create-task";
import CurrentVenture from "./ventures";
import AppendToDom from "./dom-control/append-to-dom.js";
import UpdateDom from "./dom-control/update-dom.js";

// Add new venture
let bttnNewVenture = document.querySelector('.new-venture-bttn');
let formNewVenture = document.querySelector('.new-venture-form');
let bttnAddVenture = document.querySelector('.venture-submit-bttn');
let newVentureInput = document.querySelector('#venture-name-input');
let bttnCancelVenture = document.querySelector('.venture-cancel-bttn');

bttnNewVenture.addEventListener('click', () => {
    formNewVenture.style.display = 'flex';
    newVentureInput.focus();
})

bttnAddVenture.addEventListener('click', (event) => {
    event.preventDefault();
    if (newVentureInput.value !== '') {
        Venture.createVenture(newVentureInput.value);
        formNewVenture.style.display = 'none';
        newVentureInput.value = '';
    }
})

bttnCancelVenture.addEventListener('click', () => {
    formNewVenture.style.display = 'none';
    newVentureInput.value = '';
})


// Add new task
let bttnNewTask = document.querySelector('.new-task-bttn');
let formNewTask = document.querySelector('.new-task-form');
let bttnSubmitTask = document.querySelector('.task-submit-bttn');
let bttnCancelTask = document.querySelector('.task-cancel-bttn');
let taskName = document.querySelector('#task-name-input');
let taskNotes= document.querySelector('.task-form-notes');
let taskDate = document.querySelector('.input-date');

bttnNewTask.addEventListener('click', () => {
    formNewTask.style.display = 'flex';
    taskName.focus();
    taskName.value = '';
    taskNotes.value = '';
    // let taskName = prompt('Enter the task name');
    // let taskDate = prompt('Enter the task due date (mm/dd/yy)');
    // let taskImportant = prompt('Is this task of high important? True or false.');
    // let taskNotes = prompt('Enter any notes for this task');
    // Task.createTask(taskName, taskDate, taskImportant, taskNotes);
})

bttnSubmitTask.addEventListener('click', (event) => {
    event.preventDefault();
    Task.createTask(taskName.value, taskDate.value, true, taskNotes.value);
    formNewTask.style.display = 'none';
})

bttnCancelTask.addEventListener('click', () => {
    formNewTask.style.display = 'none';
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
        UpdateDom.changeElementText('.venture-panel-title', CurrentVenture.getCurrentSelectedVenture());

        //Display all of the venture's tasks
        UpdateDom.displayTasks(CurrentVenture.getCurrentSelectedVenture());
    }
})

//remove menu 
document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('task-menu')) {
        AppendToDom.closeOptionsMenu();
    }
})

// show task options when the verticle menu is clicked
let tasksSection = document.querySelector('.tasks-section');
tasksSection.addEventListener('click', (event) => {
    if (event.target.classList.contains('task-menu')) {
        console.log('menu-clicked');
        AppendToDom.createOptionsMenu(event.clientX, event.clientY, ['Edit', 'Delete'], 'task');
    }
})


// show options when a venture or task is right clicked
let dataName;
window.addEventListener('contextmenu', (event) => {
    if (event.target.classList.contains('venture-bttn')) {
        event.preventDefault();
        AppendToDom.createOptionsMenu(event.clientX, event.clientY, ['Rename', 'Delete'], 'venture');
    } else if (event.target.classList.contains('task')) {
        event.preventDefault();
        AppendToDom.createOptionsMenu(event.clientX, event.clientY, ['Edit', 'Delete'], 'task');
    }
    dataName = event.target.getAttribute('data-name');
})



// delete a task or venture when delete menu option is chosen
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-task')) {
        console.log('delete clicked')
        Task.deleteTask(dataName);
    } else if (event.target.classList.contains('delete-venture')) {
        Venture.deleteVenture(dataName);
    }
})

//edit a venture when the option is chosen
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('rename-venture')) {
        //rename
        let ventureDiv = document.querySelector(`[data-name=${dataName}]`);
        let title = document.querySelector(`[data-name=${dataName}] p`);
        title.style.display = 'none';
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.classList.add('form-input');
        

        let updateBttn = document.createElement('button');
        updateBttn.classList.add('update-venture-bttn');
        updateBttn.classList.add('form-bttn');
        updateBttn.textContent = 'Update';

        ventureDiv.appendChild(input);
        ventureDiv.appendChild(updateBttn);
        input.focus();
        // change the p element to a text input
        // find out how to update an array value.
    }
})


//when update venture bttn is clicked
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('update-venture-bttn')) {
        // push the input value to the array
        // hide the input and the button
        //display the title again (will have to update it?).
    }
});
