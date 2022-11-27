function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const bodyBackgroundColor = document.querySelector('body');
let timer = null;

start.addEventListener('click', () => {
  if (timer == null) {
    bodyBackgroundColor.style.backgroundColor = `${getRandomHexColor()}`;
    timer = setInterval(() => {
      let randomColor = getRandomHexColor();
      bodyBackgroundColor.style.backgroundColor = `${randomColor}`;
    }, 1000);
  } else return;
});

stop.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
});
