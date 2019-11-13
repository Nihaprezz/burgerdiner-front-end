//ADDING TO PLATE GAME LOGIC
function addToPlate(event){
    let clickedIngredientId = event.target.dataset.ingredientId
    
    currentRecipeIngredients.forEach(function(currentIngredient){ //going through ingredient id, if it is right it will 
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
            }           
        }
    })


}