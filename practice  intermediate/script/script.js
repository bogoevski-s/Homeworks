// Task 1
console.log(`Task 1\n`)

let day = "monday";
switch (day) {
    case "monday":
        console.log("I am in SEDC");
        break;
    case "tuesday":
        console.log("I am free")
        break;
    case "wednesday":
        console.log("I am in SEDC");
        break;
    case "thursday":
        console.log("I am free")
        break;
    case "friday":
        console.log("I am free")
        break;
    case "saturday ":
        console.log("I am free")
        break;
    case "sunday":
        console.log("I am free")
        break;
    default:
        console.log(`This "${day}" is not a day of the week`)
}

// Task 2
console.log(`\nTask 2\n`);
let numbers = [1, 2, 3, 4, 5, 6];
let names = ["bob", "bucky", "slave", "robert"];
//Print the first value of each array.
console.log(numbers[0]);
console.log(names[0]);
//Print the arrays.
console.log(numbers);
console.log(names);
//Change the values of the first element in both arrays.
numbers[0] = 9;
names[0] = "steve";
//Assign a value to the 100 th member of the first array.
numbers[99] = 8;
//Print how many elements the array has? 
console.log(numbers.length);
//What is the value of the 99th element in the array.
console.log(numbers[99]);
//Write an example of push.
names.push("seb");
//Write an example of pop.
numbers.pop();
//What is the value of the 1000th element in both arrays?
console.log(numbers[1000]);
console.log(names[1000])


//Task 3
console.log(`\nTask 3\n`);
function feetToMeter(feet) {
    let result = feet * 0.3048;
    console.log(result)
    return result;
}
feetToMeter(30)

//Task 4
console.log(`\nTask 4\n`);
function ageCal(input) {
    let today = new Date();
    let age = today.getFullYear() - input;
    console.log(age)
}
ageCal(1991)

//Task 5
console.log(`\nTask 5\n`);
function largestVal(inputOne, inputTwo, innputThree) {
    let inputArr = [];
    let largestNum = 0;
    inputArr.push(inputOne, inputTwo, innputThree);
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] > largestNum) {
            largestNum = inputArr[i];
        }
    }
    console.log(largestNum)
}
largestVal(10, 14, 8)

//Task 6
console.log(`\nTask 6\n`);
function numToWord(input) {
    switch (input) {
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two")
            break;
        case 3:
            console.log("Three")
            break;
        case 4:
            console.log("Four")
            break;
        case 5:
            console.log("Five")
            break;
        case 6:
            console.log("Six")
            break;
        case 7:
            console.log("Seven")
            break;
        case 8:
            console.log("Eight")
            break;
        case 9:
            console.log("Nine")
            break;
        case 10:
            console.log("Ten")
            break;
        default:
            console.log("invalid input")
    }
}
numToWord(9)

// Task 7 
console.log(`\nTask 7\n`);
let randArray = [10, 5, 20, 35, 2, 8, 20]
let result = 0;
function sumOfArray(input) {
    for (let item of randArray) {
        result += item;
    }
    console.log(result)
}
sumOfArray(randArray)

// Task 8 
console.log(`\nTask 8\n`);
let newArr = [11, 25, 30, 49, 52]
let reverseArr = [];
function reverse(inputArr) {
    for (let i = inputArr.length; i >= 0; i--) {
        reverseArr.push(inputArr[i]);
    }
    console.log(reverseArr)
}
reverse(newArr)

// Task 9
console.log(`\nTask 9\n`);
let taskArr = [2, 5, -10, 3, -1];
function positiveSum(sumOfPositive) {
    let sum = 0;
    for (let item of sumOfPositive) {
        if (item > 0) {
            sum += item
        }
    }
    console.log(sum)
}
positiveSum(taskArr)

// Task 10
console.log(`\nTask 10\n`);
let taskTenArr = [9, 5, 4, 7, 10];
let avr = 0;
function averageNum(someArr) {
    for (let item of someArr) {
        avr += item;
    }
    avr = avr / someArr.length;
    console.log(avr)
}
averageNum(taskTenArr);

// Task 11
console.log(`\nTask 11\n`);
let eleven = [-111, 12, 10, 5, 65, -22, 11, 9];
let highest = 0;
let lowest = 0;
function findHiLow(arrInput) {
    for (let item of arrInput) {
        if (item > highest) {
            highest = item;
        }
        if (lowest > item) {
            lowest = item;
        }
    }

    console.log(highest);
    console.log(lowest)
}
findHiLow(eleven)

// Task 12                      --> ne mi bese bas jasa zadacava sto se bara dali input od input field ili od prompt ili pak od niza  no jas ja resiv vaka 
console.log(`\nTask 12\n`);

let userInput = [2, 4, 6, 2, 4, 10, 5, 3, 6]
function readNumbers(input) {
    input.sort();
    for (let i = 0; i < input.length - 1; i++) {
        if (input[i + 1] === input[i]) {
            console.log(`Number already exist "${input[i]}"`)
        }
    }
}
readNumbers(userInput);

// Task 13
console.log(`\nTask 13\n`);
let thirteen = [2, 4, 67, 8, 9];
function reverseOrder(input) {
    for (let i = input.length - 1; i >= 0; i--) {
        console.log(input[i])
    }
}
reverseOrder(thirteen);

// Taks 14
console.log(`\nTask 14\n`);
let divArray = [];
function divisible() {
    for (let i = 1; i <= 100; i++) {
        if ((i % 7) === 0 || (i % 3) === 0) {
            divArray.push(i);
        }
    }
    console.log(divArray)
}
divisible();

// Task 15
console.log(`\nTask 15\n`);
let lenghtArr = ["100", "slave", "Bogoevski", ""];
let longest = 0;
function findLength(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i].length > longest) {
            longest = input[i].length;
        }
    }
    console.log(longest)
}
findLength(lenghtArr)


// Task 16
console.log(`\nTask 16\n`);
let concatArr = ["Viktor", "Orce", "Kristina", "Dejan"];
let oneStr = "";
function concate(input) {
    for (let i = 0; i < input.length; i++) {
        oneStr = oneStr + input[i];
    }
    console.log(oneStr)
}
concate(concatArr);

// Task 17
console.log(`\nTask 17\n`);
let taskH1 = document.getElementById("headingOne")
console.log(taskH1)

// Task 18
console.log(`\nTask 18\n`);
let paraClass = document.getElementsByClassName("para")
console.log(paraClass)

// Task 19
console.log(`\nTask 19\n`);
let heading3 = document.getElementsByTagName("h3")[0]
console.log(heading3)

// Task 20
console.log(`\nTask 20\n`);
let div = document.getElementsByTagName("div");
let secondPara = div[0].lastElementChild
console.log(secondPara);

// Task 21
console.log(`\nTask 21\n`);
let task21Heading = document.getElementById("task21");
task21Heading.innerText = `Changed text from JS Task 21`;

// Task 22
console.log(`\nTask 22\n`);
let uList = document.getElementById("list");
list.innerHTML = `
<li>Element one - Task 22</li>
<li>Second element - Task 22</li>
<li>Third item - Task 22</li>
<li>Forth add by JS - Task 22</li>
<li>Fifth element - Task 22</li>`

// Task 23 
console.log(`\nTask 23\n`);
let heading23 = document.getElementById("task23Heading");
let input23 = document.getElementById("taskInput");
let button23 = document.getElementById("btn");

button23.addEventListener("click", function () {
    heading23.style.color = "red"
    if (input23.value < 100) {
        heading23.style.display = "none";
        console.log("ERROR")
    }
})

// Task 24
console.log(`\nTask 24\n`);
let size = document.getElementById("size");
let color23 = document.getElementById("color");
let orderBtn = document.getElementById("orderBtn");
let ulOrder = document.getElementById("ulOrder");
let newHeading = document.createElement("H1");
ulOrder.prepend(newHeading);

orderBtn.addEventListener("click", order);

function order() {
    newHeading.innerHTML = `<h1>T-Shirt Orders</h1>`
    ulOrder.innerHTML += `<li>T-Shirt: ${size.value}</li>`
    ulOrder.lastElementChild.style.color = color23.value;
    size.value = ``;
    color.value = ``;
}

// Task 25
console.log(`\nTask 25\n`);
let firstNum = document.getElementById("num1");
let secondNum = document.getElementById("num2");
let operation = document.getElementById("operation");
let calculateBtn = document.getElementById("calculate");
let displayCal = document.getElementById("h1calc");

calculateBtn.addEventListener("click", calculate);

function calculate() {
    displayCal.innerText = ``
    let result = 0;
    let numberOne = parseInt(firstNum.value);
    let numberTwo = parseInt(secondNum.value)
    if (isNaN(numberOne) || isNaN(numberTwo)) {
        displayCal.innerText = `Enter a number value`
    } else {
        switch (operation.value) {
            case "/":
                result = numberOne / numberTwo;
                displayCal.innerText = `result is ${result}`
                break;
            case "*":
                result = numberOne * numberTwo;
                displayCal.innerText = `result is ${result}`
                break;
            case "+":
                result = numberOne + numberTwo;
                displayCal.innerText = `result is ${result}`
                break;
            case "-":
                result = numberOne - numberTwo;
                displayCal.innerText = `result is ${result}`
                break;
            default:
                displayCal.innerText = `Wrong operation`
        }
    }
}

// Task 26
console.log(`\nTask 26\n`);
let textArea = document.getElementById("textarea");
let task26Heading = document.getElementById("task26Heading");

textArea.addEventListener("input", function () {
    let text = textArea.value;
    let wordCount = 0;
    for (var i = 0; i <= text.length; i++) {
        if (text.charAt(i) == ' ') {
            wordCount++;
        }
        task26Heading.innerText = `Word count:  ${wordCount}`
    }
})

// Task 27 
console.log(`\nTask 27\n`);
let displayPhones = document.getElementById("displayPhone");

function Phone(brand, model, display, cpu, gpu, battery, os){
    this.brand = brand;
    this.model = model;
    this.display = display;
    this.cpu = cpu;
    this.gpu = gpu;
    this.battery = battery;
    this.os = os;
}
let samsung = new Phone("Samsung","S20", 6.2, "Octa-core", "Mali-G77", 4000, "Andriod");
let iphone = new Phone("Apple","Iphone 12", 6.1, "Hexa-core", "Apple GPU", 2815, "IOS");
let huawei = new Phone("Huawei","P40-Pro", 6.58, "Octa-core ", "Mali-G76", 4200, "Andriod");
console.log(samsung);
console.log(iphone);
console.log(huawei)

let phoneH1 = document.createElement("H1")
phoneH1.innerHTML = samsung.brand
displayPhones.appendChild(phoneH1)
let listSam = document.createElement("UL");
displayPhones.appendChild(listSam)

for(const item in samsung){
    let listElementSam = document.createElement("LI")
    listElementSam.innerHTML += `${item} : ${samsung[item]}`
    listSam.appendChild(listElementSam)
}

let phoneH1Iphone = document.createElement("H1")
phoneH1Iphone.innerHTML = iphone.brand
displayPhones.appendChild(phoneH1Iphone)
let listIphone = document.createElement("UL");
displayPhones.appendChild(listIphone)

for(const item in iphone){
    let listElementIphone = document.createElement("LI")
    listElementIphone.innerHTML += `${item} : ${iphone[item]}`
    listIphone.appendChild(listElementIphone)
}

let phoneH1Huawei = document.createElement("H1")
phoneH1Huawei.innerHTML = huawei.brand
displayPhones.appendChild(phoneH1Huawei)
let listHuawei = document.createElement("UL");
displayPhones.appendChild(listHuawei)

for(const item in huawei){
    let listElementHuawei = document.createElement("LI")
    listElementHuawei.innerHTML += `${item} : ${huawei[item]}`
    listHuawei.appendChild(listElementHuawei)
}

