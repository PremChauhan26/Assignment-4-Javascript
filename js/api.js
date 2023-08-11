function getWeather() {
    var city = document.getElementById("city").value;
    var apiKey = "8086d6254c8bbc6357fe007b985c4a5b"; 
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var weatherInfo = `Temperature: ${data.main.temp} K, Weather: ${data.weather[0].description}`;
            document.getElementById("weather-info").innerText = weatherInfo;
        })
        .catch(error => console.log(error));
}

