display = $("#tableDisplay")
table = $("#table");
tableBody = $("#tableBody");
taskName = $("#taskName");

// Buttons
taskOneButton = $("#task1Btn");
taskTwoButton = $("#task2Btn");
taskThreeButton = $("#task3Btn");
taskFourButton = $("#task4Btn");
taskFiveButton = $("#task5Btn");

// TASK 1 - all students with avr grades higher than 3
let firstTaskStudents = function () {
    $(document).ready(function () {
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
            method: "GET",
            success: function (response) {
                let allStudents = jQuery.parseJSON(response)
                avrHigherThan3(allStudents);
            },
            error: function (response) {
                console.warn("error");
            }
        })
    })
}
function avrHigherThan3(students) {
    table.css("display", "table");
    taskName.text(`All students with an average grade higher than 3`);
    tableBody.text(``);
    let studentsHigher3 = students.filter(student => {
        if (student.averageGrade > 3) {
            tableBody.append(`
            <tr>
            <td>${student.id}</td>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.email}</td>
            <td>${student.gender}</td>
            <td>${student.city}</td>
            <td>${student.averageGrade}</td>
            <td>${student.age}</td>
            </tr>
            `)
        }
        return student.averageGrade > 3;
    })
}

// TASK 2 - all female students names with an average grade of 5
let secondTaskStudents = function () {
    $(document).ready(function () {
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
            method: "GET",
            success: function (response) {
                let allStudents = jQuery.parseJSON(response)
                femaleNamesHigher5(allStudents);
                // malesSkopjeOver18(allStudents);
                // avrFemaleGrades24(allStudents);
                // maleNameB(allStudents);
            },
            error: function (response) {
                console.warn("error");
            }
        })
    })
}
function femaleNamesHigher5(students) {
    table.css("display", "table");
    taskName.text(`All female student names with an average grade of 5`);
    tableBody.text(``);
    let females = students.filter(student => {
        if (student.gender === "Female" && student.averageGrade === 5) {
            tableBody.append(`
            <tr>
            <td>${student.id}</td>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.email}</td>
            <td>${student.gender}</td>
            <td>${student.city}</td>
            <td>${student.averageGrade}</td>
            <td>${student.age}</td>
            </tr>
            `)
            // return student.firstName;
        }
    })
}

// TASK 3 - All male student full names who live in Skopje and are over 18 years old
let thirdTaskStudents = function () {
    $(document).ready(function () {
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
            method: "GET",
            success: function (response) {
                let allStudents = jQuery.parseJSON(response)
                malesSkopjeOver18(allStudents);
            },
            error: function (response) {
                console.warn("error");
            }
        })
    })
}
function malesSkopjeOver18(students) {
    table.css("display", "table");
    taskName.text(`All male student full names who live in Skopje and are over 18 years old`);
    tableBody.text(``);
    let malesSkopje = students.filter(student => {
        if (student.gender === "Male" && student.city === "Skopje" && student.age > 18) {
            tableBody.append(`
            <tr>
            <td>${student.id}</td>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.email}</td>
            <td>${student.gender}</td>
            <td>${student.city}</td>
            <td>${student.averageGrade}</td>
            <td>${student.age}</td>
            </tr>
            `)
            return `${student.firstName} ${student.lastName}`;
        }
    })
}

// TASK 4 - The average grades of all female students over the age of 24
let fourthTaskStudents = function () {
    $(document).ready(function () {
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
            method: "GET",
            success: function (response) {
                let allStudents = jQuery.parseJSON(response)
                avrFemaleGrades24(allStudents);
            },
            error: function (response) {
                console.warn("error");
            }
        })
    })
}
function avrFemaleGrades24(students) {
    let allFemalesOver24 = students.filter(student => {
        if (student.gender === "Female" && student.age > 24)
            return student;
    });
    let gradesOfFemales = allFemalesOver24.map(grade => {
        return grade.averageGrade
    });
    let avrGrades = gradesOfFemales.reduce((totalGrades, grade) => {
        return totalGrades + grade;
    })
    table.css("display", "none");
    taskName.text(`The average grades of all female students over the age of 24 is:  ${avrGrades / gradesOfFemales.length}`);
    tableBody.text(``);
}

// TASK 5 - All male students with a name starting with B and average grade over 2
let fifthTaskStudents = function () {
    $(document).ready(function () {
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
            method: "GET",
            success: function (response) {
                let allStudents = jQuery.parseJSON(response)
                maleNameB(allStudents);
            },
            error: function (response) {
                console.warn("error");
            }
        })
    })
}
function maleNameB(students) {
    table.css("display", "table");
    taskName.text(`All male students with a name starting with B and average grade over 2`);
    tableBody.text(``);
    let allMaleNameB = students.filter(student => {
        if (student.firstName[0] === "B" && student.averageGrade > 2) {
            tableBody.append(`
            <tr>
            <td>${student.id}</td>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.email}</td>
            <td>${student.gender}</td>
            <td>${student.city}</td>
            <td>${student.averageGrade}</td>
            <td>${student.age}</td>
            </tr>
            `)
            // return student
        }
    })
}

// Event listeners
taskOneButton.on("click", firstTaskStudents);
taskTwoButton.on("click", secondTaskStudents);
taskThreeButton.on("click", thirdTaskStudents);
taskFourButton.on("click", fourthTaskStudents);
taskFiveButton.on("click", fifthTaskStudents);