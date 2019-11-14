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

    gameSessionTimer = difficultyTimer; //resets the gameSessionTimer
    // difficultyTimer = difficultyTimer + 2; 
    //increments the timer


    //check and if the level is greater then 10, it will render the beating game screen
    if (currentBurger < 10){
        fetchFirstBurger() //starts the next session
    } else {
        renderBeatGameScreen()
    }

}

function renderBeatGameScreen(){
    let currentPage = document.querySelector('#all-page')
    currentPage.classList.add('win-lose-screen');

    let winLoseCard = document.createElement('div')
    winLoseCard.classList.add('win-lose-card')
    winLoseCard.classList.add('beat-game-card-styling');

    let gifContainer = document.createElement('div')
    gifContainer.classList.add('beat-game-style')

    let gif = document.createElement('div');
    gif.innerHTML = `
<iframe src="https://giphy.com/embed/Qsb49tomju4vca9Sfu" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`

    // let sadIcon = document.createElement('i')
    // sadIcon.classList.add('far', 'fa-frown-open', 'fa-10x')

    let beatGameText = document.createElement('h2')
    beatGameText.classList.add('beat-game-card-text');
    beatGameText.innerHTML = 'You have beaten all the levels. <br> You are the BURGER DINER MASTER!'

    let goHomeButton = document.createElement('button')
    goHomeButton.addEventListener('click', reloadPage)
    
    //ui inverted teal basic button
    goHomeButton.classList.add('ui', 'inverted', 'teal', 'basic', 'button')
    goHomeButton.innerText = "Home Screen"

    gifContainer.append(gif)
    winLoseCard.append(gifContainer, beatGameText, goHomeButton)
    currentPage.append(winLoseCard)
}
