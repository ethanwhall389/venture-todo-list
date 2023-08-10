import createTask from "./create-task.js";
import { venture } from "./create-task.js";

let addTaskBttn = document.querySelector('.bttn-add-task');
addTaskBttn.addEventListener('click', () => {
    createTask('Test', '07/11/24', 3, 'No notes for me.')
    console.log(venture);
});
