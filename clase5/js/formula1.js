//ubicamos elementos dentro del DOM
const redbull = document.querySelector('#redbull');
const ferrari = document.querySelector('#ferrari');
const mercedes = document.querySelector('#mercedes');
const mclaren = document.querySelector('#mclaren');

/* estado inicial */
ferrari.style.display = 'none';
mercedes.style.display = 'none';
mclaren.style.display = 'none';

//declaramos función de control
function mostrarEscuderia( escuderia )
{
    if( escuderia == 'redbull' ){
        ferrari.style.display = 'none';
        redbull.style.display = 'flex';
        mercedes.style.display = 'none';
        mclaren.style.display = 'none';
    }
    else if( escuderia == 'ferrari' ){
        ferrari.style.display = 'flex';
        redbull.style.display = 'none';
        mercedes.style.display = 'none';
        mclaren.style.display = 'none';
    }
    else if( escuderia == 'mercedes' ){
        ferrari.style.display = 'none';
        redbull.style.display = 'none';
        mercedes.style.display = 'flex';
        mclaren.style.display = 'none';
    }
    else if( escuderia == 'mclaren' ){
        ferrari.style.display = 'none';
        redbull.style.display = 'none';
        mercedes.style.display = 'none';
        mclaren.style.display = 'flex';
    }
}