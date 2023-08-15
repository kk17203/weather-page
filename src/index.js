import { getWeather } from "./getWeather";

const searchButton = document.querySelector(".searchBtn");
const searchBar = document.querySelector(".search-form");

searchBar.addEventListener("submit", (e) => {
    e.preventDefault();
    e.blur();
});

getWeather();

searchButton.addEventListener("click", getWeather);
