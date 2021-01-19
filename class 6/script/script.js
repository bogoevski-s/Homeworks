// STUDENT EXERCISE - #1


// *Select the first div
let firstDiv = document.getElementById("first");
console.log(firstDiv);

// *Select all paragraphs
let paragraphsAll = document.getElementsByTagName("p");
console.log(paragraphsAll);

// *Select the last div
let lastDiv = document.querySelector("div");
lastDiv = lastDiv.nextElementSibling.nextElementSibling;
console.log(lastDiv)

// *Select the header 3 in the last div ---- Change the text of the header 3 in the last div
let header3 = lastDiv.lastElementChild;
console.log(header3);
header3.innerText = "Also changed text from JS"

// *Select the header 1 in the last div  ---- Change the text of the header 1 in the last div
let header1 = lastDiv.firstElementChild;
console.log(header1);
header1.innerText = "Changed text from JS";

// *Get the text from the first paragraph in the second div
let firstPara = document.querySelector("div").lastElementChild;
firstPara = firstPara.innerText;
console.log(firstPara)

let secondPara = document.getElementsByClassName("second")[0]; 
secondPara.innerHTML += `<p>${firstPara}</p>`;

// let secondPara = document.getElementsByClassName("second")[0];  //--> another way of putting first paragrpaph into second div p 
// console.log(secondPara);

// let firstPara = document.getElementsByClassName("paragraph")[0];
// console.log(firstPara);

// secondPara.innerText = firstPara.innerText;

// *Add the word "text" to the text element in the second div
let text = document.getElementsByClassName("anotherDiv")[0];
let newText = text.lastElementChild;
newText.innerText = "Text !"
console.log(newText);


