import { venturesArray } from "./ventures";
import { appendToDom } from "./dom-control";

class Venture {
    constructor(ventureName) {
        this.ventureName = ventureName;
        this.tasks = [];
    }
}



function createVenture (ventureName) {
    venturesArray.push(new Venture (ventureName));
    appendToDom.appendVenture(ventureName);
    console.log(venturesArray);
}


export default createVenture;