// MENÚ
$(document).ready(function () {

    // 1. 
    // A) Mostrar y Ocultar menú
    // B) Ajustar Tamaño de linea-hamburgueesa
    // C) Modificar el color de la hamburgesa
    var menuIcono = $("div#hamburger");
    var menu = $("ul#menu-toggle");

    menuIcono.click(function () {


        if (menu.is(":hidden")) {
            menu.slideDown("slow");
            menuIcono.find("span:nth-child(2)").animate({width:"1.9rem"},500);
            // Modifico el Color de la hamburguesa
            menuIcono.stop(true).animate({
                backgroundColor:"red",
             }, 500);
        }else{
            menu.slideUp("fast");
            menuIcono.find("span:nth-child(2)").animate({width:"1.37rem"},500);
            
            // Controlo la cola de efectos con stop(true)
            menuIcono.stop(true).animate({
                backgroundColor:"white",
            }, 500);
        }
    });

    //Scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 0) {
            menu.removeAttr("style");
            menuIcono.removeAttr("style");
            subMenu.removeAttr("style");
        }
    });

    // E) 
    var subMenu = $("ul#menu-toggle > li:nth-child(3)");
    subMenu.click(function () {
        $(this).find("span").text("-");

        if ($(this).find("ul").is(":hidden")) {
            $(this).find("ul").css("display","flex");
            //$(this).find("ul").css("left","0");
            $(this).find("ul").animate({
                left:"0",
            },500);
            $(this).find("span").text("-");
            
            
        }else{
            $(this).find("ul").animate({
                left:"-50kw",
            },500);
            $(this).find("ul").css("display","none");
            $(this).find("span").text("+");
            
        }
    });

    // F)Cuando se hace scroll, se cierra el menú
    $(window).resize(function () {
        menu.removeAttr("style");
        menuIcono.removeAttr("style");
        subMenu.removeAttr("style");
    });

});

// BARRA SOCIAL Y CHAT
$(document).ready(function () {
        //$("div#chat").fadeTo(1500,1);
        $("div#chat").fadeIn(500);
        $("nav#barra-social").fadeIn(500);

        $("#header-chat1").click(function () {
            $(this).slideUp();
            $("#header-chat2").slideDown();
            $("#window-chat").slideDown();
        })
        $("#header-chat2 > span").click(function () {
            $("#header-chat1").slideDown();
            $("#header-chat2").slideUp();
            $("#window-chat").slideUp();
        })
});


// BOTON DE COMPRA
$(document).ready(function () {
    
    $("article.producto").mouseenter(function () {
        $(this).find("a").css({
            "display":"flex",  
        })
    })

    $("article.producto").mouseleave(function () {
        $(this).find("a").css({
            "display":"",
        })
    })

});

// FLECHA Y CABECERA
$(document).ready(function () {
    var volverArriba = $("a#go-up");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            volverArriba.stop(true).fadeTo(500, 1);
            $("header#home-header").css({
                "position":"fixed",
                "width":"100%",
                "opacity":"0.85",
                "z-index":"99999",
            });
            
        } else {
            volverArriba.stop(true).fadeTo(500, 0);  
            $("header#home-header").css({
                "position":"",
                "width":"100%",
                "opacity":"1",
            });
        }
    });

    volverArriba.click(function () {
        $("html").animate({
            scrollTop:0
        },500);
    })

});

// FORMULARIO
$(document).ready(function () {
    
    //FORMULARIO DE CONTACTO
    // Cuando gana el Foco
    $("#window-chat input").focusin(function () {
        $(this).next(".error-chat").css("visibility","hidden");
    });
    
    // Cuando pierde el Foco
    $("#window-chat input").focusout(function () {
        if ($(this).val().trim().length === 0) {
            $(this).next(".error-chat").css("visibility","visible");
        }
    });
    
    // TEXT_AREA
    $("textarea").on("input",function () {
        var contador = $(this).val().trim().length;
        var maximoCarac = $(this).attr("maxlength");
        var letrasRestantes = maximoCarac-contador;
        $("span#info-caracteres").text("Dispone de " + letrasRestantes + " caracteres")
    });
    
});



// INPUTS_EMAIL

/* var errorMessage = $("<span>").text("Completa este campo para continuar").css("color", "red");
input.after(errorMessage);
input.next().css("opacity","0")
ESTO SIRVE PARA METER UN TEXTO EN EL HTML PERO EN TIEMPO DE EJECUCIÓN
*/