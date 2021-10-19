const dice = document.querySelector(".dice"),
  rollBtn = document.querySelector(".btn--roll"),
  totalScore1 = document.querySelector("#score--0"),
  currentScore1 = document.querySelector("#current--0"),
  totalScore2 = document.querySelector("#score--1"),
  currentScore2 = document.querySelector("#current--1"),
  holdBtn = document.querySelector(".btn--hold"),
  player1 = document.querySelector(".player--0"),
  player2 = document.querySelector(".player--1"),
  newGameBtn = document.querySelector(".btn--new"),
  player2Name = document.querySelector("#name--1"),
  player1Name = document.querySelector("#name--0");

totalScore1.textContent = 0;
totalScore2.textContent = 0;

dice.classList.add("hidden");

let diceNumber = 0,
  player1TotalScore = 0,
  player2TotalScore = 0,
  player1CurrentScore = 0,
  player2CurrentScore = 0,
  name1 = prompt("Enter Player 1 Name"),
  name2 = prompt("Enter Player 2 Name");

player1Name.textContent = name1;
player2Name.textContent = name2;

function randomDice() {
  diceNumber = Math.floor(Math.random() * 6 + 1);
  dice.src = `dice-${diceNumber}.png`;
  dice.classList.remove("hidden");
}
let n = 1;
function updateCurrentScore() {
  randomDice();
  if (diceNumber == 1) {
    if (n == 1) {
      player1CurrentScore = 0;
      n = 2;
      currentScore1.textContent = player1CurrentScore;
      player1.classList.remove("player--active");
      player2.classList.add("player--active");
    } else if (n == 2) {
      player2CurrentScore = 0;
      n = 1;
      currentScore2.textContent = player2CurrentScore;
      player1.classList.add("player--active");
      player2.classList.remove("player--active");
    }
  } else {
    if (n == 1) {
      player1CurrentScore += diceNumber;
      currentScore1.textContent = player1CurrentScore;
    } else {
      player2CurrentScore += diceNumber;
      currentScore2.textContent = player2CurrentScore;
    }
  }
}

// function changePlayer(){
//     if(score())
// }
function updateTotalScore() {
  if (n == 1) {
    if (player1TotalScore <= 100) player1TotalScore += player1CurrentScore;
    player1CurrentScore = 0;
    if (player1TotalScore >= 100) {
      player1.classList.add("player--winner");
    }
    currentScore1.textContent = player1CurrentScore;
    totalScore1.textContent = player1TotalScore;
    player1.classList.remove("player--active");
    player2.classList.add("player--active");
    n = 2;
  } else {
    if (player2TotalScore <= 100) player2TotalScore += player2CurrentScore;
    player2CurrentScore = 0;
    if (player2TotalScore >= 100) {
      player2.classList.add("player--winner");
    }
    currentScore2.textContent = player2CurrentScore;
    totalScore2.textContent = player2TotalScore;
    n = 1;
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
  }
}
holdBtn.addEventListener("click", updateTotalScore);
rollBtn.addEventListener("click", function () {
  randomDice();
  updateCurrentScore();

  //make another function using string temp literal for the name
});
newGameBtn.addEventListener("click", function () {
  location.reload();
});
