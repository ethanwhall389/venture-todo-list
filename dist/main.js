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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ventures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ventures */ \"./src/ventures.js\");\n\n\nclass Task {\n    constructor (taskName, dueDate, important, notes) {\n        this.taskName = taskName;\n        this.dueDate = dueDate;\n        this.isImportant = important;\n        this.notes = notes;\n    }\n}\n\nfunction createTask (name, dueDate, important, notes) {\n    let task = new Task (name, dueDate, important, notes);\n    _ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray[0].tasks.push(task);\n    console.log(_ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);\n\n\n//# sourceURL=webpack://venture-todo-list/./src/create-task.js?");

/***/ }),

/***/ "./src/create-venture.js":
/*!*******************************!*\
  !*** ./src/create-venture.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ventures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ventures */ \"./src/ventures.js\");\n\n\nclass Venture {\n    constructor(ventureName) {\n        this.ventureName = ventureName;\n        this.tasks = [];\n    }\n}\n\n\nfunction createVenture (ventureName) {\n    let venture = new Venture (ventureName);\n    _ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray.push(venture);\n    console.log(_ventures__WEBPACK_IMPORTED_MODULE_0__.venturesArray);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createVenture);\n\n//# sourceURL=webpack://venture-todo-list/./src/create-venture.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_venture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-venture */ \"./src/create-venture.js\");\n/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-task */ \"./src/create-task.js\");\n\n\n\n\nlet bttnAddVenture = document.querySelector('.bttn-add-venture');\nlet bttnAddTask = document.querySelector('.bttn-add-task');\n\nbttnAddVenture.addEventListener('click', () => {\n    let ventureName = prompt('What should the name for this venture be?')\n    ;(0,_create_venture__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ventureName);\n})\n\nbttnAddTask.addEventListener('click', () => {\n    let taskName = prompt('Enter the task name');\n    let taskDate = prompt('Enter the task due date (mm/dd/yy)');\n    let taskImportant = prompt('Is this task of high important? True or false.');\n    let taskNotes = prompt('Enter any notes for this task');\n    (0,_create_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskName, taskDate, taskImportant, taskNotes);\n})\n\n//# sourceURL=webpack://venture-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/ventures.js":
/*!*************************!*\
  !*** ./src/ventures.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   venturesArray: () => (/* binding */ venturesArray)\n/* harmony export */ });\nlet venturesArray = [];\n\n\n\n//# sourceURL=webpack://venture-todo-list/./src/ventures.js?");

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