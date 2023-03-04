/* 
    mostrar un reloj 
    formato: hh:mm:ss
*/
//ubicamos elemento dentro del DOM
const txt = document.querySelector('#txt');

//declaramos función/es de control
function reloj()
{
    //creamos objeto de fecha
    const fecha = new Date();

    //obtenemos el número correspondiente a las horas
    let horas = fecha.getHours();

    //obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes();
        if ( minutos < 10 ){
            minutos = '0' + minutos;
        }

    //obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds();
        if( segundos < 10 ){
            segundos = '0'+segundos;
        }

    //escribimos dentro del span
    //txt.innerText = horas + ':' + minutos + ':' + segundos;
    txt.innerText = `${horas}:${minutos}:${segundos}`;
}

//invocamos a la función reloj
reloj();  
//actualizamos el llamado a la función reloj()
setInterval( reloj, 1000 );