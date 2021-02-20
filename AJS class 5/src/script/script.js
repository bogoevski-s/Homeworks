let navigationService = {
    peopleBtn: document.getElementById("peopleBtn"),
    shipBtn: document.getElementById("shipsBtn"),
    nextBtn: document.getElementById("nextBtn"),
    previousBtn: document.getElementById("prevBtn"),
    planetBtn: document.getElementById("planets"),
    currentPage: 1,
    pageType: "",
    clickCount: 0,
    date: new Date().getDate(),
    limitReached: false,

    // day limiter
    dayLimit: function(){
        if(navigationService.clickCount < 10 && navigationService.date === new Date().getDate()){
            navigationService.clickCount ++;
        }else if(navigationService.date !== new Date().getDate()){
            navigationService.clickCount = 0;
            navigationService.date = new Date().getDate();
        }
        else{
            limitReached = true;
            document.activeElement.innerHTML = `
            <div id="errorPage">
            <button id="errBtn"></button>
            </div>`
        }
    },
    registerListeners: function () {
        this.peopleBtn.addEventListener("click", function () {
            if (navigationService.pageType === "people") return;
            uiService.toggleLoader(true);
            starWarsApiService.getPeople(1);
            navigationService.currentPage = 1
            navigationService.pageType = "people"
        }),
        this.shipBtn.addEventListener("click", function () {
                if (navigationService.pageType === "ships") return;
                uiService.toggleLoader(true);
                starWarsApiService.getShips(1);
                navigationService.currentPage = 1
                navigationService.pageType = "ships"
        }),
        this.planetBtn.addEventListener("click", function () {
                if (navigationService.pageType === "planet") return;
                uiService.toggleLoader(true);
                starWarsApiService.getPlanets(1);
                navigationService.currentPage = 1
                navigationService.pageType = "planet"
        }),
        this.nextBtn.addEventListener("click", this.nextPage),
        this.previousBtn.addEventListener("click", this.previousPage)
    },
    nextPage: function () {
        navigationService.currentPage++;
        uiService.toggleLoader(true)
        if (navigationService.pageType === "people") starWarsApiService.getPeople(navigationService.currentPage)
        if (navigationService.pageType === "ships") starWarsApiService.getShips(navigationService.currentPage)
        if (navigationService.pageType === "planet") starWarsApiService.getPlanets(navigationService.currentPage)

    },
    previousPage: function () {
        navigationService.currentPage--;
        uiService.toggleLoader(true)
        if (navigationService.pageType === "people") starWarsApiService.getPeople(navigationService.currentPage)
        if (navigationService.pageType === "ships") starWarsApiService.getShips(navigationService.currentPage)
        if (navigationService.pageType === "planet") starWarsApiService.getPlanets(navigationService.currentPage)

    },
    navButtonsCheck: function (response) {
        if (response.next === null) {
            this.nextBtn.style.display = "none"
        } else {
            this.nextBtn.style.display = "block"
        }

        if (response.previous === null) {
            this.previousBtn.style.display = "none"
        } else {
            this.previousBtn.style.display = "block"
        }
    }
}

let starWarsApiService = {
    url: "https://swapi.dev/api/",
    getPeople: function (page) {
        if(navigationService.limitReached === true) return;
        let peopleUrl = `${this.url}people/?page=${page}`;
        $.ajax({
            url: peopleUrl,
            success: function (response) {
                navigationService.navButtonsCheck(response)
                uiService.loadPeoplePage(response.results)
            },
            error: function (response) {
                console.warn("error has occured")
            },
            complete: function () {
                uiService.toggleLoader(false)
                navigationService.dayLimit()
            }
        })
    },
    getShips: function (page) {
        if(navigationService.limitReached === true) return;
        let shipsUrl = `${this.url}starships/?page=${page}`;
        $.ajax({
            url: shipsUrl,
            success: function (response) {
                navigationService.navButtonsCheck(response)
                uiService.loadShipsPage(response.results)
            },
            error: function (response) {
                console.warn("error has occured")
            },
            complete: function () {
                uiService.toggleLoader(false)
                navigationService.dayLimit()
            }
            
        })
    },
    // planets SWAPI
    getPlanets: function (page) {
        if(navigationService.limitReached === true) return;
        let planetsUrl = `${this.url}planets/?page=${page}`;
        $.ajax({
            url: planetsUrl,
            success: function (response) {
                navigationService.navButtonsCheck(response)
                uiService.loadPlanets(response.results)
            },
            error: function (response) {
                console.warn("error has occured")
            },
            complete: function () {
                uiService.toggleLoader(false)
                navigationService.dayLimit()
            }
            
        })
    }
}
let directionAB = true;
let uiService = {
    resultElement: document.getElementById("result"),
    loader: document.getElementById("loader"),
    loadPeoplePage: function (data) {
        this.resultElement.innerHTML = "";
        this.resultElement.innerHTML += `
            <div class="row yellow padding">
                <div class="col-md-3" id="nameSort">Name</div>
                <div class="col-md-2">Height</div>
                <div class="col-md-2">Mass</div>
                <div class="col-md-2">Gender</div>
                <div class="col-md-2">Birth Year</div>
                <div class="col-md-1">Films</div>
            </div>
        `;
        for (let person of data) {
            this.resultElement.innerHTML += `
            <div class="row white padding">
                <div class="col-md-3">${person.name}</div>
                <div class="col-md-2">${person.height}</div>
                <div class="col-md-2">${person.mass}</div>
                <div class="col-md-2">${person.gender}</div>
                <div class="col-md-2">${person.birth_year}</div>
                <div class="col-md-1">${person.films.length}</div>
            </div>
            `;
        }
        // sort table by name
        document.getElementById("nameSort").addEventListener("click", function () {
            if (directionAB === true) {
                data.sort(function (a, b) {
                    if (a.name < b.name) return -1;
                })
                directionAB = false;
            }
            else if (directionAB === false) {
                data.sort(function (a, b) {
                    directionAB = true;
                    if (a.name > b.name) return -1;
                })
            }
            uiService.loadPeoplePage(data)
        });
    },
    loadPlanets: function (data) {
        this.resultElement.innerHTML = "";
        this.resultElement.innerHTML += `
            <div class="row yellow padding">
                <div class="col-md-3">Name</div>
                <div class="col-md-2">Population</div>
                <div class="col-md-2">Diameter</div>
                <div class="col-md-2">Gravity</div>
                <div class="col-md-2">Climate</div>
                <div class="col-md-1">Rotation period</div>
            </div>
        `;
        for (let planets of data) {
            this.resultElement.innerHTML += `
            <div class="row white padding">
                <div class="col-md-3">${planets.name}</div>
                <div class="col-md-2">${planets.population}</div>
                <div class="col-md-2">${planets.diameter}</div>
                <div class="col-md-2">${planets.gravity}</div>
                <div class="col-md-2">${planets.climate}</div>
                <div class="col-md-1">${planets.rotation_period}</div>
            </div>
            `;
        }
    },
    loadShipsPage: function (data) {
        this.resultElement.innerHTML = "";
        this.resultElement.innerHTML += `
            <div class="row yellow padding">
                <div class="col-md-3">Name</div>
                <div class="col-md-2">Model</div>
                <div class="col-md-2">Manufacturer</div>
                <div class="col-md-2">Cost</div>
                <div class="col-md-2">Capacity</div>
                <div class="col-md-1">Class</div>
            </div>
        `;
        for (let ship of data) {
            this.resultElement.innerHTML += `
            <div class="row white padding">
                <div class="col-md-3">${ship.name}</div>
                <div class="col-md-2">${ship.model}</div>
                <div class="col-md-2">${ship.manufacturer}</div>
                <div class="col-md-2">${ship.cost_in_credits}</div>
                <div class="col-md-2">${ship.passengers}</div>
                <div class="col-md-1">${ship.starship_class}</div>
            </div>
            `;
        }
    },
    toggleLoader: function (toggle) {
        if (toggle) this.loader.style.display = "block";
        else this.loader.style.display = "none";
    }
}

navigationService.registerListeners()