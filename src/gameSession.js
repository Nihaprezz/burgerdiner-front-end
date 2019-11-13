function nextLevel(){

    //clears the win-lose screen
    document.querySelector('.win-lose-screen').innerText = ""

    console.log("you will be going to the next level")

    //clears the all-page screen
    let bodyTag = document.querySelector('#all-page')
    bodyTag.className = "";
    currentBurger++; //moves to the next burger


    //switch statement for the timer on the different levels
    switch(currentBurger){
        case 2:
            difficultyTimer = 7
            break;
        case 3:
            difficultyTimer = 8;
            break;
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
            difficultyTimer = 10;
            break;
        case 9:
        case 10:
            difficultyTimer = 12;
            break;  
    }
    gameSessionTimer = difficultyTimer;
    // difficultyTimer = difficultyTimer + 2; 
    //increments the timer

    fetchFirstBurger()
}