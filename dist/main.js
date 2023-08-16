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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDRzs7QUFFdkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMkRBQTJELE9BQU8sS0FBSyxZQUFZO0FBQ25GLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxpRUFBbUI7QUFDdkI7QUFDQTtBQUNBOztBQUVzQjs7QUFFdEI7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFZ0M7O0FBRWhDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVCOEQ7O0FBRTlEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQ0FBb0Msc0JBQXNCLElBQUksd0JBQXdCOztBQUV0Rjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsNkJBQTZCO0FBQy9FOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsd0JBQXdCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsK0JBQStCO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsMEJBQTBCLEVBQUUsMEJBQTBCO0FBQzdGOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsK0NBQStDO0FBQ2pGOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsK0NBQStDO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLCtDQUErQztBQUM1Rjs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLCtDQUErQztBQUM1Rjs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLG1EQUFtRDtBQUM3Rjs7QUFFQTtBQUNBO0FBQ0EsMERBQTBELHlEQUF5RDtBQUNuSDs7QUFFQTtBQUNBO0FBQ0EsaURBQWlELDhDQUE4QztBQUMvRjs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLDZDQUE2QztBQUM1Rjs7QUFFQTtBQUNBLElBQUksMkVBQW9CO0FBQ3hCOztBQUUrQjs7Ozs7OztVQ2hIL0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELHVEQUFVOztBQUVWLHVDQUF1QyxtREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItcGFnZS8uL3NyYy9nZXRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL3NyYy9oYW5kbGVDYXJkQmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9zcmMvcmVuZGVyVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRpc3BsYXlUb2RheVdlYXRoZXIgfSBmcm9tIFwiLi9yZW5kZXJVSS5qc1wiO1xuaW1wb3J0IHsgZGlzcGxheVRvbW9ycm93V2VhdGhlciB9IGZyb20gXCIuL3JlbmRlclVJLmpzXCI7XG5cbmNvbnN0IGFwaUtleSA9IFwiODI1MWViNWYzNmU0NDgyYjljMTE3MjI0NDIzMDYwOFwiO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1pbnB1dFwiKTtcblxuY29uc3QgYWNjdUFwaUtleSA9IFwieHdqVFZkY1ZUUENNSnRvWGdmcnlmdURiRkwwQndBTTVcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcbiAgICBsZXQgc2VhcmNoVmFsdWUgPSBzZWFyY2hJbnB1dC52YWx1ZTtcblxuICAgIGNvbnN0IHdlYXRoZXJBUEkgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7YXBpS2V5fSZxPSR7c2VhcmNoVmFsdWV9JmRheXM9M2AsXG4gICAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHdlYXRoZXJBUEkuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXIpO1xuXG4gICAgZGlzcGxheVRvZGF5V2VhdGhlcih3ZWF0aGVyKTtcbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgc2VhcmNoSW5wdXQucGxhY2Vob2xkZXIgPSBcIlNlYXJjaCBmb3IgYSBjaXR5XCI7XG59XG5cbmV4cG9ydCB7IGdldFdlYXRoZXIgfTtcblxuLy8gb3Blbi1tZXRlbyB3ZWF0aGVyIGFwaVxuIiwiY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzLWNvbnRhaW5lclwiKTtcbmNvbnN0IGNhcmREaXZzID0gY2FyZHMucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkcy1iYWNrZ3JvdW5kXCIpO1xuXG5mdW5jdGlvbiByZW5kZXJDYXJkQmFja2dyb3VuZChjYXJkRGl2cykge1xuICAgIGNhcmREaXZzLmZvckVhY2goKGNhcmREaXYpID0+IHtcbiAgICAgICAgY2FyZERpdi5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcbiAgICAgICAgY2FyZERpdi5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBcImNlbnRlclwiO1xuXG4gICAgICAgIGlmIChjYXJkRGl2LmNsYXNzTGlzdC5jb250YWlucyhcIlN1bm55XCIpKSB7XG4gICAgICAgICAgICBjYXJkRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdpbWFnZXMvc3VubnkuanBnJylcIjtcbiAgICAgICAgfSBlbHNlIGlmIChjYXJkRGl2LmNsYXNzTGlzdC5jb250YWlucyhcIlBhcnRseS1jbG91ZHlcIikpIHtcbiAgICAgICAgICAgIGNhcmREaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2ltYWdlcy9wYXJ0bHktY2xvdWR5LmpwZycpXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoY2FyZERpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJPdmVyY2FzdFwiKSkge1xuICAgICAgICAgICAgY2FyZERpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnaW1hZ2VzL3BhcnRseS1jbG91ZHkuanBnJylcIjtcbiAgICAgICAgfSBlbHNlIGlmIChjYXJkRGl2LmNsYXNzTGlzdC5jb250YWlucyhcIkNsZWFyXCIpKSB7XG4gICAgICAgICAgICBjYXJkRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdpbWFnZXMvY2xlYXItc2t5LmpwZycpXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoY2FyZERpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJIZWF2eS1yYWluXCIpKSB7XG4gICAgICAgICAgICBjYXJkRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdpbWFnZXMvc3Rvcm15LmpwZycpXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoY2FyZERpdi5jbGFzc0xpc3QudG9TdHJpbmcoKS5pbmNsdWRlcyhcInJhaW5cIikpIHtcbiAgICAgICAgICAgIGNhcmREaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2ltYWdlcy9yYWluLmpwZycpXCI7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyQ2FyZEJhY2tncm91bmQgfTtcblxuLy8gRmluZCBpbWcgZm9yOlxuLy8gTWlzdFxuLy8gbGlnaHQgcmFpblxuIiwiaW1wb3J0IHsgcmVuZGVyQ2FyZEJhY2tncm91bmQgfSBmcm9tIFwiLi9oYW5kbGVDYXJkQmFja2dyb3VuZFwiO1xuXG5mdW5jdGlvbiBkaXNwbGF5VG9kYXlXZWF0aGVyKHdlYXRoZXIpIHtcbiAgICBjb25zdCBsb2NhdGlvbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIik7XG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzLWNvbnRhaW5lclwiKTtcblxuICAgIGNhcmRzLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBsb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IGAke3dlYXRoZXIubG9jYXRpb24ubmFtZX0sICR7d2VhdGhlci5sb2NhdGlvbi5yZWdpb259YDtcblxuICAgIC8vIEhhbmRsZSB0b2RheSBjYXJkXG5cbiAgICBjb25zdCBjb25kaXRpb25UZXh0ID0gd2VhdGhlci5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LnJlcGxhY2UoL1xccy9nLCBcIi1cIik7XG5cbiAgICBjb25zdCB0b2RheUNhcmRzQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kYXlDYXJkc0JhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcImNhcmRzLWJhY2tncm91bmRcIiwgY29uZGl0aW9uVGV4dCk7XG4gICAgY2FyZHMuYXBwZW5kQ2hpbGQodG9kYXlDYXJkc0JhY2tncm91bmQpO1xuXG4gICAgY29uc3QgdG9kYXlDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RheUNhcmQuY2xhc3NMaXN0LmFkZChcInRvZGF5Q2FyZFwiLCBcImNhcmRcIik7XG4gICAgdG9kYXlDYXJkc0JhY2tncm91bmQuYXBwZW5kQ2hpbGQodG9kYXlDYXJkKTtcblxuICAgIGNvbnN0IHRvZGF5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdG9kYXlIZWFkZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtaGVhZGVyXCIsIFwiaW5mb1wiKTtcbiAgICB0b2RheUhlYWRlci50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICB0b2RheUNhcmQuYXBwZW5kQ2hpbGQodG9kYXlIZWFkZXIpO1xuXG4gICAgY29uc3QgY3VycmVudEZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3VycmVudEZlZWxzTGlrZS5jbGFzc0xpc3QuYWRkKFwiY3VycmVudEZlZWxzTGlrZVwiLCBcImluZm9cIik7XG4gICAgY3VycmVudEZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke3dlYXRoZXIuY3VycmVudC5mZWVsc2xpa2VfZn0gwrBGYDtcbiAgICB0b2RheUNhcmQuYXBwZW5kQ2hpbGQoY3VycmVudEZlZWxzTGlrZSk7XG5cbiAgICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3VycmVudFRlbXAuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRUZW1wXCIsIFwiaW5mb1wiKTtcbiAgICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IGBBY3R1YWw6ICR7d2VhdGhlci5jdXJyZW50LnRlbXBfZn0gwrBGYDtcbiAgICB0b2RheUNhcmQuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXApO1xuXG4gICAgY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25kaXRpb24uY2xhc3NMaXN0LmFkZChcImNvbmRpdGlvblwiLCBcImluZm9cIik7XG4gICAgY29uZGl0aW9uLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5jdXJyZW50LmNvbmRpdGlvbi50ZXh0fWA7XG4gICAgdG9kYXlDYXJkLmFwcGVuZENoaWxkKGNvbmRpdGlvbik7XG5cbiAgICBjb25zdCBjdXJyZW50V2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3VycmVudFdpbmQuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtd2luZFwiLCBcImluZm9cIik7XG4gICAgY3VycmVudFdpbmQudGV4dENvbnRlbnQgPSBgV2luZDogJHt3ZWF0aGVyLmN1cnJlbnQud2luZF9kaXJ9ICR7d2VhdGhlci5jdXJyZW50LndpbmRfbXBofSBtcGhgO1xuICAgIHRvZGF5Q2FyZC5hcHBlbmRDaGlsZChjdXJyZW50V2luZCk7XG5cbiAgICBjb25zdCBtYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYXhUZW1wLmNsYXNzTGlzdC5hZGQoXCJtYXgtdGVtcFwiLCBcImluZm9cIik7XG4gICAgbWF4VGVtcC50ZXh0Q29udGVudCA9IGBNYXg6ICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mfSDCsEZgO1xuICAgIHRvZGF5Q2FyZC5hcHBlbmRDaGlsZChtYXhUZW1wKTtcblxuICAgIGNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1pblRlbXAuY2xhc3NMaXN0LmFkZChcIm1pbi10ZW1wXCIsIFwiaW5mb1wiKTtcbiAgICBtaW5UZW1wLnRleHRDb250ZW50ID0gYE1pbjogJHt3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2Z9IMKwRmA7XG4gICAgdG9kYXlDYXJkLmFwcGVuZENoaWxkKG1pblRlbXApO1xuXG4gICAgLy8gSGFuZGxlIHRvbW9ycm93IGNhcmRcblxuICAgIC8vIGNvbnN0IHRvbW9ycm93Q29uZGl0aW9uVGV4dCA9XG4gICAgLy8gICAgIHdlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi50ZXh0LnJlcGxhY2UoL1xccy9nLCBcIi1cIik7XG5cbiAgICAvLyBjb25zdCB0b21vcnJvd0NhcmRzQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gdG9tb3Jyb3dDYXJkc0JhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcbiAgICAvLyAgICAgXCJjYXJkcy1iYWNrZ3JvdW5kXCIsXG4gICAgLy8gICAgIHRvbW9ycm93Q29uZGl0aW9uVGV4dFxuICAgIC8vICk7XG4gICAgLy8gY2FyZHMuYXBwZW5kQ2hpbGQodG9tb3Jyb3dDYXJkc0JhY2tncm91bmQpO1xuXG4gICAgLy8gY29uc3QgdG9tb3Jyb3dDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyB0b21vcnJvd0NhcmQuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93Q2FyZFwiLCBcImNhcmRcIik7XG4gICAgLy8gdG9tb3Jyb3dDYXJkc0JhY2tncm91bmQuYXBwZW5kQ2hpbGQodG9tb3Jyb3dDYXJkKTtcblxuICAgIC8vIGNvbnN0IHRvbW9ycm93SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgLy8gdG9tb3Jyb3dIZWFkZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtaGVhZGVyXCIsIFwiaW5mb1wiKTtcbiAgICAvLyB0b21vcnJvd0hlYWRlci50ZXh0Q29udGVudCA9IFwiVG9tb3Jyb3dcIjtcbiAgICAvLyB0b21vcnJvd0NhcmQuYXBwZW5kQ2hpbGQodG9tb3Jyb3dIZWFkZXIpO1xuXG4gICAgLy8gY29uc3QgdG9tb3Jyb3dNYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyB0b21vcnJvd01heFRlbXAuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93TWF4VGVtcFwiLCBcImluZm9cIik7XG4gICAgLy8gdG9tb3Jyb3dNYXhUZW1wLnRleHRDb250ZW50ID0gYE1heDogJHt3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2Z9IMKwRmA7XG4gICAgLy8gdG9tb3Jyb3dDYXJkLmFwcGVuZENoaWxkKHRvbW9ycm93TWF4VGVtcCk7XG5cbiAgICAvLyBjb25zdCB0b21vcnJvd01pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIHRvbW9ycm93TWluVGVtcC5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dNaW5UZW1wXCIsIFwiaW5mb1wiKTtcbiAgICAvLyB0b21vcnJvd01pblRlbXAudGV4dENvbnRlbnQgPSBgTWluOiAke3dlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfZn0gwrBGYDtcbiAgICAvLyB0b21vcnJvd0NhcmQuYXBwZW5kQ2hpbGQodG9tb3Jyb3dNaW5UZW1wKTtcblxuICAgIC8vIGNvbnN0IHRvbW9ycm93Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyB0b21vcnJvd0NvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dDb25kaXRpb25cIiwgXCJpbmZvXCIpO1xuICAgIC8vIHRvbW9ycm93Q29uZGl0aW9uLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLnRleHR9YDtcbiAgICAvLyB0b21vcnJvd0NhcmQuYXBwZW5kQ2hpbGQodG9tb3Jyb3dDb25kaXRpb24pO1xuXG4gICAgLy8gY29uc3QgdG9tb3Jyb3dDaGFuZ2VPZlJhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIHRvbW9ycm93Q2hhbmdlT2ZSYWluLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd0NoYW5nZU9mUmFpblwiLCBcImluZm9cIik7XG4gICAgLy8gdG9tb3Jyb3dDaGFuZ2VPZlJhaW4udGV4dENvbnRlbnQgPSBgUmFpbiBDaGFuY2U6ICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW59JWA7XG4gICAgLy8gdG9tb3Jyb3dDYXJkLmFwcGVuZENoaWxkKHRvbW9ycm93Q2hhbmdlT2ZSYWluKTtcblxuICAgIC8vIGNvbnN0IHRvbW9ycm93U3VucmlzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gdG9tb3Jyb3dTdW5yaXNlLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd1N1bnJpc2VcIiwgXCJpbmZvXCIpO1xuICAgIC8vIHRvbW9ycm93U3VucmlzZS50ZXh0Q29udGVudCA9IGBTdW5yaXNlOiAke3dlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uYXN0cm8uc3VucmlzZX1gO1xuICAgIC8vIHRvbW9ycm93Q2FyZC5hcHBlbmRDaGlsZCh0b21vcnJvd1N1bnJpc2UpO1xuXG4gICAgLy8gY29uc3QgdG9tb3Jyb3dTdW5zZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIHRvbW9ycm93U3Vuc2V0LmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd1N1bnNldFwiLCBcImluZm9cIik7XG4gICAgLy8gdG9tb3Jyb3dTdW5zZXQudGV4dENvbnRlbnQgPSBgU3Vuc2V0OiAke3dlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0fWA7XG4gICAgLy8gdG9tb3Jyb3dDYXJkLmFwcGVuZENoaWxkKHRvbW9ycm93U3Vuc2V0KTtcblxuICAgIGNvbnN0IGNhcmREaXZzID0gY2FyZHMucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkcy1iYWNrZ3JvdW5kXCIpO1xuICAgIHJlbmRlckNhcmRCYWNrZ3JvdW5kKGNhcmREaXZzKTtcbn1cblxuZXhwb3J0IHsgZGlzcGxheVRvZGF5V2VhdGhlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vZ2V0V2VhdGhlclwiO1xuXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaEJ0blwiKTtcbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1mb3JtXCIpO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1pbnB1dFwiKTtcblxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNlYXJjaElucHV0LmJsdXIoKTtcbiAgICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIGZvciBhIGNpdHlcIjtcbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XG59KTtcblxuZ2V0V2VhdGhlcigpO1xuXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFdlYXRoZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9