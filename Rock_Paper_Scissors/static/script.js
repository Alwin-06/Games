// Get DOM elements
const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const botResult = document.querySelector(".bot_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");
const userScoreDisplay = document.getElementById("userScore");
const compScoreDisplay = document.getElementById("compScore");

// Define possible images and outcomes
const botImages = ["static/images/rock.png", "static/images/paper.png", "static/images/scissors.png"];
const outcomes = {
  RR: "Draw",
  RP: "BOT",
  RS: "YOU",
  PP: "Draw",
  PR: "YOU",
  PS: "BOT",
  SS: "Draw",
  SR: "BOT",
  SP: "YOU"
};

// Initialize scores and game state
let userScore = 0;
let compScore = 0;
let gameActive = false;

// Event handler for image click
function handleOptionClick(event) {
  if (!gameActive) return;

  const clickedImage = event.currentTarget;
  const clickedIndex = Array.from(optionImages).indexOf(clickedImage);

  // Reset results and display "Wait..."
  userResult.src = botResult.src = "static/images/rock.png";
  result.textContent = "Wait...";

  // Activate clicked image and deactivate others
  optionImages.forEach((image, index) => {
    image.classList.toggle("active", index === clickedIndex);
  });

  gameContainer.classList.add("start");

  setTimeout(() => {
    gameContainer.classList.remove("start");

    // Set user and bot images
    const userImageSrc = clickedImage.querySelector("img").src;
    userResult.src = userImageSrc;

    const randomNumber = Math.floor(Math.random() * botImages.length);
    const botImageSrc = botImages[randomNumber];
    botResult.src = botImageSrc;

    // Determine the result
    const userValue = ["R", "P", "S"][clickedIndex];
    const botValue = ["R", "P", "S"][randomNumber];
    const outcomeKey = userValue + botValue;
    const outcome = outcomes[outcomeKey] || "Unknown";

    // Update scores based on the result
    if (outcome === "YOU") {
      userScore++;
    } else if (outcome === "BOT") {
      compScore++;
    }

    // Display the result and update scores
    result.textContent = userValue === botValue ? "Match Draw" : `${outcome} WON!`;
    userScoreDisplay.textContent = userScore;
    compScoreDisplay.textContent = compScore;
  }, 2500);
}

// Function to start the game
function startGame() {
  gameActive = true;
  result.textContent = "Let's Play!";
}

// Function to stop the game
function stopGame() {
  gameActive = false;
  result.textContent = "Game Stopped";
}

// Function to reset the game
function resetGame() {
  userScore = 0;
  compScore = 0;
  gameActive = false;
  userScoreDisplay.textContent = userScore;
  compScoreDisplay.textContent = compScore;
  result.textContent = "Let's Play!";
  userResult.src = botResult.src = "static/images/rock.png";
  optionImages.forEach(image => image.classList.remove("active"));
}

// Attach event listeners to option images
optionImages.forEach(image => {
  image.addEventListener("click", handleOptionClick);
});

// Attach event listeners to control buttons
document.querySelector(".controls .button:nth-child(1)").addEventListener("click", startGame);
document.querySelector(".controls .button:nth-child(2)").addEventListener("click", stopGame);
document.querySelector(".controls .button:nth-child(3)").addEventListener("click", resetGame);
