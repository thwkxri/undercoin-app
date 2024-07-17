const circle = document.getElementById('circle');
const scoreDisplay = document.getElementById('score');

function start() {
  setScore(getScore())
}

function setScore(score) {
  localStorage.setItem('score', score);
  scoreDisplay.textContent = score;
}

function getScore () {
  return Number(localStorage.getItem('score')) || 0;
}

function addOne () {
  setScore(getScore() + 1);
}

circle.addEventListener('click', (event) => {
  const rect = circle.getBoundingClientRect();
  const offsetX = event.clientX - rect.left - rect.width / 2;
  const offsetY = event.clientY - rect.top - rect.height / 2;

  const DEG = 40;

  const tiltX = (offsetY / rect.height) * DEG;
  const tiltY = (offsetX / rect.width) * -DEG;

  circle.style.setProperty('--tiltX', `${tiltX}deg`);
  circle.style.setProperty('--tiltY', `${tiltY}deg`);

  setTimeout(() => {
    circle.style.setProperty('--tiltX', '0deg');
    circle.style.setProperty('--tiltY', '0deg');
  }, 300);

  const plusOne = document.createElement('div');
  plusOne.classList.add('plus__one');
  plusOne.textContent = '+1';
  plusOne.style.left = `${event.clientX - rect.left}px`;
  plusOne.style.top = `${event.clientY - rect.top}px`;

  circle.parentElement.appendChild(plusOne);

  setTimeout(() => {
    plusOne.remove();
  }, 2000);

  addOne();
});

start();