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

function createGameScreen(){
    let allContainer = document.querySelector('#all-page');
    allContainer.innerText = '';
}

function renderFirstBurger(burger){
    //recipe name in a div
    //in another div create ol and  pull ingredients list in an li within the ol
    let webBody = document.getElementById('all-page');
    let ingredients = document.createElement('div');
    let burgerName = document.createElement('h2');
    let ingredientsOl = document.createElement('ol');

    webBody.appendChild(ingredients);
    ingredients.appendChild(burgerName);
    ingredients.appendChild(ingredientsOl);

    ingredients.classList.add('ingredients-list');

    burger.forEach(recipes => {
        burgerName.innerText = recipes.recipe.name
    });

    burger.forEach(function(ingredients) {
        let ingredientsLi = document.createElement('li');
        ingredientsLi.innerText = ingredients.ingredient.name;
        ingredientsOl.append(ingredientsLi);
    });


}