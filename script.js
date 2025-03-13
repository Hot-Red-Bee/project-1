let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const guesses = [];

const checkGuess = () => {
  const userGuess = parseInt(document.getElementById('guessField').value);
  const guessesDisplay = document.getElementById('guesses');
  const resultDisplay = document.getElementById('guessResult');
  const attemptsDisplay = document.getElementById('attempts');

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    resultDisplay.innerText = 'Please enter a valid number between 1 and 100.';
    return;
  }

  attempts++;
  guesses.push(userGuess);

  guessesDisplay.innerText = guesses.join(', ');
  attemptsDisplay.innerText = attempts;

  if (userGuess === targetNumber) {
    resultDisplay.innerText = `Correct! You guessed the number in ${attempts} attempts.`;
    disableInput();
    document.getElementById('playAgain').style.display = 'block';
  } else if (userGuess < targetNumber) {
    resultDisplay.innerText = 'Too low! Try again.';
  } else {
    resultDisplay.innerText = 'Too high! Try again.';
  }

}
const disableInput = () =>{
  document.getElementById('guessField').disabled = true;
  document.getElementById('guessSubmit').disabled = true;
}

const resetGame = () => {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guesses.length = 0;

  document.getElementById('guessField').value = '';
  document.getElementById('guesses').innerText = '';
  document.getElementById('guessResult').innerText = '';
  document.getElementById('attempts').innerText = attempts;

  document.getElementById('guessField').disabled = false;
  document.getElementById('guessSubmit').disabled = false;
  document.getElementById('playAgain').style.display = 'none';
}
