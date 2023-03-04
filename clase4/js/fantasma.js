//ubicamos elemento dentro del DOM
const fantasma = document.querySelector('#fantasma');

/* variables auxiliares */
let direccion = 'derecha';
let posx = 0;

// declaramos función de control
function moverX()
{
    if( direccion == 'derecha' ){
        //movimiento hacia la derecha
        posx++; // posx = posx + 1;
    }
    if( direccion == 'izquierda' ){
        posx--; // posx = posx - 1; 
    }

    if( posx >= 500 ){
        direccion = 'izquierda';
    }
    if( posx <= 0 ){
        direccion = 'derecha';
    }

    fantasma.style.left = posx+'px';
} 

//actualizamos el llamado a moverX
setInterval( moverX, 10 );