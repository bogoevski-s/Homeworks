userInput = document.getElementById("country");
searchButton = document.getElementById("searchBtn");
display = document.getElementById("displayDiv");

let getData = async function(name){
    let response = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
    let data = await response.json()
    data = data[0];
    displayCountries(data)
}
searchButton.addEventListener("click",async ()=>{
    let country = userInput.value
    await getData(country)
})
let displayCountries = async (country) => {
    display.innerHTML = `<h2>Neighbor countries of ${userInput.value}</h3>`
    for(const borders of country.borders){
        display.innerHTML += `<h3>${borders}</h3>`
    }
}