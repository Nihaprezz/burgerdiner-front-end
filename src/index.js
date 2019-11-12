document.addEventListener("DOMContentLoaded", () =>{

    getForm().addEventListener("submit", fetchFirstBurger)
    // getForm().addEventListener('')
});

function getForm() {
    return document.querySelector('#username-form');
}