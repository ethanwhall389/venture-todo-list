import { venturesArray } from "./ventures";
import { appendToDom, changeElementText, displayTasks, displayVentures, displayNoVentures } from "./dom-control";
import CurrentVenture from "./ventures";

class Venture {
    constructor(ventureName) {
        this.ventureName = ventureName;
        this.tasks = [];
    }

    updateVentureName (name) {
        this.ventureName = name;
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


function deleteVenture (name) {
    let ventureIndex = venturesArray.findIndex((element) => element.ventureName === name);
    venturesArray.splice(ventureIndex, 1);
    console.log(venturesArray);
    displayVentures();
    
    //Update venture panel
    if (venturesArray.length > 0) {
        CurrentVenture.updateSelectedVenture(venturesArray[ventureIndex].ventureName);
        changeElementText('.venture-panel-title', CurrentVenture.getCurrentSelectedVenture());
        displayTasks(CurrentVenture.getCurrentSelectedVenture());
    } else {
        displayNoVentures();   
    }
}


export {
    createVenture,
    deleteVenture
}