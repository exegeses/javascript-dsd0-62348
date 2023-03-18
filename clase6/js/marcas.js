//ubicamos elemento dentro del DOM
const txt = document.querySelector('#txt');

let marcas = [
    'Hermes', 'Zara', 
    'Boss', 'Aeropostale', 
    'Tommy', 'Hollister',
    'Nike'
];

/* variable auxiliar */
let posicion = 0;

//mostrar la primera marca en el span
txt.innerText = marcas[ posicion ];

//declaramos funciones de control
next.addEventListener(
    'click',
    function()
    {
        posicion++;
        if( posicion > 6 )
        {
            posicion = 0;
        }
        console.log(posicion);
        //mostrar la marca en el span
        txt.innerText = marcas[ posicion ];
    }
);
prev.addEventListener ('click' , 
    function () {
        posicion--;
        
        if ( posicion < 0 ) {
            posicion = 6;
         }     
         console.log(posicion);
    // mostrar la marca en el span
    txt.innerText = marcas [ posicion ];    
    }
);