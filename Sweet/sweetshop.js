/* Her opsætter jeg min klokke som jeg har på alle siderne */
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

/* Her opsætter jeg åbningstiderne, som ligger på min forside */

function displayDay() {
  // Henter den nuværende ugedag som et tal (0 = søndag, 6 = lørdag)
  let date = new Date().getDay();

  console.log(date);

  // Variabel til at gemme dagens navn som tekst
  let day;

  // Oversætter tallet til en ugedag
  switch (date) {
    case 0:
      day = "Søndag";
      break;

    case 1:
      day = "Mandag";
      break;

    case 2:
      day = "Tirsdag";
      break;

    case 3:
      day = "Onsdag";
      break;

    case 4:
      day = "Torsdag";
      break;

    case 5:
      day = "Fredag";
      break;

    case 6:
      day = "Lørdag";
      break;
  }

  // Returnerer dagens navn (fx "Mandag")
  return day;
}

// Kalder funktionen og får dagens navn (fx "Mandag")
const today = displayDay();

// Finder elementet hvor status skal vises (Åben / Lukket)
const status = document.getElementById("status");

// Henter den aktuelle time (0–23)
const hour = new Date().getHours();

// Henter dagens nummer (0 = søndag, 6 = lørdag)
const date = new Date().getDay();

// Definerer åbningstider
const openTime = 8; // Åbner kl. 08
const closeTime = 17; // Lukker kl. 17 (mandag-torsdag)
const closeTimeFridaySaturday = 20; // Lukker kl. 20 (fredag+lørdag)

// Variabel til tekst (Åben nu / Lukket)
let statusTid;

if (date === 0) {
  statusTid = "Lukket";
  // Tilføjer CSS class for lukket
  status.classList.add("closed");
  status.classList.remove("open");

  // Hvis det er fredag + lørdag og indenfor åbningstid
} else if (date === 5 + 6 && hour >= openTime && hour < closeTimeSaturday) {
  statusTid = "Åben nu";

  // Tilføjer CSS class for åben
  status.classList.add("open");
  status.classList.remove("closed");

  // Hvis det er mandag–torsdag og indenfor åbningstid
} else if (date >= 1 && date <= 4 && hour >= openTime && hour < closeTime) {
  statusTid = "Åben nu";

  // Tilføjer CSS class for åben
  status.classList.add("open");
  status.classList.remove("closed");
} else {
  // Ellers → lukket
  statusTid = "Lukket";

  // Tilføjer CSS class for lukket
  status.classList.add("closed");
  status.classList.remove("open");
}

// Skriver resultatet ud på siden
document.getElementById("shopStatus").innerHTML = "I dag er det " + today + ". Butikken er " + statusTid;

/* Her opsætter jeg mit slideshow jeg har på min forside */
//slides er nu et array af elementer
const slides = document.querySelectorAll(".slide");
console.log(slides);

let currentIndex = 0;

function displayImageNumber(displayNumber) {
  currentIndex = displayNumber;
  // skjuler alle billeder
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  slides[currentIndex].style.display = "block";
}

displayImageNumber(0);

const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

btnNext.addEventListener("click", () => {
  displayImageNumber(currentIndex + 1);
});

btnPrev.addEventListener("click", () => {
  displayImageNumber(currentIndex - 1);
});
