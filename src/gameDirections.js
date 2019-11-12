const directions = [
    'Create a username and click start game button.',
    'You will have 15 seconds to select all of your ingredients for your burger.',
    'The countdown starts automatically when the game page loads.',
    'Your goal is to see the ingredients list and select all the ingredients in order before the timer runs out.',
    'When you succeed picking out all the ingredients in order, you can go on to the next level.',
    'There are total of 12 levels, 12 being the hardest of them all.',
    'Good Luck!'
];

function renderDirections(){
    console.log( 'give me directions! ');
    document.getElementById('type-username').remove();

    let allPage = document.getElementById('all-page');
    let dirDiv = document.createElement('div');
    let dirH3 = document.createElement('h3');
    let dirContent = document.createElement('ol');

    directions.forEach(direction => {
        let eachDirCnt = document.createElement('li');
        eachDirCnt.innerText = direction;
        dirContent.append(eachDirCnt);

    });

    dirDiv.classList.add('all-directions');
    dirH3.id = 'directions-header';
    dirH3.innerText = 'Directions';


    dirDiv.append(dirH3, dirContent);
    allPage.appendChild(dirDiv);

    let usernameForm = document.createElement('form');
    let usernameInput = document.createElement('input');
    let usernameSubmit = document.createElement('input');

    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.placeholder = 'Username';
    usernameSubmit.type = 'submit';
    usernameSubmit.classList.add('ui', 'inverted', 'button', 'custom');
    usernameSubmit.value = 'Start Game!';

    usernameForm.append(usernameInput, usernameSubmit);
    document.querySelector('#all-page').append(usernameForm);

}

