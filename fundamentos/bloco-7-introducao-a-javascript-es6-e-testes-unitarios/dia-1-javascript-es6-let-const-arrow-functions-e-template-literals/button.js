const button = document.getElementById('button');
const span = document.getElementById('count');

let clickCount = 0;

const click = () => {
  button.addEventListener('click', () => {
    span.innerHTML = clickCount += 1;
  })
};

click();