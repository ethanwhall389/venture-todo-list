import { venturesArray } from "./ventures";
import { appendToDom, changeElementText, displayTasks } from "./dom-control";
import CurrentVenture from "./ventures";

class Venture {
    constructor(ventureName) {
        this.ventureName = ventureName;
        this.tasks = [];
    }
}



function createVenture (ventureName) {
    venturesArray.push(new Venture (ventureName));
    appendToDom.appendVenture(ventureName);
    //set currentSelectedVenture to the newly created venture
    CurrentVenture.updateSelectedVenture(ventureName);
    
    //update venture panel DOM
    changeElementText('.venture-panel-title', CurrentVenture.getCurrentSelectedVenture());

    //Display all of the venture's tasks
    displayTasks(CurrentVenture.getCurrentSelectedVenture());

    console.log(venturesArray);
}


export default createVenture;