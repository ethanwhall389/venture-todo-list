import { Venture, createVenture, deleteVenture } from "./create-venture";
import { format } from 'date-fns';
import { Task, createTask, deleteTask } from "./create-task";
import CurrentVenture, { venturesArray } from "./ventures";
import AppendToDom from "./dom-control/append-to-dom.js";
import UpdateDom from "./dom-control/update-dom.js";

// let isTaskImportant = false;

export default class UI {

    constructor () {
        this.isTaskImportant = false;
    }

    static loadPage () {
        UpdateDom.updatePage();
    }

    static addNewVenture () {
        let formNewVenture = document.querySelector('.new-venture-form');
        let bttnAddVenture = document.querySelector('.venture-submit-bttn');
        let newVentureInput = document.querySelector('#venture-name-input');
        let bttnCancelVenture = document.querySelector('.venture-cancel-bttn');

        formNewVenture.style.display = 'flex';
        newVentureInput.focus();

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


        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                formNewVenture.style.display = 'none';
                newVentureInput.value = '';
            }
        })
    }
    
    static newTaskBttn () {

        const venturePanel = document.querySelector('.venture-panel');

        // formNewTask.style.display = 'flex';
        AppendToDom.createNewTaskForm();


        const taskNameInput = document.querySelector('#task-name-input');
        const taskNotesInput= document.querySelector('.task-form-notes');
        const bttnCancelTask = document.querySelector('.task-cancel-bttn');


        taskNameInput.focus();
        this.isTaskImportant = false;

        const dateInput = document.querySelector('.input-date');
        const currentDate = new Date();
        const formattedDate = format(currentDate, 'yyyy-MM-dd');
        dateInput.value = formattedDate;
        
        
        bttnCancelTask.addEventListener('click', () => {
            AppendToDom.removeNewTaskForm();
            UpdateDom.updatePage();
        })

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                AppendToDom.removeNewTaskForm();
                UpdateDom.updatePage();
            }
        })

        // //Submit task bttn
        // document.addEventListener('click', (event) => {
        //     if (event.target.classList.contains('task-submit-bttn')) {
        //     UI.addTask(event, taskNameInput, taskNotesInput, dateInput);
        //     AppendToDom.removeNewTaskForm();
        //     UpdateDom.updatePage();
        //     }
        // })
    }

    static submitTask (event) {
        const taskNameInput = document.querySelector('#task-name-input');
        const taskNotesInput= document.querySelector('.task-form-notes');
        const dateInput = document.querySelector('.input-date');

        UI.addTask(event, taskNameInput, taskNotesInput, dateInput);

        AppendToDom.removeNewTaskForm();
        UpdateDom.updatePage();
    }

    static editTask (dataName) {
        AppendToDom.createNewTaskForm();

        const taskNameInput = document.querySelector('#task-name-input');
        const taskNotesInput= document.querySelector('.task-form-notes');
        const taskDate = document.querySelector('.input-date');
        const taskStar = document.querySelector('.task-star-icon');
        // this.isTaskImportant = true;


        let indexOfEditedTask = 0;
        const taskDivs = document.querySelectorAll('.task-div');

        for (let i = 0; i < taskDivs.length; i++) {
            if (taskDivs[i].getAttribute('data-name') === dataName) {
                taskDivs[i].style.display = 'none';
                indexOfEditedTask = i;
                console.log(`index of edited task: ${i}`);
            }
        }

        
        const updateTaskBttn = document.querySelector('.task-submit-bttn');
        updateTaskBttn.classList.remove('task-submit-bttn');
        updateTaskBttn.classList.add('task-update-bttn');
        updateTaskBttn.setAttribute('value', 'Update');

        let currentVentureIndex = venturesArray.findIndex((element) => element.ventureName === CurrentVenture.getCurrentSelectedVenture());
        let taskIndex = venturesArray[currentVentureIndex].tasks.findIndex((element) => element.taskName === dataName);

        taskNameInput.value = venturesArray[currentVentureIndex].tasks[taskIndex].taskName;
        const oldTaskName = taskNameInput.value;
        taskNotesInput.value = venturesArray[currentVentureIndex].tasks[taskIndex].notes;
        taskDate.value = venturesArray[currentVentureIndex].tasks[taskIndex].dueDate;


        updateTaskBttn.addEventListener('click', (event) => {
            event.preventDefault();
            Task.editTask(oldTaskName, taskNameInput.value, taskDate.value, false, taskNotesInput.value);
            // venturesArray[currentVentureIndex].tasks[taskIndex].updateTaskName(taskNameInput.value);
            // venturesArray[currentVentureIndex].tasks[taskIndex].updateDueDate(taskDate.value);
            // venturesArray[currentVentureIndex].tasks[taskIndex].updateNotes(taskNotesInput.value);
            AppendToDom.removeNewTaskForm();
            UpdateDom.updatePage();
        })

    }

    static changeTaskImportance () {
        if (this.isTaskImportant === true) {
            this.isTaskImportant = false;
        } else {
            this.isTaskImportant = true;
        }
        UpdateDom.changeTaskImportance(this.isTaskImportant);
        console.log(`task is now important? ${this.isTaskImportant}`);
    }

    static addTask (event, taskName, taskNotes, taskDate) {
        event.preventDefault();
        const dateObject = new Date (taskDate.value)
        console.log(taskDate.value);
        console.log(typeof(taskDate.value));
        console.log(dateObject);
        const formattedTaskDate = format(dateObject, 'MM/dd/yy')
        Task.createTask(taskName.value, formattedTaskDate, this.isTaskImportant, taskNotes.value);
        

    }

    // Set and display the current venture when a venture is clicked in the sidebar.
    static displayVenture (clickEvent) {
        CurrentVenture.updateSelectedVenture(clickEvent.target.getAttribute('data-name'));
        UpdateDom.updatePage();
    }

        //for mobile only
    static displayOptionsPanel () {
        const optionsPanel = document.querySelector('.options-panel');
        const displayPanelBttn = document.querySelector('.view-ventures-bttn-mobile');
        const computedStyle = window.getComputedStyle(optionsPanel);
        if (computedStyle.display === 'none') {
            optionsPanel.style.display = 'block';
            displayPanelBttn.textContent = 'Hide Ventures';
        } else {
            optionsPanel.style.display = 'none';
            displayPanelBttn.textContent = 'Show Ventures';
        }
    }
    
}

const bttnNewVenture = document.querySelector('.new-venture-bttn');
bttnNewVenture.addEventListener('click', () => UI.addNewVenture());


const formNewTask = document.querySelector('.new-task-form');



// const taskNameInput = document.querySelector('#task-name-input');
// const taskNotesInput= document.querySelector('.task-form-notes');
// const taskDate = document.querySelector('.input-date');
const bttnNewTask = document.querySelector('.new-task-bttn');
bttnNewTask.addEventListener('click', () => UI.newTaskBttn());

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('task-submit-bttn')) {
        UI.submitTask(event);
    }
})


//Edit task if 
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit-task')) {
        console.log('edit clicked');
        UI.editTask(dataName);
    } else if (event.target.classList.contains('task')) {
        console.log('edit clicked');
        dataName = event.target.getAttribute('data-name');
        UI.editTask(dataName);
    }
})

// //Submit task bttn
// document.addEventListener('click', (event) => {
//     if (event.target.classList.contains('task-submit-bttn')) {
//         UI.addTask(event);
//     }
// })

// const bttnSubmitTask = document.querySelector('.task-submit-bttn');
// bttnSubmitTask.addEventListener('click', (event) => UI.addTask(event));

//Task star bttn
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('task-star-icon')) {
        UI.changeTaskImportance();
    }
})

// const bttnStarTask = document.querySelector('.task-star-icon');
// bttnStarTask.addEventListener('click', () => UI.changeTaskImportance())

// const bttnCompleteTask = document.querySelectorAll('.task-checkbox');
// bttnCompleteTask.forEach( (bttn) => {
//     bttn.addEventListener('click', (event) => {
//         console.log('check-box clicked');
//         taskToComplete = event.target.getAttribute('data-name');
//         Task.completeTask(taskToComplete);
//         UpdateDom.updatePage();
//     })
// });

// const bttnCompleteTask = document.querySelector('.task-checkbox');
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('task-checkbox')) {
        console.log('check-box clicked');
            const taskToComplete = event.target.getAttribute('data-name');
            Task.completeTask(taskToComplete);
            UpdateDom.updatePage();
    }    
})



// Set and display the current venture when a venture is clicked in the sidebar.
const optionsPanel = document.querySelector('.options-panel');
optionsPanel.addEventListener('click', (event) => {
    if (event.target.classList.contains('venture-bttn')) { UI.displayVenture(event) };
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
            // set this as the current venture to make our lives easier when updating display with new name.
        UI.displayVenture(event);
        event.preventDefault();
        AppendToDom.createOptionsMenu(event.clientX, event.clientY, ['Rename', 'Delete'], 'venture');
    } else if (event.target.classList.contains('task')) {
        event.preventDefault();
        AppendToDom.createOptionsMenu(event.clientX, event.clientY, ['Edit', 'Delete'], 'task');
    }
    dataName = event.target.getAttribute('data-name');
    console.log(dataName);

})



// delete a task or venture when delete menu option is chosen
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-task')) {
        Task.deleteTask(dataName);
    } else if (event.target.classList.contains('delete-venture')) {
        Venture.deleteVenture(dataName);
    }
})

//edit a venture when the option is chosen
let isEditVentureOpen = false;
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('rename-venture')) {
        AppendToDom.renameVenture(dataName);
        isEditVentureOpen = true;
    }
})

// close edit venture form if escape key is pressed 
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (isEditVentureOpen === true) {
            UpdateDom.updatePage();
            isEditVentureOpen = false;
        }
    }
})

//Update venture's name when the update button is clicked 
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('update-venture-bttn')) {
        
        const updateInput = document.querySelector('.update-venture-input');
        //change the array value in the selected venture.
        Venture.updateVentureName (updateInput.value);
        //update the page display
        UpdateDom.updatePage();
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

//view ventures button (for mobile only) 
const viewVenturesBttn = document.querySelector('.view-ventures-bttn-mobile');

viewVenturesBttn.addEventListener('click', () => {
    UI.displayOptionsPanel();
})
