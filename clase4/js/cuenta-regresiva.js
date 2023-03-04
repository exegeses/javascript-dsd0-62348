//ubicamos elementos donreo del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');

//declaramos función de control
function control()
{
    //cremos objetos de fecha
    const ahora = new Date();
    const final = new Date( 2023, 2, 10 );

    //diferencia entre momentos de fecha
    let diferencia = final - ahora;
    /* el resultado de la deferencia 
       es un número expresado en
       milisegundos 
    */
     console.log(diferencia);

    //obtenemos la diferencia expresada en segundos
    let segundos = Math.trunc( diferencia/1000 );
        console.log( 'segundos: '+ segundos );

    //obtenemos la diferencia expresada en minutos
    let minutos = Math.trunc(segundos/60);
        console.log( 'minutos: '+ minutos );

    //obtenemos la diferencia expresada en horas
    let horas = Math.trunc( minutos/60 );
        console.log( 'horas: '+ horas );

    //obtenemos la diferencia expresada en días
    let dias = Math.trunc( horas/24 );
        console.log( 'dias: '+ dias );
}

control();