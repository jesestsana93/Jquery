¿QUE ES JQUERY?
jQuery es una biblioteca, o un conjunto de complementos útiles (adds-ons), para el lenguaje de programación JavaScript

Así como necesitamos una etiqueta <link> para conectar nuestros HTML y CSS, necesitamos una etiqueta <script> para
conectar nuestro HTML y jQuery. La etiqueta se ve así:
<script type="text/javascript" src="src"> </script>

sintaxis $(document).ready(algo);
.ready(); es una función, o una acción básica, en jQuery. 
La parte en medio de los paréntesis de .ready() es el evento de jQuery,
que ocurre tan pronto como el documento de HTML está listo.

En la primera línea tienes listo el documento, en la segunda línea estableces el elemento
de HTML sobre el que quieres que el usuario haga clic, y en la tercera línea haces que 
suceda el efecto que quieras.  La segunda línea es opcional

$(document).ready(function() {
    $(elementoParaClic).evento(function() {
        $(elementoAfectado).efecto();
    });
});

$() es una función (un tipo de acción) que convierte lo que esté en medio de los paréntesis
en un objeto de jQuery; es decir, algo con lo que jQuery pueda trabajar. 

Escribir dentro del $() vacío el nombre del elemento de HTML que quieres que
se desvanezca cuando hagas clic. Por ejemplo, si se trata de un párrafo, escribiríamos
$('p').fadeOut(1000);


código de jQuery que convertirá a <p> en un objeto de jQuery:
var parrafo = $('p');


En esencia, todo lo que puedas modificar con CSS, podrás modificarlo con jQuery. 
Esto incluye a los elementos que son descendientes de otros elementos:
$('ul li ol li');

a los pseudo-selectores:
$('li:nth-child(4)');

