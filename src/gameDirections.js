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

    document.getElementById('type-username').remove(); //removes everything underneath the game name


    //RENDERS DIRECTIONS HERE
    let allPage = document.getElementById('all-page');
    allPage.classList.add = 'directions-gird-display';
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


    //USERNAME FORM HERE
    let usernameForm = document.createElement('form');

    usernameForm.innerHTML = `
    <input class="username-here" 
    id="username-id" type="text" 
    name="username" placeholder="Username"> 
    
    <br>
    
    <input class="ui inverted button custom" 
    type="submit" value="Start Game!" >
    `;

    dirDiv.append(dirH3, dirContent, usernameForm);
    allPage.appendChild(dirDiv);


    //INGREDIENTS INTRODUCTION HERE
    ingredientsIntro();

    renderForm().addEventListener("submit", fetchFirstBurger);

}

function renderForm() {

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

        allPAGE.appendChild(ingContainer)
    })

}


