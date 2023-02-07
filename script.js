//querySelector solo coge el primero que encuentra
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);
console.log(input.value)
console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})

h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';//Inserta todo como texto
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo'); //Cambiaria el que hay

h1.classList.add('rojo'); //Añadiria
h1.classList.remove('verde'); //Solo quitaria
// h1.classList.toggle('verde'); //dependiendo si la tiene o no, la pone o lo quita
// h1.classList.contains('verde');

input.value = "456"

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);

pid.innerHTML = "";
pid.appendChild(img);
