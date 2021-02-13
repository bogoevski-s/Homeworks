// Task 1
console.log(`Task 1\n\n`);
let matrixArrayOne = [[1, 0, 0], [0, 2, 0], [0, 0, 3]];
let matrixArrayTwo = [[1, 0, 0], [0, 2, 3], [0, 0, 3]];

const matrix = (array) => {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (i !== j && array[i][j] !== 0) {
                console.log(`Not diagonal matrix`); // -> ova samo za da se vidi u konzola rezultatot
                return false;
            }
        }
    }
    console.log(`Diagonal matrix`);// -> i ova samo za da se vidi u konzola rezultatot
    return true;
}
matrix(matrixArrayOne);
matrix(matrixArrayTwo);

// Task 2 
console.log(`\nTask 2\n\n`);
let duplicate = [2, 6, 3, 5, 3, 22, 50, 50, 11, 2, 1];
let cleanArray = [];
const removeDuplicate = numArray => {
    numArray.sort(function (a, b) { return a - b });
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i + 1] === numArray[i]) {
            cleanArray.push(numArray[i]);
        }
    }
    console.log(duplicate);
    console.log(cleanArray);
}
removeDuplicate(duplicate);

// Task 3
console.log(`\nTask 3\n\n`);
const evenNumDash = number => {
    let dashed = [number[0]]
    for (let i = 0; i < number.length; i++) {
        if ((number[i - 1] % 2 === 0) && (number[i] % 2 === 0)) {
            dashed.push('-', number[i]);
        } else {
            dashed.push(number[i])
        }
    }
    dashed.shift();
    dashed = dashed.join('');
    console.log(dashed)
}
evenNumDash("025468");

// Task 4
console.log(`\nTask 4\n\n`);
let arrOfArrays = [[1, 2], [8, 11], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
const printElements = array => {
    for (const elements of array) {
        for (const items of elements) {
            console.log(items)
        }
    }

}
printElements(arrOfArrays);

// Task 5
console.log(`\nTask 4\n\n`);
let palindroms = ["Ana", "Slave", "Bob", 100, "boob", "Civic", "palindrome", "mom"];
const findPalindroms = arrOfPalindromes => {
    for (item of arrOfPalindromes) {
        if (typeof (item) === "number") {
            item.toString();
        } else {
            item = item.toLowerCase();
            if (item === item.split("").reverse().join("")) {
                console.log(`This is palindrome "${item}"`)
            }
        }

    }
}
findPalindroms(palindroms);

// Task 6 
console.log(`\nTask 4\n\n`);
let newElements = [];
const elementsLength = array => {
    for (elements of array) {
        if (typeof (elements) === "number") {
            array.splice(array.indexOf(elements), 0);
        } else {
            newElements.push(elements.length);
        }
    }
    console.log(newElements)
}
elementsLength(palindroms);

// Task FizzBuzz
let fizzNumber = $("#fizzNumber");
let fizzButton = $("#fizzBtn");
let fizzDisplay = $("#fizzbuzz");

const FizzBuzz = number => {
    $("h3").remove();
    $("h4").remove();
    number = fizzNumber.val();
    fizzNumber.val("");
    for (let i = 1; i <= number; i++) {
        if ((i % 5) === 0 && (i % 3) === 0) {
            fizzDisplay.append(`<h3>FizzBuzz</h3>`)
        } else if ((i % 5) === 0) {
            fizzDisplay.append(`<h4>Buzz</h4>`)
        } else if ((i % 3) === 0) {
            fizzDisplay.append(`<h4>Fizz</h4>`)
        }
    }
}
fizzButton.on("click", FizzBuzz);


// Task Coin Denomination
let coinDisplay = $("#coinDenominator");
let moneyAmount = $("#amount");
let coinButton = $("#coinBtn");
let coins = [1, 5, 10, 20, 50];

const coinDenomination = (arrOfCoins, cash) => {
    arrOfCoins = coins;
    cash = moneyAmount.val();
    $("h3").remove();
    $("h2").remove();
    let coinsNeeded = 0;
    let reminder = 0;
    let totalCoinsNeeded = 0;
    if (isNaN(cash)) {
        coinDisplay.append(`<h3> Please enter a numeric value </h3>`);
        cash = moneyAmount.val(``);
        return;
    }
    coinDisplay.append(`<h2>For ${cash} you need: </h3>`);
    for (let i = arrOfCoins.length - 1; i >= 0; i--) {
        if (cash >= arrOfCoins[i]) {
            coinsNeeded = Math.floor(cash / arrOfCoins[i]);
            coinDisplay.append(`<h3>${coinsNeeded} coins of ${arrOfCoins[i]}</h3>`);
            reminder = cash % arrOfCoins[i];
            cash = reminder;
            totalCoinsNeeded += coinsNeeded
        }
    }
    coinDisplay.append(`<h2>You need total of ${totalCoinsNeeded} coins</h2>`);
    cash = moneyAmount.val(``);
}
coinButton.on("click", coinDenomination);

// Task Number Checker
let numberDisplay = $("#numberChecker");
let numberInput = $("#number");
let numberButton = $("#numberBtn");

const numberChecker = () => {
    $("h3").remove();
    if (isNaN(numberInput.val())) {
        numberDisplay.append(`<h3>Input is not a number! Please enter numeric value</h3>`);
    } else {
        function NumberStats(value) {
            this.value = value;
            this.isEven = () => {
                if ((value % 2) === 0) {
                    let even = "The number is even!"
                    return even;
                } else {
                    let odd = "The number is odd!"
                    return odd;
                }
            }
            this.positiveNegative = () => {
                if (value > 0) {
                    let positive = `${value} is a positive number`;
                    return positive;
                } else if (value < 0) {
                    let negative = `${value} is nagative number`;
                    return negative;
                } else {
                    let zero = `${value} is neutral number`;
                    return zero;
                }
            }
            this.lengthOfNum = () => {
                let numToStr = value.toString();
                let digits = numToStr.length;
                return digits;
            }
        }
        let inputNumber = new NumberStats(numberInput.val());
        numberDisplay.append(`<h3>Input number is ${inputNumber.value}</h3>`);
        numberDisplay.append(`<h3>${inputNumber.positiveNegative()}</h3>`);
        numberDisplay.append(`<h3>${inputNumber.isEven()}</h3>`)
        numberDisplay.append(`<h3>${inputNumber.value} have ${inputNumber.lengthOfNum()} digits</h3>`);
        console.log(inputNumber)
    }
    numberInput.val(``)
}
numberButton.on("click", numberChecker)



