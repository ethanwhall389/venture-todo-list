import { format } from "date-fns";

const tasksContainer = document.querySelector('.tasks-section');


class AppendToDom {
    
    constructor() {
        this.isMenu = false;
    }

    static toggleIsMenu () {
        if (this.isMenu === true) {
            this.isMenu = false;
        } else {
            this.isMenu = true;
        }
    }

    static appendVenture (name) {        
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

    static appendTask (name, dueDate, isImportant) {
        let newTaskDiv = document.createElement('div');
        newTaskDiv.classList.add('task-div');
        newTaskDiv.classList.add('task');
        newTaskDiv.setAttribute('data-name', name);

        let checkBox = document.createElement('div');
        checkBox.classList.add('task-checkbox');
        
        let newTaskTitle = document.createElement('p');
        newTaskTitle.classList.add('task');
        newTaskTitle.textContent = name;
        newTaskTitle.setAttribute('data-name', name);


        let newTaskDueDate = document.createElement('p');
        newTaskDueDate.classList.add('task-due-date');
            //convert the date string back to a date object so we can format it how we want.
        // let dueDateObject = new Date(dueDate);
        // console.log(dueDateObject);
        // let formattedDueDate = format(dueDateObject, 'mm/dd/yy');
        newTaskDueDate.textContent = dueDate;

        
        let options = document.createElement('img');
        options.setAttribute('src', 'icons/dots-vertical.svg');
        options.classList.add('task-menu');
        
        const dateAndMenuDiv = document.createElement('div');
        dateAndMenuDiv.classList.add('date-menu-div');
        dateAndMenuDiv.appendChild(newTaskDueDate);
        dateAndMenuDiv.appendChild(options);

        tasksContainer.appendChild(newTaskDiv);
        newTaskDiv.appendChild(checkBox);
        newTaskDiv.appendChild(newTaskTitle);
        
        if (isImportant) {
            const newTaskImportant = document.createElement('img');
            // newTaskImportant.classList.add('task-star-icon');
            newTaskImportant.setAttribute('src', 'icons/star-colored.svg');
            
            newTaskDiv.appendChild(newTaskImportant);
        } 


        newTaskDiv.appendChild(dateAndMenuDiv);
    }

    static createOptionsMenu (mouseX, mouseY, arrayOfOptions, type) {
        this.closeOptionsMenu();
        const menuDiv = document.createElement('div');
        menuDiv.classList.add('options-menu-div');

        const menuList = document.createElement('ul');

        document.body.appendChild(menuDiv);
        menuDiv.appendChild(menuList);
        
        arrayOfOptions.forEach(option => {
            let item = document.createElement('li');
            item.textContent = option;
            let lowerCaseOption = option.toLowerCase();
            item.classList.add(`${lowerCaseOption}-${type}`);
            menuList.appendChild(item);
        })

        menuDiv.style.display = 'block';
        menuDiv.style.left = mouseX + 'px';
        menuDiv.style.top = mouseY + 'px';

        this.toggleIsMenu();
    }

    static closeOptionsMenu () {
        if (this.isMenu === true) {
            let menu = document.querySelector('.options-menu-div');
            document.body.removeChild(menu);
            this.toggleIsMenu();
        }
    }

    static renameVenture (dataName) {
        //rename
        let ventureDiv = document.querySelector(`[data-name="${dataName}"]`);
        let title = document.querySelector(`[data-name="${dataName}"] p`);
        title.style.display = 'none';
        
        let form = document.createElement('form');
        form.classList.add('update-venture-form');
        
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.classList.add('form-input');
        input.classList.add('update-venture-input');
        

        let updateBttn = document.createElement('input');
        updateBttn.setAttribute('type', 'submit');
        updateBttn.classList.add('update-venture-bttn');
        updateBttn.classList.add('form-bttn');
        updateBttn.value = 'Update';

        ventureDiv.appendChild(form);
        form.appendChild(input);
        form.appendChild(updateBttn);
        input.focus();
        // change the p element to a text input
        // find out how to update an array value.  
    }
}



export default AppendToDom;