function compareUserGuess(event: Event) :void {
  event.preventDefault();

  const secretNumber: number = generateSecretNumber();
  const userInput = document.getElementById("guess") as HTMLInputElement |null ;
  if (!userInput) {
    console.log("No user input field found.");
    return;
  }
  else {
    const userNumber : number = parseInt(userInput.value);
    if (secretNumber == userNumber) {
      alert(
        "Awesome! You number " +
          userNumber +
          " was correct. You can be named many things, hungry not being one of them."
      );
    } else {
      alert(
        "Bummer... You guessed " +
          userNumber +
          " and the secret number was " +
          secretNumber +
          "."
      );
    }
  }
}

function generateSecretNumber() :number {
  const secretNumber :number = getRandomArbitrary(1, 22);

  return secretNumber;
}

function getRandomArbitrary(min: number, max :number): number {
  return Math.round(Math.random() * (max - min) + min);
}


const guessForm: HTMLElement | null = document
  .getElementById("guess-form") ;
  if (guessForm) {
    guessForm.addEventListener("submit", compareUserGuess);
  }
  else {
    console.log("No element found.");
  }

  
console.log('buh?');