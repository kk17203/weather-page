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
/* harmony export */   getTodayWeather: () => (/* binding */ getTodayWeather),
/* harmony export */   getTomorrowWeather: () => (/* binding */ getTomorrowWeather),
/* harmony export */   getWeather: () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _renderUI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderUI.js */ "./src/renderUI.js");
/* harmony import */ var _renderTomorrowUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTomorrowUI.js */ "./src/renderTomorrowUI.js");



const apiKey = "8251eb5f36e4482b9c1172244230608";
const searchInput = document.querySelector("#search-input");

const accuApiKey = "xwjTVdcVTPCMJtoXgfryfuDbFL0BwAM5";

async function getWeather() {
    let searchValue = searchInput.value;

    const weatherAPI = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchValue}&days=3`,
        { mode: "cors" }
    );
    const weather = await weatherAPI.json();
    console.log(weather);

    (0,_renderUI_js__WEBPACK_IMPORTED_MODULE_0__.displayTodayWeather)(weather);
    searchInput.value = "";
    searchInput.placeholder = "Search for a city";
}

async function getTodayWeather() {
    let location = document.querySelector(".location").textContent;

    const weatherAPI = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`,
        { mode: "cors" }
    );
    const weather = await weatherAPI.json();
    console.log(weather);

    (0,_renderUI_js__WEBPACK_IMPORTED_MODULE_0__.displayTodayWeather)(weather);
}

async function getTomorrowWeather() {
    let location = document.querySelector(".location").textContent;

    const weatherAPI = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`,
        { mode: "cors" }
    );
    const weather = await weatherAPI.json();
    console.log(weather);

    (0,_renderTomorrowUI_js__WEBPACK_IMPORTED_MODULE_1__.displayTomorrowWeather)(weather);
}



// open-meteo weather api


/***/ }),

/***/ "./src/handleCardBackground.js":
/*!*************************************!*\
  !*** ./src/handleCardBackground.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderCardBackground: () => (/* binding */ renderCardBackground)
/* harmony export */ });
const cards = document.querySelector(".cards-container");
const cardDivs = cards.querySelectorAll(".cards-background");

function renderCardBackground(cardDivs) {
    cardDivs.forEach((cardDiv) => {
        cardDiv.style.backgroundSize = "cover";
        cardDiv.style.backgroundPosition = "center";

        if (cardDiv.classList.contains("Sunny")) {
            cardDiv.style.backgroundImage = "url('images/sunny.jpg')";
        } else if (cardDiv.classList.contains("Partly-cloudy")) {
            cardDiv.style.backgroundImage = "url('images/partly-cloudy.jpg')";
        } else if (cardDiv.classList.contains("Overcast")) {
            cardDiv.style.backgroundImage = "url('images/partly-cloudy.jpg')";
        } else if (cardDiv.classList.contains("Clear")) {
            cardDiv.style.backgroundImage = "url('images/clear-sky.jpg')";
        } else if (cardDiv.classList.contains("Heavy-rain")) {
            cardDiv.style.backgroundImage = "url('images/stormy.jpg')";
        } else if (cardDiv.classList.toString().includes("rain")) {
            cardDiv.style.backgroundImage = "url('images/rain.jpg')";
        }
    });
}



// Find img for:
// Mist
// light rain


/***/ }),

/***/ "./src/renderTomorrowUI.js":
/*!*********************************!*\
  !*** ./src/renderTomorrowUI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayTomorrowWeather: () => (/* binding */ displayTomorrowWeather)
/* harmony export */ });
/* harmony import */ var _handleCardBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleCardBackground */ "./src/handleCardBackground.js");


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
    (0,_handleCardBackground__WEBPACK_IMPORTED_MODULE_0__.renderCardBackground)(cardDivs);
}




/***/ }),

/***/ "./src/renderUI.js":
/*!*************************!*\
  !*** ./src/renderUI.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayTodayWeather: () => (/* binding */ displayTodayWeather)
/* harmony export */ });
/* harmony import */ var _handleCardBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleCardBackground */ "./src/handleCardBackground.js");


function displayTodayWeather(weather) {
    const locationHeader = document.querySelector(".location");
    const cards = document.querySelector(".cards-container");

    cards.innerHTML = "";

    locationHeader.textContent = `${weather.location.name}, ${weather.location.region}`;

    // Handle today card

    const conditionText = weather.current.condition.text.replace(/\s/g, "-");

    const todayCardsBackground = document.createElement("div");
    todayCardsBackground.classList.add("cards-background", conditionText);
    cards.appendChild(todayCardsBackground);

    const todayCard = document.createElement("div");
    todayCard.classList.add("todayCard", "card");
    todayCardsBackground.appendChild(todayCard);

    const todayHeader = document.createElement("span");
    todayHeader.classList.add("card-header", "info");
    todayHeader.textContent = "Today";
    todayCard.appendChild(todayHeader);

    const currentFeelsLike = document.createElement("div");
    currentFeelsLike.classList.add("currentFeelsLike", "info");
    currentFeelsLike.textContent = `Feels Like: ${weather.current.feelslike_f} °F`;
    todayCard.appendChild(currentFeelsLike);

    const currentTemp = document.createElement("div");
    currentTemp.classList.add("currentTemp", "info");
    currentTemp.textContent = `Actual: ${weather.current.temp_f} °F`;
    todayCard.appendChild(currentTemp);

    const condition = document.createElement("div");
    condition.classList.add("condition", "info");
    condition.textContent = `${weather.current.condition.text}`;
    todayCard.appendChild(condition);

    const currentWind = document.createElement("div");
    currentWind.classList.add("current-wind", "info");
    currentWind.textContent = `Wind: ${weather.current.wind_dir} ${weather.current.wind_mph} mph`;
    todayCard.appendChild(currentWind);

    const maxTemp = document.createElement("div");
    maxTemp.classList.add("max-temp", "info");
    maxTemp.textContent = `Max: ${weather.forecast.forecastday[0].day.maxtemp_f} °F`;
    todayCard.appendChild(maxTemp);

    const minTemp = document.createElement("div");
    minTemp.classList.add("min-temp", "info");
    minTemp.textContent = `Min: ${weather.forecast.forecastday[0].day.mintemp_f} °F`;
    todayCard.appendChild(minTemp);

    // Handle tomorrow card

    // const tomorrowConditionText =
    //     weather.forecast.forecastday[1].day.condition.text.replace(/\s/g, "-");

    // const tomorrowCardsBackground = document.createElement("div");
    // tomorrowCardsBackground.classList.add(
    //     "cards-background",
    //     tomorrowConditionText
    // );
    // cards.appendChild(tomorrowCardsBackground);

    // const tomorrowCard = document.createElement("div");
    // tomorrowCard.classList.add("tomorrowCard", "card");
    // tomorrowCardsBackground.appendChild(tomorrowCard);

    // const tomorrowHeader = document.createElement("span");
    // tomorrowHeader.classList.add("card-header", "info");
    // tomorrowHeader.textContent = "Tomorrow";
    // tomorrowCard.appendChild(tomorrowHeader);

    // const tomorrowMaxTemp = document.createElement("div");
    // tomorrowMaxTemp.classList.add("tomorrowMaxTemp", "info");
    // tomorrowMaxTemp.textContent = `Max: ${weather.forecast.forecastday[1].day.maxtemp_f} °F`;
    // tomorrowCard.appendChild(tomorrowMaxTemp);

    // const tomorrowMinTemp = document.createElement("div");
    // tomorrowMinTemp.classList.add("tomorrowMinTemp", "info");
    // tomorrowMinTemp.textContent = `Min: ${weather.forecast.forecastday[1].day.mintemp_f} °F`;
    // tomorrowCard.appendChild(tomorrowMinTemp);

    // const tomorrowCondition = document.createElement("div");
    // tomorrowCondition.classList.add("tomorrowCondition", "info");
    // tomorrowCondition.textContent = `${weather.forecast.forecastday[1].day.condition.text}`;
    // tomorrowCard.appendChild(tomorrowCondition);

    // const tomorrowChangeOfRain = document.createElement("div");
    // tomorrowChangeOfRain.classList.add("tomorrowChangeOfRain", "info");
    // tomorrowChangeOfRain.textContent = `Rain Chance: ${weather.forecast.forecastday[1].day.daily_chance_of_rain}%`;
    // tomorrowCard.appendChild(tomorrowChangeOfRain);

    // const tomorrowSunrise = document.createElement("div");
    // tomorrowSunrise.classList.add("tomorrowSunrise", "info");
    // tomorrowSunrise.textContent = `Sunrise: ${weather.forecast.forecastday[1].astro.sunrise}`;
    // tomorrowCard.appendChild(tomorrowSunrise);

    // const tomorrowSunset = document.createElement("div");
    // tomorrowSunset.classList.add("tomorrowSunset", "info");
    // tomorrowSunset.textContent = `Sunset: ${weather.forecast.forecastday[0].astro.sunset}`;
    // tomorrowCard.appendChild(tomorrowSunset);

    const cardDivs = cards.querySelectorAll(".cards-background");
    (0,_handleCardBackground__WEBPACK_IMPORTED_MODULE_0__.renderCardBackground)(cardDivs);
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

const todayBtn = document.querySelector(".today-btn");
todayBtn.addEventListener("click", _getWeather__WEBPACK_IMPORTED_MODULE_0__.getTodayWeather);

const tomorrowBtn = document.querySelector(".tomorrow-btn");
tomorrowBtn.addEventListener("click", _getWeather__WEBPACK_IMPORTED_MODULE_0__.getTomorrowWeather);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04rRTs7QUFFL0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELHVEQUFVOztBQUVWLHVDQUF1QyxtREFBVTs7QUFFakQ7QUFDQSxtQ0FBbUMsd0RBQWU7O0FBRWxEO0FBQ0Esc0NBQXNDLDJEQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItcGFnZS8uL3NyYy9nZXRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL3NyYy9oYW5kbGVDYXJkQmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9zcmMvcmVuZGVyVG9tb3Jyb3dVSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9zcmMvcmVuZGVyVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRpc3BsYXlUb2RheVdlYXRoZXIgfSBmcm9tIFwiLi9yZW5kZXJVSS5qc1wiO1xuaW1wb3J0IHsgZGlzcGxheVRvbW9ycm93V2VhdGhlciB9IGZyb20gXCIuL3JlbmRlclRvbW9ycm93VUkuanNcIjtcblxuY29uc3QgYXBpS2V5ID0gXCI4MjUxZWI1ZjM2ZTQ0ODJiOWMxMTcyMjQ0MjMwNjA4XCI7XG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWlucHV0XCIpO1xuXG5jb25zdCBhY2N1QXBpS2V5ID0gXCJ4d2pUVmRjVlRQQ01KdG9YZ2ZyeWZ1RGJGTDBCd0FNNVwiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xuICAgIGxldCBzZWFyY2hWYWx1ZSA9IHNlYXJjaElucHV0LnZhbHVlO1xuXG4gICAgY29uc3Qgd2VhdGhlckFQSSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHthcGlLZXl9JnE9JHtzZWFyY2hWYWx1ZX0mZGF5cz0zYCxcbiAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgd2VhdGhlckFQSS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlcik7XG5cbiAgICBkaXNwbGF5VG9kYXlXZWF0aGVyKHdlYXRoZXIpO1xuICAgIHNlYXJjaElucHV0LnZhbHVlID0gXCJcIjtcbiAgICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIGZvciBhIGNpdHlcIjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VG9kYXlXZWF0aGVyKCkge1xuICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIikudGV4dENvbnRlbnQ7XG5cbiAgICBjb25zdCB3ZWF0aGVyQVBJID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2FwaUtleX0mcT0ke2xvY2F0aW9ufSZkYXlzPTNgLFxuICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCB3ZWF0aGVyQVBJLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcblxuICAgIGRpc3BsYXlUb2RheVdlYXRoZXIod2VhdGhlcik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFRvbW9ycm93V2VhdGhlcigpIHtcbiAgICBsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uXCIpLnRleHRDb250ZW50O1xuXG4gICAgY29uc3Qgd2VhdGhlckFQSSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHthcGlLZXl9JnE9JHtsb2NhdGlvbn0mZGF5cz0zYCxcbiAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgd2VhdGhlckFQSS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlcik7XG5cbiAgICBkaXNwbGF5VG9tb3Jyb3dXZWF0aGVyKHdlYXRoZXIpO1xufVxuXG5leHBvcnQgeyBnZXRXZWF0aGVyLCBnZXRUb2RheVdlYXRoZXIsIGdldFRvbW9ycm93V2VhdGhlciB9O1xuXG4vLyBvcGVuLW1ldGVvIHdlYXRoZXIgYXBpXG4iLCJjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHMtY29udGFpbmVyXCIpO1xuY29uc3QgY2FyZERpdnMgPSBjYXJkcy5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRzLWJhY2tncm91bmRcIik7XG5cbmZ1bmN0aW9uIHJlbmRlckNhcmRCYWNrZ3JvdW5kKGNhcmREaXZzKSB7XG4gICAgY2FyZERpdnMuZm9yRWFjaCgoY2FyZERpdikgPT4ge1xuICAgICAgICBjYXJkRGl2LnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xuICAgICAgICBjYXJkRGl2LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG5cbiAgICAgICAgaWYgKGNhcmREaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiU3VubnlcIikpIHtcbiAgICAgICAgICAgIGNhcmREaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2ltYWdlcy9zdW5ueS5qcGcnKVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGNhcmREaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiUGFydGx5LWNsb3VkeVwiKSkge1xuICAgICAgICAgICAgY2FyZERpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnaW1hZ2VzL3BhcnRseS1jbG91ZHkuanBnJylcIjtcbiAgICAgICAgfSBlbHNlIGlmIChjYXJkRGl2LmNsYXNzTGlzdC5jb250YWlucyhcIk92ZXJjYXN0XCIpKSB7XG4gICAgICAgICAgICBjYXJkRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdpbWFnZXMvcGFydGx5LWNsb3VkeS5qcGcnKVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGNhcmREaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiQ2xlYXJcIikpIHtcbiAgICAgICAgICAgIGNhcmREaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2ltYWdlcy9jbGVhci1za3kuanBnJylcIjtcbiAgICAgICAgfSBlbHNlIGlmIChjYXJkRGl2LmNsYXNzTGlzdC5jb250YWlucyhcIkhlYXZ5LXJhaW5cIikpIHtcbiAgICAgICAgICAgIGNhcmREaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2ltYWdlcy9zdG9ybXkuanBnJylcIjtcbiAgICAgICAgfSBlbHNlIGlmIChjYXJkRGl2LmNsYXNzTGlzdC50b1N0cmluZygpLmluY2x1ZGVzKFwicmFpblwiKSkge1xuICAgICAgICAgICAgY2FyZERpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnaW1hZ2VzL3JhaW4uanBnJylcIjtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgeyByZW5kZXJDYXJkQmFja2dyb3VuZCB9O1xuXG4vLyBGaW5kIGltZyBmb3I6XG4vLyBNaXN0XG4vLyBsaWdodCByYWluXG4iLCJpbXBvcnQgeyByZW5kZXJDYXJkQmFja2dyb3VuZCB9IGZyb20gXCIuL2hhbmRsZUNhcmRCYWNrZ3JvdW5kXCI7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb21vcnJvd1dlYXRoZXIod2VhdGhlcikge1xuICAgIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvblwiKTtcbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHMtY29udGFpbmVyXCIpO1xuXG4gICAgY2FyZHMuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5sb2NhdGlvbi5uYW1lfSwgJHt3ZWF0aGVyLmxvY2F0aW9uLnJlZ2lvbn1gO1xuXG4gICAgY29uc3QgdG9tb3Jyb3dDb25kaXRpb25UZXh0ID1cbiAgICAgICAgd2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLnRleHQucmVwbGFjZSgvXFxzL2csIFwiLVwiKTtcblxuICAgIGNvbnN0IHRvbW9ycm93Q2FyZHNCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b21vcnJvd0NhcmRzQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBcImNhcmRzLWJhY2tncm91bmRcIixcbiAgICAgICAgdG9tb3Jyb3dDb25kaXRpb25UZXh0XG4gICAgKTtcbiAgICBjYXJkcy5hcHBlbmRDaGlsZCh0b21vcnJvd0NhcmRzQmFja2dyb3VuZCk7XG5cbiAgICBjb25zdCB0b21vcnJvd0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvbW9ycm93Q2FyZC5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dDYXJkXCIsIFwiY2FyZFwiKTtcbiAgICB0b21vcnJvd0NhcmRzQmFja2dyb3VuZC5hcHBlbmRDaGlsZCh0b21vcnJvd0NhcmQpO1xuXG4gICAgY29uc3QgdG9tb3Jyb3dIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0b21vcnJvd0hlYWRlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC1oZWFkZXJcIiwgXCJpbmZvXCIpO1xuICAgIHRvbW9ycm93SGVhZGVyLnRleHRDb250ZW50ID0gXCJUb21vcnJvd1wiO1xuICAgIHRvbW9ycm93Q2FyZC5hcHBlbmRDaGlsZCh0b21vcnJvd0hlYWRlcik7XG5cbiAgICBjb25zdCB0b21vcnJvd01heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvbW9ycm93TWF4VGVtcC5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dNYXhUZW1wXCIsIFwiaW5mb1wiKTtcbiAgICB0b21vcnJvd01heFRlbXAudGV4dENvbnRlbnQgPSBgTWF4OiAke3dlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfZn0gwrBGYDtcbiAgICB0b21vcnJvd0NhcmQuYXBwZW5kQ2hpbGQodG9tb3Jyb3dNYXhUZW1wKTtcblxuICAgIGNvbnN0IHRvbW9ycm93TWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9tb3Jyb3dNaW5UZW1wLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd01pblRlbXBcIiwgXCJpbmZvXCIpO1xuICAgIHRvbW9ycm93TWluVGVtcC50ZXh0Q29udGVudCA9IGBNaW46ICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9mfSDCsEZgO1xuICAgIHRvbW9ycm93Q2FyZC5hcHBlbmRDaGlsZCh0b21vcnJvd01pblRlbXApO1xuXG4gICAgY29uc3QgdG9tb3Jyb3dDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvbW9ycm93Q29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd0NvbmRpdGlvblwiLCBcImluZm9cIik7XG4gICAgdG9tb3Jyb3dDb25kaXRpb24udGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24udGV4dH1gO1xuICAgIHRvbW9ycm93Q2FyZC5hcHBlbmRDaGlsZCh0b21vcnJvd0NvbmRpdGlvbik7XG5cbiAgICBjb25zdCB0b21vcnJvd0NoYW5nZU9mUmFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9tb3Jyb3dDaGFuZ2VPZlJhaW4uY2xhc3NMaXN0LmFkZChcInRvbW9ycm93Q2hhbmdlT2ZSYWluXCIsIFwiaW5mb1wiKTtcbiAgICB0b21vcnJvd0NoYW5nZU9mUmFpbi50ZXh0Q29udGVudCA9IGBSYWluIENoYW5jZTogJHt3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbn0lYDtcbiAgICB0b21vcnJvd0NhcmQuYXBwZW5kQ2hpbGQodG9tb3Jyb3dDaGFuZ2VPZlJhaW4pO1xuXG4gICAgY29uc3QgdG9tb3Jyb3dTdW5yaXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b21vcnJvd1N1bnJpc2UuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93U3VucmlzZVwiLCBcImluZm9cIik7XG4gICAgdG9tb3Jyb3dTdW5yaXNlLnRleHRDb250ZW50ID0gYFN1bnJpc2U6ICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5hc3Ryby5zdW5yaXNlfWA7XG4gICAgdG9tb3Jyb3dDYXJkLmFwcGVuZENoaWxkKHRvbW9ycm93U3VucmlzZSk7XG5cbiAgICBjb25zdCB0b21vcnJvd1N1bnNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9tb3Jyb3dTdW5zZXQuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93U3Vuc2V0XCIsIFwiaW5mb1wiKTtcbiAgICB0b21vcnJvd1N1bnNldC50ZXh0Q29udGVudCA9IGBTdW5zZXQ6ICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5zZXR9YDtcbiAgICB0b21vcnJvd0NhcmQuYXBwZW5kQ2hpbGQodG9tb3Jyb3dTdW5zZXQpO1xuXG4gICAgY29uc3QgY2FyZERpdnMgPSBjYXJkcy5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRzLWJhY2tncm91bmRcIik7XG4gICAgcmVuZGVyQ2FyZEJhY2tncm91bmQoY2FyZERpdnMpO1xufVxuXG5leHBvcnQgeyBkaXNwbGF5VG9tb3Jyb3dXZWF0aGVyIH07XG4iLCJpbXBvcnQgeyByZW5kZXJDYXJkQmFja2dyb3VuZCB9IGZyb20gXCIuL2hhbmRsZUNhcmRCYWNrZ3JvdW5kXCI7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RheVdlYXRoZXIod2VhdGhlcikge1xuICAgIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvblwiKTtcbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHMtY29udGFpbmVyXCIpO1xuXG4gICAgY2FyZHMuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5sb2NhdGlvbi5uYW1lfSwgJHt3ZWF0aGVyLmxvY2F0aW9uLnJlZ2lvbn1gO1xuXG4gICAgLy8gSGFuZGxlIHRvZGF5IGNhcmRcblxuICAgIGNvbnN0IGNvbmRpdGlvblRleHQgPSB3ZWF0aGVyLmN1cnJlbnQuY29uZGl0aW9uLnRleHQucmVwbGFjZSgvXFxzL2csIFwiLVwiKTtcblxuICAgIGNvbnN0IHRvZGF5Q2FyZHNCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RheUNhcmRzQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwiY2FyZHMtYmFja2dyb3VuZFwiLCBjb25kaXRpb25UZXh0KTtcbiAgICBjYXJkcy5hcHBlbmRDaGlsZCh0b2RheUNhcmRzQmFja2dyb3VuZCk7XG5cbiAgICBjb25zdCB0b2RheUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZGF5Q2FyZC5jbGFzc0xpc3QuYWRkKFwidG9kYXlDYXJkXCIsIFwiY2FyZFwiKTtcbiAgICB0b2RheUNhcmRzQmFja2dyb3VuZC5hcHBlbmRDaGlsZCh0b2RheUNhcmQpO1xuXG4gICAgY29uc3QgdG9kYXlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0b2RheUhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC1oZWFkZXJcIiwgXCJpbmZvXCIpO1xuICAgIHRvZGF5SGVhZGVyLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgIHRvZGF5Q2FyZC5hcHBlbmRDaGlsZCh0b2RheUhlYWRlcik7XG5cbiAgICBjb25zdCBjdXJyZW50RmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdXJyZW50RmVlbHNMaWtlLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50RmVlbHNMaWtlXCIsIFwiaW5mb1wiKTtcbiAgICBjdXJyZW50RmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7d2VhdGhlci5jdXJyZW50LmZlZWxzbGlrZV9mfSDCsEZgO1xuICAgIHRvZGF5Q2FyZC5hcHBlbmRDaGlsZChjdXJyZW50RmVlbHNMaWtlKTtcblxuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdXJyZW50VGVtcC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFRlbXBcIiwgXCJpbmZvXCIpO1xuICAgIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gYEFjdHVhbDogJHt3ZWF0aGVyLmN1cnJlbnQudGVtcF9mfSDCsEZgO1xuICAgIHRvZGF5Q2FyZC5hcHBlbmRDaGlsZChjdXJyZW50VGVtcCk7XG5cbiAgICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29uZGl0aW9uXCIsIFwiaW5mb1wiKTtcbiAgICBjb25kaXRpb24udGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLmN1cnJlbnQuY29uZGl0aW9uLnRleHR9YDtcbiAgICB0b2RheUNhcmQuYXBwZW5kQ2hpbGQoY29uZGl0aW9uKTtcblxuICAgIGNvbnN0IGN1cnJlbnRXaW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdXJyZW50V2luZC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC13aW5kXCIsIFwiaW5mb1wiKTtcbiAgICBjdXJyZW50V2luZC50ZXh0Q29udGVudCA9IGBXaW5kOiAke3dlYXRoZXIuY3VycmVudC53aW5kX2Rpcn0gJHt3ZWF0aGVyLmN1cnJlbnQud2luZF9tcGh9IG1waGA7XG4gICAgdG9kYXlDYXJkLmFwcGVuZENoaWxkKGN1cnJlbnRXaW5kKTtcblxuICAgIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1heFRlbXAuY2xhc3NMaXN0LmFkZChcIm1heC10ZW1wXCIsIFwiaW5mb1wiKTtcbiAgICBtYXhUZW1wLnRleHRDb250ZW50ID0gYE1heDogJHt3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2Z9IMKwRmA7XG4gICAgdG9kYXlDYXJkLmFwcGVuZENoaWxkKG1heFRlbXApO1xuXG4gICAgY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWluVGVtcC5jbGFzc0xpc3QuYWRkKFwibWluLXRlbXBcIiwgXCJpbmZvXCIpO1xuICAgIG1pblRlbXAudGV4dENvbnRlbnQgPSBgTWluOiAke3dlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZn0gwrBGYDtcbiAgICB0b2RheUNhcmQuYXBwZW5kQ2hpbGQobWluVGVtcCk7XG5cbiAgICAvLyBIYW5kbGUgdG9tb3Jyb3cgY2FyZFxuXG4gICAgLy8gY29uc3QgdG9tb3Jyb3dDb25kaXRpb25UZXh0ID1cbiAgICAvLyAgICAgd2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLnRleHQucmVwbGFjZSgvXFxzL2csIFwiLVwiKTtcblxuICAgIC8vIGNvbnN0IHRvbW9ycm93Q2FyZHNCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyB0b21vcnJvd0NhcmRzQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFxuICAgIC8vICAgICBcImNhcmRzLWJhY2tncm91bmRcIixcbiAgICAvLyAgICAgdG9tb3Jyb3dDb25kaXRpb25UZXh0XG4gICAgLy8gKTtcbiAgICAvLyBjYXJkcy5hcHBlbmRDaGlsZCh0b21vcnJvd0NhcmRzQmFja2dyb3VuZCk7XG5cbiAgICAvLyBjb25zdCB0b21vcnJvd0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIHRvbW9ycm93Q2FyZC5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dDYXJkXCIsIFwiY2FyZFwiKTtcbiAgICAvLyB0b21vcnJvd0NhcmRzQmFja2dyb3VuZC5hcHBlbmRDaGlsZCh0b21vcnJvd0NhcmQpO1xuXG4gICAgLy8gY29uc3QgdG9tb3Jyb3dIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAvLyB0b21vcnJvd0hlYWRlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC1oZWFkZXJcIiwgXCJpbmZvXCIpO1xuICAgIC8vIHRvbW9ycm93SGVhZGVyLnRleHRDb250ZW50ID0gXCJUb21vcnJvd1wiO1xuICAgIC8vIHRvbW9ycm93Q2FyZC5hcHBlbmRDaGlsZCh0b21vcnJvd0hlYWRlcik7XG5cbiAgICAvLyBjb25zdCB0b21vcnJvd01heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIHRvbW9ycm93TWF4VGVtcC5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dNYXhUZW1wXCIsIFwiaW5mb1wiKTtcbiAgICAvLyB0b21vcnJvd01heFRlbXAudGV4dENvbnRlbnQgPSBgTWF4OiAke3dlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfZn0gwrBGYDtcbiAgICAvLyB0b21vcnJvd0NhcmQuYXBwZW5kQ2hpbGQodG9tb3Jyb3dNYXhUZW1wKTtcblxuICAgIC8vIGNvbnN0IHRvbW9ycm93TWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gdG9tb3Jyb3dNaW5UZW1wLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd01pblRlbXBcIiwgXCJpbmZvXCIpO1xuICAgIC8vIHRvbW9ycm93TWluVGVtcC50ZXh0Q29udGVudCA9IGBNaW46ICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9mfSDCsEZgO1xuICAgIC8vIHRvbW9ycm93Q2FyZC5hcHBlbmRDaGlsZCh0b21vcnJvd01pblRlbXApO1xuXG4gICAgLy8gY29uc3QgdG9tb3Jyb3dDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIHRvbW9ycm93Q29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd0NvbmRpdGlvblwiLCBcImluZm9cIik7XG4gICAgLy8gdG9tb3Jyb3dDb25kaXRpb24udGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24udGV4dH1gO1xuICAgIC8vIHRvbW9ycm93Q2FyZC5hcHBlbmRDaGlsZCh0b21vcnJvd0NvbmRpdGlvbik7XG5cbiAgICAvLyBjb25zdCB0b21vcnJvd0NoYW5nZU9mUmFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gdG9tb3Jyb3dDaGFuZ2VPZlJhaW4uY2xhc3NMaXN0LmFkZChcInRvbW9ycm93Q2hhbmdlT2ZSYWluXCIsIFwiaW5mb1wiKTtcbiAgICAvLyB0b21vcnJvd0NoYW5nZU9mUmFpbi50ZXh0Q29udGVudCA9IGBSYWluIENoYW5jZTogJHt3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbn0lYDtcbiAgICAvLyB0b21vcnJvd0NhcmQuYXBwZW5kQ2hpbGQodG9tb3Jyb3dDaGFuZ2VPZlJhaW4pO1xuXG4gICAgLy8gY29uc3QgdG9tb3Jyb3dTdW5yaXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyB0b21vcnJvd1N1bnJpc2UuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93U3VucmlzZVwiLCBcImluZm9cIik7XG4gICAgLy8gdG9tb3Jyb3dTdW5yaXNlLnRleHRDb250ZW50ID0gYFN1bnJpc2U6ICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5hc3Ryby5zdW5yaXNlfWA7XG4gICAgLy8gdG9tb3Jyb3dDYXJkLmFwcGVuZENoaWxkKHRvbW9ycm93U3VucmlzZSk7XG5cbiAgICAvLyBjb25zdCB0b21vcnJvd1N1bnNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gdG9tb3Jyb3dTdW5zZXQuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93U3Vuc2V0XCIsIFwiaW5mb1wiKTtcbiAgICAvLyB0b21vcnJvd1N1bnNldC50ZXh0Q29udGVudCA9IGBTdW5zZXQ6ICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5zZXR9YDtcbiAgICAvLyB0b21vcnJvd0NhcmQuYXBwZW5kQ2hpbGQodG9tb3Jyb3dTdW5zZXQpO1xuXG4gICAgY29uc3QgY2FyZERpdnMgPSBjYXJkcy5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRzLWJhY2tncm91bmRcIik7XG4gICAgcmVuZGVyQ2FyZEJhY2tncm91bmQoY2FyZERpdnMpO1xufVxuXG5leHBvcnQgeyBkaXNwbGF5VG9kYXlXZWF0aGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldFdlYXRoZXIsIGdldFRvZGF5V2VhdGhlciwgZ2V0VG9tb3Jyb3dXZWF0aGVyIH0gZnJvbSBcIi4vZ2V0V2VhdGhlclwiO1xuXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaEJ0blwiKTtcbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1mb3JtXCIpO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1pbnB1dFwiKTtcblxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNlYXJjaElucHV0LmJsdXIoKTtcbiAgICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIGZvciBhIGNpdHlcIjtcbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XG59KTtcblxuZ2V0V2VhdGhlcigpO1xuXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFdlYXRoZXIpO1xuXG5jb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXktYnRuXCIpO1xudG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFRvZGF5V2VhdGhlcik7XG5cbmNvbnN0IHRvbW9ycm93QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b21vcnJvdy1idG5cIik7XG50b21vcnJvd0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0VG9tb3Jyb3dXZWF0aGVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==