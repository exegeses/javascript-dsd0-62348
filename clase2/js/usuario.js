//ubicamos elemento/s dentro del documento
const txt = document.getElementById('txt');

//ventana emergente prompt()
let nombre = prompt('Ingrese su nombre');

//escribimos en el span
txt.innerText = nombre;