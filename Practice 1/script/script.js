// DOM elements
let mainDiv =$("#mainDiv")
let firstName = $("#firstName");
let lastName = $("#lastName");
let city = $("#city");
let age = $("#age");
let mail = $("#email");
// Singup button
let btnSingUp = $("#btnSingUp");
// SHow users button
let btnShowUser = $("#btnShowUser");
let displyUsers = $("#displyUsers");
// Search button
let btnSearch = $("#btnSearch");
let inputSearch = $("#search")
// Back button
let backBtn = $("#btnBack")
// Array of all created users
let allUsers = [];


// Sing up click event
btnSingUp.click(function () {
    createUser();
    alert("User added ")
})

// Object constructior for users
function createUser() {
    function User(firstName, lastName, city, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.age = age;
        this.email = email;
    }
    let newUser = new User(firstName.val(), lastName.val(), city.val(), age.val(), mail.val());
    allUsers.push(newUser);
    console.log(allUsers)
    firstName.val(``);
    lastName.val(``);
    city.val(``);
    age.val(``);
    mail.val(``);
}

// Show users click event
btnShowUser.click(function () {
    backBtn.css("display","block")
    showAllUsers(allUsers);
})
function showAllUsers(arrOfObj) {
    mainDiv.css("display","none");
    displyUsers.css("display","block")
    for (item of arrOfObj) {
        $("#tableBody").append(`<tr>
        <td>${item.firstName}</td>
        <td>${item.lastName}</td>
        <td>${item.city}</td>
        <td>${item.age}</td>
        <td>${item.email}</td>
        </tr>`)
    }
}

// Search click event
btnSearch.click(function(){
    search();
})
function search(){
    for(item of allUsers){
        if(inputSearch.val() === item.firstName){
            console.log(item)
        }else{
            console.log("not found")
        }
    }
}
// Back button click event
backBtn.click(function(){
    mainDiv.css("display","block");
    displyUsers.css("display","none");
    backBtn.css("display","none");
})