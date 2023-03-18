const dado = document.querySelector('#dado');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let caras = [ 
                'dado1.png', 'dado2.png', 'dado3.png',
                'dado4.png', 'dado5.png', 'dado6.png'
            ];

//variable auxiliar 
let posicion = 0;
//mostramos una cada del dado en el div
dado.innerHTML = '<img src="imgs/'+caras[posicion]+'">';            

next.addEventListener(
    'click',
    function()
    {
        posicion++;
        if ( posicion >= caras.length) {
            posicion = 0;
        }
        dado.innerHTML = '<img src="imgs/' + caras[posicion] + '">';
    }
);

prev.addEventListener(
    'click',
    function()
    {
        posicion--;
        if (posicion < 0) {
            posicion = 5;
        }
        dado.innerHTML = '<img src="imgs/' + caras[posicion] + '">';
    }
);