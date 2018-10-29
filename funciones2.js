De forma muy parecida a como usamos .ready() en $(document), usaremos 
la acción .slideDown() en nuestro objeto div de jQuery.Adentro de los
paréntesis de .slideDown, vamos a indicarle qué tan rápido debe deslizarse.

$(document).ready(function() {
    $('div').slideDown('slow');
});

Ahora vamos a incluir nuestra palabra clave function junto con dos nuevas
acciones, mouseenter() y fadeTo(). 
mouseenter() produce un cambio cuando mueves el puntero dentro de un elemento
de HTML determinado. Por ejemplo,

$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').hide();
    });
});

debería hacer que todos los <div> de la página se oculten en cuanto muevas el puntero
sobre uno de ellos. Sin embargo, vamos a ubicar a fadeTo() al interior de mouseenter(), 
en lugar de hide().
fadeTo() toma dos argumentos, o entradas, en medio de sus paréntesis, separados por una 
coma: la velocidad a la cual se desvanece el elemento, y la opacidad (o transparencia) 
que tendrá al desvanecerse. Por ejemplo,

fadeTo('fast', 0.25);

hará que el elemento se desvanezca rápidamente hasta un 25% de su opacidad original,volviéndolo muy claro.

Ahora queremos que nuestro botón se vuelva claro de nuevo cuando alejamos el puntero.jQuery también
incluye la acción mouseleave().

$(document).ready(function(){
    $('div').mouseenter(function(){
       $('div').fadeTo('fast',1);
    });
        $('div').mouseleave(function(){
       $('div').fadeTo('fast',0.5);
    });
});