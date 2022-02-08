

async function cityFinder() {

    const response = await fetch('http://dataservice.accuweather.com/locations/v1/topcities/'); 
    const data = await response.json(); 


    console.log(data); 


}

export { cityFinder }