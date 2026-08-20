// Her finder vi de elementer og knapper fra HTMLén

// Denne er start knappen
const startButton = document.querySelector("#start-button");

// Her bliver alle data (for lavt, for højt, korrekt) defineret
const feedbackButtons = document.querySelectorAll("[data-answer]");

// Her bliver komuterens gæt vist
const guessElement = document.querySelector("#guess");

// Her et teksten, der fortæller spilleren, hvad der sker
const statusElement = document.querySelector("#status");

// Her bliver antallet af gæt vist
const attemptsElement = document.querySelector("#attempts");

// Her bliver beskeden vist
const messageElement = document.querySelector("#message");

// Her sætter vi minimum og maksimum tallet, som computeren kan gætte mellem
let lowestNumber = 0;
let highestNumber = 100;

// Computerens gæt
let currentGuess = 0;

//Antallet af komputerens gæt
let attempts = 0;

// Denne funktion laver et gæt og opdaterer HTML'en
// Komputerens svar bliver divideret i 2, så den altid gætter midt imellem minimum og maksimum
function makeGuess() {
  currentGuess = Math.floor((lowestNumber + highestNumber) / 2);
  // Antallet af gæt bliver talt op, og HTML'en bliver opdateret med det nye gæt
  attempts += 1;
  // Viser komputerens gæt
  guessElement.textContent = currentGuess;
  // Opdaterer antallet af gæt
  attemptsElement.textContent = attempts;
  // Komputeren spørger om gættet er for højt, for lavt eller korrekt
  statusElement.textContent = "Er mit gæt for højt, for lavt eller rigtigt?";
  // Beskeden bliver nulstillet, så den ikke forstyrrer spillet
  messageElement.textContent = "";
}
// aktiverer start knappen, så man kan starte spil
startButton.addEventListener("click", () => {
  // Nulstiller alle værdier, så spillet kan starte forfra
  lowestNumber = 0;
  highestNumber = 100;
  attempts = 0;
  // Når spillet er færdig, kommer knappen start forfra op
  startButton.textContent = "Start forfra";
  // Her aktiveres alle knapperne igen
  feedbackButtons.forEach((button) => {
    button.disabled = false;
  });
  makeGuess();
});

// Her lytter komputeren efter hvad jeg har trykket på(for lavt, for højt eller korrekt), og så reagerer den på det
feedbackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Hvis komputeren gætter korrekt, siger den følgende beskeder
    // Jeg fandt dit tal: (gættet) og Det tog mig (antal gæt) gæt.
    if (button.dataset.answer === "correct") {
      statusElement.textContent = `Jeg fandt dit tal: ${currentGuess}!`;
      messageElement.textContent = `Det tog mig ${attempts} gæt.`;
      startButton.textContent = "Spil igen";
      // Her bliver for lav, for høj og korrekt knapperne deaktiveret
      feedbackButtons.forEach((button) => {
        button.disabled = true;
      });
      // spillet stopper her ind til man trykker "spil igen"
      return;
    }
    // Hvis gætter er for lavt glemmer den alt mellem 1-50
    if (button.dataset.answer === "low") {
      lowestNumber = currentGuess + 1;
      // Hvis gætter er for højt glemmer den alt mellem 51-100
    } else {
      highestNumber = currentGuess - 1;
    }
    // Hvis minimum tallet er højere end maksimum tallet, så passer svarene ikke sammen, og man skal starte forfra
    if (lowestNumber > highestNumber) {
      statusElement.textContent = "Svarene passer ikke sammen.";
      messageElement.textContent = "Start forfra og prøv igen.";
      // Knapperne for lavt, for højt og korrekt bliver deaktiveret
      feedbackButtons.forEach((button) => {
        button.disabled = true;
      });
      return;
    }
    // Her starter komputeren forfra med et nyt gæt, hvis man har svaret for lavt eller for højt
    makeGuess();
  });
});
