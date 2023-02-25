/*
    mostrar fecha actual
    formato: Sábado 25/02/2023
*/

//ubicamos elemento/s dentro del DOM
const txt = document.getElementById('txt');

//creamos objeto de fecha
const fecha = new Date();

//obtenemos el número de día de la semana
/*  getDay()
    Domingo -> 0
    Lunes -> 1
    Martes -> 2
    Miércoles -> 3
*/
let diaSemana = fecha.getDay();
    console.log( diaSemana );
switch( diaSemana ){
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Lunes';
        break;
    case 2:
        diaSemana = 'Martes'
    case 3:
        diaSemana = 'Miércoles';
        break;
    case 4:
        diaSemana = 'Jueves';
        break;
    case 5:
        diaSemana = 'Viernes';
        break;
    default:
        diaSemana = 'Sábado';
        break;
}
console.log( diaSemana );


//obtenemos el número del día del mes
let diaMes = fecha.getDate(); 
if ( diaMes < 10 ){
    diaMes = '0' + diaMes;
}

//obtenemos número de mes actual
let mes = fecha.getMonth() + 1;
if( mes < 10 ){
    mes = '0' + mes;
}

//obtenemos el número del año
let anio = fecha.getFullYear();

//escribimos en el span usando concatenación
//txt.innerText = diaSemana + ' ' + diaMes + '/' + mes + '/' + anio;

//escribimos en el span usando interpolación de variables
// template literal ---- `backtick
txt.innerText = `${diaSemana} ${diaMes}/${mes}/${anio}`;