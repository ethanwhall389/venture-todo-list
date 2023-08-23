/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/create-task.js":
/*!****************************!*\
  !*** ./src/create-task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _ventures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ventures */ \"./src/ventures.js\");\n/* harmony import */ var _dom_control_update_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-control/update-dom.js */ \"./src/dom-control/update-dom.js\");\n\n\n\n// import currentSelectedVenture from \"./index\";\n\nclass Task {\n    constructor (taskName, dueDate, important, notes) {\n        this.taskName = taskName;\n        this.dueDate = dueDate;\n        this.isImportant = important;\n        this.notes = notes;\n    }\n\n    static createTask (name, dueDate, important, notes) {\n        let task = new Task (name, dueDate, important, notes);\n        // push to the index of the currentSelectedVenture\n        // const index = (element) => element === CurrentVenture.getCurrentSelectedVenture;\n        let currentVentureIndex = _ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray.findIndex((element) => element.ventureName === _ventures__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentSelectedVenture());\n        if (_ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray[currentVentureIndex] > -1) {            \n            _ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray[currentVentureIndex].tasks.push(task);\n            console.log(_ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray);\n        \n            _dom_control_update_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayTasks(_ventures__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentSelectedVenture());\n        } else {\n            alert('An error has occurred. Please add a venture before trying to add tasks.');\n        }\n    }\n\n    static deleteTask (name) {\n        let currentVentureIndex = _ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray.findIndex((element) => element.ventureName === _ventures__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentSelectedVenture());\n        let taskIndex = _ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray[currentVentureIndex].tasks.findIndex((element) => element.taskName === name);\n        _ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray[currentVentureIndex].tasks.splice(taskIndex, 1);\n    \n        console.log(_ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray);\n    \n        _dom_control_update_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayTasks(_ventures__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentSelectedVenture());\n    } \n    \n}\n\n// function createTask (name, dueDate, important, notes) {\n//     let task = new Task (name, dueDate, important, notes);\n//     // push to the index of the currentSelectedVenture\n//     // const index = (element) => element === CurrentVenture.getCurrentSelectedVenture;\n//     let currentVentureIndex = venturesArray.findIndex((element) => element.ventureName === CurrentVenture.getCurrentSelectedVenture());\n//     venturesArray[currentVentureIndex].tasks.push(task);\n//     console.log(venturesArray);\n\n//     UpdateDom.displayTasks(CurrentVenture.getCurrentSelectedVenture());\n\n// }\n\n// function deleteTask (name) {\n//     let currentVentureIndex = venturesArray.findIndex((element) => element.ventureName === CurrentVenture.getCurrentSelectedVenture());\n//     let taskIndex = venturesArray[currentVentureIndex].tasks.findIndex((element) => element.taskName === name);\n//     venturesArray[currentVentureIndex].tasks.splice(taskIndex, 1);\n\n//     console.log(venturesArray);\n\n//     UpdateDom.displayTasks(CurrentVenture.getCurrentSelectedVenture());\n// }\n\n\n\n\n\n//# sourceURL=webpack://venture-todo-list/./src/create-task.js?");

/***/ }),

/***/ "./src/create-venture.js":
/*!*******************************!*\
  !*** ./src/create-venture.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Venture: () => (/* binding */ Venture)\n/* harmony export */ });\n/* harmony import */ var _ventures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ventures */ \"./src/ventures.js\");\n/* harmony import */ var _dom_control_append_to_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-control/append-to-dom.js */ \"./src/dom-control/append-to-dom.js\");\n/* harmony import */ var _dom_control_update_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-control/update-dom.js */ \"./src/dom-control/update-dom.js\");\n\n\n\n\n\nclass Venture {\n    constructor(ventureName) {\n        this.ventureName = ventureName;\n        this.tasks = [];\n    }\n\n    updateVentureName (name) {\n        this.ventureName = name;\n    }\n\n    static createVenture (ventureName) {\n        _ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray.push(new Venture (ventureName));\n        _dom_control_append_to_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendVenture(ventureName);\n        //set currentSelectedVenture to the newly created venture\n        _ventures__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateSelectedVenture(ventureName);\n    \n        //update venture panel DOM\n        _dom_control_update_dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeElementText('.venture-panel-title', _ventures__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentSelectedVenture());\n\n        //Display all of the venture's tasks\n        _dom_control_update_dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayTasks(_ventures__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentSelectedVenture());\n\n        console.log(_ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray);\n    }\n\n    static deleteVenture (name) {\n        let ventureIndex = _ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray.findIndex((element) => element.ventureName === name);\n        _ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray.splice(ventureIndex, 1);\n        ventureIndex -= 1;\n        console.log(_ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray);\n        _dom_control_update_dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayVentures();\n        \n        //Update venture panel\n        if (_ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray.length > 0) {\n            _ventures__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateSelectedVenture(_ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray[ventureIndex].ventureName);\n            _dom_control_update_dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeElementText('.venture-panel-title', _ventures__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentSelectedVenture());\n            _dom_control_update_dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayTasks(_ventures__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentSelectedVenture());\n        } else {\n            _dom_control_update_dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayNoVentures();   \n        }\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://venture-todo-list/./src/create-venture.js?");

/***/ }),

/***/ "./src/dom-control/append-to-dom.js":
/*!******************************************!*\
  !*** ./src/dom-control/append-to-dom.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst tasksContainer = document.querySelector('.tasks-section');\n\n\nclass AppendToDom {\n    \n    constructor() {\n        this.isMenu = false;\n    }\n\n    static toggleIsMenu () {\n        if (this.isMenu === true) {\n            this.isMenu = false;\n        } else {\n            this.isMenu = true;\n        }\n    }\n\n    static appendVenture (name) {        \n        let venturesContainer = document.querySelector('.ventures-section');\n        \n        let ventureDiv = document.createElement('div');\n        ventureDiv.classList.add('venture-div');\n        ventureDiv.classList.add('venture-bttn');\n        ventureDiv.classList.add('bttn');\n        ventureDiv.setAttribute('data-name', name);\n\n        let icon = document.createElement('img');\n        icon.classList.add('folder-icon');\n        icon.classList.add('venture-bttn');\n        icon.setAttribute('src', 'icons/folder.svg');\n        icon.setAttribute('data-name', name);\n\n        let ventureTitle = document.createElement('p');\n        ventureTitle.classList.add('venture-bttn');\n        ventureTitle.textContent = name;\n        ventureTitle.setAttribute('data-name', name);\n\n        venturesContainer.appendChild(ventureDiv);\n        ventureDiv.appendChild(icon);\n        ventureDiv.appendChild(ventureTitle);\n    }\n\n    static appendTask (name) {\n        let newTaskDiv = document.createElement('div');\n        newTaskDiv.classList.add('task-div');\n        newTaskDiv.classList.add('task');\n        newTaskDiv.setAttribute('data-name', name);\n\n        let checkBox = document.createElement('div');\n        checkBox.classList.add('task-checkbox');\n        checkBox.classList.add('task');\n        \n        let newTaskTitle = document.createElement('p');\n        newTaskTitle.classList.add('task');\n        newTaskTitle.textContent = name;\n\n        let options = document.createElement('img');\n        options.setAttribute('src', 'icons/dots-vertical.svg');\n        options.classList.add('task-menu');\n        options.classList.add('task');\n        \n\n        tasksContainer.appendChild(newTaskDiv);\n        newTaskDiv.appendChild(checkBox);\n        newTaskDiv.appendChild(newTaskTitle);\n        newTaskDiv.appendChild(options);\n    }\n\n    static createOptionsMenu (mouseX, mouseY, arrayOfOptions, type) {\n        this.closeOptionsMenu();\n        const menuDiv = document.createElement('div');\n        menuDiv.classList.add('options-menu-div');\n\n        const menuList = document.createElement('ul');\n\n        document.body.appendChild(menuDiv);\n        menuDiv.appendChild(menuList);\n        \n        arrayOfOptions.forEach(option => {\n            let item = document.createElement('li');\n            item.textContent = option;\n            let lowerCaseOption = option.toLowerCase();\n            item.classList.add(`${lowerCaseOption}-${type}`);\n            menuList.appendChild(item);\n        })\n\n        menuDiv.style.display = 'block';\n        menuDiv.style.left = mouseX + 'px';\n        menuDiv.style.top = mouseY + 'px';\n\n        this.toggleIsMenu();\n    }\n\n    static closeOptionsMenu () {\n        if (this.isMenu === true) {\n            let menu = document.querySelector('.options-menu-div');\n            document.body.removeChild(menu);\n            this.toggleIsMenu();\n        }\n    }\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppendToDom);\n\n//# sourceURL=webpack://venture-todo-list/./src/dom-control/append-to-dom.js?");

/***/ }),

/***/ "./src/dom-control/update-dom.js":
/*!***************************************!*\
  !*** ./src/dom-control/update-dom.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ventures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ventures */ \"./src/ventures.js\");\n/* harmony import */ var _append_to_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./append-to-dom */ \"./src/dom-control/append-to-dom.js\");\n\n\n\nconst tasksContainer = document.querySelector('.tasks-section');\n\n\nclass UpdateDom {\n\n    static changeIcon (iconToGrab, newIconPath) {\n        iconToGrab.setAttribute('src', newIconPath);\n\n    }\n\n    static changeElementText (elementToGrab, newText) {\n        let element = document.querySelector(elementToGrab);\n        element.textContent = newText;\n    }\n\n    static displayNoVentures () {\n        let addTaskBttn = document.querySelector('.new-task-bttn');\n        let tasksSection = document.querySelector('.tasks-section');\n        addTaskBttn.style.display = 'none';\n        tasksSection.textContent = '';\n    \n        this.changeElementText('.venture-panel-title', 'Create a venture to get started');\n    }\n\n    static displayTasks (currentVenture) {\n        tasksContainer.textContent = '';\n        \n        //make sure add tasks bttn is visible\n        let addTaskBttn = document.querySelector('.new-task-bttn');\n        addTaskBttn.style.display = 'block';\n        \n        let currentVentureIndex = _ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray.findIndex((element) => element.ventureName === currentVenture);\n        if (currentVentureIndex != -1) {\n            let tasksArray = _ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray[currentVentureIndex].tasks;\n            if (tasksArray.length >= 1) {\n                tasksArray.forEach(element => {\n                    _append_to_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTask(element.taskName);\n                });\n            }\n        } else {\n            console.log('the displayTasks function currentVentureIndex returned ' + currentVentureIndex);\n            return;\n        }\n    }\n\n    static displayVentures () {\n        let venturesSection = document.querySelector('.ventures-section');\n        venturesSection.textContent = '';\n        _ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray.forEach((element) => {\n            _append_to_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendVenture(element.ventureName);\n        } )    \n    }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateDom);\n\n//# sourceURL=webpack://venture-todo-list/./src/dom-control/update-dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_venture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-venture */ \"./src/create-venture.js\");\n/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-task */ \"./src/create-task.js\");\n/* harmony import */ var _ventures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ventures */ \"./src/ventures.js\");\n/* harmony import */ var _dom_control_append_to_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-control/append-to-dom.js */ \"./src/dom-control/append-to-dom.js\");\n/* harmony import */ var _dom_control_update_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-control/update-dom.js */ \"./src/dom-control/update-dom.js\");\n\n\n\n\n\n\n// Add new venture\nlet bttnNewVenture = document.querySelector('.new-venture-bttn');\nlet formNewVenture = document.querySelector('.new-venture-form');\nlet bttnAddVenture = document.querySelector('.venture-submit-bttn');\nlet newVentureInput = document.querySelector('#venture-name-input');\nlet bttnCancelVenture = document.querySelector('.venture-cancel-bttn');\nbttnNewVenture.addEventListener('click', () => {\n    // let ventureName = prompt('What should the name for this venture be?')\n    formNewVenture.style.display = 'flex';\n    newVentureInput.focus();\n})\n\nbttnAddVenture.addEventListener('click', (event) => {\n    event.preventDefault();\n    if (newVentureInput.value !== '') {\n        _create_venture__WEBPACK_IMPORTED_MODULE_0__.Venture.createVenture(newVentureInput.value);\n        formNewVenture.style.display = 'none';\n        newVentureInput.value = '';\n    }\n})\n\nbttnCancelVenture.addEventListener('click', () => {\n    formNewVenture.style.display = 'none';\n    newVentureInput.value = '';\n})\n\n\n// Add new task\nlet bttnNewTask = document.querySelector('.new-task-bttn');\n\nbttnNewTask.addEventListener('click', () => {\n    let taskName = prompt('Enter the task name');\n    let taskDate = prompt('Enter the task due date (mm/dd/yy)');\n    let taskImportant = prompt('Is this task of high important? True or false.');\n    let taskNotes = prompt('Enter any notes for this task');\n    _create_task__WEBPACK_IMPORTED_MODULE_1__.Task.createTask(taskName, taskDate, taskImportant, taskNotes);\n})\n\n\n\n// Set and display the current venture when a venture is clicked in the sidebar.\nconst optionsPanel = document.querySelector('.options-panel');\noptionsPanel.addEventListener('click', (event) => {\n    if (event.target.classList.contains('venture-bttn')) {\n        // set the current venture\n        _ventures__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateSelectedVenture(event.target.getAttribute('data-name'));\n        console.log(`Current selected venture: ${_ventures__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getCurrentSelectedVenture()}`);\n\n        //update DOM\n        console.log(event.target);\n        _dom_control_update_dom_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].changeElementText('.venture-panel-title', _ventures__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getCurrentSelectedVenture());\n\n        //Display all of the venture's tasks\n        _dom_control_update_dom_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].displayTasks(_ventures__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getCurrentSelectedVenture());\n    }\n})\n\n//remove menu \ndocument.addEventListener('click', (event) => {\n    if (!event.target.classList.contains('task-menu')) {\n        _dom_control_append_to_dom_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].closeOptionsMenu();\n    }\n})\n\n// show task options when the verticle menu is clicked\nlet tasksSection = document.querySelector('.tasks-section');\ntasksSection.addEventListener('click', (event) => {\n    if (event.target.classList.contains('task-menu')) {\n        console.log('menu-clicked');\n        _dom_control_append_to_dom_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createOptionsMenu(event.clientX, event.clientY, ['Edit', 'Delete'], 'task');\n    }\n})\n\n\n// show options when a venture or task is right clicked\nlet dataName;\nwindow.addEventListener('contextmenu', (event) => {\n    if (event.target.classList.contains('venture-bttn')) {\n        event.preventDefault();\n        _dom_control_append_to_dom_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createOptionsMenu(event.clientX, event.clientY, ['Rename', 'Delete'], 'venture');\n    } else if (event.target.classList.contains('task')) {\n        event.preventDefault();\n        _dom_control_append_to_dom_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createOptionsMenu(event.clientX, event.clientY, ['Edit', 'Delete'], 'task');\n    }\n    dataName = event.target.getAttribute('data-name');\n})\n\n\n\n// delete a task or venture when delete menu option is chosen\ndocument.addEventListener('click', (event) => {\n    if (event.target.classList.contains('delete-task')) {\n        console.log('delete clicked')\n        _create_task__WEBPACK_IMPORTED_MODULE_1__.Task.deleteTask(dataName);\n    } else if (event.target.classList.contains('delete-venture')) {\n        _create_venture__WEBPACK_IMPORTED_MODULE_0__.Venture.deleteVenture(dataName);\n    }\n})\n\n//edit a venture when the option is chosen\ndocument.addEventListener('click', (event) => {\n    if (event.target.classList.contains('rename-venture')) {\n        //rename\n        let ventureDiv = document.querySelector(`[data-name=${dataName}]`);\n        let title = document.querySelector(`[data-name=${dataName}] p`);\n        title.style.display = 'none';\n        let input = document.createElement('input');\n        input.setAttribute('type', 'text');\n        input.classList.add('form-input');\n        \n\n        let updateBttn = document.createElement('button');\n        updateBttn.classList.add('update-venture-bttn');\n        updateBttn.classList.add('form-bttn');\n        updateBttn.textContent = 'Update';\n\n        ventureDiv.appendChild(input);\n        ventureDiv.appendChild(updateBttn);\n        input.focus();\n        // change the p element to a text input\n        // find out how to update an array value.\n    }\n})\n\n\n//when update venture bttn is clicked\nwindow.addEventListener('click', (event) => {\n    if (event.target.classList.contains('update-venture-bttn')) {\n        // push the input value to the array\n        // hide the input and the button\n        //display the title again (will have to update it?).\n    }\n});\n\n\n//# sourceURL=webpack://venture-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/ventures.js":
/*!*************************!*\
  !*** ./src/ventures.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   venturesArray: () => (/* binding */ venturesArray)\n/* harmony export */ });\nclass CurrentVenture {\n    constructor () {\n        this.currentSelectedVenture = '';\n    }\n\n    updateSelectedVenture(venture) {\n        this.currentSelectedVenture = venture;\n    }\n\n    getCurrentSelectedVenture() {\n        return this.currentSelectedVenture;\n    }\n}\n\nlet venturesArray = [];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new CurrentVenture());\n\n\n\n//# sourceURL=webpack://venture-todo-list/./src/ventures.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;