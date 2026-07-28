const form = document.getElementById("apod-form");
const dateInput = document.getElementById("apod-date");
const result = document.getElementById("apod-result");
const favouritesList = document.getElementById("favourites-list");
const message = document.getElementById("message");
const apiKey = "DEMO_KEY";
let currentApod = null;
dateInput.max = new Date().toISOString().split("T")[0];
function getFavourites() {
  return JSON.parse(localStorage.getItem("apodFavourites")) || [];
}
function saveFavourites(favourites) {
  localStorage.setItem("apodFavourites", JSON.stringify(favourites));
}
function displayApod(apod) {
  currentApod = apod;
  result.innerHTML = `
    <article class="apod-card">
      <img id="apod-image" src="${apod.url}" alt="${apod.title}">
      <h3>${apod.title}</h3>
      <p class="apod-date">${apod.date}</p>
      <p class="apod-explanation">${apod.explanation}</p>
      <button class="button" id="save-favourite">Save Favourite</button>
    </article>
  `;
  document.getElementById("apod-image").addEventListener("click", function () {
    this.src = apod.hdurl || apod.url;
  });
  document
    .getElementById("save-favourite")
    .addEventListener("click", saveCurrentFavourite);
}
function saveCurrentFavourite() {
  const favourites = getFavourites();
  const exists = favourites.some(
    (favourite) => favourite.date === currentApod.date,
  );
  if (!exists) {
    favourites.push(currentApod);
    saveFavourites(favourites);
    displayFavourites();
    message.textContent = "Saved to favourites.";
  } else {
    message.textContent = "This APOD is already in favourites.";
  }
}
function displayFavourites() {
  const favourites = getFavourites();
  if (favourites.length === 0) {
    favouritesList.innerHTML = "<p>No favourites saved yet.</p>";
    return;
  }
  favouritesList.innerHTML = "";
  favourites.forEach(function (favourite) {
    const card = document.createElement("article");
    card.classList.add("feature-card");
    card.innerHTML = `
      <img src="${favourite.url}" alt="${favourite.title}">
      <h3>${favourite.title}</h3>
      <p>${favourite.date}</p>
      <button class="delete-button" data-date="${favourite.date}">Delete</button>
    `;
    favouritesList.appendChild(card);
  });
  document.querySelectorAll(".delete-button").forEach(function (button) {
    button.addEventListener("click", function () {
      const updatedFavourites = favourites.filter(function (favourite) {
        return favourite.date !== button.dataset.date;
      });

      saveFavourites(updatedFavourites);
      displayFavourites();
    });
  });
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const selectedDate = dateInput.value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${selectedDate}`;
  message.textContent = "Loading...";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.media_type === "image") {
        displayApod(data);
        message.textContent = "";
      } else {
        result.innerHTML =
          "<p>This APOD is a video. Please choose another date.</p>";
        message.textContent = "";
      }
    })
    .catch(function () {
      message.textContent = "Something went wrong. Please try another date.";
    });
});
displayFavourites();
