function nextLevel(){
    //clears the win-lose screen
    document.querySelector('.win-lose-screen').innerText = ""

    console.log("you will be going to the next level")

    //clears the all-page screen
    let bodyTag = document.querySelector('#all-page')
    bodyTag.className = "";
    currentBurger++; //moves to the next burger
    
    difficultyTimer = difficultyTimer + 2; 
    //increments the timer
    
    fetchFirstBurger()
}