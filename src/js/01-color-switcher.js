function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const bodyBackgroundColor = document.querySelector('body');
let timer = null;

stop.setAttribute('disabled', '');
start.addEventListener('click', () => {
  start.setAttribute('disabled', '');
  stop.removeAttribute('disabled', '');
  bodyBackgroundColor.style.backgroundColor = `${getRandomHexColor()}`;
  timer = setInterval(() => {
    let randomColor = getRandomHexColor();
    bodyBackgroundColor.style.backgroundColor = `${randomColor}`;
  }, 1000);
});

stop.addEventListener('click', () => {
  stop.setAttribute('disabled', '');
  clearInterval(timer);
  timer = null;
  start.removeAttribute('disabled', '');
});
