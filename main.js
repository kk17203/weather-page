/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeather: () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _renderUI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderUI.js */ "./src/renderUI.js");


const apiKey = "8251eb5f36e4482b9c1172244230608";
const searchInput = document.querySelector("#search-input");

async function getWeather() {
    let searchValue = searchInput.value;

    const weatherAPI = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchValue}`,
        { mode: "cors" }
    );
    const weather = await weatherAPI.json();
    console.log(weather);

    (0,_renderUI_js__WEBPACK_IMPORTED_MODULE_0__.displayWeather)(weather);
    searchInput.value = "";
    searchInput.placeholder = "Search for a city";
}




/***/ }),

/***/ "./src/renderUI.js":
/*!*************************!*\
  !*** ./src/renderUI.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayWeather: () => (/* binding */ displayWeather)
/* harmony export */ });
// import { renderCardBackground } from "./handleCardBackground";

function displayWeather(weather) {
    const locationHeader = document.querySelector(".location");
    const cards = document.querySelector(".cards-container");

    cards.innerHTML = "";

    locationHeader.textContent = `${weather.location.name}, ${weather.location.region}`;

    // Handle today card
    const conditionText = weather.current.condition.text.replace(/\s/g, "-");

    const todayCard = document.createElement("div");
    todayCard.classList.add("todayCard", "card", conditionText);
    cards.appendChild(todayCard);

    const todayHeader = document.createElement("span");
    todayHeader.classList.add("card-header", "info");
    todayHeader.textContent = "Today";
    todayCard.appendChild(todayHeader);

    const img = document.createElement("img");
    img.classList.add("condition-img", "info");
    img.src = weather.current.condition.icon;
    todayCard.appendChild(img);

    const currentTemp = document.createElement("div");
    currentTemp.classList.add("currentTemp", "info");
    currentTemp.textContent = `Current Temp: ${weather.current.temp_f}`;
    todayCard.appendChild(currentTemp);

    const currentFeelsLike = document.createElement("div");
    currentFeelsLike.classList.add("currentFeelsLike", "info");
    currentFeelsLike.textContent = `Current Feels Like: ${weather.current.feelslike_f}`;
    todayCard.appendChild(currentFeelsLike);

    const condition = document.createElement("div");
    condition.classList.add("condition", "info");
    condition.textContent = `${weather.current.condition.text}`;
    todayCard.appendChild(condition);

    const windDirection = document.createElement("div");
    windDirection.classList.add("windDirection", "info");
    windDirection.textContent = `Wind Direction: ${weather.current.wind_dir}`;
    todayCard.appendChild(windDirection);

    const windSpeed = document.createElement("div");
    windSpeed.classList.add("windSpeed", "info");
    windSpeed.textContent = `Wind Speed: ${weather.current.wind_mph} mph`;
    todayCard.appendChild(windSpeed);

    const windGust = document.createElement("div");
    windGust.classList.add("windGust", "info");
    windGust.textContent = `Wind Gust: ${weather.current.gust_mph} mph`;
    todayCard.appendChild(windGust);

    // Handle tomorrow card
    const tomorrowConditionText =
        weather.forecast.forecastday[0].day.condition.text.replace(/\s/g, "-");

    const tomorrowCard = document.createElement("div");
    tomorrowCard.classList.add("tomorrowCard", "card", tomorrowConditionText);
    cards.appendChild(tomorrowCard);

    const tomorrowHeader = document.createElement("span");
    tomorrowHeader.classList.add("card-header", "info");
    tomorrowHeader.textContent = "Tomorrow";
    tomorrowCard.appendChild(tomorrowHeader);

    const tomorrowImg = document.createElement("img");
    tomorrowImg.classList.add("tomorrowConditionImg", "info");
    tomorrowImg.src = weather.forecast.forecastday[0].day.condition.icon;
    tomorrowCard.appendChild(tomorrowImg);

    const tomorrowMaxTemp = document.createElement("div");
    tomorrowMaxTemp.classList.add("tomorrowMaxTemp", "info");
    tomorrowMaxTemp.textContent = `Max Temp: ${weather.forecast.forecastday[0].day.maxtemp_f}`;
    tomorrowCard.appendChild(tomorrowMaxTemp);

    const tomorrowMinTemp = document.createElement("div");
    tomorrowMinTemp.classList.add("tomorrowMinTemp", "info");
    tomorrowMinTemp.textContent = `Min Temp: ${weather.forecast.forecastday[0].day.mintemp_f}`;
    tomorrowCard.appendChild(tomorrowMinTemp);

    const tomorrowCondition = document.createElement("div");
    tomorrowCondition.classList.add("tomorrowCondition", "info");
    tomorrowCondition.textContent = `${weather.forecast.forecastday[0].day.condition.text}`;
    tomorrowCard.appendChild(tomorrowCondition);

    const tomorrowChangeOfRain = document.createElement("div");
    tomorrowChangeOfRain.classList.add("tomorrowChangeOfRain", "info");
    tomorrowChangeOfRain.textContent = `Chance of Rain: ${weather.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    tomorrowCard.appendChild(tomorrowChangeOfRain);

    const tomorrowSunrise = document.createElement("div");
    tomorrowSunrise.classList.add("tomorrowSunrise", "info");
    tomorrowSunrise.textContent = `Sunrise: ${weather.forecast.forecastday[0].astro.sunrise}`;
    tomorrowCard.appendChild(tomorrowSunrise);

    const tomorrowSunset = document.createElement("div");
    tomorrowSunset.classList.add("tomorrowSunset", "info");
    tomorrowSunset.textContent = `Sunset: ${weather.forecast.forecastday[0].astro.sunset}`;
    tomorrowCard.appendChild(tomorrowSunset);

    const cardDivs = cards.querySelectorAll(".card");
    function renderCardBackground(cardDivs) {
        cardDivs.forEach((cardDiv) => {
            cardDiv.style.backgroundSize = "cover";

            if (cardDiv.classList.contains("Sunny")) {
                cardDiv.style.backgroundImage = "url('images/sunny.jpg')";
            } else if (cardDiv.classList.contains("Partly-cloudy")) {
                cardDiv.style.backgroundImage =
                    "url('images/partly-cloudy.jpg')";
            } else if (cardDiv.classList.contains("Overcast")) {
                cardDiv.style.backgroundImage =
                    "url('images/partly-cloudy.jpg')";
            } else if (cardDiv.classList.contains("Clear")) {
                cardDiv.style.backgroundImage = "url('images/clear-sky.jpg')";
            } else if (cardDiv.classList.contains("Heavy-rain")) {
                cardDiv.style.backgroundImage = "url('images/stormy.jpg')";
            } else if (cardDiv.classList.toString().includes("rain")) {
                cardDiv.style.backgroundImage = "url('images/rain.jpg')";
            }
        });
    }
    renderCardBackground(cardDivs);
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather */ "./src/getWeather.js");


const searchButton = document.querySelector(".searchBtn");
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#search-input");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchInput.blur();
    searchInput.placeholder = "Search for a city";
    searchInput.value = "";
});

(0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)();

searchButton.addEventListener("click", _getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxPQUFPLEtBQUssWUFBWTtBQUNuRixVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBLElBQUksNERBQWM7QUFDbEI7QUFDQTtBQUNBOztBQUVzQjs7Ozs7Ozs7Ozs7Ozs7O0FDcEJ0QixZQUFZLHVCQUF1Qjs7QUFFbkM7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9DQUFvQyxzQkFBc0IsSUFBSSx3QkFBd0I7O0FBRXRGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0MsdUJBQXVCO0FBQ3RFOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQsNEJBQTRCO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsK0JBQStCO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQseUJBQXlCO0FBQzVFOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsMEJBQTBCO0FBQ3JFOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsMEJBQTBCO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQyw4Q0FBOEM7QUFDN0Y7O0FBRUE7QUFDQTtBQUNBLCtDQUErQyw4Q0FBOEM7QUFDN0Y7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QyxtREFBbUQ7QUFDMUY7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRCx5REFBeUQ7QUFDbkg7O0FBRUE7QUFDQTtBQUNBLDhDQUE4Qyw4Q0FBOEM7QUFDNUY7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qyw2Q0FBNkM7QUFDekY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRTBCOzs7Ozs7O1VDbEkxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBDOztBQUUxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsdURBQVU7O0FBRVYsdUNBQXVDLG1EQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vc3JjL2dldFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vc3JjL3JlbmRlclVJLmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaXNwbGF5V2VhdGhlciB9IGZyb20gXCIuL3JlbmRlclVJLmpzXCI7XG5cbmNvbnN0IGFwaUtleSA9IFwiODI1MWViNWYzNmU0NDgyYjljMTE3MjI0NDIzMDYwOFwiO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1pbnB1dFwiKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcbiAgICBsZXQgc2VhcmNoVmFsdWUgPSBzZWFyY2hJbnB1dC52YWx1ZTtcblxuICAgIGNvbnN0IHdlYXRoZXJBUEkgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7YXBpS2V5fSZxPSR7c2VhcmNoVmFsdWV9YCxcbiAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgd2VhdGhlckFQSS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlcik7XG5cbiAgICBkaXNwbGF5V2VhdGhlcih3ZWF0aGVyKTtcbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgc2VhcmNoSW5wdXQucGxhY2Vob2xkZXIgPSBcIlNlYXJjaCBmb3IgYSBjaXR5XCI7XG59XG5cbmV4cG9ydCB7IGdldFdlYXRoZXIgfTtcbiIsIi8vIGltcG9ydCB7IHJlbmRlckNhcmRCYWNrZ3JvdW5kIH0gZnJvbSBcIi4vaGFuZGxlQ2FyZEJhY2tncm91bmRcIjtcblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIod2VhdGhlcikge1xuICAgIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvblwiKTtcbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHMtY29udGFpbmVyXCIpO1xuXG4gICAgY2FyZHMuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5sb2NhdGlvbi5uYW1lfSwgJHt3ZWF0aGVyLmxvY2F0aW9uLnJlZ2lvbn1gO1xuXG4gICAgLy8gSGFuZGxlIHRvZGF5IGNhcmRcbiAgICBjb25zdCBjb25kaXRpb25UZXh0ID0gd2VhdGhlci5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LnJlcGxhY2UoL1xccy9nLCBcIi1cIik7XG5cbiAgICBjb25zdCB0b2RheUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZGF5Q2FyZC5jbGFzc0xpc3QuYWRkKFwidG9kYXlDYXJkXCIsIFwiY2FyZFwiLCBjb25kaXRpb25UZXh0KTtcbiAgICBjYXJkcy5hcHBlbmRDaGlsZCh0b2RheUNhcmQpO1xuXG4gICAgY29uc3QgdG9kYXlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0b2RheUhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC1oZWFkZXJcIiwgXCJpbmZvXCIpO1xuICAgIHRvZGF5SGVhZGVyLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgIHRvZGF5Q2FyZC5hcHBlbmRDaGlsZCh0b2RheUhlYWRlcik7XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiY29uZGl0aW9uLWltZ1wiLCBcImluZm9cIik7XG4gICAgaW1nLnNyYyA9IHdlYXRoZXIuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgICB0b2RheUNhcmQuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdXJyZW50VGVtcC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFRlbXBcIiwgXCJpbmZvXCIpO1xuICAgIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gYEN1cnJlbnQgVGVtcDogJHt3ZWF0aGVyLmN1cnJlbnQudGVtcF9mfWA7XG4gICAgdG9kYXlDYXJkLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wKTtcblxuICAgIGNvbnN0IGN1cnJlbnRGZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN1cnJlbnRGZWVsc0xpa2UuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRGZWVsc0xpa2VcIiwgXCJpbmZvXCIpO1xuICAgIGN1cnJlbnRGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgQ3VycmVudCBGZWVscyBMaWtlOiAke3dlYXRoZXIuY3VycmVudC5mZWVsc2xpa2VfZn1gO1xuICAgIHRvZGF5Q2FyZC5hcHBlbmRDaGlsZChjdXJyZW50RmVlbHNMaWtlKTtcblxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb25kaXRpb25cIiwgXCJpbmZvXCIpO1xuICAgIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGAke3dlYXRoZXIuY3VycmVudC5jb25kaXRpb24udGV4dH1gO1xuICAgIHRvZGF5Q2FyZC5hcHBlbmRDaGlsZChjb25kaXRpb24pO1xuXG4gICAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2luZERpcmVjdGlvbi5jbGFzc0xpc3QuYWRkKFwid2luZERpcmVjdGlvblwiLCBcImluZm9cIik7XG4gICAgd2luZERpcmVjdGlvbi50ZXh0Q29udGVudCA9IGBXaW5kIERpcmVjdGlvbjogJHt3ZWF0aGVyLmN1cnJlbnQud2luZF9kaXJ9YDtcbiAgICB0b2RheUNhcmQuYXBwZW5kQ2hpbGQod2luZERpcmVjdGlvbik7XG5cbiAgICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKFwid2luZFNwZWVkXCIsIFwiaW5mb1wiKTtcbiAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHt3ZWF0aGVyLmN1cnJlbnQud2luZF9tcGh9IG1waGA7XG4gICAgdG9kYXlDYXJkLmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XG5cbiAgICBjb25zdCB3aW5kR3VzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2luZEd1c3QuY2xhc3NMaXN0LmFkZChcIndpbmRHdXN0XCIsIFwiaW5mb1wiKTtcbiAgICB3aW5kR3VzdC50ZXh0Q29udGVudCA9IGBXaW5kIEd1c3Q6ICR7d2VhdGhlci5jdXJyZW50Lmd1c3RfbXBofSBtcGhgO1xuICAgIHRvZGF5Q2FyZC5hcHBlbmRDaGlsZCh3aW5kR3VzdCk7XG5cbiAgICAvLyBIYW5kbGUgdG9tb3Jyb3cgY2FyZFxuICAgIGNvbnN0IHRvbW9ycm93Q29uZGl0aW9uVGV4dCA9XG4gICAgICAgIHdlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi50ZXh0LnJlcGxhY2UoL1xccy9nLCBcIi1cIik7XG5cbiAgICBjb25zdCB0b21vcnJvd0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvbW9ycm93Q2FyZC5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dDYXJkXCIsIFwiY2FyZFwiLCB0b21vcnJvd0NvbmRpdGlvblRleHQpO1xuICAgIGNhcmRzLmFwcGVuZENoaWxkKHRvbW9ycm93Q2FyZCk7XG5cbiAgICBjb25zdCB0b21vcnJvd0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRvbW9ycm93SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWhlYWRlclwiLCBcImluZm9cIik7XG4gICAgdG9tb3Jyb3dIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvbW9ycm93XCI7XG4gICAgdG9tb3Jyb3dDYXJkLmFwcGVuZENoaWxkKHRvbW9ycm93SGVhZGVyKTtcblxuICAgIGNvbnN0IHRvbW9ycm93SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB0b21vcnJvd0ltZy5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dDb25kaXRpb25JbWdcIiwgXCJpbmZvXCIpO1xuICAgIHRvbW9ycm93SW1nLnNyYyA9IHdlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgIHRvbW9ycm93Q2FyZC5hcHBlbmRDaGlsZCh0b21vcnJvd0ltZyk7XG5cbiAgICBjb25zdCB0b21vcnJvd01heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvbW9ycm93TWF4VGVtcC5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dNYXhUZW1wXCIsIFwiaW5mb1wiKTtcbiAgICB0b21vcnJvd01heFRlbXAudGV4dENvbnRlbnQgPSBgTWF4IFRlbXA6ICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mfWA7XG4gICAgdG9tb3Jyb3dDYXJkLmFwcGVuZENoaWxkKHRvbW9ycm93TWF4VGVtcCk7XG5cbiAgICBjb25zdCB0b21vcnJvd01pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvbW9ycm93TWluVGVtcC5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dNaW5UZW1wXCIsIFwiaW5mb1wiKTtcbiAgICB0b21vcnJvd01pblRlbXAudGV4dENvbnRlbnQgPSBgTWluIFRlbXA6ICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mfWA7XG4gICAgdG9tb3Jyb3dDYXJkLmFwcGVuZENoaWxkKHRvbW9ycm93TWluVGVtcCk7XG5cbiAgICBjb25zdCB0b21vcnJvd0NvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9tb3Jyb3dDb25kaXRpb24uY2xhc3NMaXN0LmFkZChcInRvbW9ycm93Q29uZGl0aW9uXCIsIFwiaW5mb1wiKTtcbiAgICB0b21vcnJvd0NvbmRpdGlvbi50ZXh0Q29udGVudCA9IGAke3dlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi50ZXh0fWA7XG4gICAgdG9tb3Jyb3dDYXJkLmFwcGVuZENoaWxkKHRvbW9ycm93Q29uZGl0aW9uKTtcblxuICAgIGNvbnN0IHRvbW9ycm93Q2hhbmdlT2ZSYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b21vcnJvd0NoYW5nZU9mUmFpbi5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dDaGFuZ2VPZlJhaW5cIiwgXCJpbmZvXCIpO1xuICAgIHRvbW9ycm93Q2hhbmdlT2ZSYWluLnRleHRDb250ZW50ID0gYENoYW5jZSBvZiBSYWluOiAke3dlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWlufSVgO1xuICAgIHRvbW9ycm93Q2FyZC5hcHBlbmRDaGlsZCh0b21vcnJvd0NoYW5nZU9mUmFpbik7XG5cbiAgICBjb25zdCB0b21vcnJvd1N1bnJpc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvbW9ycm93U3VucmlzZS5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dTdW5yaXNlXCIsIFwiaW5mb1wiKTtcbiAgICB0b21vcnJvd1N1bnJpc2UudGV4dENvbnRlbnQgPSBgU3VucmlzZTogJHt3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnJpc2V9YDtcbiAgICB0b21vcnJvd0NhcmQuYXBwZW5kQ2hpbGQodG9tb3Jyb3dTdW5yaXNlKTtcblxuICAgIGNvbnN0IHRvbW9ycm93U3Vuc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b21vcnJvd1N1bnNldC5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dTdW5zZXRcIiwgXCJpbmZvXCIpO1xuICAgIHRvbW9ycm93U3Vuc2V0LnRleHRDb250ZW50ID0gYFN1bnNldDogJHt3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnNldH1gO1xuICAgIHRvbW9ycm93Q2FyZC5hcHBlbmRDaGlsZCh0b21vcnJvd1N1bnNldCk7XG5cbiAgICBjb25zdCBjYXJkRGl2cyA9IGNhcmRzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKTtcbiAgICBmdW5jdGlvbiByZW5kZXJDYXJkQmFja2dyb3VuZChjYXJkRGl2cykge1xuICAgICAgICBjYXJkRGl2cy5mb3JFYWNoKChjYXJkRGl2KSA9PiB7XG4gICAgICAgICAgICBjYXJkRGl2LnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xuXG4gICAgICAgICAgICBpZiAoY2FyZERpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJTdW5ueVwiKSkge1xuICAgICAgICAgICAgICAgIGNhcmREaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2ltYWdlcy9zdW5ueS5qcGcnKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjYXJkRGl2LmNsYXNzTGlzdC5jb250YWlucyhcIlBhcnRseS1jbG91ZHlcIikpIHtcbiAgICAgICAgICAgICAgICBjYXJkRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICAgICAgICAgIFwidXJsKCdpbWFnZXMvcGFydGx5LWNsb3VkeS5qcGcnKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjYXJkRGl2LmNsYXNzTGlzdC5jb250YWlucyhcIk92ZXJjYXN0XCIpKSB7XG4gICAgICAgICAgICAgICAgY2FyZERpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgICAgICAgICBcInVybCgnaW1hZ2VzL3BhcnRseS1jbG91ZHkuanBnJylcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FyZERpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJDbGVhclwiKSkge1xuICAgICAgICAgICAgICAgIGNhcmREaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2ltYWdlcy9jbGVhci1za3kuanBnJylcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FyZERpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJIZWF2eS1yYWluXCIpKSB7XG4gICAgICAgICAgICAgICAgY2FyZERpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnaW1hZ2VzL3N0b3JteS5qcGcnKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjYXJkRGl2LmNsYXNzTGlzdC50b1N0cmluZygpLmluY2x1ZGVzKFwicmFpblwiKSkge1xuICAgICAgICAgICAgICAgIGNhcmREaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2ltYWdlcy9yYWluLmpwZycpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXJDYXJkQmFja2dyb3VuZChjYXJkRGl2cyk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlXZWF0aGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi9nZXRXZWF0aGVyXCI7XG5cbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoQnRuXCIpO1xuY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWZvcm1cIik7XG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWlucHV0XCIpO1xuXG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2VhcmNoSW5wdXQuYmx1cigpO1xuICAgIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggZm9yIGEgY2l0eVwiO1xuICAgIHNlYXJjaElucHV0LnZhbHVlID0gXCJcIjtcbn0pO1xuXG5nZXRXZWF0aGVyKCk7XG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0V2VhdGhlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=