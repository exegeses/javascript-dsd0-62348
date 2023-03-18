/*
let marca = 'Harmes';
let marca2 = 'Zara';
let marca3 = 'Boss';
let marca4 = 'Aeropostale';
let marca5 = 'Tommy';
let marca6 = 'Hollister';
*/
let marcas = [
                'Hermes', 'Zara', 
                'Boss', 'Aeropostale', 
                'Tommy', 'Hollister'
            ];

console.log( marcas );
document.write( marcas );
document.write('<br>');
document.write( marcas[1] );
document.write('<br>');

let semana = [ 
    'Domingo', 'Lunes', 'Martes',
    'Miércoles', 'Jueves', 'Viernes',
    'Sábado'
     ];
let fecha = new Date();
let numSemana = fecha.getDay();
document.write( semana[numSemana] );