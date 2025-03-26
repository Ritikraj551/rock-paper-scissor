let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");

const userNum = document.querySelector("#myScore");
const compNum = document.querySelector("#compScore");

const resetBtn = document.querySelector("#reset");

let drawGame = () => {
  msg.innerText = "Games Was Draw. Play Again!";
  msg.style.backgroundColor = "black";
};

let compGenChoice = () => {
  const options = ["rock", "paper", "scissor"];
  let randChoice = Math.floor(Math.random() * 3);
  return options[randChoice];
};

let showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userNum.innerText = userScore;
    msg.innerText = `You Won!! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compNum.innerText = compScore;
    msg.innerText = `You Lost!! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

let resetGame = () => {
  userScore = 0;
  compScore = 0;
  userNum.innerText = userScore;
  compNum.innerText = compScore;
  msg.innerText = "Play your move";
  msg.style.backgroundColor = "black";
};

let gamePlay = (userChoice) => {
  const compChoice = compGenChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice == "scissor" ? true : false;
    } else if (userChoice === "paper") {
      userWin = compChoice == "rock" ? true : false;
    } else {
      userWin = compChoice == "paper" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    gamePlay(userChoice);
  });
});

resetBtn.addEventListener("click", resetGame);
