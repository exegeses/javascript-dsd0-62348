/* version Alexander */
const caja = document.getElementById('caja');
const mostrar = document.getElementById('mostrar');
const ocultar = document.getElementById ('ocultar');
const mostrarOcultar = document.getElementById ('mostrarOcultar');


/* idBoton.addEventListener */

mostrar.addEventListener ('click' , function(){
    caja.classList.remove ('ocultar');
})

ocultar.addEventListener ('click' , function(){
   caja.classList.add ('ocultar')
})

mostrarOcultar.addEventListener ('click' , function(){
    caja.classList.toggle ('ocultar');
})
