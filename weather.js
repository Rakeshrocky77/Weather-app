
const apiKey = "6a78ae62ec02d1f0b84a65e74bce6ece";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");

async function checkWeather(city) {
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await responce.json();
    
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity = "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
} 

  searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
