// Task 1
let a = 7;
let b = 8;
let c = a + b;
console.log(`Task 1 \n${c}\n\n`)

// Task 2
let intiger = 5;
let bool = true;
let str = "someString";
console.log(`Task 2`)
console.log(typeof (intiger))
console.log(typeof (bool))
console.log(typeof (str))
console.log(`\n`)

// Task 3
let x = 10;
let y = 3;
let div = x / y;
let rem = x % y;
console.log(`Task 3`)
console.log(`${div}`);
console.log(`${rem}`);
console.log(`\n`)

// Task 4
let firstName = "Slave";
let lastName = "Bogoevski";
console.log(`Task 4 \n ${firstName} ${lastName}\n\n`);

// Task 5
let numOne = 6;
let numTwo = 2;
if (numOne > numTwo) {
    console.log(`Task 5`)
    console.log(`${numOne}\n\n`);
} else {
    console.log(`${numTwo}\n\n`)
}

// Task 6

let numThree = 120;
if (numThree >= 100) {
    console.log(`Task 6 \n The number is cool \n\n`)
}

// Task 7
let count = 0;
console.log(`Task 7`)
while (count <= 10) {

    console.log(count)
    count++
}

// Task 8
console.log(`Task 8`)
for (let i = 1; i <= 20; i += 2) {
    console.log(i)
}

// Task 9
function printName() {
    console.log(`Task 9 \n Slave\n\n`)
}
printName();

// Task 10
function nameArg(name) {
    console.log(`Task 10 \n Hello ${name}\n\n`)
}
nameArg("slave");

// Task 11 
function returnFunc(x, y) {
    let sum = x + y;
    return sum;
}
returnFunc(2, 4);

// Task 12
function Car(brand, model, engine, price){
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.price = price;
    this.discount = function(){
        let discount = 20;
        let total = (price - ((discount / 100) * price))
        return total
    }
}
let car = new Car ("Peugeot", 508, "Diesel", 15000);
console.log(`Task 13`)
console.log(car)
console.log(`Price after 20% discount : ${car.discount()}`);