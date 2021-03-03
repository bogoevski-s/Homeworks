tableBody = $("#tableBody");
inputName = $("#name");
idDisplay = $("#idResult");

let allUsers;

let getData = async function () {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let users = await response.json()
        allUsers = users
        displayUsers(users)
    }
    catch (error) {
        console.warn(error)
    }
}
getData()

let displayUsers = (data) => {
    data.forEach(user => {
        tableBody.append(`
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
        </tr>
    `)
    })
}
inputName.on("keyup", function (e) {
    tableBody.html(``)
    let name = e.target.value.toLowerCase();
    let filterUsers = allUsers.filter((user) => {
        if ((user.name.toLowerCase().indexOf(name) != -1) || (user.email.toLowerCase().indexOf(name) != -1) || (user.phone.toLowerCase().indexOf(name) != -1)) {
            tableBody.append(`
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
            </tr>
        `)
            return user
        }
        else {
            console.log("not found")
        }
    })
    let totalSumOfId = filterUsers.reduce((totalIds, user) => totalIds += user.id, 0)
    idDisplay.text(`Sum of the ID's is ${totalSumOfId}`)
})
