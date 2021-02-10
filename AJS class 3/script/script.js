let button = document.getElementById("getData");
let displayTable = document.getElementById("table");
let tableHead = document.getElementById("tHead");
let tableBody = document.getElementById("tBody");

const tableHeading = () => {
    displayTable.style.display = "block"
    let tableHeadinng = document.createElement("TR");
    tableHeadinng.innerHTML = ``
    tableHeadinng.innerHTML += `
    <td>Name</td>
    <td>Username</td>
    <td>Email</td>
    <td>City</td>
    <td>Phone</td>
    `
    tableHead.appendChild(tableHeadinng)
}
const printUsers = (users) => {
    for (const item of users) {
        tableBody.innerHTML += `
        <tr>
        <td>${item.name}</td>
        <td>${item.username}</td>
        <td>${item.email}</td>
        <td>${item.address.city}</td>
        <td>${item.phone}</td>
        </tr>
        `
    }
}
const printData = (users) => {
    printUsers(users);
    tableHeading();
}
const getDataFun = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            printData(response)
        })
        .catch(function () {
            displayTable.innerHTML = `<h1 style ="color : white">Error Something went wrong</h1>`
        })
}
button.addEventListener("click", getDataFun);