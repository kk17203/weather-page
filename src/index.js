import { getWeather, getTodayWeather, getTomorrowWeather } from "./getWeather";

const searchButton = document.querySelector(".searchBtn");
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#search-input");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchInput.blur();
    searchInput.placeholder = "Search for a city";
    searchInput.value = "";
});

getWeather();

searchButton.addEventListener("click", getWeather);

const todayBtn = document.querySelector(".today-btn");
todayBtn.addEventListener("click", getTodayWeather);

const tomorrowBtn = document.querySelector(".tomorrow-btn");
tomorrowBtn.addEventListener("click", getTomorrowWeather);
