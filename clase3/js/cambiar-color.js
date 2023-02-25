//ubicamos elemento dentro del DOM
//const caja = document.getElementById('caja');
const caja = document.querySelector('#caja');

/* código sin interactividad */
/*
caja.style.backgroundColor = '#0a2';
caja.innerText = 'verde';
*/

//desclaramos función/es de control
function cambiarColorVerde()
{
    caja.style.backgroundColor = '#0a2';
    caja.innerText = 'verde';
}
function cambiarColorRojo()
{
    caja.style.backgroundColor = '#d00';
    caja.innerText = 'rojo';
}
