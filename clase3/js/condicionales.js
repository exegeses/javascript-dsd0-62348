//ubicamos elemento dentro del DOM
const contenedor = document.getElementById('contenedor');

//hacer pregunta a usuario y almacenar la respuesta en una variable
let respuesta = prompt('¿qué selección ganó el mundial qatar 2022?');

//condicional
if ( respuesta == 'Argentina' || 'argentina' ) {
    //código a ejecutar si la condicón es true
    contenedor.innerHTML = '<img src="imgs/ok.png">';
}
else{
    //código a ejecutar si la condicón es false
    contenedor.innerHTML = '<img src="imgs/error.png">';
}