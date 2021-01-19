// HOMEWORK PART 1

let paragraphs = document.getElementsByTagName("p");
for(let editParagraphs of paragraphs){
    editParagraphs.innerText = "Changed Para Text";
    // console.log(editParagraphs)
}
let headers = document.querySelectorAll("h1");
for(let editHeaders of headers){
    editHeaders.innerText = "Changed Header Text";
    // console.log(editHeaders)
}
let header3 = document.querySelectorAll("div h3");
header3[0].innerText = "Changed h3 text"

// let header3 = document.getElementsByTagName("h3");  //--> another way for changing h3 with loop
// for(let headerThree of header3){
//     headerThree.innerText ="Also Changed h3 text";
// }
// header3.innerText = "Also Changed h3 text"

