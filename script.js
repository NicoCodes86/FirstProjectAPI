import { keys } from './keys.js';


import { cityFinder } from "./cityFinder.js";


const searchBar = document.getElementById("cities");
let city = searchBar.value;

const buttonTrigger = document.getElementById("buttonTrig");
buttonTrigger.addEventListener("click",(e) => {
    console.log("click detected");
    if(e.target.className == "btn btn-outline-secondary") {
        searchBar.innerHTML = " "; 
        cityFinder(); 
    }
});

weatherFinder(); 
function weatherFinder() {
    
    // console.log("this is the script.js file"); 
  
    // const quotes = fetch("https://famous-quotes4.p.rapidapi.com/random?category=all&count=2", {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "famous-quotes4.p.rapidapi.com",
    //         "x-rapidapi-key": "ba90d92fb1mshe4629f31c255d44p1e7646jsn25abca39e05c"
    //     }
    // })
    // .then(response => {
    //     console.log(response);
    // })
    // const data3 = quotes.json();
    // console.log(data3); 

}