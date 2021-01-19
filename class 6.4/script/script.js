// BONUS HOMEWORK

let ingredients = [];
let numOfIngredients = 0;
let nameRecipe = "";
let header = document.querySelector("#main");

function recipePage(ingredients) {
    header.innerHTML += `<ul>`
    for (let i = 0; i < numOfIngredients; i++) {
        ingredients.push(prompt(`Enter ingredients`));
        header.innerHTML += `<li> ${ingredients[i]}</li>`
    }
    header.innerHTML += `</ul>`
    console.log(ingredients);
}
function nameForRecipe(nameRecipe) {
    nameRecipe = prompt(`Enter recipe name:`)
    while (!isNaN(nameRecipe) || nameRecipe.length < 3) {
        alert(`Wrong input!!!`)
        nameRecipe = prompt(`Enter recipe name:`)
    }
    header.innerHTML += `<h1><strong>${nameRecipe}</strong></h1>`;
}
nameForRecipe(nameRecipe);

numOfIngredients = parseInt(prompt(`How many ingredients you need for this recepie?`));
while (isNaN(numOfIngredients)) {
    numOfIngredients = parseInt(prompt(`Please enter ingredients with number!!!`));
}
recipePage(ingredients);



