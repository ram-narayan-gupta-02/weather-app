let apiKey = "362c6efaf8af914a7dc855bd3458953b";  // It is a MY-API-KEY for weather url....
 
async function getWeather() {
    let city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod === '404') {
            alert('City not found');
            return;
        }

        let weatherResult = document.getElementById('weather-result');
        weatherResult.innerHTML = `<h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} &#176;C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity*2}%</p>
        <p>Wind Speed: ${data.wind.speed*2} km/h</p>`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
