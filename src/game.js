let currentRecipeIngredients = [];

function createGameScreen(burger){
    let allContainer = document.querySelector('#all-page') //body container 
    allContainer.innerText = '';
    allContainer.classList.add('adding-grid-diplay')
    allContainer.classList.add('game-container'); //used just to highlight the container with a white border

    //header for the game screeen
    let gameHeaderContainer = document.createElement('div')
    gameHeaderContainer.classList.add('game-header-container')

    let headerTextContainer = document.createElement('div');

    let gameHeader = document.createElement('h1')
    gameHeader.innerText = "Burger Diner"

    headerTextContainer.append(gameHeader)
    gameHeaderContainer.append(headerTextContainer);


    //level and timer 
    let levelTimerContainer = document.createElement('div');
    let levelContainer = document.createElement('div');
    let timerContainer = document.createElement('div');

    levelContainer.classList.add('difficulty-div')

    timerContainer.classList.add('timer-div');
    
    timerContainer.innerText = '0:15';

    levelTimerContainer.append(levelContainer, timerContainer); //appends the level and time tags to thier container
    levelTimerContainer.classList.add('timer-level-container')

    //Ingredients Container 
    let ingredientsContainer = document.createElement('div');
    ingredientsContainer.classList.add('all-ingredients-container');    // used to highlight the div to know where its at

    //creating the divs for every ingredient
    let plateContainer = document.createElement('div');
    plateContainer.classList.add('plate-container')
    plateContainer.classList.add('plate-container-grid');
    
    burger.reverse()
    burger.forEach(function(array){
        let foodItem = document.createElement('div');
        // foodItem.id = `ingredient-index-${array.index}`
        foodItem.id = `ingredient-${array.ingredient.id}`
        // foodItem.innerText = 'THIS WILL BE WHERE THE INGREDIENT NEEDS TO BE DRAGGED'
        foodItem.classList.add('food-item-container');
        plateContainer.append(foodItem);
    })

    //pushing all current recipe ingredients to the global variable
    currentRecipeIngredients =[]; //redefining to 0 to make sure no old ingredients get saved
    burger.forEach(function(ingredient){
        currentRecipeIngredients.push(ingredient)
    })


    //Ingredients that user will be able to click on or drag tooo
    let randomIngredientsContainer  = document.createElement('div');
    randomIngredientsContainer.classList.add('random-ingredients-container')



    allContainer.append(gameHeaderContainer, levelTimerContainer, ingredientsContainer, plateContainer, randomIngredientsContainer);
}


//time logic
function createTimeLogic(){
    let timerHTMLTag = document.querySelector('.timer-div')
    let timerCounter = parseInt(timerHTMLTag.innerText.split(':')[1])
 
    let domTimer = setInterval(function(){
        console.log(timerCounter)
        timerCounter--

        if (timerCounter > 9 ){
            timerHTMLTag.innerText = `0:${timerCounter}`;
        } else if (timerCounter >= 0) {
            timerHTMLTag.innerText = `0:0${timerCounter}`
        } else {
            timeUpLogic(domTimer)
        }
    },1000);
}

function timeUpLogic(domTimer){
    console.log('time is up')
    clearInterval(domTimer);
    let currentPlate = document.querySelector('.plate-container')
    console.log(currentPlate);
}



