
const level1 = {
    3 : "Bottom Bun",
    2 : "Beef Patty",
    1 : "Top Bun"
};

function fetchFirstBurger(event) {
    event.preventDefault();

    let firstBurger = 1 ;
    fetch(`http://localhost:3000/burgers_recipe/${firstBurger}`)
    .then( response => response.json())
    .then(function(burger){
        createGameScreen(burger);
        renderFirstBurger(burger); 
    })
}

function createGameScreen(){
    let allContainer = document.querySelector('#all-page');
    allContainer.innerText = '';
}

function renderFirstBurger(burger){

    //burger name
    let burgerName = burger[0].recipe.name;
    let difficultyDiv = document.querySelector('.difficulty-div');
    difficultyDiv.innerText = `This is the ${burgerName} level`;
    
    //rendering the ingredients 
    let ingredientsContainer = document.querySelector('.all-ingredients-container');
    let ingredients = document.createElement('div');
    ingredients.innerText = `Ingredients for the ${burgerName} recipe!`;
    ingredients.classList.add('ingredients-list');

    let ingredientsOl = document.createElement('ol');
    ingredients.appendChild(ingredientsOl);

    burger.forEach(function(ingredients) {
        let ingredientsLi = document.createElement('li');
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
    });

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
    
    allIngredients.forEach(ingredient => {
        let imageContainer = document.createElement('div');
        let ingredientImage = document.createElement("img");
        ingredientImage.id = `ingredient-id-${ingredient.id}`;
        let imagePath = `src/images/Burger Ingredients/${ingredient.name}.svg`;
        ingredientImage.src = imagePath;
    
        // ingredientImage.classList.add("ui", "medium", "circular", "image");
        imageContainer.classList.add("ui", "small", "image");
        imageContainer.addEventListener('click', addToPlate); //clickevent function to add to plate divs

        imageContainer.append(ingredientImage);
        ingredientContainer.append(imageContainer);
    })

}

function addToPlate(event){

    let imageId = event.target.id.split('-')[2];

    fetch(`http://localhost:3000/ingredients/${imageId}`)
        .then(resp => resp.json())
        .then(image => renderOneIngredient(image))
}

function renderOneIngredient(image){
    console.log(image);

    if (`${image.name}`=== level1[3]){
        let imgCnt = document.getElementById(`ingredient-${Object.keys(level1)[2]}`);
        let imgHolder = document.createElement('img');
        let imgPic = image.image_url;
        imgHolder.src = imgPic;
        imgCnt.appendChild(imgHolder)
    }else{
        alert('Not the Right Ingredient!')
    }

}

