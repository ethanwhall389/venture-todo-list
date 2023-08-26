import { Venture, createVenture, deleteVenture } from "./create-venture";
import { format } from 'date-fns';
import { Task, createTask, deleteTask } from "./create-task";
import CurrentVenture, { venturesArray } from "./ventures";
import AppendToDom from "./dom-control/append-to-dom.js";
import UpdateDom from "./dom-control/update-dom.js";


export default class UI {

    static loadPage () {
        Venture.updatePage();
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
        const bttnCancelTask = document.querySelector('.task-cancel-bttn');

        formNewTask.style.display = 'flex';
        taskName.focus();
        taskName.value = '';
        taskNotes.value = '';

        const dateInput = document.querySelector('.input-date');
        const currentDate = new Date();
        const formattedDate = format(currentDate, 'yyyy-MM-dd');
        dateInput.value = formattedDate;
        
        bttnCancelTask.addEventListener('click', () => {
            formNewTask.style.display = 'none';
        })

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                formNewTask.style.display = 'none';
            }
        })

    }

    static addTask (event) {
        event.preventDefault();
        Task.createTask(taskName.value, taskDate.value, true, taskNotes.value);
        formNewTask.style.display = 'none';

    }

    // Set and display the current venture when a venture is clicked in the sidebar.
    static displayVenture (clickEvent) {
        CurrentVenture.updateSelectedVenture(clickEvent.target.getAttribute('data-name'));
        Venture.updatePage();
    }
    
}

const bttnNewVenture = document.querySelector('.new-venture-bttn');
bttnNewVenture.addEventListener('click', () => UI.addNewVenture());


const formNewTask = document.querySelector('.new-task-form');



const taskName = document.querySelector('#task-name-input');
const taskNotes= document.querySelector('.task-form-notes');
const taskDate = document.querySelector('.input-date');
const bttnNewTask = document.querySelector('.new-task-bttn');
bttnNewTask.addEventListener('click', () => UI.newTaskBttn());


const bttnSubmitTask = document.querySelector('.task-submit-bttn');
bttnSubmitTask.addEventListener('click', (event) => UI.addTask(event));


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
    //remove spaces from the data name attribute
    dataName = event.target.getAttribute('data-name');

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
            Venture.updatePage();
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
        Venture.updatePage();
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
