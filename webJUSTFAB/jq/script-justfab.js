$(document).ready(function () {

    /*
    1. Al hacer varias líneas de scroll en el documento se debe mostrar el botón VOLVER ARRIBA. 
    Al volver a la parte superior de la página el botón se oculta. Al hacer clic sobre el botón 
    nos vamos a la parte superior de la página. Todo se hace con efectos. Debes controlar la 
    acumulación de efectos.

    5. Cuando haces un poco de scroll sobre la página debe aparecer con el efecto que consideres 
    más apropiado, la cabecera de la página fijada en la parte superior.
    */ 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 15) {
            //$("#volverarriba").css("display", "flex");
            $("#volverarriba").delay("slow").show(500);

            $("header#top").css({
                position: "fixed",
                opacity: "90%",
                width: "100%"
            })
        } else{
            //$("#volverarriba").css("display", "none");
            $("#volverarriba").delay("slow").hide();
            $("header#top").css({
                position: "",
                opacity: "",
                width: ""
            })
        }
    });
    
    // 2. El menú se debe mostrar y ocultar utilizando efectos y debes controlar la acumulación de efectos en la cola.
    $("ul#menu").css("display","none"); // _En principio lo oculto, y cuando el click lo enseño otra vez
    $("header#top > div > nav#menu-principal >span").on({
        click: function () {
            $("ul#menu").toggle(500);
        }
    });


    /*3. Cada opción del submenú se muestra con un efecto y al mostrar una se ocultan todas las demás.
    En el menú desplegable, cambiar el icono de > (en la web la punta de flecha apunta hacia abajo) por 
    otro similar con la punta de la flecha hacia arriba cuando una opción del menú principal esté desplegada. 
    Este movimiento se puede realizar directamente o con una animación. */
    $("ul#menu > li").on({
        click: function () {
            $("ul#menu > li").find("span").css({
                transform: "rotate(0deg)",
                transition: "transform 0.3s ease"
            })
            // oculto todos los submenus
            // si no ponfgo el siblings no sale
            $(this).siblings().children("ul").slideUp(500);
            // muestro uno en concreto
            if ($(this).children("ul").is(":hidden")) {
                $(this).children("ul").slideDown(500);
                $(this).find("span").css({
                    transform: "rotate(180deg)",
                    transition: "transform 0.3s ease"
                }); 
                
            } else {
                $(this).children("ul").slideUp(500);
                $(this).find("span").css("transform", "rotate(0deg)"); 

            }
        }
    }); 

    /*
    Al posicionar el ratón sobre la imagen de un producto debe aparecer otra imagen del mismo producto. 
    Cuando el ratón deja de estar sobe la imagen aparece la imagen inicial.
    */ 

    $("article.item img").on({
        mouseenter: function () {
            $(this).attr("src", $(this).attr("src").replace('.jpg', '-1.jpg'));
        },
        mouseleave: function () {
            $(this).attr("src", $(this).attr("src").replace("-1.jpg", ".jpg"));
        }
    });
});