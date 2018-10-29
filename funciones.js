Una función está compuesta de tres partes: la palabra clave function,
los argumentos que la función tome (que van en medio de () y se separan por comas,(si se trata de más de uno),
y cualquier acción que la función deba ejecutar (que van en medio de {}). La forma general es:

function(argumento1, argumento2, etc.) {
    Realiza una acción
    Realiza otra acción
    ¡Realiza otra acción más!
}

$(document).ready(function() {
    $('div').click(function() {
        $('div').fadeOut('slow');
    });
});

ASIGNAR VALORES
El signo = es usado para asignar valores. Por ejemplo, en jQuery puedes escribir

var $p = $('p');

Con lo cual se almacena el objeto de jQuery $('p') en la variable $p . 
Una variable es solamente un nombre útil que usamos para almacenar valores de jQuery.

Si queremos modificar un elemento de HTML que está anidado, podríamos hacer esto:

$(document).ready(function() {
    var $item = $('div ul li ol li');
    $item.fadeOut('fast');
});

Codigo de CSS que se modifico:
<body>
        <div> ¡Recuerda!
            <ul>
                <li>
                    <ol>
                        <li>Comienza con la palabra clave...

DIFERENCIAS ENTRE $ y $():
$p es simplemente un nombre de variable. 
$() es la función disfrazada que crea objetos de jQuery.