//ADDING TO PLATE GAME LOGIC
function addToPlate(event){
    if(gameSessionTimer == 0){
        timeUpLogic();
    }
    
    let clickedIngredientId = event.target.dataset.ingredientId
    currentRecipeIngredients.forEach(function(currentIngredient){ //going through ingredient id, if it is right it will run the next code
        if (currentIngredient.ingredient.id == clickedIngredientId){
            console.log("this is right ingredient")
            event.target.style.opacity = "30%"
            
            
            //created the image tag that will be inside of the show plate
            
            let plateContainerDiv = document.querySelector(`#ingredient-${clickedIngredientId}`) //grabbing the right div depending on the ID
            

            //checks if the plate container has a image already in it.
            if (plateContainerDiv.children.length === 0 ){

                plateContainerDiv.classList.add("ui", "small", "image")
                plateContainerDiv.classList.add('plate-container-grid-items')
                

                let plateImage = document.createElement('img')
                plateImage.src = event.target.src
                //resetting the data set attributes for the new image tag created 
                plateImage.dataset.ingredientId = event.target.dataset.ingredientId
                plateImage.dataset.ingredientName = event.target.dataset.ingredientName

                plateContainerDiv.append(plateImage)
                
                let ingredListItem = document.querySelector(`.list-ingredientId-${clickedIngredientId}`)
                ingredListItem.style.textDecoration = "line-through";
                ingredListItem.style.color = "#2EC4B6"
                ingredListItem.style.textShadow = "0px 0px 100px, 0 0 1px, 0 0 1em #2EC4B6, 0 0 0.5em #2EC4B6, 0 0 0.1em #2EC4B6, 0 10px 3px #000"
            }           
        } 
    })
  
    filterWrongIngredients().forEach(function(ingredient){
       if(event.target.dataset.ingredientId == ingredient.id){
            event.target.classList.add('wrong-animation')
            gameSessionTimer--;
            
            updateTimerDom()
       }
    })    

}

function filterWrongIngredients(){
    let filteredIngredientArray = []
    let filteredOnlyIngredients = currentRecipeIngredients.map(ingredient => ingredient.ingredient.name)

    allDatabaseIngredients.forEach(function(ingredient){
        if (!filteredOnlyIngredients.includes(ingredient.name)) {
            filteredIngredientArray.push(ingredient)
        }
    })

    return filteredIngredientArray
}

function updateTimerDom(){
    let currentTime = document.querySelector('.timer-div')

    if (gameSessionTimer > 9 ){
        currentTime.innerText = `0:${gameSessionTimer}`;
    } else {
        currentTime.innerText = `0:0${gameSessionTimer}`
    }
}