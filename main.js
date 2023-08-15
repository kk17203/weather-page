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
const searchInput = document.querySelector("#search");

async function getWeather() {
    let searchValue = searchInput.value;

    const weatherAPI = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchValue}`,
        { mode: "cors" }
    );
    const weather = await weatherAPI.json();
    console.log(weather);

    (0,_renderUI_js__WEBPACK_IMPORTED_MODULE_0__.displayWeather)(weather);
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
const searchBar = document.querySelector(".search-form");

searchBar.addEventListener("submit", (e) => {
    e.preventDefault();
});

(0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)();

searchButton.addEventListener("click", _getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxPQUFPLEtBQUssWUFBWTtBQUNuRixVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBLElBQUksNERBQWM7QUFDbEI7O0FBRXNCOzs7Ozs7Ozs7Ozs7Ozs7QUNsQnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0Msc0JBQXNCLElBQUksd0JBQXdCOztBQUV0RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLHVCQUF1QjtBQUN0RTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBELDRCQUE0QjtBQUN0Rjs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLCtCQUErQjtBQUN6RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1ELHlCQUF5QjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLDBCQUEwQjtBQUNyRTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLDBCQUEwQjtBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLDhDQUE4QztBQUM3Rjs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLDhDQUE4QztBQUM3Rjs7QUFFQTtBQUNBO0FBQ0Esa0RBQWtELG1EQUFtRDtBQUNyRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBELHlEQUF5RDtBQUNuSDs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLDhDQUE4QztBQUM1Rjs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLDZDQUE2QztBQUN6RjtBQUNBOztBQUUwQjs7Ozs7OztVQzFGMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCx1REFBVTs7QUFFVix1Q0FBdUMsbURBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9zcmMvZ2V0V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9zcmMvcmVuZGVyVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRpc3BsYXlXZWF0aGVyIH0gZnJvbSBcIi4vcmVuZGVyVUkuanNcIjtcblxuY29uc3QgYXBpS2V5ID0gXCI4MjUxZWI1ZjM2ZTQ0ODJiOWMxMTcyMjQ0MjMwNjA4XCI7XG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoXCIpO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xuICAgIGxldCBzZWFyY2hWYWx1ZSA9IHNlYXJjaElucHV0LnZhbHVlO1xuXG4gICAgY29uc3Qgd2VhdGhlckFQSSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHthcGlLZXl9JnE9JHtzZWFyY2hWYWx1ZX1gLFxuICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCB3ZWF0aGVyQVBJLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcblxuICAgIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXIpO1xufVxuXG5leHBvcnQgeyBnZXRXZWF0aGVyIH07XG4iLCJmdW5jdGlvbiBkaXNwbGF5V2VhdGhlcih3ZWF0aGVyKSB7XG4gICAgY29uc3QgbG9jYXRpb25IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uXCIpO1xuICAgIGNvbnN0IHRvZGF5V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlXZWF0aGVyXCIpO1xuICAgIGNvbnN0IHRvbW9ycm93V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9tb3Jyb3dXZWF0aGVyXCIpO1xuICAgIHRvZGF5V2VhdGhlci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRvbW9ycm93V2VhdGhlci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgbG9jYXRpb25IZWFkZXIudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLmxvY2F0aW9uLm5hbWV9LCAke3dlYXRoZXIubG9jYXRpb24ucmVnaW9ufWA7XG5cbiAgICBjb25zdCB0b2RheUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0b2RheUhlYWRlci5jbGFzc0xpc3QuYWRkKFwidG9kYXlcIik7XG4gICAgdG9kYXlIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgdG9kYXlXZWF0aGVyLmFwcGVuZENoaWxkKHRvZGF5SGVhZGVyKTtcblxuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdXJyZW50VGVtcC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFRlbXBcIik7XG4gICAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBgQ3VycmVudCBUZW1wOiAke3dlYXRoZXIuY3VycmVudC50ZW1wX2Z9YDtcbiAgICB0b2RheVdlYXRoZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXApO1xuXG4gICAgY29uc3QgY3VycmVudEZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3VycmVudEZlZWxzTGlrZS5jbGFzc0xpc3QuYWRkKFwiY3VycmVudEZlZWxzTGlrZVwiKTtcbiAgICBjdXJyZW50RmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEN1cnJlbnQgRmVlbHMgTGlrZTogJHt3ZWF0aGVyLmN1cnJlbnQuZmVlbHNsaWtlX2Z9YDtcbiAgICB0b2RheVdlYXRoZXIuYXBwZW5kQ2hpbGQoY3VycmVudEZlZWxzTGlrZSk7XG5cbiAgICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29uZGl0aW9uXCIpO1xuICAgIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGBDb25kaXRpb246ICR7d2VhdGhlci5jdXJyZW50LmNvbmRpdGlvbi50ZXh0fWA7XG4gICAgdG9kYXlXZWF0aGVyLmFwcGVuZENoaWxkKGNvbmRpdGlvbik7XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiY29uZGl0aW9uSW1nXCIpO1xuICAgIGltZy5zcmMgPSB3ZWF0aGVyLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gICAgdG9kYXlXZWF0aGVyLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICBjb25zdCB3aW5kRGlyZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3aW5kRGlyZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ3aW5kRGlyZWN0aW9uXCIpO1xuICAgIHdpbmREaXJlY3Rpb24udGV4dENvbnRlbnQgPSBgV2luZCBEaXJlY3Rpb246ICR7d2VhdGhlci5jdXJyZW50LndpbmRfZGlyfWA7XG4gICAgdG9kYXlXZWF0aGVyLmFwcGVuZENoaWxkKHdpbmREaXJlY3Rpb24pO1xuXG4gICAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZChcIndpbmRTcGVlZFwiKTtcbiAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHt3ZWF0aGVyLmN1cnJlbnQud2luZF9tcGh9IG1waGA7XG4gICAgdG9kYXlXZWF0aGVyLmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XG5cbiAgICBjb25zdCB3aW5kR3VzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2luZEd1c3QuY2xhc3NMaXN0LmFkZChcIndpbmRHdXN0XCIpO1xuICAgIHdpbmRHdXN0LnRleHRDb250ZW50ID0gYFdpbmQgR3VzdDogJHt3ZWF0aGVyLmN1cnJlbnQuZ3VzdF9tcGh9IG1waGA7XG4gICAgdG9kYXlXZWF0aGVyLmFwcGVuZENoaWxkKHdpbmRHdXN0KTtcblxuICAgIGNvbnN0IHRvbW9ycm93V2VhdGhlckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0b21vcnJvd1dlYXRoZXJIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93XCIpO1xuICAgIHRvbW9ycm93V2VhdGhlckhlYWRlci50ZXh0Q29udGVudCA9IFwiVG9tb3Jyb3dcIjtcbiAgICB0b21vcnJvd1dlYXRoZXIuYXBwZW5kQ2hpbGQodG9tb3Jyb3dXZWF0aGVySGVhZGVyKTtcblxuICAgIGNvbnN0IHRvbW9ycm93TWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9tb3Jyb3dNYXhUZW1wLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd01heFRlbXBcIik7XG4gICAgdG9tb3Jyb3dNYXhUZW1wLnRleHRDb250ZW50ID0gYE1heCBUZW1wOiAke3dlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZn1gO1xuICAgIHRvbW9ycm93V2VhdGhlci5hcHBlbmRDaGlsZCh0b21vcnJvd01heFRlbXApO1xuXG4gICAgY29uc3QgdG9tb3Jyb3dNaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b21vcnJvd01pblRlbXAuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93TWluVGVtcFwiKTtcbiAgICB0b21vcnJvd01pblRlbXAudGV4dENvbnRlbnQgPSBgTWluIFRlbXA6ICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mfWA7XG4gICAgdG9tb3Jyb3dXZWF0aGVyLmFwcGVuZENoaWxkKHRvbW9ycm93TWluVGVtcCk7XG5cbiAgICBjb25zdCB0b21vcnJvd0NvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9tb3Jyb3dDb25kaXRpb24uY2xhc3NMaXN0LmFkZChcInRvbW9ycm93Q29uZGl0aW9uXCIpO1xuICAgIHRvbW9ycm93Q29uZGl0aW9uLnRleHRDb250ZW50ID0gYENvbmRpdGlvbjogJHt3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24udGV4dH1gO1xuICAgIHRvbW9ycm93V2VhdGhlci5hcHBlbmRDaGlsZCh0b21vcnJvd0NvbmRpdGlvbik7XG5cbiAgICBjb25zdCB0b21vcnJvd0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgdG9tb3Jyb3dJbWcuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93Q29uZGl0aW9uSW1nXCIpO1xuICAgIHRvbW9ycm93SW1nLnNyYyA9IHdlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgIHRvbW9ycm93V2VhdGhlci5hcHBlbmRDaGlsZCh0b21vcnJvd0ltZyk7XG5cbiAgICBjb25zdCB0b21vcnJvd0NoYW5nZU9mUmFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9tb3Jyb3dDaGFuZ2VPZlJhaW4uY2xhc3NMaXN0LmFkZChcInRvbW9ycm93Q2hhbmdlT2ZSYWluXCIpO1xuICAgIHRvbW9ycm93Q2hhbmdlT2ZSYWluLnRleHRDb250ZW50ID0gYENoYW5jZSBvZiBSYWluOiAke3dlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWlufSVgO1xuICAgIHRvbW9ycm93V2VhdGhlci5hcHBlbmRDaGlsZCh0b21vcnJvd0NoYW5nZU9mUmFpbik7XG5cbiAgICBjb25zdCB0b21vcnJvd1N1bnJpc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvbW9ycm93U3VucmlzZS5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dTdW5yaXNlXCIpO1xuICAgIHRvbW9ycm93U3VucmlzZS50ZXh0Q29udGVudCA9IGBTdW5yaXNlOiAke3dlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZX1gO1xuICAgIHRvbW9ycm93V2VhdGhlci5hcHBlbmRDaGlsZCh0b21vcnJvd1N1bnJpc2UpO1xuXG4gICAgY29uc3QgdG9tb3Jyb3dTdW5zZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvbW9ycm93U3Vuc2V0LmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd1N1bnNldFwiKTtcbiAgICB0b21vcnJvd1N1bnNldC50ZXh0Q29udGVudCA9IGBTdW5zZXQ6ICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5zZXR9YDtcbiAgICB0b21vcnJvd1dlYXRoZXIuYXBwZW5kQ2hpbGQodG9tb3Jyb3dTdW5zZXQpO1xufVxuXG5leHBvcnQgeyBkaXNwbGF5V2VhdGhlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vZ2V0V2VhdGhlclwiO1xuXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaEJ0blwiKTtcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWZvcm1cIik7XG5cbnNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbmdldFdlYXRoZXIoKTtcblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRXZWF0aGVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==