// Task 0

function creatArray(num) {
    let numbers = [];
    if (isNaN(num)) {
        for (let i = 1; i <= num.length; i++) {   // -> u slucaj da ima string napraviv da go zeme length-ot na stringot i da napravi niza do toj broj
            numbers.push(i);
        }
    } else {
        for (let i = 1; i <= num; i++) {
            numbers.push(i);
        }
    }
    return (console.log(numbers));
}
console.log(`Task 0`);
creatArray(10);
creatArray(5);
creatArray(-1);
creatArray("Bogoevski");


// Task 1

function getFirstValue(input) {
    let firstElement = input.shift();
    return (console.log(firstElement, input));  // -> ova input u console.log go stavam samo radi vizuelno da vidam deka 1viot element e izbrisan od nizata
}
console.log(`\nTask 1`);
getFirstValue([1, 2, 3, 4, 5]);
getFirstValue([50, 23, 43]);
getFirstValue(["Slave", -500, 23, 7]);


// Task 2

function reverse(input) {
    input.reverse();      // -> ovde moze i let reverse = input.reverse() pa da se vrati kako nova niza
    return (console.log(input));
}
console.log(`\nTask 2`);
reverse([1, 2, 3, 4]);
reverse([9, 9, 2, 3, 4]);
reverse([100, "reverse", 3, 4]);
reverse([]);


// Таsк 3

function check(input, search) {
    // let findIndex = 0;                               -> dali vaka treba so for loop ?
    // for(let i = 0; i < input.length; i++){  // 
    //     if(search === input[i]){
    //         findIndex = input.indexOf(search);
    //     }
    // }
    // return(console.log(findIndex));

    return (console.log(input.indexOf(search)));  //      ->  ili vaka samo ?
}
console.log(`\nTask 3`);
check([1, 2, 3, 4], 3);
check([2, 4, 6, 8, 10, 55, 31, 82, 8, 11, 89], 31);
check([1, 3, 5, 7, 9], 11);


// Таsк 4

function searchNum(input, num) {
    let have = false;
    for (let i = 0; i < input.length; i++) {
        if (num === input[i]) {
            have = true;
        }
    }
    return (console.log(have));
    // return(console.log(input.includes(num)));    //  -> easy way :)
}
console.log(`\nTask 4`);
searchNum([1, 2, 3, 4, 5], 3);
searchNum([1, 1, 2, 1, 1], 3);
searchNum([5, 5, 5, 6], 5);
searchNum([], 5);


// Таsк 5

function negative(input) {
    let invert = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            invert.push(-Math.abs(input[i]));
        } else {
            invert.push(Math.abs(input[i]));
        }
    }
    return (console.log(invert));
}
console.log(`\nTask 5`);
negative([1, 2, 3, 4, 5]);
negative([9, 72, -34, 41, -5]);
negative([]);


// Таsк 6

function diffMaxMin(input) {
    let min = input[0];                                 
    let max = input[0];
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        if (max < input[i]) {
            max = input[i];
        } else if (input[i] < min) {
            min = input[i];
        }
    }
    result = max - min;
    return (console.log(result));
    // let max = Math.max.apply(null, input);  // -> easy way
    // let min = Math.min.apply(null, input);
    // let result  = max - min;
    // return (console.log(result));
}
console.log(`\nTask 6`);
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);
diffMaxMin([44, 32, 86, 19]);


// Таsк 7

function MultiplyByLength(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        result.push(input[i] * input.length);
    }
    return (console.log(result));
}
console.log(`\nTask 7`);
MultiplyByLength([2, 3, 1, 0]);
MultiplyByLength([4, 1, 1]);
MultiplyByLength([1, 0, 3, 3, 7, 2, 1]);
MultiplyByLength([0]);


// Таsк 8

//  Ne ja razbiram 8-mata zadaca sto se bara vo nea ????


// Таsк 9

function countdown(num) {
    let countDownArr = [];
    for (let i = num; i >= 0; i--) {
        countDownArr.push(i);
    }
    return (console.log(countDownArr));
}
console.log(`\nTask 9`);
countdown(5);
countdown(1);
countdown(0);


// Таsк 10

function transform(input) {
    let transArr = [];
    for (let i = 0; i < input.length; i++){
        if(input[i]%2 === 1){
            transArr[i] = input[i] + 1;
        }else {
            transArr[i] = input[i] - 1;
        }
    }
    return(console.log(transArr));
}
console.log(`\nTask 10`);
transform([1, 2, 3, 4, 5]);
transform([3, 3, 4, 3]);
transform([2, 2, 0, 8, 10]);
