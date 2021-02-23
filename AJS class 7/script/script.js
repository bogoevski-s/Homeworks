tableBody = $("#tableBody");

searchName = $("#nameBtn");
inputName = $("#name");

searchEmail = $("#emailBtn");
inputEmail = $("#email");

searchPhone = $("#phoneBtn");
inputPhone = $("#phone");

idDisplay = $("#idResult");

let allUsers;
let usersIds = [];
let idResults = 0;

let getUsers = function (callback) {
    $(document).ready(function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users",
            method: "GET",
            success: function (response) {
                let users = response;
                allUsers = users
                users.forEach(user => {
                    tableBody.append(`
                    <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    </tr>
                `)
                });
                callback(users)
            },
            error: function (response) {
                console.warn("error");
            },
            complete: function (response) {

            }
        })
    })
}

let searchByName = () => {
    tableBody.html(``)
    let searchInput = inputName.val()
    let searchResult = allUsers.filter(user => {
        if (searchInput.toLowerCase() === user.name.toLowerCase()) {
            usersIds.push(user.id);
            let totalSumOfIds = usersIds.reduce((acumulator, currentValu) => {
                idResults = acumulator + currentValu

                return idResults
            })
            tableBody.append(`
            <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            </tr>
        `)
        }
    })
    if (searchInput === "") {
        let displayAll = allUsers.forEach(user => {
            tableBody.append(`
            <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            </tr>
        `)
        })
    }
    idDisplay.text(``)
    idDisplay.text(idResults)
    inputName.val(``)
}

let searchByEmail = () => {
    tableBody.html(``)
    let searchInput = inputEmail.val()
    let searchResult = allUsers.filter(user => {
        if (searchInput.toLowerCase() === user.email.toLowerCase()) {
            usersIds.push(user.id);
            let totalSumOfIds = usersIds.reduce((acumulator, currentValu) => {
                idResults = acumulator + currentValu
                return idResults
            })
            tableBody.append(`
            <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            </tr>
        `)
        }
    })
    if (searchInput === "") {
        let displayAll = allUsers.forEach(user => {
            tableBody.append(`
            <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            </tr>
        `)
        })
    }
    idDisplay.text(``)
    idDisplay.text(idResults)
    inputEmail.val(``)
}

let searchByPhone = () => {
    tableBody.html(``)
    let searchInput = inputPhone.val()
    let searchResult = allUsers.filter(user => {
        if (searchInput.toLowerCase() === user.phone.toLowerCase()) {
            usersIds.push(user.id);
            let totalSumOfIds = usersIds.reduce((acumulator, currentValu) => {
                idResults = acumulator + currentValu
                return idResults
            })
            tableBody.append(`
            <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            </tr>
        `)
        }
    })
    if (searchInput === "") {
        let displayAll = allUsers.forEach(user => {
            tableBody.append(`
            <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            </tr>
        `)
        })
    }
    idDisplay.text(``)
    idDisplay.text(idResults)
    inputPhone.val(``)
}

searchName.on("click", searchByName)
searchEmail.on("click", searchByEmail)
searchPhone.on("click", searchByPhone)





function searchUsers(data) {
    let searchByName = data.filter(user => {
        if (user.name === "Leanne Graham") {
            console.log(user)
        }
    })
}
getUsers(searchUsers)