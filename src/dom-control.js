

const appendToDom = (() => {

    const appendVenture = (name) => {
        let venturesContainer = document.querySelector('.ventures-section');
        let newVenture = document.createElement('h3');
        newVenture.textContent = name;
        newVenture.classList.add('venture')
        newVenture.setAttribute('data-name', name);
        venturesContainer.appendChild(newVenture);
    }

    return {
        appendVenture
    };

})();


module.exports = { appendToDom };