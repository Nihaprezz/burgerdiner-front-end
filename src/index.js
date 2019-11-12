document.addEventListener("DOMContentLoaded", () =>{

    getForm().addEventListener("submit", fetchFirstBurger)
    document.querySelector('#load-direction-page').addEventListener('click', renderDirections)
});

function getForm() {

    return document.querySelector('#username-form');

}