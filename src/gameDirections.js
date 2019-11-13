const directions = [
    'Create a username and click start game button.',
    'You will have 15 seconds to select all of your ingredients for your burger.',
    'The countdown starts automatically when the game page loads.',
    'Your goal is to see the ingredients list and select all the ingredients in order before the timer runs out.',
    'When you succeed picking out all the ingredients in order, you can go on to the next level.',
    'There are total of 10 levels, 10 being the hardest of them all.',
    'Good Luck!'
];

function renderDirections(){
    console.log( 'give me directions!');
    document.getElementById('type-username').remove();

    let allPage = document.getElementById('all-page');
    let directionsAndIngredients = document.createElement('div');
    directionsAndIngredients.id = 'dir-ing-container';

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
    directionsAndIngredients.appendChild(dirDiv);
    allPage.appendChild(directionsAndIngredients);

    let usernameForm = document.createElement('form');
    let usernameInput = document.createElement('input');
    let usernameSubmit = document.createElement('input');
    let nextLine = document.createElement('br');

    usernameForm.id = 'username-form';
    usernameInput.classList.add('username-here');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.placeholder = 'Username';
    usernameSubmit.type = 'submit';
    usernameSubmit.classList.add('ui', 'inverted', 'button', 'custom');
    usernameSubmit.value = 'Start Game!';

    usernameForm.append(usernameInput, nextLine, usernameSubmit);
    dirDiv.append(usernameForm);

    getForm().addEventListener("submit", fetchFirstBurger);

    ingredientsIntro();
}

function getForm() {

    return document.querySelector('#username-form');
}

function ingredientsIntro() {

fetch('http://localhost:3000/ingredients')
    .then(response => response.json())
    .then(ingredientsArray =>
        eachIngredientInfo(ingredientsArray))
}

function eachIngredientInfo(ingredientsArray) {

    let allPAGE = document.getElementById('all-page');

    let dirAndIng = document.getElementById('dir-ing-container');


    let ingContainer = document.createElement('div');
    ingContainer.classList.add('ingredients-introduction-container');

    ingredientsArray.forEach(ingredient => {
        let ingHolder = document.createElement('div');
        ingHolder.classList.add('each-ingredients-introduction-container');

        let imgContainer = document.createElement('img');
        imgContainer.classList.add('image-card');
        imgContainer.src = `src/images/Burger Ingredients/${ingredient.name}.svg`;
        let ingName = document.createElement('h4');
        ingName.innerText = ingredient.name;

        ingContainer.append(ingHolder, imgContainer, ingName);
        dirAndIng.appendChild(ingContainer);
        allPAGE.appendChild(dirAndIng)
    })

}


