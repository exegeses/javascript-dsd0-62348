//ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');

//declaramos función/es de control
function ocultar()
{
    caja.style.display = 'none';
}
function mostrar()
{
    caja.style.display = 'block';
}

function mostrarOcultar() {
    if ( caja.style.display == 'none') {
        mostrar();
    } else {
        ocultar();
    }
}

/* version Lautaro */
/*function mostrarOcultar() {
    if ( caja.style.display == 'none') {
        caja.style.display = 'block'
    } else {
        caja.style.display = 'none'
    }
}*/

/* versión Nelcy */
/*function doble()
{
    let x = document.getElementById('caja');
    if(x.style.display == 'none'){
        x.style.display = 'block';
    } else{
        x.style.display = 'none';
    }
}*/

