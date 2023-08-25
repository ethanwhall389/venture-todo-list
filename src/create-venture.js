import { venturesArray } from "./ventures";
import AppendToDom from "./dom-control/append-to-dom.js";
import UpdateDom from "./dom-control/update-dom.js"
import CurrentVenture from "./ventures";

class Venture {
    constructor(ventureName) {
        this.ventureName = ventureName;
        this.tasks = [];
    }

    updateVentureName (name) {
        this.ventureName = name;
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
        
        // UpdateDom.displayVentures();
        
        // //Update venture panel
        // if (venturesArray.length > 0) {
        //     UpdateDom.changeElementText('.venture-panel-title', CurrentVenture.getCurrentSelectedVenture());
        //     UpdateDom.displayTasks(CurrentVenture.getCurrentSelectedVenture());
        // } else {
        //     UpdateDom.displayNoVentures();   
        // }
    }
}



export {
    Venture
}