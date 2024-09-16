'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = "Correct Number!";

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.floor(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

const msg = document.querySelector('.message');
const score = document.querySelector('.score');
const number = document.querySelector('.number');
let currScore = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    msg.textContent = 'Please enter a valid number...';
  } else if (guess === secretNumber) {
    number.textContent = secretNumber;
    msg.textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (currScore > highScore) {
      highScore = currScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    if (currScore > 1) {
      msg.textContent = guess > secretNumber ? 'Too high!' : 'Too Low!';
      currScore--;
      score.textContent = currScore;
    } else {
      msg.textContent = 'You lost!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score.textContent = '20';
  currScore = 20;
  number.textContent = '?';
  number.style.width = '15rem';
  msg.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.floor(Math.random() * 20) + 1;
  //   document.querySelector('.number').textContent = secretNumber;
});
