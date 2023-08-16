import { renderCardBackground } from "./handleCardBackground";

function displayTomorrowWeather(weather) {
    const locationHeader = document.querySelector(".location");
    const cards = document.querySelector(".cards-container");

    cards.innerHTML = "";

    locationHeader.textContent = `${weather.location.name}, ${weather.location.region}`;

    const tomorrowConditionText =
        weather.forecast.forecastday[1].day.condition.text.replace(/\s/g, "-");

    const tomorrowCardsBackground = document.createElement("div");
    tomorrowCardsBackground.classList.add(
        "cards-background",
        tomorrowConditionText
    );
    cards.appendChild(tomorrowCardsBackground);

    const tomorrowCard = document.createElement("div");
    tomorrowCard.classList.add("tomorrowCard", "card");
    tomorrowCardsBackground.appendChild(tomorrowCard);

    const tomorrowHeader = document.createElement("span");
    tomorrowHeader.classList.add("card-header", "info");
    tomorrowHeader.textContent = "Tomorrow";
    tomorrowCard.appendChild(tomorrowHeader);

    const tomorrowMaxTemp = document.createElement("div");
    tomorrowMaxTemp.classList.add("tomorrowMaxTemp", "info");
    tomorrowMaxTemp.textContent = `Max: ${weather.forecast.forecastday[1].day.maxtemp_f} °F`;
    tomorrowCard.appendChild(tomorrowMaxTemp);

    const tomorrowMinTemp = document.createElement("div");
    tomorrowMinTemp.classList.add("tomorrowMinTemp", "info");
    tomorrowMinTemp.textContent = `Min: ${weather.forecast.forecastday[1].day.mintemp_f} °F`;
    tomorrowCard.appendChild(tomorrowMinTemp);

    const tomorrowCondition = document.createElement("div");
    tomorrowCondition.classList.add("tomorrowCondition", "info");
    tomorrowCondition.textContent = `${weather.forecast.forecastday[1].day.condition.text}`;
    tomorrowCard.appendChild(tomorrowCondition);

    const tomorrowChangeOfRain = document.createElement("div");
    tomorrowChangeOfRain.classList.add("tomorrowChangeOfRain", "info");
    tomorrowChangeOfRain.textContent = `Rain Chance: ${weather.forecast.forecastday[1].day.daily_chance_of_rain}%`;
    tomorrowCard.appendChild(tomorrowChangeOfRain);

    const tomorrowSunrise = document.createElement("div");
    tomorrowSunrise.classList.add("tomorrowSunrise", "info");
    tomorrowSunrise.textContent = `Sunrise: ${weather.forecast.forecastday[1].astro.sunrise}`;
    tomorrowCard.appendChild(tomorrowSunrise);

    const tomorrowSunset = document.createElement("div");
    tomorrowSunset.classList.add("tomorrowSunset", "info");
    tomorrowSunset.textContent = `Sunset: ${weather.forecast.forecastday[0].astro.sunset}`;
    tomorrowCard.appendChild(tomorrowSunset);

    const cardDivs = cards.querySelectorAll(".cards-background");
    renderCardBackground(cardDivs);
}

export { displayTomorrowWeather };
