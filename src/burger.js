function fetchFirstBurger(event) {
    event.preventDefault()

    createGameScreen()

    let firstBurger = 1 ;
    fetch(`http://localhost:3000/burgers_recipe/${firstBurger}`)
    .then( response => response.json())
    .then(function(burger){
        renderFirstBurger(burger);
    })
}

function renderFirstBurger(burger){
    console.log(burger) //printes out the burger
}