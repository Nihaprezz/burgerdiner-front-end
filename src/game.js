function createGameScreen(burger){
    let allContainer = document.querySelector('#all-page') //body container 
    allContainer.innerText = '';
    allContainer.classList.add('adding-grid-diplay')
    allContainer.classList.add('game-container'); //used just to highlight the container with a white border

    //header for the game screeen
    let gameHeaderContainer = document.createElement('div')
    gameHeaderContainer.classList.add('game-header-container')
    let gameHeader = document.createElement('h1')
    gameHeader.innerText = "Burger Diner"
    gameHeaderContainer.append(gameHeader);


    //level and timer 
    let levelTimerContainer = document.createElement('div');
    let levelContainer = document.createElement('div');
    let timerContainer = document.createElement('div');

    levelContainer.innerText = "This will contain the Burger Level"
    timerContainer.innerText = "0:15";

    levelTimerContainer.append(levelContainer, timerContainer); //appends the level and time tags to thier container
    levelTimerContainer.classList.add('timer-level-container')

    //Ingredietns Container 
    let ingredientsContainer = document.createElement('div');
    ingredientsContainer.innerText = "This will be the container for the ingrdients christina created";
    ingredientsContainer.classList.add('all-ingredients-container');    // used to highlight the div to know where its at

    //creating the divs for every ingredient
    let plateContainer = document.createElement('div');
    plateContainer.innerText = 'This will be the "plate"container'
    plateContainer.classList.add('plate-container')
    burger.forEach(function(array){
        let foodItem = document.createElement('div');
        foodItem.id = `ingredient-${array.id}`
        foodItem.innerText = 'THIS WILL BE WHERE THE INGREDIENT NEEDS TO BE DRAGGED'
        foodItem.classList.add('food-item-container');
        plateContainer.append(foodItem);
    })



    //Ingredients that user will be able to click on or drag tooo
    let randomIngredientsContainer  = document.createElement('div');
    randomIngredientsContainer.classList.add('random-ingredients-container')
    randomIngredientsContainer.innerText = "This will be where the random ingredients will populate"



    allContainer.append(gameHeaderContainer, levelTimerContainer, ingredientsContainer, plateContainer, randomIngredientsContainer);
}