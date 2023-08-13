const apiKey = "8251eb5f36e4482b9c1172244230608";
const searchInput = document.querySelector("#search");
const searchButton = document.querySelector(".searchBtn");

async function getWeather() {
    let searchValue = searchInput.value;

    const weatherAPI = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchValue}`,
        { mode: "cors" }
    );
    const weather = await weatherAPI.json();
    console.log(weather);

    displayWeather(weather);
}

getWeather();

function displayWeather(weather) {
    const locationHeader = document.querySelector(".location");
    const todayWeather = document.querySelector(".todayWeather");
    const tomorrowWeather = document.querySelector(".tomorrowWeather");
    todayWeather.innerHTML = "";
    tomorrowWeather.innerHTML = "";

    locationHeader.textContent = `${weather.location.name}, ${weather.location.region}`;

    const todayHeader = document.createElement("h3");
    todayHeader.classList.add("today");
    todayHeader.textContent = "Today";
    todayWeather.appendChild(todayHeader);

    const currentTemp = document.createElement("div");
    currentTemp.classList.add("currentTemp");
    currentTemp.textContent = `Current Temp: ${weather.current.temp_f}`;
    todayWeather.appendChild(currentTemp);

    const currentFeelsLike = document.createElement("div");
    currentFeelsLike.classList.add("currentFeelsLike");
    currentFeelsLike.textContent = `Current Feels Like: ${weather.current.feelslike_f}`;
    todayWeather.appendChild(currentFeelsLike);

    const condition = document.createElement("div");
    condition.classList.add("condition");
    condition.textContent = `Condition: ${weather.current.condition.text}`;
    todayWeather.appendChild(condition);

    const img = document.createElement("img");
    img.classList.add("conditionImg");
    img.src = weather.current.condition.icon;
    todayWeather.appendChild(img);

    const windDirection = document.createElement("div");
    windDirection.classList.add("windDirection");
    windDirection.textContent = `Wind Direction: ${weather.current.wind_dir}`;
    todayWeather.appendChild(windDirection);

    const windSpeed = document.createElement("div");
    windSpeed.classList.add("windSpeed");
    windSpeed.textContent = `Wind Speed: ${weather.current.wind_mph} mph`;
    todayWeather.appendChild(windSpeed);

    const windGust = document.createElement("div");
    windGust.classList.add("windGust");
    windGust.textContent = `Wind Gust: ${weather.current.gust_mph} mph`;
    todayWeather.appendChild(windGust);

    const tomorrowWeatherHeader = document.createElement("h3");
    tomorrowWeatherHeader.classList.add("tomorrow");
    tomorrowWeatherHeader.textContent = "Tomorrow";
    tomorrowWeather.appendChild(tomorrowWeatherHeader);

    const tomorrowMaxTemp = document.createElement("div");
    tomorrowMaxTemp.classList.add("tomorrowMaxTemp");
    tomorrowMaxTemp.textContent = `Max Temp: ${weather.forecast.forecastday[0].day.maxtemp_f}`;
    tomorrowWeather.appendChild(tomorrowMaxTemp);

    const tomorrowMinTemp = document.createElement("div");
    tomorrowMinTemp.classList.add("tomorrowMinTemp");
    tomorrowMinTemp.textContent = `Min Temp: ${weather.forecast.forecastday[0].day.mintemp_f}`;
    tomorrowWeather.appendChild(tomorrowMinTemp);

    const tomorrowCondition = document.createElement("div");
    tomorrowCondition.classList.add("tomorrowCondition");
    tomorrowCondition.textContent = `Condition: ${weather.forecast.forecastday[0].day.condition.text}`;
    tomorrowWeather.appendChild(tomorrowCondition);

    const tomorrowImg = document.createElement("img");
    tomorrowImg.classList.add("tomorrowConditionImg");
    tomorrowImg.src = weather.forecast.forecastday[0].day.condition.icon;
    tomorrowWeather.appendChild(tomorrowImg);

    const tomorrowChangeOfRain = document.createElement("div");
    tomorrowChangeOfRain.classList.add("tomorrowChangeOfRain");
    tomorrowChangeOfRain.textContent = `Chance of Rain: ${weather.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    tomorrowWeather.appendChild(tomorrowChangeOfRain);

    const tomorrowSunrise = document.createElement("div");
    tomorrowSunrise.classList.add("tomorrowSunrise");
    tomorrowSunrise.textContent = `Sunrise: ${weather.forecast.forecastday[0].astro.sunrise}`;
    tomorrowWeather.appendChild(tomorrowSunrise);

    const tomorrowSunset = document.createElement("div");
    tomorrowSunset.classList.add("tomorrowSunset");
    tomorrowSunset.textContent = `Sunset: ${weather.forecast.forecastday[0].astro.sunset}`;
    tomorrowWeather.appendChild(tomorrowSunset);
}

searchButton.addEventListener("click", getWeather);
