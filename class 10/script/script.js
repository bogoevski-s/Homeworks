// XML http request
let para = $("#cat");
let catBtn = $("#catFact");

catBtn.click(function(){
    let req  = new XMLHttpRequest();
    req.onload = function(){
        let data = JSON.parse(this.responseText);
        let catFact = data[0].text;
        para.text(``);
        para.text(`${catFact}\n`);
    }
    req.onerror = function(){
        console.log("error!");
    }
    req.open("GET", "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2"); 
    req.send();
})


// Fetch API

let currency = $("#curr");
let button = $("#btn");
let list = $("#list");
let div = $("#mainDiv");
let count = 0;
let header = document.createElement('H3');

button.click(function(){
    let currVal = currency.val();
    currVal = currVal.toUpperCase();
    currVal = currVal.trim();

    fetch("https://api.exchangeratesapi.io/latest")
    .then(res =>{
        return res.json() // -> JSON parsing
    })
    .then(data =>{
        let currPrice = data.rates;
        for(let i in currPrice){
            if(count > 1){
                break;
            }
            list.append(`<li>${i} - ${currPrice[i]}</li>`)
        }
        currPrice = data.rates[currVal];
        header.innerHTML = `${currPrice} ${currVal}  = 1 EUR`
        mainDiv.insertBefore(header,mainDiv.children[2])
    })
    .catch(err =>{
        console.log("error", err)
    })
    count++;
})


// async

    let fetchBTCprice = async () =>{
        try{
            let res1 = await fetch("https://api.cryptonator.com/api/ticker/btc-usd")
            let data = await res1.json()
            console.log(`1 BITCOIN = ${data.ticker.price} USD `)
        } catch(e){
            console.log("something went wrong")
        }
        
    }

    fetchBTCprice();
 
