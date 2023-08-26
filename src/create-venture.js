import { venturesArray } from "./ventures";
import AppendToDom from "./dom-control/append-to-dom.js";
import UpdateDom from "./dom-control/update-dom.js"
import CurrentVenture from "./ventures";

class Venture {
    constructor(ventureName) {
        this.ventureName = ventureName;
        this.tasks = [];
    }

    static updateVentureName (newName) {
        let isInsideChange = false;
        //find the index of the current venture
        let ventureIndex = venturesArray.findIndex((element) => element.ventureName === CurrentVenture.getCurrentSelectedVenture());
        
        if (CurrentVenture.getCurrentSelectedVenture() === venturesArray[ventureIndex].ventureName) {
            isInsideChange = true;
        }

        //update the index.ventureName value.
        venturesArray[ventureIndex].ventureName = newName;
        
        // if the current selected venture is the venture we are changing, update the name
        if (isInsideChange === true) {
            CurrentVenture.updateSelectedVenture(newName);
        }
    }

    static updatePage () {
        
        UpdateDom.displayVentures();
        
        if (venturesArray.length > 0) {
            // CurrentVenture.updateSelectedVenture(venturesArray[ventureIndex].ventureName);
            UpdateDom.changeElementText('.venture-panel-title', CurrentVenture.getCurrentSelectedVenture());
            UpdateDom.displayTasks(CurrentVenture.getCurrentSelectedVenture());
        } else {
            UpdateDom.displayNoVentures();
        }
    }

    static createVenture (ventureName) {
        venturesArray.push(new Venture (ventureName));
        AppendToDom.appendVenture(ventureName);
        //set currentSelectedVenture to the newly created venture
        CurrentVenture.updateSelectedVenture(ventureName);
    
        this.updatePage();
        
        //update venture panel DOM
        UpdateDom.changeElementText('.venture-panel-title', CurrentVenture.getCurrentSelectedVenture());

        //Display all of the venture's tasks
        UpdateDom.displayTasks(CurrentVenture.getCurrentSelectedVenture());

        console.log(venturesArray);
    }

    static deleteVenture (name) {
        let ventureIndex = venturesArray.findIndex((element) => element.ventureName === name);
        venturesArray.splice(ventureIndex, 1);
        ventureIndex -= 1;
        this.updatePage();
        if (ventureIndex > -1) {
            CurrentVenture.updateSelectedVenture(venturesArray[ventureIndex].ventureName);
            console.log(venturesArray);
        } else {
            return;
        }
        
        this.updatePage();
        
    }
}



export {
    Venture
}