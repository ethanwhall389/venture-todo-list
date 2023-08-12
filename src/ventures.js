class CurrentVenture {
    constructor () {
        this.currentSelectedVenture = '';
    }

    updateSelectedVenture(venture) {
        this.currentSelectedVenture = venture;
    }

    getCurrentSelectedVenture() {
        return this.currentSelectedVenture;
    }
}

export let venturesArray = [];
export default new CurrentVenture();

