
const apiKey = "6a78ae62ec02d1f0b84a65e74bce6ece";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Bangalore&units=metric";

async function checkWeather() {
    const responce = await fetch(apiUrl +`&appid=${apiKey}`);
    var data = await responce.json();
    
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity = "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
} 
checkWeather();