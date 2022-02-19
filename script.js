import { keys } from './keys.js';
console.log("script.js");

import { cityFinder } from "./cityFinder.js";
// cityFinder();
//place city in call to intialize search
const buttonTrigger = document.getElementById("buttonTrig");
buttonTrigger.addEventListener("click",(e) => {
    console.log("click detected");
    if(e.target.className == "btn btn-outline-secondary") {
        cityFinder(); 
    }
});

function weatherFinder() {
    

    // const searchBar = document.getElementById("cities");
    // let city = searchBar.value; 

    // const buttonTrigger = document.getElementById("buttonTrig").addEventListener("click", cityFinder());
    // console.log(buttonTrigger);






}


// let searchBar = document.getElementById("cities");
// console.log(searchBar); 
// console.log(searchBar); 

// let city = searchBar.value;

//pass city into city finder function()

//1) store user info, after clicking button, start API call; 
//2) create button to submit - event listener triggers function
//3)how we create city(var) that will be used URL call wih API fetch


// buttonTrig.addEventListener("click", (functionCall)); 