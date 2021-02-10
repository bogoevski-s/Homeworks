let button = document.getElementById("btn");
let table = document.getElementById("table");
let div = document.getElementById("mainDiv");
let buttonNext = document.getElementById("next");
let buttonPrevious = document.getElementById("previous")

// gettinng first 10 planets and creating table
const getDataFun = () => {
    fetch("https://swapi.dev/api/planets/?page=1")
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            printData(response.results);
        })
        .catch(function () {
            div.innerHTML = `<h1>Error Something went wrong</h1>`;
        })
}
const printData = (data) => {
    buttonNext.style.display = "block"
    for (const item of data) {
        table.innerHTML += `<tr>
        <td>${item.name}</td>
        <td>${item.population}</td>
        <td>${item.climate}</td>
        <td>${item.gravity}</td>
        </tr>
        `
    }
}

// creating next 10 planest next button
let numOfPlanet = 2;
const planets = (data) => {
    if (numOfPlanet >= 6) {
        buttonNext.style.display = "none"
        previous.style.display = "block"
    } else {
        numOfPlanet++;
        table.innerHTML = ``
        for (const item of data) {
            table.innerHTML += `<tr>
            <td>${item.name}</td>
            <td>${item.population}</td>
            <td>${item.climate}</td>
            <td>${item.gravity}</td>
            </tr>
            `
        }
    }
}
const getPlanets = () => {
    fetch(`https://swapi.dev/api/planets/?page=${numOfPlanet}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response.results)
            planets(response.results);
        })
        .catch(function () {
            div.innerHTML = `<h1>Error Something went wrong</h1>`;
        })
}

// creating previous 10 planets previous button
const getPreviousPlanets = () => {
    fetch(`https://swapi.dev/api/planets/?page=${numOfPlanet}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response.results)
            previousPlanets(response.results)
        })
        .catch(function () {
            div.innerHTML = `<h1>Error Something went wrong</h1>`;
        })
}
const previousPlanets = (data) => {
    if (numOfPlanet === 1) {
        buttonNext.style.display = "block"
        previous.style.display = "none"
    } else {
        numOfPlanet--;
        table.innerHTML = ``
        for (const item of data) {
            table.innerHTML += `<tr>
            <td>${item.name}</td>
            <td>${item.population}</td>
            <td>${item.climate}</td>
            <td>${item.gravity}</td>
            </tr>
            `
        }
    }
}
// events
button.addEventListener("click", getDataFun);
buttonNext.addEventListener("click", getPlanets);
buttonPrevious.addEventListener("click", getPreviousPlanets)