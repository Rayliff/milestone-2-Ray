//buat kondisi variabel awal
let score = 0;
let timeLeft = 10;
let timer;

//DOM element
const clickBtn = document.getElementById("click-btn");
const startBtn = document.getElementById("start-btn");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const resultText = document.getElementById("result");


//fungsi startGame, untuk fungsi isi gamenya
function startGame() {
  score = 0;
  timeLeft = 10;
  scoreText.textContent = score;
  timeText.textContent = timeLeft;
  resultText.textContent = "";

  clickBtn.disabled = false;  //aktifkan click button
  startBtn.disabled = true;   //nonaktifkan start button

  // Jalankan timer hitung mundur
  timer = setInterval(() => {
    timeLeft--;
    timeText.textContent = timeLeft;

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timer);
  clickBtn.disabled = true;   //nonaktifkan tombol click
  startBtn.disabled = false;  //nonaktifkan tombol start
  resultText.textContent = `Game Selesai! Skor Akhir: ${score}`;
}

function addScore() {
  score++;
  scoreText.textContent = score;
}

// Event listeners
startBtn.addEventListener("click", startGame);
clickBtn.addEventListener("click", addScore);
