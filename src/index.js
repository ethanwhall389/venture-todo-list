
import createVenture from "./create-venture";
import createTask from "./create-task";

let bttnAddVenture = document.querySelector('.bttn-add-venture');
let bttnAddTask = document.querySelector('.bttn-add-task');

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