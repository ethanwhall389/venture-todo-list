
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

    static appendTask (name) {
        let newTaskDiv = document.createElement('div');
        newTaskDiv.classList.add('task-div');
        newTaskDiv.classList.add('task');
        newTaskDiv.setAttribute('data-name', name);

        let checkBox = document.createElement('div');
        checkBox.classList.add('task-checkbox');
        checkBox.classList.add('task');
        
        let newTaskTitle = document.createElement('p');
        newTaskTitle.classList.add('task');
        newTaskTitle.textContent = name;

        let options = document.createElement('img');
        options.setAttribute('src', 'icons/dots-vertical.svg');
        options.classList.add('task-menu');
        options.classList.add('task');
        

        tasksContainer.appendChild(newTaskDiv);
        newTaskDiv.appendChild(checkBox);
        newTaskDiv.appendChild(newTaskTitle);
        newTaskDiv.appendChild(options);
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
}



export { 
    AppendToDom
};