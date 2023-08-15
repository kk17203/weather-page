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
    e.blur();
});

(0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)();

searchButton.addEventListener("click", _getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxPQUFPLEtBQUssWUFBWTtBQUNuRixVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBLElBQUksNERBQWM7QUFDbEI7O0FBRXNCOzs7Ozs7Ozs7Ozs7Ozs7QUNsQnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0Msc0JBQXNCLElBQUksd0JBQXdCOztBQUV0RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLHVCQUF1QjtBQUN0RTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBELDRCQUE0QjtBQUN0Rjs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLCtCQUErQjtBQUN6RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1ELHlCQUF5QjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLDBCQUEwQjtBQUNyRTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLDBCQUEwQjtBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLDhDQUE4QztBQUM3Rjs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLDhDQUE4QztBQUM3Rjs7QUFFQTtBQUNBO0FBQ0Esa0RBQWtELG1EQUFtRDtBQUNyRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBELHlEQUF5RDtBQUNuSDs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLDhDQUE4QztBQUM1Rjs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLDZDQUE2QztBQUN6RjtBQUNBOztBQUUwQjs7Ozs7OztVQzFGMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELHVEQUFVOztBQUVWLHVDQUF1QyxtREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItcGFnZS8uL3NyYy9nZXRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL3NyYy9yZW5kZXJVSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGlzcGxheVdlYXRoZXIgfSBmcm9tIFwiLi9yZW5kZXJVSS5qc1wiO1xuXG5jb25zdCBhcGlLZXkgPSBcIjgyNTFlYjVmMzZlNDQ4MmI5YzExNzIyNDQyMzA2MDhcIjtcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hcIik7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoKSB7XG4gICAgbGV0IHNlYXJjaFZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWU7XG5cbiAgICBjb25zdCB3ZWF0aGVyQVBJID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2FwaUtleX0mcT0ke3NlYXJjaFZhbHVlfWAsXG4gICAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHdlYXRoZXJBUEkuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXIpO1xuXG4gICAgZGlzcGxheVdlYXRoZXIod2VhdGhlcik7XG59XG5cbmV4cG9ydCB7IGdldFdlYXRoZXIgfTtcbiIsImZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXIpIHtcbiAgICBjb25zdCBsb2NhdGlvbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIik7XG4gICAgY29uc3QgdG9kYXlXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVdlYXRoZXJcIik7XG4gICAgY29uc3QgdG9tb3Jyb3dXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b21vcnJvd1dlYXRoZXJcIik7XG4gICAgdG9kYXlXZWF0aGVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgdG9tb3Jyb3dXZWF0aGVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBsb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IGAke3dlYXRoZXIubG9jYXRpb24ubmFtZX0sICR7d2VhdGhlci5sb2NhdGlvbi5yZWdpb259YDtcblxuICAgIGNvbnN0IHRvZGF5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHRvZGF5SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RheVwiKTtcbiAgICB0b2RheUhlYWRlci50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICB0b2RheVdlYXRoZXIuYXBwZW5kQ2hpbGQodG9kYXlIZWFkZXIpO1xuXG4gICAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN1cnJlbnRUZW1wLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50VGVtcFwiKTtcbiAgICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IGBDdXJyZW50IFRlbXA6ICR7d2VhdGhlci5jdXJyZW50LnRlbXBfZn1gO1xuICAgIHRvZGF5V2VhdGhlci5hcHBlbmRDaGlsZChjdXJyZW50VGVtcCk7XG5cbiAgICBjb25zdCBjdXJyZW50RmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdXJyZW50RmVlbHNMaWtlLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50RmVlbHNMaWtlXCIpO1xuICAgIGN1cnJlbnRGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgQ3VycmVudCBGZWVscyBMaWtlOiAke3dlYXRoZXIuY3VycmVudC5mZWVsc2xpa2VfZn1gO1xuICAgIHRvZGF5V2VhdGhlci5hcHBlbmRDaGlsZChjdXJyZW50RmVlbHNMaWtlKTtcblxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb25kaXRpb25cIik7XG4gICAgY29uZGl0aW9uLnRleHRDb250ZW50ID0gYENvbmRpdGlvbjogJHt3ZWF0aGVyLmN1cnJlbnQuY29uZGl0aW9uLnRleHR9YDtcbiAgICB0b2RheVdlYXRoZXIuYXBwZW5kQ2hpbGQoY29uZGl0aW9uKTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJjb25kaXRpb25JbWdcIik7XG4gICAgaW1nLnNyYyA9IHdlYXRoZXIuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgICB0b2RheVdlYXRoZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdpbmREaXJlY3Rpb24uY2xhc3NMaXN0LmFkZChcIndpbmREaXJlY3Rpb25cIik7XG4gICAgd2luZERpcmVjdGlvbi50ZXh0Q29udGVudCA9IGBXaW5kIERpcmVjdGlvbjogJHt3ZWF0aGVyLmN1cnJlbnQud2luZF9kaXJ9YDtcbiAgICB0b2RheVdlYXRoZXIuYXBwZW5kQ2hpbGQod2luZERpcmVjdGlvbik7XG5cbiAgICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKFwid2luZFNwZWVkXCIpO1xuICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkOiAke3dlYXRoZXIuY3VycmVudC53aW5kX21waH0gbXBoYDtcbiAgICB0b2RheVdlYXRoZXIuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcblxuICAgIGNvbnN0IHdpbmRHdXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3aW5kR3VzdC5jbGFzc0xpc3QuYWRkKFwid2luZEd1c3RcIik7XG4gICAgd2luZEd1c3QudGV4dENvbnRlbnQgPSBgV2luZCBHdXN0OiAke3dlYXRoZXIuY3VycmVudC5ndXN0X21waH0gbXBoYDtcbiAgICB0b2RheVdlYXRoZXIuYXBwZW5kQ2hpbGQod2luZEd1c3QpO1xuXG4gICAgY29uc3QgdG9tb3Jyb3dXZWF0aGVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHRvbW9ycm93V2VhdGhlckhlYWRlci5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dcIik7XG4gICAgdG9tb3Jyb3dXZWF0aGVySGVhZGVyLnRleHRDb250ZW50ID0gXCJUb21vcnJvd1wiO1xuICAgIHRvbW9ycm93V2VhdGhlci5hcHBlbmRDaGlsZCh0b21vcnJvd1dlYXRoZXJIZWFkZXIpO1xuXG4gICAgY29uc3QgdG9tb3Jyb3dNYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b21vcnJvd01heFRlbXAuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93TWF4VGVtcFwiKTtcbiAgICB0b21vcnJvd01heFRlbXAudGV4dENvbnRlbnQgPSBgTWF4IFRlbXA6ICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mfWA7XG4gICAgdG9tb3Jyb3dXZWF0aGVyLmFwcGVuZENoaWxkKHRvbW9ycm93TWF4VGVtcCk7XG5cbiAgICBjb25zdCB0b21vcnJvd01pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvbW9ycm93TWluVGVtcC5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dNaW5UZW1wXCIpO1xuICAgIHRvbW9ycm93TWluVGVtcC50ZXh0Q29udGVudCA9IGBNaW4gVGVtcDogJHt3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2Z9YDtcbiAgICB0b21vcnJvd1dlYXRoZXIuYXBwZW5kQ2hpbGQodG9tb3Jyb3dNaW5UZW1wKTtcblxuICAgIGNvbnN0IHRvbW9ycm93Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b21vcnJvd0NvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dDb25kaXRpb25cIik7XG4gICAgdG9tb3Jyb3dDb25kaXRpb24udGV4dENvbnRlbnQgPSBgQ29uZGl0aW9uOiAke3dlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi50ZXh0fWA7XG4gICAgdG9tb3Jyb3dXZWF0aGVyLmFwcGVuZENoaWxkKHRvbW9ycm93Q29uZGl0aW9uKTtcblxuICAgIGNvbnN0IHRvbW9ycm93SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB0b21vcnJvd0ltZy5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dDb25kaXRpb25JbWdcIik7XG4gICAgdG9tb3Jyb3dJbWcuc3JjID0gd2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLmljb247XG4gICAgdG9tb3Jyb3dXZWF0aGVyLmFwcGVuZENoaWxkKHRvbW9ycm93SW1nKTtcblxuICAgIGNvbnN0IHRvbW9ycm93Q2hhbmdlT2ZSYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b21vcnJvd0NoYW5nZU9mUmFpbi5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dDaGFuZ2VPZlJhaW5cIik7XG4gICAgdG9tb3Jyb3dDaGFuZ2VPZlJhaW4udGV4dENvbnRlbnQgPSBgQ2hhbmNlIG9mIFJhaW46ICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW59JWA7XG4gICAgdG9tb3Jyb3dXZWF0aGVyLmFwcGVuZENoaWxkKHRvbW9ycm93Q2hhbmdlT2ZSYWluKTtcblxuICAgIGNvbnN0IHRvbW9ycm93U3VucmlzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9tb3Jyb3dTdW5yaXNlLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd1N1bnJpc2VcIik7XG4gICAgdG9tb3Jyb3dTdW5yaXNlLnRleHRDb250ZW50ID0gYFN1bnJpc2U6ICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5yaXNlfWA7XG4gICAgdG9tb3Jyb3dXZWF0aGVyLmFwcGVuZENoaWxkKHRvbW9ycm93U3VucmlzZSk7XG5cbiAgICBjb25zdCB0b21vcnJvd1N1bnNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9tb3Jyb3dTdW5zZXQuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93U3Vuc2V0XCIpO1xuICAgIHRvbW9ycm93U3Vuc2V0LnRleHRDb250ZW50ID0gYFN1bnNldDogJHt3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnNldH1gO1xuICAgIHRvbW9ycm93V2VhdGhlci5hcHBlbmRDaGlsZCh0b21vcnJvd1N1bnNldCk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlXZWF0aGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi9nZXRXZWF0aGVyXCI7XG5cbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoQnRuXCIpO1xuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtZm9ybVwiKTtcblxuc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5ibHVyKCk7XG59KTtcblxuZ2V0V2VhdGhlcigpO1xuXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFdlYXRoZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9