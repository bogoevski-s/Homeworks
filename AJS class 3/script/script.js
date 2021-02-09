let divOne = document.getElementById("divOne");
let button = document.getElementById("getData");
let displayTable = document.getElementById("table");

button.addEventListener("click", getDataFun);
function printData(data) {
    for(const item of data) {
        console.log(item.name)
    }
    displayTable.innerHTML = `<h1>${item.name}</h1>`
}

function getDataFun() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            printData(response)
        })
        .catch(function (err) {
            displayTable.innerHTML = `<h1>Error Something went wrong</h1>`
        })
}