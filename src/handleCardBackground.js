// const card = document.querySelector(".card");
const cards = document.querySelector(".cards-container");
const cardDivs = cards.querySelectorAll(".card");

const condition = document.querySelector(".condition");

// function renderCardBackground(cardDivs) {
//     cardDivs.forEach((cardDiv) => {
//         if (weather.current.condition.text == "Sunny") {
//             cardDiv.style.backgroundImage = "url('images/sunny.jpg')";
//             cardDiv.style.backgroundSize = "cover";
//         } else {
//             cardDiv.style.backgroundImage = "url('images/rain.jpg')";
//             cardDiv.style.backgroundSize = "cover";
//         }
//     });
// }

function renderCardBackground(cardDivs) {
    cardDivs.forEach((cardDiv) => {
        cardDiv.style.backgroundImage = "url('images/rain.jpg')";
        cardDiv.style.backgroundSize = "cover";
    });
}

export { renderCardBackground };
