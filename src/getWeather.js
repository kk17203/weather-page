import { displayWeather } from "./renderUI.js";

const apiKey = "8251eb5f36e4482b9c1172244230608";
const searchInput = document.querySelector("#search");

async function getWeather() {
    let searchValue = searchInput.value;

    const weatherAPI = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchValue}`,
        { mode: "cors" }
    );
    const weather = await weatherAPI.json();
    console.log(weather);

    displayWeather(weather);
}

export { getWeather };
