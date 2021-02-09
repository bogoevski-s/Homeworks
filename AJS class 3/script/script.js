let divOne = document.getElementById("divOne");
let button = document.getElementById("getData");
let displayTable = document.getElementById("table");
let tableHead = document.getElementById("tHead");
let tableBody = document.getElementById("tBody");
let divTwo = document.getElementById("tableDiv");

button.addEventListener("click", getDataFun);

function printData(data) {
    for(const item of data){
        console.log(item)
    }
}

function getDataFun() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            printData(response)
        })
        .catch(function () {
            displayTable.innerHTML = `<h1>Error Something went wrong</h1>`
        })
}

/*
    displayTable.style.display = "block"
    let tableHeadinng = document.createElement("TR");
    tableHeadinng.innerHTML =``
    tableHeadinng.innerHTML += `
    <td>Name</td>
    <td>Username</td>
    <td>Email</td>
    <td>City</td>
    <td>Phone</td>
    `
    tableHead.appendChild(tableHeadinng)
    
    let tableRow1 = document.createElement("TR");
    tableRow1.innerHTML = ``

    let tableRow2 = document.createElement("TR");
    tableRow2.innerHTML =``;

    let tableRow3 = document.createElement("TR");
    tableRow3.innerHTML =``;

    let tableRow4 = document.createElement("TR");
    tableRow4.innerHTML =``;

    for (const item of data) {
        if(item.id === 1){
            tableRow1.innerHTML += `<td>${item.name}</td>`;
            tableRow1.innerHTML += `<td>${item.username}</td>`;
            tableRow1.innerHTML += `<td>${item.email}</td>`;
            tableRow1.innerHTML += `<td>${item.address.city}</td>`;
            tableRow1.innerHTML += `<td>${item.phone}</td>`;
        }
        else if(item.id === 2){
            tableRow2.innerHTML += `<td>${item.name}</td>`;
            tableRow2.innerHTML += `<td>${item.username}</td>`;
            tableRow2.innerHTML += `<td>${item.email}</td>`;
            tableRow2.innerHTML += `<td>${item.address.city}</td>`;
            tableRow2.innerHTML += `<td>${item.phone}</td>`;
        }
        else if(item.id === 3){
            tableRow3.innerHTML += `<td>${item.name}</td>`;
            tableRow3.innerHTML += `<td>${item.username}</td>`;
            tableRow3.innerHTML += `<td>${item.email}</td>`;
            tableRow3.innerHTML += `<td>${item.address.city}</td>`;
            tableRow3.innerHTML += `<td>${item.phone}</td>`;
        }
        else if(item.id === 4){
            tableRow4.innerHTML += `<td>${item.name}</td>`;
            tableRow4.innerHTML += `<td>${item.username}</td>`;
            tableRow4.innerHTML += `<td>${item.email}</td>`;
            tableRow4.innerHTML += `<td>${item.address.city}</td>`;
            tableRow4.innerHTML += `<td>${item.phone}</td>`;
        }
        console.log(item.id)
    }
    tableBody.appendChild(tableRow1)
    tableBody.appendChild(tableRow2)
    tableBody.appendChild(tableRow3)
    tableBody.appendChild(tableRow4)

*/