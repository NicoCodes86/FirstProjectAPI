
async function cityFinder() {
    
    const searchBar = document.getElementById("cities");
    let city = searchBar.value;
   

    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
            "x-rapidapi-key": "4f60ab6f42msheb8c9a98b7b392fp12c794jsnf487c1b3923f"
        }
    }) 
    const data = await response.json(); 
    console.log(data);

    
    //location
    //time
    console.log(data.location);
    console.log(data.location.name + ", " + data.location.region + ", " + data.location.country);  
    console.log(data.location.localtime);
  
    //condition
    //feels like
    //celcius & farenheight
    //wind & direction 
    console.log(data.current.condition.text);
    console.log(data.current.feelslike_c + " celcius")
    console.log(data.current.feelslike_f + " farenheight");
    console.log(data.current.wind_mph + " " + data.current.wind_dir); 

    //forecast
    console.log(data.forecast.forecastday);
    console.log(data.forecast.forecastday[0]);
    console.log(data.forecast.forecastday[1]);
    console.log(data.forecast.forecastday[2]); 

    
    
    const weatherDisplay = document.getElementById("weatherDisplay");
    console.log(weatherDisplay);

    // let displayInfo = document.getElementById("display"); 
    // displayInfo.innerHTML = userValueInput; 
    // weatherDisplay.appendChild(displayInfo[0]); 

    // const buttonTrigger = document.getElementById("buttonTrig").addEventListener("click", cityFinder());
    // console.log(buttonTrigger);

    
    // Button has event listener for click.
    // When clicked get the values.
    // Add values to Fetch request
    // Send request, verify it worked. Adjust if needed
    // Add fetched data to DOM.
    // buttonTrigger.addEventListener("click", (e) => {
        //     console.log(e); 
        //     weatherDisplay.appendChild(displayInfo); 
        // });
        
    }

// const buttonTrigger = document.getElementById("buttonTrig");
// buttonTrigger.addEventListener("click", cityFinder());

export { cityFinder }
    
    
// fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=Houston&days=3", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
// 		"x-rapidapi-key": "4f60ab6f42msheb8c9a98b7b392fp12c794jsnf487c1b3923f"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });



