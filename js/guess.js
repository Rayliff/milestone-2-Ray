const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");
const feedback = document.getElementById("feedback");
const attemptsText = document.getElementById("attempts");

let targetNumber;
let attempts;

function startGame() {
  // Pilih angka acak antara 1-100
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 5;

  feedback.textContent = "";
  attemptsText.textContent = attempts;
  guessInput.value = "";
  guessInput.disabled = false;
  submitBtn.disabled = false;
}

function checkGuess() {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = "Masukkan angka antara 1 sampai 100!";
    return;
  }

  attempts--;
  attemptsText.textContent = attempts;

  if (guess === targetNumber) {
    feedback.textContent = `🎉 Benar! Angkanya ${targetNumber}`;
    endGame();
  } else if (guess > targetNumber) {
    feedback.textContent = "Terlalu besar!";
  } else {
    feedback.textContent = "Terlalu kecil!";
  }

  if (attempts === 0 && guess !== targetNumber) {
    feedback.textContent = `😢 Habis percobaan! Angka yang benar: ${targetNumber}`;
    endGame();
  }

  guessInput.value = "";
}

function endGame() {
  guessInput.disabled = true;
  submitBtn.disabled = true;
}

// Event listeners
submitBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", startGame);

// Mulai game pertama kali
startGame();
