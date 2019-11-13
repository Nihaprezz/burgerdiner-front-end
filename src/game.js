//GLOBALS : 
//currentRecipeIngredients - holds the ingredient objects for the recipe its on
//difficultyTimer - keeps track of the timer will increment the higher the level goes

let currentRecipeIngredients = [];
let difficultyTimer = 6;
let allDatabaseIngredients = [];
let gameSessionTimer = difficultyTimer;

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


    //checks the difficultyTimer to append the right number of 0's to it
    if (gameSessionTimer > 9 ){
        timerContainer.innerText = `0:${gameSessionTimer}`;
    } else {
        timerContainer.innerText = `0:0${gameSessionTimer}`
    }

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

    //calls the fetch on all ingredients to save them to a global variable
    fetchAllIngredients()

    allContainer.append(gameHeaderContainer, levelTimerContainer, ingredientsContainer, plateContainer, randomIngredientsContainer);
}


//time logic
function createTimeLogic(){
    let timerHTMLTag = document.querySelector('.timer-div')
    let timerCounter = parseInt(timerHTMLTag.innerText.split(':')[1])
    
    let domTimer = setInterval(function(){
        console.log(timerCounter)
        
        gameSessionTimer--;

        if (gameSessionTimer > 9 ){
            timerHTMLTag.innerText = `0:${gameSessionTimer}`;
        } else if (gameSessionTimer >= 0) {
            timerHTMLTag.innerText = `0:0${gameSessionTimer}`
        } else {
            timeUpLogic(domTimer)
        }
    },1000);
}

function timeUpLogic(domTimer){
    console.log('time is up')
    clearInterval(domTimer);
    let currentPlate = document.querySelector('.plate-container')

    let plateItems = currentPlate.querySelectorAll('img').length
    let realReciepIngredients = currentRecipeIngredients.length

    //creating the elements that will show on the win/lose page

    //emptying screen and changing up the grid layout
    let currentPage = document.querySelector('#all-page')
    currentPage.innerText = ""
    currentPage.classList.remove('adding-grid-diplay')
    currentPage.classList.add('win-lose-screen');

    //creating new div/card which will have the info if they passed the level or not
    let winLoseCard = document.createElement('div')
    winLoseCard.classList.add('win-lose-card')
    // currentPage.append(winLoseCard);

    let iconContainer = document.createElement('div')
    
    
    if (plateItems === realReciepIngredients) {
        let happyIcon = document.createElement('i')
        happyIcon.classList.add('far', 'fa-smile-beam', 'fa-10x')
       
        let winText = document.createElement('h2')
        winText.innerText = 'You have beat this level!!'

        let nextLvlBtn = document.createElement('button')
        nextLvlBtn.addEventListener('click', nextLevel)
        nextLvlBtn.classList.add('ui', 'inverted', 'button');
        nextLvlBtn.innerText = "Next Level?"


        let tryAgainButton = document.createElement('button')
        tryAgainButton.addEventListener('click', reloadPage)
        tryAgainButton.classList.add('ui', 'inverted', 'red', 'button')
        tryAgainButton.innerText = "Try Again?"

        let winLoseBtnsContainer = document.createElement('div')
        winLoseBtnsContainer.append(nextLvlBtn, tryAgainButton)

        iconContainer.append(happyIcon)
        winLoseCard.append(iconContainer, winText, winLoseBtnsContainer)
        currentPage.append(winLoseCard)

    } else {
        let sadIcon = document.createElement('i')
        sadIcon.classList.add('far', 'fa-frown-open', 'fa-10x')

        let lostText = document.createElement('h2')
        lostText.innerText = 'You have lost'

        let tryAgainButton = document.createElement('button')
        tryAgainButton.addEventListener('click', reloadPage)
        //ui inverted red button
        tryAgainButton.classList.add('ui', 'inverted', 'red', 'button')
        tryAgainButton.innerText = "Try Again?"

        iconContainer.append(sadIcon)
        winLoseCard.append(iconContainer, lostText, tryAgainButton)
        currentPage.append(winLoseCard)
    }
}

//used to refresh the page 
function reloadPage(){
    location.reload()
}

//used to fetch all the ingredients
function fetchAllIngredients(){
    fetch('http://localhost:3000/ingredients')
    .then(response => response.json())
    .then(function(allIngrededients){
        allIngrededients.forEach(ingredient => allDatabaseIngredients.push(ingredient))
    })
}