document.addEventListener("DOMContentLoaded", () =>{

    getForm().addEventListener("submit", fetchFirstBurger) 
})

function getForm() {
    return document.querySelector('#username-form');
}