import { venturesArray } from "./ventures";

class Venture {
    constructor(ventureName) {
        this.ventureName = ventureName;
        this.tasks = [];
    }
}


function createVenture (ventureName) {
    let venture = new Venture (ventureName);
    venturesArray.push(venture);
    console.log(venturesArray);
}


export default createVenture;