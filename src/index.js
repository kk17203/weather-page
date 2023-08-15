import { getWeather } from "./getWeather";

const searchButton = document.querySelector(".searchBtn");
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#search");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchInput.blur();
});

getWeather();

searchButton.addEventListener("click", getWeather);
