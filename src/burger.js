//GLOBAL FOR WHAT LEVEL THE GAME IS CURRENTLY ON
let currentBurger = 1;

function fetchFirstBurger(event) {
    if (event != undefined){
        event.preventDefault()
    }

    fetch(`http://localhost:3000/burgers_recipe/${currentBurger}`)
    .then( response => response.json())
    .then(function(burger){
        createGameScreen(burger);
        renderFirstBurger(burger); 
        createTimeLogic() //goes to game.js file
    })


}

function createGameScreen(){
    let allContainer = document.querySelector('#all-page');
    allContainer.innerText = '';
}

function renderFirstBurger(burger){

    //burger name
    let burgerName = burger[0].recipe.name
    let difficultyDiv = document.querySelector('.difficulty-div');
    difficultyDiv.innerHTML = `Level: ${burger[0].recipe.id} <br><br> | ${burgerName} |`;
    
    //rendering the ingredients 
    let ingredientsContainer = document.querySelector('.all-ingredients-container');
    let ingredients = document.createElement('div');
    let ingredientsText = document.createElement('h2');
    ingredientsText.innerText = `${burgerName} Recipe!`;
    ingredients.append(ingredientsText);
    ingredients.classList.add('ingredients-list');

    let ingredientsOl = document.createElement('ol');
    ingredients.appendChild(ingredientsOl);

    burger.forEach(function(ingredients) {
        let ingredientsLi = document.createElement('li');
        //adding class tags for DOM manipulation later on 
        ingredientsLi.classList.add(`list-ingredientId-${ingredients.ingredient.id }`)
        ingredientsLi.innerText = ingredients.ingredient.name;
        ingredientsOl.append(ingredientsLi);
    });

    ingredientsContainer.append(ingredients);
    
    //generating the ingrdient pictures and other random ingredients 
    genRightAndRandomIngreds(burger)
}

function genRightAndRandomIngreds(burger){ 
    let currentIngredients = [];

    burger.forEach(function(ingredients){
      currentIngredients.push(ingredients.ingredient) 
    })

    fetch('http://localhost:3000/ingredients')
    .then(resp => resp.json())
    .then(allIngredients =>  {
        renderAllIngredients(allIngredients)
    })
}

function renderAllIngredients(allIngredients){
    let ingredientContainer = document.querySelector('.random-ingredients-container');
    ingredientContainer.classList.add('random-ingredients-container-grid');
    //creating the divs for every image
    
    shuffleIngredients(allIngredients) //will shuffle the order of the ingredients

    allIngredients.forEach(ingredient => {
        let imageContainer = document.createElement('div');
        let ingredientImage = document.createElement("img");
        ingredientImage.dataset.ingredientId = ingredient.id;
        ingredientImage.dataset.ingredientName = ingredient.name;

        let imagePath = `src/images/Burger Ingredients/${ingredient.name}.svg`;
        ingredientImage.src = imagePath;
        

        // ingredientImage.classList.add("ui", "medium", "circular", "image");
        imageContainer.classList.add("ui", "small", "image");
        imageContainer.addEventListener('click', addToPlate); //clickeven function to add to plate divs

        imageContainer.append(ingredientImage);
        ingredientContainer.append(imageContainer);
    })

}

function shuffleIngredients(arrayOfIngreds){
    let i = arrayOfIngreds.length - 1;
    for(i; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = arrayOfIngreds[i]
        arrayOfIngreds[i] = arrayOfIngreds[j]
        arrayOfIngreds[j] = temp
      }

    return arrayOfIngreds
}