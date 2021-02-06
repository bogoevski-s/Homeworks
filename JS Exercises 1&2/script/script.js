
// Exercise 1
/*
let names = ["bob","bucky","roberts","steve","mark"]
$("#btn").on("click",printNames)

function printNames(){
    for(item of names){
        console.log(item)
        $("ul").append(`<li>${item}</li>`)
    }
    names =[];
}
*/
// Exercise 2

let movies = [
    {
        title: "Fight Club",
        year: 1991,
        genre: "Drama/Thriller",
        duration: "2h:31min"
    },
    {
        title: "Memento",
        year: 2000,
        genre: "Thriller/Mystery",
        duration: "2h"
    },
    {
        title: "Gladiator",
        year: 2000,
        genre: "Action/Adventure",
        duration: "2h:51min"
    },
    {
        title: "Pulp Fiction",
        year: 1994,
        genre: "Crime/Drama",
        duration: "2h:58min"
    },
    {
        title: "Inception",
        year: 2010,
        genre: "Action/Sci-fi",
        duration: "2h:42min"
    },
    {
        title: "Tenet",
        year: 2020,
        genre: "Action/Sci-fi",
        duration: "2h:30min"
    },
    {
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama/Crime",
        duration: "2h:22min"
    }
]

// DOM elements
let inputSearch = $("#search");
let buttonSearch = $("#btn");
let displayHeading = $("#displayH1");
let displayMoive = $("#displayMoive");

// event
buttonSearch.click(function () {
    let inputValue = inputSearch.val();
    searchMovieBase(inputValue)
})

// event function
function searchMovieBase(input) {
    displayHeading.text("");
    displayMoive.empty();
    for (let item of movies) {
        if (input.toLowerCase() === item.title.toLowerCase()) {
            displayHeading.text("The movie can be rented");
            displayHeading.css("color", "green");
            displayMoive.append(`
            <ul>
            <li>Title : ${item.title}</li>
            <li>Year : ${item.year}</li>
            <li>Genre : ${item.genre}</li>
            <li>Duration : ${item.duration}</li>
            </ul>
            `)
            break;
        } else {
            displayHeading.text("The movie can't be rented");
            displayHeading.css("color", "red");
        }
    }
}