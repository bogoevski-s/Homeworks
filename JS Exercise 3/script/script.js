// DOM Selectors
let inputTitle = $("#title");
let inputPriority = $("#priority");
let inputColor = $("#color");
let innputDescription = $("#description");
let addButton = $("#btnAdd");
let showButton = $("#btnShowAll");
let display = $("#display")
let tableBody = $("#tableBody")
let tableFirstEl = $("#tableTitle")
let remindersArr = [];
let listItemColor = "";

// Add event
addButton.click(createReminder)

// Create reminder  
function createReminder() {
    listItemColor = inputColor.val();
    function Reminder(title, priority, color, description) {
        this.title = title;
        this.priority = priority;
        this.color = color;
        this.description = description;
    }
    let newReminder = new Reminder(inputTitle.val(), inputPriority.val(), inputColor.val(), innputDescription.val());
    remindersArr.push(newReminder);

    inputTitle.val(``);
    inputPriority.val(``);
    inputColor.val(``);
    innputDescription.val(``);
    console.log(remindersArr);
}

// Show remiders event
showButton.click(showRemider);

function showRemider() {
    tableBody.html(``)
    display.css("display", "flex")
    for (let item of remindersArr) {
        tableBody.append(`
        <tr>
        <td style="color: ${listItemColor.toLowerCase()};">${item.title}</td>
        <td>${item.priority}</td>
        <td>${item.description}</td>
        </tr>`)
    }
}
