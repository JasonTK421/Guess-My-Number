'use strict';

const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (num) {
  document.querySelector('.number').textContent = num;
};
const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

// Main game functionality
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);
    numberWidth('30rem');
    setBackgroundColor('#60b347');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
});

// reset the game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = generateSecretNumber();
  setBackgroundColor('#222');
  numberWidth('15rem');
  displayNumber('?');
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  score = 20;
  displayScore(score);
});
