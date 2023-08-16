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

/***/ "./src/handleCardBackground.js":
/*!*************************************!*\
  !*** ./src/handleCardBackground.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderCardBackground: () => (/* binding */ renderCardBackground)
/* harmony export */ });
// const card = document.querySelector(".card");
const cards = document.querySelector(".cards-container");
const cardDivs = cards.querySelectorAll(".cards-background");

// const condition = document.querySelector(".condition");

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

// function renderCardBackground(cardDivs) {
//     cardDivs.forEach((cardDiv) => {
//         cardDiv.style.backgroundImage = "url('images/rain.jpg')";
//         cardDiv.style.backgroundSize = "cover";
//     });
// }




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
/* harmony import */ var _handleCardBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleCardBackground */ "./src/handleCardBackground.js");


function displayWeather(weather) {
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

    // Handle tomorrow card

    const tomorrowConditionText =
        weather.forecast.forecastday[0].day.condition.text.replace(/\s/g, "-");

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
    tomorrowMaxTemp.textContent = `Max Temp: ${weather.forecast.forecastday[0].day.maxtemp_f} °F`;
    tomorrowCard.appendChild(tomorrowMaxTemp);

    const tomorrowMinTemp = document.createElement("div");
    tomorrowMinTemp.classList.add("tomorrowMinTemp", "info");
    tomorrowMinTemp.textContent = `Min Temp: ${weather.forecast.forecastday[0].day.mintemp_f} °F`;
    tomorrowCard.appendChild(tomorrowMinTemp);

    const tomorrowCondition = document.createElement("div");
    tomorrowCondition.classList.add("tomorrowCondition", "info");
    tomorrowCondition.textContent = `${weather.forecast.forecastday[0].day.condition.text}`;
    tomorrowCard.appendChild(tomorrowCondition);

    const tomorrowChangeOfRain = document.createElement("div");
    tomorrowChangeOfRain.classList.add("tomorrowChangeOfRain", "info");
    tomorrowChangeOfRain.textContent = `Rain Chance: ${weather.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    tomorrowCard.appendChild(tomorrowChangeOfRain);

    const tomorrowSunrise = document.createElement("div");
    tomorrowSunrise.classList.add("tomorrowSunrise", "info");
    tomorrowSunrise.textContent = `Sunrise: ${weather.forecast.forecastday[0].astro.sunrise}`;
    tomorrowCard.appendChild(tomorrowSunrise);

    const tomorrowSunset = document.createElement("div");
    tomorrowSunset.classList.add("tomorrowSunset", "info");
    tomorrowSunset.textContent = `Sunset: ${weather.forecast.forecastday[0].astro.sunset}`;
    tomorrowCard.appendChild(tomorrowSunset);

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxPQUFPLEtBQUssWUFBWTtBQUNuRixVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBLElBQUksNERBQWM7QUFDbEI7QUFDQTtBQUNBOztBQUVzQjs7Ozs7Ozs7Ozs7Ozs7O0FDcEJ0QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVnQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDOEI7O0FBRTlEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQ0FBb0Msc0JBQXNCLElBQUksd0JBQXdCOztBQUV0Rjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsNkJBQTZCO0FBQy9FOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsd0JBQXdCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsK0JBQStCO0FBQzlEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLCtDQUErQztBQUM5Rjs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLCtDQUErQztBQUM5Rjs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLG1EQUFtRDtBQUMxRjs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELHlEQUF5RDtBQUNoSDs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLDhDQUE4QztBQUM1Rjs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLDZDQUE2QztBQUN6Rjs7QUFFQTtBQUNBLElBQUksMkVBQW9CO0FBQ3hCOztBQUUwQjs7Ozs7OztVQ2pHMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELHVEQUFVOztBQUVWLHVDQUF1QyxtREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItcGFnZS8uL3NyYy9nZXRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL3NyYy9oYW5kbGVDYXJkQmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9zcmMvcmVuZGVyVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRpc3BsYXlXZWF0aGVyIH0gZnJvbSBcIi4vcmVuZGVyVUkuanNcIjtcblxuY29uc3QgYXBpS2V5ID0gXCI4MjUxZWI1ZjM2ZTQ0ODJiOWMxMTcyMjQ0MjMwNjA4XCI7XG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWlucHV0XCIpO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xuICAgIGxldCBzZWFyY2hWYWx1ZSA9IHNlYXJjaElucHV0LnZhbHVlO1xuXG4gICAgY29uc3Qgd2VhdGhlckFQSSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHthcGlLZXl9JnE9JHtzZWFyY2hWYWx1ZX1gLFxuICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCB3ZWF0aGVyQVBJLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcblxuICAgIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXIpO1xuICAgIHNlYXJjaElucHV0LnZhbHVlID0gXCJcIjtcbiAgICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIGZvciBhIGNpdHlcIjtcbn1cblxuZXhwb3J0IHsgZ2V0V2VhdGhlciB9O1xuIiwiLy8gY29uc3QgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKTtcbmNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkcy1jb250YWluZXJcIik7XG5jb25zdCBjYXJkRGl2cyA9IGNhcmRzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZHMtYmFja2dyb3VuZFwiKTtcblxuLy8gY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25kaXRpb25cIik7XG5cbmZ1bmN0aW9uIHJlbmRlckNhcmRCYWNrZ3JvdW5kKGNhcmREaXZzKSB7XG4gICAgY2FyZERpdnMuZm9yRWFjaCgoY2FyZERpdikgPT4ge1xuICAgICAgICBjYXJkRGl2LnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xuICAgICAgICBjYXJkRGl2LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG5cbiAgICAgICAgaWYgKGNhcmREaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiU3VubnlcIikpIHtcbiAgICAgICAgICAgIGNhcmREaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2ltYWdlcy9zdW5ueS5qcGcnKVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGNhcmREaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiUGFydGx5LWNsb3VkeVwiKSkge1xuICAgICAgICAgICAgY2FyZERpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnaW1hZ2VzL3BhcnRseS1jbG91ZHkuanBnJylcIjtcbiAgICAgICAgfSBlbHNlIGlmIChjYXJkRGl2LmNsYXNzTGlzdC5jb250YWlucyhcIk92ZXJjYXN0XCIpKSB7XG4gICAgICAgICAgICBjYXJkRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdpbWFnZXMvcGFydGx5LWNsb3VkeS5qcGcnKVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGNhcmREaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiQ2xlYXJcIikpIHtcbiAgICAgICAgICAgIGNhcmREaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2ltYWdlcy9jbGVhci1za3kuanBnJylcIjtcbiAgICAgICAgfSBlbHNlIGlmIChjYXJkRGl2LmNsYXNzTGlzdC5jb250YWlucyhcIkhlYXZ5LXJhaW5cIikpIHtcbiAgICAgICAgICAgIGNhcmREaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2ltYWdlcy9zdG9ybXkuanBnJylcIjtcbiAgICAgICAgfSBlbHNlIGlmIChjYXJkRGl2LmNsYXNzTGlzdC50b1N0cmluZygpLmluY2x1ZGVzKFwicmFpblwiKSkge1xuICAgICAgICAgICAgY2FyZERpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnaW1hZ2VzL3JhaW4uanBnJylcIjtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBmdW5jdGlvbiByZW5kZXJDYXJkQmFja2dyb3VuZChjYXJkRGl2cykge1xuLy8gICAgIGNhcmREaXZzLmZvckVhY2goKGNhcmREaXYpID0+IHtcbi8vICAgICAgICAgY2FyZERpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnaW1hZ2VzL3JhaW4uanBnJylcIjtcbi8vICAgICAgICAgY2FyZERpdi5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcbi8vICAgICB9KTtcbi8vIH1cblxuZXhwb3J0IHsgcmVuZGVyQ2FyZEJhY2tncm91bmQgfTtcbiIsImltcG9ydCB7IHJlbmRlckNhcmRCYWNrZ3JvdW5kIH0gZnJvbSBcIi4vaGFuZGxlQ2FyZEJhY2tncm91bmRcIjtcblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIod2VhdGhlcikge1xuICAgIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvblwiKTtcbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHMtY29udGFpbmVyXCIpO1xuXG4gICAgY2FyZHMuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5sb2NhdGlvbi5uYW1lfSwgJHt3ZWF0aGVyLmxvY2F0aW9uLnJlZ2lvbn1gO1xuXG4gICAgLy8gSGFuZGxlIHRvZGF5IGNhcmRcblxuICAgIGNvbnN0IGNvbmRpdGlvblRleHQgPSB3ZWF0aGVyLmN1cnJlbnQuY29uZGl0aW9uLnRleHQucmVwbGFjZSgvXFxzL2csIFwiLVwiKTtcblxuICAgIGNvbnN0IHRvZGF5Q2FyZHNCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RheUNhcmRzQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwiY2FyZHMtYmFja2dyb3VuZFwiLCBjb25kaXRpb25UZXh0KTtcbiAgICBjYXJkcy5hcHBlbmRDaGlsZCh0b2RheUNhcmRzQmFja2dyb3VuZCk7XG5cbiAgICBjb25zdCB0b2RheUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZGF5Q2FyZC5jbGFzc0xpc3QuYWRkKFwidG9kYXlDYXJkXCIsIFwiY2FyZFwiKTtcbiAgICB0b2RheUNhcmRzQmFja2dyb3VuZC5hcHBlbmRDaGlsZCh0b2RheUNhcmQpO1xuXG4gICAgY29uc3QgdG9kYXlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0b2RheUhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC1oZWFkZXJcIiwgXCJpbmZvXCIpO1xuICAgIHRvZGF5SGVhZGVyLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgIHRvZGF5Q2FyZC5hcHBlbmRDaGlsZCh0b2RheUhlYWRlcik7XG5cbiAgICBjb25zdCBjdXJyZW50RmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdXJyZW50RmVlbHNMaWtlLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50RmVlbHNMaWtlXCIsIFwiaW5mb1wiKTtcbiAgICBjdXJyZW50RmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7d2VhdGhlci5jdXJyZW50LmZlZWxzbGlrZV9mfSDCsEZgO1xuICAgIHRvZGF5Q2FyZC5hcHBlbmRDaGlsZChjdXJyZW50RmVlbHNMaWtlKTtcblxuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdXJyZW50VGVtcC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFRlbXBcIiwgXCJpbmZvXCIpO1xuICAgIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gYEFjdHVhbDogJHt3ZWF0aGVyLmN1cnJlbnQudGVtcF9mfSDCsEZgO1xuICAgIHRvZGF5Q2FyZC5hcHBlbmRDaGlsZChjdXJyZW50VGVtcCk7XG5cbiAgICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29uZGl0aW9uXCIsIFwiaW5mb1wiKTtcbiAgICBjb25kaXRpb24udGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLmN1cnJlbnQuY29uZGl0aW9uLnRleHR9YDtcbiAgICB0b2RheUNhcmQuYXBwZW5kQ2hpbGQoY29uZGl0aW9uKTtcblxuICAgIC8vIEhhbmRsZSB0b21vcnJvdyBjYXJkXG5cbiAgICBjb25zdCB0b21vcnJvd0NvbmRpdGlvblRleHQgPVxuICAgICAgICB3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24udGV4dC5yZXBsYWNlKC9cXHMvZywgXCItXCIpO1xuXG4gICAgY29uc3QgdG9tb3Jyb3dDYXJkc0JhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvbW9ycm93Q2FyZHNCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIFwiY2FyZHMtYmFja2dyb3VuZFwiLFxuICAgICAgICB0b21vcnJvd0NvbmRpdGlvblRleHRcbiAgICApO1xuICAgIGNhcmRzLmFwcGVuZENoaWxkKHRvbW9ycm93Q2FyZHNCYWNrZ3JvdW5kKTtcblxuICAgIGNvbnN0IHRvbW9ycm93Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9tb3Jyb3dDYXJkLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd0NhcmRcIiwgXCJjYXJkXCIpO1xuICAgIHRvbW9ycm93Q2FyZHNCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHRvbW9ycm93Q2FyZCk7XG5cbiAgICBjb25zdCB0b21vcnJvd0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRvbW9ycm93SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWhlYWRlclwiLCBcImluZm9cIik7XG4gICAgdG9tb3Jyb3dIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvbW9ycm93XCI7XG4gICAgdG9tb3Jyb3dDYXJkLmFwcGVuZENoaWxkKHRvbW9ycm93SGVhZGVyKTtcblxuICAgIGNvbnN0IHRvbW9ycm93TWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9tb3Jyb3dNYXhUZW1wLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd01heFRlbXBcIiwgXCJpbmZvXCIpO1xuICAgIHRvbW9ycm93TWF4VGVtcC50ZXh0Q29udGVudCA9IGBNYXggVGVtcDogJHt3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2Z9IMKwRmA7XG4gICAgdG9tb3Jyb3dDYXJkLmFwcGVuZENoaWxkKHRvbW9ycm93TWF4VGVtcCk7XG5cbiAgICBjb25zdCB0b21vcnJvd01pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvbW9ycm93TWluVGVtcC5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dNaW5UZW1wXCIsIFwiaW5mb1wiKTtcbiAgICB0b21vcnJvd01pblRlbXAudGV4dENvbnRlbnQgPSBgTWluIFRlbXA6ICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mfSDCsEZgO1xuICAgIHRvbW9ycm93Q2FyZC5hcHBlbmRDaGlsZCh0b21vcnJvd01pblRlbXApO1xuXG4gICAgY29uc3QgdG9tb3Jyb3dDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvbW9ycm93Q29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd0NvbmRpdGlvblwiLCBcImluZm9cIik7XG4gICAgdG9tb3Jyb3dDb25kaXRpb24udGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24udGV4dH1gO1xuICAgIHRvbW9ycm93Q2FyZC5hcHBlbmRDaGlsZCh0b21vcnJvd0NvbmRpdGlvbik7XG5cbiAgICBjb25zdCB0b21vcnJvd0NoYW5nZU9mUmFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9tb3Jyb3dDaGFuZ2VPZlJhaW4uY2xhc3NMaXN0LmFkZChcInRvbW9ycm93Q2hhbmdlT2ZSYWluXCIsIFwiaW5mb1wiKTtcbiAgICB0b21vcnJvd0NoYW5nZU9mUmFpbi50ZXh0Q29udGVudCA9IGBSYWluIENoYW5jZTogJHt3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbn0lYDtcbiAgICB0b21vcnJvd0NhcmQuYXBwZW5kQ2hpbGQodG9tb3Jyb3dDaGFuZ2VPZlJhaW4pO1xuXG4gICAgY29uc3QgdG9tb3Jyb3dTdW5yaXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b21vcnJvd1N1bnJpc2UuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93U3VucmlzZVwiLCBcImluZm9cIik7XG4gICAgdG9tb3Jyb3dTdW5yaXNlLnRleHRDb250ZW50ID0gYFN1bnJpc2U6ICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5yaXNlfWA7XG4gICAgdG9tb3Jyb3dDYXJkLmFwcGVuZENoaWxkKHRvbW9ycm93U3VucmlzZSk7XG5cbiAgICBjb25zdCB0b21vcnJvd1N1bnNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9tb3Jyb3dTdW5zZXQuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93U3Vuc2V0XCIsIFwiaW5mb1wiKTtcbiAgICB0b21vcnJvd1N1bnNldC50ZXh0Q29udGVudCA9IGBTdW5zZXQ6ICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5zZXR9YDtcbiAgICB0b21vcnJvd0NhcmQuYXBwZW5kQ2hpbGQodG9tb3Jyb3dTdW5zZXQpO1xuXG4gICAgY29uc3QgY2FyZERpdnMgPSBjYXJkcy5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRzLWJhY2tncm91bmRcIik7XG4gICAgcmVuZGVyQ2FyZEJhY2tncm91bmQoY2FyZERpdnMpO1xufVxuXG5leHBvcnQgeyBkaXNwbGF5V2VhdGhlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vZ2V0V2VhdGhlclwiO1xuXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaEJ0blwiKTtcbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1mb3JtXCIpO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1pbnB1dFwiKTtcblxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNlYXJjaElucHV0LmJsdXIoKTtcbiAgICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIGZvciBhIGNpdHlcIjtcbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XG59KTtcblxuZ2V0V2VhdGhlcigpO1xuXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFdlYXRoZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9