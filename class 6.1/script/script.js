// STUDENT EXERCISE - #2

function weightInChickens(input) {
    let sum = 0;
    if (isNaN(input)) {
        result.innerHTML += `<p><strong>Wrong input Please enter digit</p></strong>`;
    } else {
        let chicken = 0.5;
        sum = input / chicken;
    }
    return sum;
}
let input = parseInt(prompt(`Enter your weight in kg`));

let resultChicken = document.querySelector("div");
let result = resultChicken.lastElementChild;
result.innerText += ` ${weightInChickens(input)} chickens`;

weightInChickens(input);