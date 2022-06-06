/* const conectar = document.getElementById('conectar-1');
const sobre = document.getElementById('saber-sobre-1');
const cadastrar = document.getElementById('cadastrar-1'); */

const menu = document.getElementsByClassName('menu')

function conectarEvent() {
  const conectar = document.getElementById('conectar-1');
  conectar.addEventListener('onMouseOver', (event) => {
    event.target.style.backgroundColor = 'blue';
    event.target.classList('container-header');
  });
  
  conectar.addEventListener('onMouseOut', (event) => {
    event.target.style.backgroundColor = 'unset';
  });

}
conectarEvent();
