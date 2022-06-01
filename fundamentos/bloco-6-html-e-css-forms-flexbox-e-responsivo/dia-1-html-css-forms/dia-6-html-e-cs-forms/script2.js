const href = document.querySelector('#href');
const input1 = document.querySelector('#input-text');
const input2 = document.querySelector('#input-checkbox');

function elementA() {
  href.addEventListener('click', (event) => {
    event.preventDefault();
  });
};
elementA();

function inputOne() {
  input2.addEventListener('click', (event) => {
    event.preventDefault();
  });
};
inputOne();

function inputTwo() {
  input1.addEventListener('keypress', (event) => {
    const char = event.key;
    if(char !== 'a') {
      event.preventDefault();
    }
  })
};

inputTwo();