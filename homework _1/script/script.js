// HOMEWORK #1

// 1 Nacin
function tellStory(){
    return(console.log(`This is ${strArr[0]}. ${strArr[0]} is a nice person. Today they are ${strArr[1]}. They are ${strArr[2]} all day. The end.`));
}
let strArr = ["Slave","Happy","Running"];

tellStory(strArr);

// 2 nacin
function tellStorySec(name,mood,activity){
    return(console.log(`This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`));
}
let strArrSec = [];
let name = prompt(`Your name:`);
let mood = prompt(`Your mood:`);
let activity = prompt(`Your activity:`);
strArrSec.push(name,mood);
strArrSec[strArrSec.length] = activity;

tellStorySec(name,mood,activity);


// HOMEWORK #2

// 1 nacin
function sumOfNum(sumArr){
    let i=0;
    let total = 0;
    while(i<sumArr.length){
        total = total + sumArr[i];
        i++;
    }
    console.log(total);
}
sumArr = [5,3,7,true,10,1,"slave"];
sumOfNum(sumArr);

function validateNumber(sumArr){
    for(let i = 0; i <sumArr.length; i++){
        if(typeof(sumArr[i]) !== 'number'){
            console.log(`error`)
            break;
        }
    }
}
validateNumber(sumArr);

// 2 nacin  (neznam kolku e ispravno vaka no raboti :) )

numbersArr = [5,3,7,10,1,"string"];

function sumOfNumArr(numbersArr){
    let totalArr = 0;
    for(let i = 0; i<numbersArr.length; i++){
        if(typeof(numbersArr[i]) === 'number'){
            totalArr += numbersArr[i];
        }else{
            totalArr = "ERROR!";
            break;
        }
    }
    console.log(totalArr);
}
sumOfNumArr(numbersArr);