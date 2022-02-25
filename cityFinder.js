async function cityFinder() {
    
    const searchBar = document.getElementById("cities");
    let city = searchBar.value;

    let weatherDisplay = document.getElementById("weatherDisplay");
    weatherDisplay.innerHTML = "";
    
    let sideBarDisplay = document.getElementById("sideBar");
    sideBarDisplay.innerHTML = ""; 
    
    let alertHTML = document.getElementById("alertstation");
    alertHTML.innerHTML = ""; 

    let localWstationsHTML = document.getElementById("localWstations");
    localWstationsHTML.innerHTML = "";
    
    //current fetch for city
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
            "x-rapidapi-key": "4f60ab6f42msheb8c9a98b7b392fp12c794jsnf487c1b3923f"
        }
    }) 
    const data = await response.json(); 
    console.log(data);
    
    const response2 = await fetch(`https://bestweather.p.rapidapi.com/weather/${city}?unitGroup=us`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "bestweather.p.rapidapi.com",
		"x-rapidapi-key": "4f60ab6f42msheb8c9a98b7b392fp12c794jsnf487c1b3923f"
	}
})
const data2 = await response2.json(); 
console.log(data2); 


    console.log(data2.stations); 


    let currWeatherBox =  `<div class="card-body" style="width: 15rem" style="height: 10rem";>
    <p>${data.location.name + ", " + data.location.region}</p>
    <p>(${data.location.lat}, ${data.location.lon})<p>
    <p>${data.location.localtime}</p>
    <img src="${data.current.condition.icon}" height="300px" alt="condition">
    <p>${data.current.feelslike_f + "\u00B0 F"}</p>
    <p>${"Wind: " + data.current.wind_mph + "\n " + data.current.wind_dir}</p>
    <p>${"Humidity: " + data.current.humidity + "%"}</p>
    <p>${"Pressure: " + data.current.pressure_in + " in"}</p>
    </div>`; 
    
    weatherDisplay.innerHTML += currWeatherBox;  

    let forecaster = `<h5 id="forecastTitle">Five Day Forecast</h5>
    <div class="container">
    <div class="row">
    <div class="col">
        <p>Current</p>
        <p>${data2.days[0].description}</p>
        <p>${"Low: " + data2.days[0].tempmin + "\u00B0 F"}</p>
        <p>${"High: " + data2.days[0].tempmax + "\u00B0 F"}</p>
        </div>
        <div class="col">
        <p>${data2.days[1].datetime}</p>
        <p>${data2.days[1].description}</p>
        <p>${"Low: " + data2.days[1].tempmin + "\u00B0 F"}</p>
        <p>${"High: " + data2.days[1].tempmax + "\u00B0 F"}</p>
        </div>
        <div class="col">
        <p>${data2.days[2].datetime}</p>
        <p>${data2.days[2].description}</p>
        <p>${"Low: " + data2.days[2].tempmin + "\u00B0 F"}</p>
        <p>${"High: " + data2.days[2].tempmax + "\u00B0 F"}</p>
        </div>
        <div class="col">
        <p>${data2.days[3].datetime}</p>
        <p>${data2.days[3].description}</p>
        <p>${"Low: " + data2.days[3].tempmin + "\u00B0 F"}</p>
        <p>${"High: " + data2.days[3].tempmax + "\u00B0 F"}</p>
        </div>
        <div class="col">
        <p>${data2.days[4].datetime}</p>
        <p>${data2.days[4].description}</p>
        <p>${"Low: " + data2.days[4].tempmin + "\u00B0 F"}</p>
        <p>${"High: " + data2.days[4].tempmax + "\u00B0 F"}</p>
        </div>
        <div class="col">
        <p>${data2.days[5].datetime}</p>
        <p>${data2.days[5].description}</p>
        <p>${"Low: " + data2.days[5].tempmin + "\u00B0 F"}</p>
        <p>${"High: " + data2.days[5].tempmax + "\u00B0 F"}</p>
        </div>                  
        </div>`;
    
      sideBarDisplay.innerHTML += forecaster; 
    

      if(data2.alerts.length > 0) {

        let alertDisplay = `<div class="container" border="2px">
        <div class="row" border="25px">
          <div class="col">
           <p>${data2.alerts[0]}<p>
          </div>`; 

          alertHTML.innerHTML += alertDisplay; 

      } else {
        let alertDisplay = `<div class="container" border="2px">
        <div class="row" border="25px">
          <div class="col">
           <p> No alerts! Have a wonderful Day!<p>
          </div>`; 

          alertHTML.innerHTML += alertDisplay; 
      }

        

      let localSdisplay = `<div class="container" border="2px">
      <div class="row" border="25px">
        <div class="col">
         <p>${data2.stations.json()}<p>
        </div>`

        localWstationsHTML.innerHTML += localSdisplay;


    }
    
    export { cityFinder }
    
