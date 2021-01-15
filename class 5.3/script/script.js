let choice = prompt(`Choose your calculator \n\n 1.  Dog to human age \n \n 2.  Human to dog age`)
choice = parseInt(choice);

if (choice === 1) {
    let dogsAge = prompt(`Enter yours dog age: \n`);
    dogsAge = parseInt(dogsAge);
    if (isNaN(dogsAge) || dogsAge > 15) {
        alert(`Please enter valid number`)
    } else {
        function animalCalculator(dogsAge) {
            let result = dogsAge * 7;
            console.log(`Your dog have ${result} humans years`);
        }
        animalCalculator(dogsAge);
    }

} else if (choice === 2) {
    let humanAge = prompt(`Enter yours age: \n`);
    humanAge = parseInt(humanAge);

    if (isNaN(humanAge) || humanAge > 120) {
        alert(`Please enter number`)
    }else{
        function humanCalculator(humanAge) {
            let result = humanAge / 7;
            result = Math.round(result * 10) / 10;
            console.log(`You have ${result} dog years`);
        }
        humanCalculator(humanAge);
    }
} else {
    alert(`Please choose 1 or 2`)
}
