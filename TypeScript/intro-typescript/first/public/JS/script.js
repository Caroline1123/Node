"use strict";
function compareUserGuess(event) {
    event.preventDefault();
    const secretNumber = generateSecretNumber();
    const userInput = document.getElementById("guess");
    if (!userInput) {
        console.log("No user input field found.");
        return;
    }
    else {
        const userNumber = parseInt(userInput.value);
        if (secretNumber == userNumber) {
            alert("Awesome! You number " +
                userNumber +
                " was correct. You can be named many things, hungry not being one of them.");
        }
        else {
            alert("Bummer... You guessed " +
                userNumber +
                " and the secret number was " +
                secretNumber +
                ".");
        }
    }
}
function generateSecretNumber() {
    const secretNumber = getRandomArbitrary(1, 22);
    return secretNumber;
}
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
const guessForm = document
    .getElementById("guess-form");
if (guessForm) {
    guessForm.addEventListener("submit", compareUserGuess);
}
else {
    console.log("No element found.");
}
console.log('buh?');
//# sourceMappingURL=script.js.map