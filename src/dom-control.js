

const appendToDom = (() => {

    const appendVenture = (name) => {
        let venturesContainer = document.querySelector('.ventures-section');
        let newVenture = document.createElement('h3');
        newVenture.textContent = name;
        newVenture.classList.add('venture')
        venturesContainer.appendChild(newVenture);
    }

    return {
        appendVenture
    };

})();


module.exports = { appendToDom };