$(document).ready(function () {

    /*
    1. Al hacer varias líneas de scroll en el documento se debe mostrar el botón VOLVER ARRIBA. 
    Al volver a la parte superior de la página el botón se oculta. Al hacer clic sobre el botón 
    nos vamos a la parte superior de la página. Todo se hace con efectos. Debes controlar la 
    acumulación de efectos.
    */ 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 15) {
            //$("#volverarriba").css("display", "flex");
            $("#volverarriba").delay("slow").show(500);
        } else{
            //$("#volverarriba").css("display", "none");
            $("#volverarriba").delay("slow").hide();
        }
    });
    
    // 2. El menú se debe mostrar y ocultar utilizando efectos y debes controlar la acumulación de efectos en la cola.
    $("ul#menu").css("display","none"); // _En principio lo oculto, y cuando el click lo enseño otra vez
    $("header#top > div > nav#menu-principal").on({
        click: function () {
          
            if ($("ul#menu").is(":hidden")) {
                  //$("ul#menu").fadeIn(200);
                  $("ul#menu").toggle(5000);
            }else{
                $("ul#menu").fadeOut(200);
            }
        }
    });




    
});