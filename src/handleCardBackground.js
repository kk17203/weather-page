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

export { renderCardBackground };

// Find img for:
// Mist
// light rain
