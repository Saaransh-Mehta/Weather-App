const nameCity = document.querySelector("#cityName");
let temp = document.querySelectorAll(".currentTemp")
let humid = document.querySelectorAll(".humidity")
let minTemp = document.querySelector(".minTemp")
let maxTemp = document.querySelectorAll(".maxTemp")
let feelsLike = document.querySelectorAll('.feelsLike')
let searchCity = document.querySelector("#fetch");
let searchBar = document.querySelector("#searchBar");
let windDeg = document.querySelector(".windDeg")
let cloudPct = document.querySelector(".cloudPct") 
let windSpeed = document.querySelector(".windSpeed")

let fetchData = async()=>{
    let baseurl = `https://api.api-ninjas.com/v1/weather?city=${searchBar.value}`
let options = ({
    method:'GET',
    headers : {'X-Api-Key': 'vzUjvB7HXgzkuBP3w+Q/pA==kpu2G0ei3d2Ez5g9'},
    contentType:'aplication/json'
  })
    nameCity.innerText = `${searchBar.value}`
    let response = await fetch(baseurl, options);
    let data = await response.json();
    console.log(data)
    for(let i in data){
        console.log(data.feels_like)
        // temp.innerText = data.temp + "°C"
        feelsLike[0].innerText = data.feels_like + " °C";
        feelsLike[1].innerText = data.feels_like + " °C";
        maxTemp[0].innerText = data.max_temp + "°C";
        maxTemp[1].innerText = data.max_temp + "°C";
        minTemp.innerText = data.min_temp + " °C";
        humid[0].innerText = data.humidity
        humid[1].innerText = data.humidity + '%'
        windDeg.innerText = data.wind_degrees + " Degrees"
        cloudPct.innerText = data.cloud_pct
        windSpeed.innerText = data.wind_speed + " KM/h"

    }
}
// let city = searchBar.value
searchCity.addEventListener('click', fetchData)




