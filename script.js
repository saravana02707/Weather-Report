const apiKey = "487551ae4a9851cd0c1672293cfead74";
function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const weatherDiv = document.getElementById("weatherInfo");
      weatherDiv.innerHTML = `
        <p><strong>${data.name}</strong></p>
        <p>🌡 Temperature: ${data.main.temp}°C</p>
        <p>🌥 Condition: ${data.weather[0].main}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      document.getElementById("weatherInfo").innerHTML = "❌ " + error.message;
    });
}
