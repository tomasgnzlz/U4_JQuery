$(document).ready(function() {

    // 1. 
    // Aunque ya esta la opacidad en 0 desde un principio tengo que hacer que cuando una vez enviadoç
    // me muestra los errores, pero si vacio o relleno un campo no me muestra/quita el error. 
    $("input, textarea").focusin(function() {
        $(this).siblings(".texto-error-campos").css("opacity", "0");
    });


    $("input, textarea").focusout(function() {
        if ($(this).val().trim().length === 0) {
            // Muestra el mensaje de error
            $(this).siblings(".texto-error-campos").css("opacity", "1");
        }
    });

    
    $("#boton-error").click(function() {
        
        $('input, textarea').each(function() {
            
            if ($(this).val().trim().length === 0) {
                $(this).siblings(".texto-error-campos").css("opacity","1");
            } else {
                $(this).siblings(".texto-error-campos").css("opacity","0");
            }
        });
    });

    // 2. 
    // Cuando se haga input sobre el textarea la variable se actualiza, el input es una 
    // funcion como el focusin cada vez que se escribe ddentro del textarea se actualiza
    $("textarea").on("input", function () {
        var caracteresActuales = $(this).val().length;
        var maximoCaracteres = $(this).attr("maxlength");
        $("#cantidad-caracteres").text(caracteresActuales + "/" + maximoCaracteres);
    });

    //4.  
    // DatePicker plugin
    $( function() {
        $( "#calendario" ).datepicker();
      } );


});
