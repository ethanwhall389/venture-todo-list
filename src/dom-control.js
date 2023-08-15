import { venturesArray } from "./ventures";

let tasksContainer = document.querySelector('.tasks-section');


const appendToDom = (() => {

    const appendVenture = (name) => {
        let venturesContainer = document.querySelector('.ventures-section');
        
        let ventureDiv = document.createElement('div');
        ventureDiv.classList.add('venture-div');
        ventureDiv.classList.add('venture-bttn');
        ventureDiv.classList.add('bttn');
        ventureDiv.setAttribute('data-name', name);

        let icon = document.createElement('img');
        icon.classList.add('folder-icon');
        icon.classList.add('venture-bttn');
        icon.setAttribute('src', 'icons/folder.svg');
        icon.setAttribute('data-name', name);

        let ventureTitle = document.createElement('p');
        ventureTitle.classList.add('venture-bttn');
        ventureTitle.textContent = name;
        ventureTitle.setAttribute('data-name', name);

        venturesContainer.appendChild(ventureDiv);
        ventureDiv.appendChild(icon);
        ventureDiv.appendChild(ventureTitle);

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

    let isMenu = false;

    const createOptionsMenu = (x, y) => {
        closeOptionsMenu();
        const menuDiv = document.createElement('div');
        menuDiv.classList.add('options-menu-div');

        const menuList = document.createElement('ul');
        const editVenture = document.createElement('li');
        editVenture.classList.add('edit-venture');
        editVenture.textContent = 'Edit';

        const deleteVenture = document.createElement('li');
        deleteVenture.classList.add('delete-venture');
        deleteVenture.textContent = 'Delete';

        document.body.appendChild(menuDiv);
        menuDiv.appendChild(menuList);
        menuList.appendChild(editVenture);
        menuList.appendChild(deleteVenture);

        menuDiv.style.display = 'block';
        menuDiv.style.left = x + 'px';
        menuDiv.style.top = y + 'px';

        isMenu = true;
    }

    const closeOptionsMenu = () => {
        if (isMenu === true) {
            let menu = document.querySelector('.options-menu-div');
            document.body.removeChild(menu);
            isMenu = false
        }
    }

    return {
        appendVenture,
        appendTask,
        createOptionsMenu,
        closeOptionsMenu
    };

})();

function changeIcon (iconToGrab, newIconPath) {
    iconToGrab.setAttribute('src', newIconPath);
}


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




export { appendToDom,
    changeElementText,
    displayTasks,
    changeIcon,
};