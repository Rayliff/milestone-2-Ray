// game state variable
let targetNumber;
let attemptsLeft;
let gameActive;
let previousGuesses;

//DOM elements
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const feedback = document.getElementById("feedback");
const attemptsLeftSpan = document.getElementById("attemptsLeft");
const gameContainer = document.getElementById("gameContainer");
const gameOverContainer = document.getElementById("gameOverContainer");
const gameOverMessage = document.getElementById("gameOverMessage");
const resetBtn = document.getElementById("resetBtn");
const previousGuessesContainer = document.getElementById("previousGuessesContainer");
const guessList = document.getElementById("guessList");

//set up variable game
function initGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;
    gameActive = true;
    previousGuesses = [];

    // Reset UI
    guessInput.value = ""; //kotak input kosong
    guessInput.disabled = false; //input diaktifkan, kalo true user ga bisa input
    submitBtn.disabled = false;
    attemptsLeftSpan.textContent = attemptsLeft;

    // Hide/Show Container
    gameContainer.classList.remove("hidden"); // tampilkan container game
    gameOverContainer.classList.add("hidden"); // sembunyikan container gameOver
    feedback.classList.add("hidden"); // sembunyikan container feedback
    previousGuessesContainer.classList.add("hidden"); // sembunyikan container previousGuess

    // Clear previous guesses display
    previousGuessesList.innerHTML = ""; // masih kosong

    // Focus on input for better UX
    guessInput.focus(); // fungsi focus saat user masuk webnya, bisa langsung input tanpa perlu klik.

    console.log("New game started! Target number:", targetNumber); // For debugging (remove in production)

    /**
     * Validate user input
     * @param {string} input - The user's input
     * @returns {object} - Validation result with isValid boolean and message
     */
    function validateInput(input) {
    // YOUR CODE HERE
    //Fungsi untuk cek input tidak boleh kosong
    const trimm = input.trim();
    if (trimm === ""){
        return { isValid: false, message: "Input is empty" };
    } 
    
    const number = parseInt(trimm, 10);
    if (isNaN(number)){
        return { isValid: false, message:"This is not number"}; // fungsi untuk cek bukan angka
    }else if (number < 1 || number > 100){
        return { isValid: false, message: "Just 1-100"}; // fungsi untuk cek angka tidak boleh di luar 1-100
    }
    if (previousGuesses.includes(number)){
        return { isValid: false, message: "You already guessed that number!" }; // fungsi untuk cek angka tidak boleh sama dengan tebakan sebelumnya
    }

    return { isValid: true, number: number };
    }

    /**
 * Display feedback message to the user
 * @param {string} message - The message to display
 * @param {string} type - The type of message (success, error, info)
 */
function showFeedback(message, type = "info") {
  feedback.textContent = message;
  feedback.classList.remove(
    "hidden",
    "bg-green-100",
    "text-green-800",
    "bg-red-100",
    "text-red-800",
    "bg-blue-100",
    "text-blue-800",
    "bg-yellow-100",
    "text-yellow-800"
  );

  // Apply appropriate styling based on message type
  switch (type) {
    case "success":
      feedback.classList.add("bg-green-100", "text-green-800");
      break;
    case "error":
      feedback.classList.add("bg-red-100", "text-red-800");
      break;
    case "high":
      feedback.classList.add("bg-yellow-100", "text-yellow-800");
      break;
    case "low":
      feedback.classList.add("bg-blue-100", "text-blue-800");
      break;
    default:
      feedback.classList.add("bg-blue-100", "text-blue-800");
  }
}
}
