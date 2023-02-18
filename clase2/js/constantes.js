//para crear constantes utilizamos la palabra "const"
const numero = 127;
//numero = 8; /* da error porque es constante */

//ubicar elemento dentro del documento
//document.getElementById('txt').innerText = 'frase';
const txt = document.getElementById('txt');

//escribir dentro del span
txt.innerText = numero;

