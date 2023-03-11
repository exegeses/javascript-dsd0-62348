const campoSegundos = document.querySelector('#segundos');
const boton = document.querySelector('#boton');
const img = document.querySelector('#img');

let intervalo = '';

boton.addEventListener(
    'click', function(){
        //quitar imagen
        img.innerHTML = ''; 
        segundos = campoSegundos.value;
        timer();
        intervalo = setInterval(timer, 1000);
});

function timer()
{
    // decrementamos segundos
    segundos--;
    console.log(segundos);
    if( segundos <= 0){
        clearInterval( intervalo );
        console.log( 'Alarma' );
        img.innerHTML = '<img src="imgs/alarm.png">' 
    }
}