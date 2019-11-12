function nextLevel(){
    console.log("you will be going to the next level")
    currentBurger++;
    let bodyTag = document.querySelector('#all-page')
    bodyTag.className = "";
    fetchFirstBurger()
}