//    HOMEWORK  # 1

let input = ["Hello", "there", "students", "of", "SEDC", "!"];
function stringPlus(input) {
    let sumStr = "";
    for (let i = 0; i < input.length; i++) {
        sumStr = sumStr.concat(' ', input[i]);
        // sumStr = sumStr + " " + input[i];  -> drug nacin
    }
    console.log(sumStr.trim())
}
console.log("Task 1");
stringPlus(input);

/*   Easy way :)

let input = ["Hello","there","students","of","SEDC","!"];
let sumStr = input.join(' ');
console.log(sumStr);
*/


//    HOMEWORK  # 2

function loopingRange(numOne,numTwo){
    var output = "";
    for(let i = numOne;i <= numTwo; i++){
        output += i;
        if(i%2 === 0){
            output += '\n';
        }else{
            output += ' ';
        }
    }
    console.log(output);
}
console.log("\nTask 2");
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

let someArray = ["atanas", 1, 31, true, 15, 2, 20, 7, 9];
let min = 0;
let max = 0;
let hasNumber = false;
function minMax(someArray) {
    let result = 0;
    for (let i = 0; i < someArray.length; i++) {
        if (typeof (someArray[i]) === 'number') {
            if(!hasNumber){
                min = someArray[i];
                max = someArray[i];
            }
            hasNumber = true;
            if (max < someArray[i]) {
                max = someArray[i];
            } else if (someArray[i] < min) {
                min = someArray[i];
            }
        }
    }
    console.log(`minimum num is ${min}`);
    console.log(`maximum num is ${max}`);
    result = min + max;
    return (console.log(`The sum of the min and max is ${result}`));
}
console.log("\nTask 3");
minMax(someArray);


// HOMEWORK  # 4

let first = ["Bob", "Steve", "Nick", "Sebastian"];
let last = ["Smith", "Williams", "Brown", "Johnson"];
function fullName(first, last) {
    let result = [];
    for (let i = 0; i < last.length; i++) {
        result.push(`${i + 1}. ${first[i]} ${last[i]}`);
    }
    return result;
}
console.log("\nTask 4");
let fullNames = fullName(first, last);
console.log(fullNames);