const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  bodyEl: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', startRandom);
refs.stopBtn.addEventListener('click', stopRandom);
refs.stopBtn.disabled = true;

let randomIntervalId = null;

function setRandomColor() {
  const randomBgColor = colors[randomIntegerFromInterval(0, colors.length-1)];
  refs.bodyEl.style.backgroundColor = `${randomBgColor}`;
  console.log(`${randomBgColor}`);
}

function startRandom() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  refs.startBtn.removeEventListener('click', startRandom);
  console.log('Старт');

  refs.startBtn.style.backgroundColor = '#00ff7f';
  refs.stopBtn.style.backgroundColor = '#ff0000';

  randomIntervalId = setInterval(() => {
    console.log('Меняем цвет раз в секунду');
    setRandomColor();
  }, 1000);
}

function stopRandom() {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  refs.startBtn.addEventListener('click', startRandom);
  console.log('Стоп');

  refs.startBtn.style.backgroundColor = '#06e706';
  refs.stopBtn.style.backgroundColor = '#B22222';

  clearInterval(randomIntervalId);
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
