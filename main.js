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
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#search");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchInput.blur();
});

(0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)();

searchButton.addEventListener("click", _getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxPQUFPLEtBQUssWUFBWTtBQUNuRixVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBLElBQUksNERBQWM7QUFDbEI7O0FBRXNCOzs7Ozs7Ozs7Ozs7Ozs7QUNsQnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0Msc0JBQXNCLElBQUksd0JBQXdCOztBQUV0RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLHVCQUF1QjtBQUN0RTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBELDRCQUE0QjtBQUN0Rjs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLCtCQUErQjtBQUN6RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1ELHlCQUF5QjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLDBCQUEwQjtBQUNyRTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLDBCQUEwQjtBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLDhDQUE4QztBQUM3Rjs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLDhDQUE4QztBQUM3Rjs7QUFFQTtBQUNBO0FBQ0Esa0RBQWtELG1EQUFtRDtBQUNyRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBELHlEQUF5RDtBQUNuSDs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLDhDQUE4QztBQUM1Rjs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLDZDQUE2QztBQUN6RjtBQUNBOztBQUUwQjs7Ozs7OztVQzFGMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsdURBQVU7O0FBRVYsdUNBQXVDLG1EQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vc3JjL2dldFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vc3JjL3JlbmRlclVJLmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaXNwbGF5V2VhdGhlciB9IGZyb20gXCIuL3JlbmRlclVJLmpzXCI7XG5cbmNvbnN0IGFwaUtleSA9IFwiODI1MWViNWYzNmU0NDgyYjljMTE3MjI0NDIzMDYwOFwiO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaFwiKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcbiAgICBsZXQgc2VhcmNoVmFsdWUgPSBzZWFyY2hJbnB1dC52YWx1ZTtcblxuICAgIGNvbnN0IHdlYXRoZXJBUEkgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7YXBpS2V5fSZxPSR7c2VhcmNoVmFsdWV9YCxcbiAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgd2VhdGhlckFQSS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlcik7XG5cbiAgICBkaXNwbGF5V2VhdGhlcih3ZWF0aGVyKTtcbn1cblxuZXhwb3J0IHsgZ2V0V2VhdGhlciB9O1xuIiwiZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIod2VhdGhlcikge1xuICAgIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvblwiKTtcbiAgICBjb25zdCB0b2RheVdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5V2VhdGhlclwiKTtcbiAgICBjb25zdCB0b21vcnJvd1dlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvbW9ycm93V2VhdGhlclwiKTtcbiAgICB0b2RheVdlYXRoZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0b21vcnJvd1dlYXRoZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5sb2NhdGlvbi5uYW1lfSwgJHt3ZWF0aGVyLmxvY2F0aW9uLnJlZ2lvbn1gO1xuXG4gICAgY29uc3QgdG9kYXlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdG9kYXlIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRvZGF5XCIpO1xuICAgIHRvZGF5SGVhZGVyLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgIHRvZGF5V2VhdGhlci5hcHBlbmRDaGlsZCh0b2RheUhlYWRlcik7XG5cbiAgICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3VycmVudFRlbXAuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRUZW1wXCIpO1xuICAgIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gYEN1cnJlbnQgVGVtcDogJHt3ZWF0aGVyLmN1cnJlbnQudGVtcF9mfWA7XG4gICAgdG9kYXlXZWF0aGVyLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wKTtcblxuICAgIGNvbnN0IGN1cnJlbnRGZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN1cnJlbnRGZWVsc0xpa2UuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRGZWVsc0xpa2VcIik7XG4gICAgY3VycmVudEZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBDdXJyZW50IEZlZWxzIExpa2U6ICR7d2VhdGhlci5jdXJyZW50LmZlZWxzbGlrZV9mfWA7XG4gICAgdG9kYXlXZWF0aGVyLmFwcGVuZENoaWxkKGN1cnJlbnRGZWVsc0xpa2UpO1xuXG4gICAgY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25kaXRpb24uY2xhc3NMaXN0LmFkZChcImNvbmRpdGlvblwiKTtcbiAgICBjb25kaXRpb24udGV4dENvbnRlbnQgPSBgQ29uZGl0aW9uOiAke3dlYXRoZXIuY3VycmVudC5jb25kaXRpb24udGV4dH1gO1xuICAgIHRvZGF5V2VhdGhlci5hcHBlbmRDaGlsZChjb25kaXRpb24pO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcuY2xhc3NMaXN0LmFkZChcImNvbmRpdGlvbkltZ1wiKTtcbiAgICBpbWcuc3JjID0gd2VhdGhlci5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICAgIHRvZGF5V2VhdGhlci5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2luZERpcmVjdGlvbi5jbGFzc0xpc3QuYWRkKFwid2luZERpcmVjdGlvblwiKTtcbiAgICB3aW5kRGlyZWN0aW9uLnRleHRDb250ZW50ID0gYFdpbmQgRGlyZWN0aW9uOiAke3dlYXRoZXIuY3VycmVudC53aW5kX2Rpcn1gO1xuICAgIHRvZGF5V2VhdGhlci5hcHBlbmRDaGlsZCh3aW5kRGlyZWN0aW9uKTtcblxuICAgIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoXCJ3aW5kU3BlZWRcIik7XG4gICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7d2VhdGhlci5jdXJyZW50LndpbmRfbXBofSBtcGhgO1xuICAgIHRvZGF5V2VhdGhlci5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuXG4gICAgY29uc3Qgd2luZEd1c3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdpbmRHdXN0LmNsYXNzTGlzdC5hZGQoXCJ3aW5kR3VzdFwiKTtcbiAgICB3aW5kR3VzdC50ZXh0Q29udGVudCA9IGBXaW5kIEd1c3Q6ICR7d2VhdGhlci5jdXJyZW50Lmd1c3RfbXBofSBtcGhgO1xuICAgIHRvZGF5V2VhdGhlci5hcHBlbmRDaGlsZCh3aW5kR3VzdCk7XG5cbiAgICBjb25zdCB0b21vcnJvd1dlYXRoZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdG9tb3Jyb3dXZWF0aGVySGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd1wiKTtcbiAgICB0b21vcnJvd1dlYXRoZXJIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvbW9ycm93XCI7XG4gICAgdG9tb3Jyb3dXZWF0aGVyLmFwcGVuZENoaWxkKHRvbW9ycm93V2VhdGhlckhlYWRlcik7XG5cbiAgICBjb25zdCB0b21vcnJvd01heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvbW9ycm93TWF4VGVtcC5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dNYXhUZW1wXCIpO1xuICAgIHRvbW9ycm93TWF4VGVtcC50ZXh0Q29udGVudCA9IGBNYXggVGVtcDogJHt3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2Z9YDtcbiAgICB0b21vcnJvd1dlYXRoZXIuYXBwZW5kQ2hpbGQodG9tb3Jyb3dNYXhUZW1wKTtcblxuICAgIGNvbnN0IHRvbW9ycm93TWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9tb3Jyb3dNaW5UZW1wLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd01pblRlbXBcIik7XG4gICAgdG9tb3Jyb3dNaW5UZW1wLnRleHRDb250ZW50ID0gYE1pbiBUZW1wOiAke3dlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZn1gO1xuICAgIHRvbW9ycm93V2VhdGhlci5hcHBlbmRDaGlsZCh0b21vcnJvd01pblRlbXApO1xuXG4gICAgY29uc3QgdG9tb3Jyb3dDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvbW9ycm93Q29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd0NvbmRpdGlvblwiKTtcbiAgICB0b21vcnJvd0NvbmRpdGlvbi50ZXh0Q29udGVudCA9IGBDb25kaXRpb246ICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLnRleHR9YDtcbiAgICB0b21vcnJvd1dlYXRoZXIuYXBwZW5kQ2hpbGQodG9tb3Jyb3dDb25kaXRpb24pO1xuXG4gICAgY29uc3QgdG9tb3Jyb3dJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHRvbW9ycm93SW1nLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd0NvbmRpdGlvbkltZ1wiKTtcbiAgICB0b21vcnJvd0ltZy5zcmMgPSB3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24uaWNvbjtcbiAgICB0b21vcnJvd1dlYXRoZXIuYXBwZW5kQ2hpbGQodG9tb3Jyb3dJbWcpO1xuXG4gICAgY29uc3QgdG9tb3Jyb3dDaGFuZ2VPZlJhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvbW9ycm93Q2hhbmdlT2ZSYWluLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd0NoYW5nZU9mUmFpblwiKTtcbiAgICB0b21vcnJvd0NoYW5nZU9mUmFpbi50ZXh0Q29udGVudCA9IGBDaGFuY2Ugb2YgUmFpbjogJHt3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbn0lYDtcbiAgICB0b21vcnJvd1dlYXRoZXIuYXBwZW5kQ2hpbGQodG9tb3Jyb3dDaGFuZ2VPZlJhaW4pO1xuXG4gICAgY29uc3QgdG9tb3Jyb3dTdW5yaXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b21vcnJvd1N1bnJpc2UuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93U3VucmlzZVwiKTtcbiAgICB0b21vcnJvd1N1bnJpc2UudGV4dENvbnRlbnQgPSBgU3VucmlzZTogJHt3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnJpc2V9YDtcbiAgICB0b21vcnJvd1dlYXRoZXIuYXBwZW5kQ2hpbGQodG9tb3Jyb3dTdW5yaXNlKTtcblxuICAgIGNvbnN0IHRvbW9ycm93U3Vuc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b21vcnJvd1N1bnNldC5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dTdW5zZXRcIik7XG4gICAgdG9tb3Jyb3dTdW5zZXQudGV4dENvbnRlbnQgPSBgU3Vuc2V0OiAke3dlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0fWA7XG4gICAgdG9tb3Jyb3dXZWF0aGVyLmFwcGVuZENoaWxkKHRvbW9ycm93U3Vuc2V0KTtcbn1cblxuZXhwb3J0IHsgZGlzcGxheVdlYXRoZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuL2dldFdlYXRoZXJcIjtcblxuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hCdG5cIik7XG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtZm9ybVwiKTtcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hcIik7XG5cbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZWFyY2hJbnB1dC5ibHVyKCk7XG59KTtcblxuZ2V0V2VhdGhlcigpO1xuXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFdlYXRoZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9