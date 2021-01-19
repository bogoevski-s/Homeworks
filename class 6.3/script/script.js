function sumOfArray(input) {
    let sum = 0;
    list.innerHTML += "<ul>"
    let listNum = 0;
    for (let i = 0; i < input.length; i++) {
        listNum = input[i];
        list.innerHTML += `<li>${listNum}</li>`
        sum += input[i];
    }
    list.innerHTML += "</ul>"
    list.innerHTML += `<p>The sum of the array is <strong>${sum}</strong></p>`;
    return sum;
}
let numbers = [55, 101, 30, 1, 7, 79, 82, 40, 9];

let list = document.querySelector("#mainDiv");
list.innerHTML += "";
list.innerHTML += `<p>`;
for (let i = 0; i < numbers.length; i++) {
    if(i === numbers.length-1){
        list.innerHTML += `${numbers[i]} = ${sumOfArray(numbers)}`;
    }else{
        list.innerHTML += `${numbers[i]} +`;
    }
}
list.innerHTML += `</p>`;

sumOfArray(numbers);