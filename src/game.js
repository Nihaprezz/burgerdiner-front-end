function createGameScreen(){
    let allContainer = document.querySelector('#all-page') //body container 
    allContainer.innerText = '';

    allContainer.classList.add('game-container'); //used just to highlight the container with a white border

    //level and timer 
    let levelTimerContainer = document.createElement('div');
    let levelContainer = document.createElement('div');
    let timerContainer = document.createElement('div');

    levelContainer.innerText = "This will contain the Burger Level"
    timerContainer.innerText = "0:00";

    levelTimerContainer.append(levelContainer, timerContainer); //appends the level and time tags to thier container
    levelTimerContainer.classList.add('timer-level-container')
    allContainer.append(levelTimerContainer);
}