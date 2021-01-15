//    HOMEWORK  # 1

let input = ["Hello", "there", "students", "of", "SEDC", "!"];
let sumStr = "";
function stringPlus(input) {
    for (let i = 0; i < input.length; i++) {
        sumStr = sumStr.concat(' ', input[i]);
        // sumStr = sumStr + " " + input[i];  -> drug nacin
    }
    console.log(sumStr)
}
stringPlus(input);

/*   Easy way :)

let input = ["Hello","there","students","of","SEDC","!"];
let sumStr = input.join(' ');
console.log(sumStr);
*/


//    HOMEWORK  # 2

function loopingRange(numOne,numTwo){
    for(let i = numOne;i <= numTwo; i++){
        if(i%2 === 0){
            console.log(i,'\n');
        }else{
            console.log(i,"  ")
        }
    }
}
loopingRange(1,20);

/*  Loop only

for(let i = 1; i <= 20; i++){
    if(i%2 === 0){
        console.log(i,'\n');
    }else{
        console.log(i,"")
    }
}
*/

// HOMEWORK  # 3

let someArray = ["atanas", 11, 31, true, 15, 2, 20, 7, 9];
let result = 0;
let min = 0;
let max = 0;
function minMax(someArray) {
    for (let i = 0; i < someArray.length; i++) {
        if (typeof (someArray[i]) !== 'number') {
            let index = someArray.indexOf(someArray[i]);
            someArray.splice(index, 1)
            console.log(`This function does not support other types`);
        } else if (max < someArray[i]) {
            max = someArray[i];
            min = max;
        } else if (someArray[i] < min) {
            min = someArray[i];
        }
    }
    console.log(`minimum num is ${min}`);
    console.log(`maximum num is ${max}`);
    result = min + max;
    return (console.log(`The sum of the min and max is ${result}`));
}
minMax(someArray);


// HOMEWORK  # 4

let first = ["Bob", "Steve", "Nick", "Sebastian"];
let last = ["Smith", "Williams", "Brown", "Johnson"];
let firstLastName = [];
function fullName(first, last) {
    for (let i = 0; i < first.length; i++) {
        firstLastName.push(first[i]);
    }
    for (let i = 0; i < last.length; i++) {
        firstLastName[i] = (`${i + 1}.`) + firstLastName[i].concat(' ', last[i]);
    }
    console.log(firstLastName);
}
fullName(first, last);