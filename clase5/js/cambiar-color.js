//ubicamos elemento dentro del DOM
//const caja = document.getElementById('caja');
const caja = document.querySelector('#caja');

/* código sin interactividad */
/*
caja.style.backgroundColor = '#0a2';
caja.innerText = 'verde';
*/

//desclaramos función/es de control
function cambiarColor( codigo, nombreColor )
{
    caja.style.backgroundColor = codigo;
    caja.innerText = nombreColor;
}
