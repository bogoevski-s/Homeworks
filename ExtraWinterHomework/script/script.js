// ----------- Task 01 --------------
// Write a JS function that will decide if a number entered by user is even or odd
// Example: isOddOrEven(3)
// Output 'Number 3 is odd number.'
userInput = parseInt(prompt(`Task 1 \nEnter number`)) 
function check(userInput){
    if(isNaN(userInput)){
        alert(`Please enter a number`)
    }
}
function isOddOrEven(userInput){
    check(userInput);
    if(userInput % 2 === 0){
        console.log(`number ${userInput} is even number`)
    }else if(userInput % 2 === 1){
        console.log(`number ${userInput} is odd number`)
    }
}
isOddOrEven(userInput);

// ------------ Task 02 --------------
// Write a function that takes an integer minutes and converts it to seconds.
// Example: convert(5)
// output 300
let minInput = parseInt(prompt(`Task 2 \nConvert minutes into seconds `)) 
function minutes(minInput){
    let sec = minInput * 60;
    return(console.log(`${sec} sec`));
}
minutes(minInput);

// ------------ Task 03 -------------
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// Example: points(38, 8) 
// output 100
function basketPoints(TwoPoints,ThreePoints){
    let total = (TwoPoints * 2) + (ThreePoints * 3);
    console.log(`${total} points`);
}
TwoPoints = parseInt(prompt(`Task 3 \nCounting points enter 2 points shoots`)) 
ThreePoints = parseInt(prompt(`Task 3 \nCounting points enter 3 points shoots`)) 
basketPoints(TwoPoints,ThreePoints);

// ------------ Task 04 ------------ 
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// Example: howManyLegs(5, 2, 8)
// output: 50
function howManyLegs(chickens,cows,pigs){
    let totalLegs = (chickens * 2) + (cows * 4) + (pigs * 4);
    console.log(`${totalLegs} total legs`)
}
chickens =  parseInt(prompt(`Task 4 \nCounting legs *enter number of chickens`)) 
cows =  parseInt(prompt(`Task 4 \nCounting legs *enter number of cows`)) 
pigs =  parseInt(prompt(`Task 4 \nCounting legs *enter number of pigs`)) 
howManyLegs(chickens,cows,pigs);

// ------------ Task 05 ------------
// Some basic arithmetic operators are +, -, *, /, and %. In this challenge you will be given three parameters, num1, num2, and an operator. Use the operator on number 1 and 2.
// Example: calculate(3, 7, '*')
// output: 21
function calculate(num1, num2, operator) {
    if(operator !='*' && operator !=='/' && operator !=='+' && operator !=='-'){
        console.log(`${operator} is not operator`)
    }else if(operator === '*'){
        let sum = num1 * num2;
        console.log(sum);
    }else if(operator === '/'){
        let sum = num1 / num2;
        console.log(sum)
    }else if(operator === '+'){
        let sum = num1 + num2;
        console.log(sum)
    }
    else if(operator === '-'){
        let sum = num1 - num2;
        console.log(sum)
    }else{
        console.log(`error`)
    }
}
num1 =  parseInt(prompt(`Task 5 \nCalculator\nEnter first number`)) 
num2 =  parseInt(prompt(`Task 5 \nCalculator\nEnter second number`)) 
operator = (prompt(`Task 5 \nCalculator\nChoose operation * , / , + , -`)) 
calculate(num1, num2, operator);

// ------------- Task 06 -----------
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// Example: comp("ABC", "DE")
// output false
function string(strOne, strTwo){
    if(strOne.length === strTwo.length){
        return true;
    }else{
        return false
    }
}
strOne = prompt(`Task 6 \nFirst string`)
strTwo = prompt(`Task 6 \nSecond string`)
string(strOne, strTwo);

// ------------- Task 07 -----------
//A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break. So you need two parameters, one for user age and other for the bartender being on break or not.
// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
// Example: shouldServeDrinks(17, true) output false
// Example: shouldServeDrinks(19, false) output true
// Example: shouldServeDrinks(30, true) output false
function drink(age,onBreak){
    if(onBreak === true){
        return false;
    }else if(age >= 18){
        return true
    }
}
age = parseInt(prompt(`Task 7 \nEnter your age`))
onBreak = false;
drink(age, onBreak);

// ------------- Task 08 -----------
// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
// Example: moodToday("happy") output "Today, I am feeling happy"
// Example: moodToday() output "Today, I am feeling neutral"
function moodToday(mood) {
    if(mood !== ''){
    console.log(`Today, I'm feeling ${mood}`);
    }else{
        console.log(`Today, I am feeling neutral`);
    }
}
mood = prompt(`Task 8 \nYour mood today:`)
moodToday(mood);

// ------------ Task 09 -----------
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.

//The function will be in this form: equalSlices(total slices, no. recipients, slices each)
// Example: equalSlices(11, 5, 2) output true (5 people x 2 slices each = 10 slices < 11 slices)
// Example: equalSlices(11, 5, 3) output false (5 people x 3 slices each = 15 slices > 11 slices)
function equalSlices(slicesEach, people, perPerson){
    let slices = people * perPerson;
    if(slices>slicesEach){
        console.log(`${people} people x ${perPerson} slices each = ${slices} slices > ${slicesEach} slices`);
    }else if(slices<slicesEach){
        console.log(`${people} people x ${perPerson} slices each = ${slices} slices < ${slicesEach} slices`);
    }
}
slicesEach = parseInt(prompt(`Task 9 \nTotal number of slices`))
people = parseInt(prompt(`Task 9 \nNumber of recipients`))
perPerson = parseInt(prompt(`Task 9 \nHow many slices each person gets`))
equalSlices(slicesEach, people, perPerson);

// ---------- Task 10 ----------
// For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.

// Example: totalCups(6) output 7
// Example: totalCups(12) output 14
// Example: totalCups(213) output 248
function totalCups(cups){
    let result = cups / 6;
    let total = result - result%1;
    console.log(total + cups);
}
cups = parseInt(prompt(`Task 10 \nEnter cups`))
totalCups(cups);