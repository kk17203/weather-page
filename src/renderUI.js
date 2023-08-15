function displayWeather(weather) {
    const locationHeader = document.querySelector(".location");
    const cards = document.querySelector(".cards-container");

    locationHeader.textContent = `${weather.location.name}, ${weather.location.region}`;

    const todayCard = document.createElement("div");
    todayCard.classList.add("todayCard");
    todayCard.classList.add("card");
    cards.appendChild(todayCard);

    const todayHeader = document.createElement("span");
    todayHeader.classList.add("card-header");
    todayHeader.textContent = "Today";
    todayCard.appendChild(todayHeader);

    const img = document.createElement("img");
    img.classList.add("condition-img");
    img.src = weather.current.condition.icon;
    todayCard.appendChild(img);

    const currentTemp = document.createElement("div");
    currentTemp.classList.add("currentTemp");
    currentTemp.textContent = `Current Temp: ${weather.current.temp_f}`;
    todayCard.appendChild(currentTemp);

    const currentFeelsLike = document.createElement("div");
    currentFeelsLike.classList.add("currentFeelsLike");
    currentFeelsLike.textContent = `Current Feels Like: ${weather.current.feelslike_f}`;
    todayCard.appendChild(currentFeelsLike);

    const condition = document.createElement("div");
    condition.classList.add("condition");
    condition.textContent = `Condition: ${weather.current.condition.text}`;
    todayCard.appendChild(condition);

    const windDirection = document.createElement("div");
    windDirection.classList.add("windDirection");
    windDirection.textContent = `Wind Direction: ${weather.current.wind_dir}`;
    todayCard.appendChild(windDirection);

    const windSpeed = document.createElement("div");
    windSpeed.classList.add("windSpeed");
    windSpeed.textContent = `Wind Speed: ${weather.current.wind_mph} mph`;
    todayCard.appendChild(windSpeed);

    const windGust = document.createElement("div");
    windGust.classList.add("windGust");
    windGust.textContent = `Wind Gust: ${weather.current.gust_mph} mph`;
    todayCard.appendChild(windGust);

    const tomorrowCard = document.createElement("div");
    tomorrowCard.classList.add("tomorrowCard");
    tomorrowCard.classList.add("card");
    cards.appendChild(tomorrowCard);

    const tomorrowHeader = document.createElement("span");
    tomorrowHeader.classList.add("card-header");
    tomorrowHeader.textContent = "Tomorrow";
    tomorrowCard.appendChild(tomorrowHeader);

    const tomorrowImg = document.createElement("img");
    tomorrowImg.classList.add("tomorrowConditionImg");
    tomorrowImg.src = weather.forecast.forecastday[0].day.condition.icon;
    tomorrowCard.appendChild(tomorrowImg);

    const tomorrowMaxTemp = document.createElement("div");
    tomorrowMaxTemp.classList.add("tomorrowMaxTemp");
    tomorrowMaxTemp.textContent = `Max Temp: ${weather.forecast.forecastday[0].day.maxtemp_f}`;
    tomorrowCard.appendChild(tomorrowMaxTemp);

    const tomorrowMinTemp = document.createElement("div");
    tomorrowMinTemp.classList.add("tomorrowMinTemp");
    tomorrowMinTemp.textContent = `Min Temp: ${weather.forecast.forecastday[0].day.mintemp_f}`;
    tomorrowCard.appendChild(tomorrowMinTemp);

    const tomorrowCondition = document.createElement("div");
    tomorrowCondition.classList.add("tomorrowCondition");
    tomorrowCondition.textContent = `Condition: ${weather.forecast.forecastday[0].day.condition.text}`;
    tomorrowCard.appendChild(tomorrowCondition);

    const tomorrowChangeOfRain = document.createElement("div");
    tomorrowChangeOfRain.classList.add("tomorrowChangeOfRain");
    tomorrowChangeOfRain.textContent = `Chance of Rain: ${weather.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    tomorrowCard.appendChild(tomorrowChangeOfRain);

    const tomorrowSunrise = document.createElement("div");
    tomorrowSunrise.classList.add("tomorrowSunrise");
    tomorrowSunrise.textContent = `Sunrise: ${weather.forecast.forecastday[0].astro.sunrise}`;
    tomorrowCard.appendChild(tomorrowSunrise);

    const tomorrowSunset = document.createElement("div");
    tomorrowSunset.classList.add("tomorrowSunset");
    tomorrowSunset.textContent = `Sunset: ${weather.forecast.forecastday[0].astro.sunset}`;
    tomorrowCard.appendChild(tomorrowSunset);
}

export { displayWeather };
