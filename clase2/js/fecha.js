/*
    mostrar fecha actual
    formato  18/02/2023
*/

//ubicamos elemento/s dentro del documento
const txt = document.getElementById('txt');

//creamos objeto de fecha
const fecha = new Date();

//obtenemos el número del día del mes
let diaMes = fecha.getDate(); 

//obtenemos número de mes actual
let mes = fecha.getMonth() + 1;

//obtenemos el número del año
let anio = fecha.getFullYear();

//escribimos en el span
txt.innerText = diaMes + '/' + mes + '/' + anio;