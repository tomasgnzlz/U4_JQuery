$(document).ready(function () {
  /*
   1. Modifica el HTML y añade el código CSS necesario para que el menú aparezca desde la izquierda y 
   desplace al resto de la página hacia la derecha. El resto de la página se debe oscurecer para simular
   que se encuentra en segundo plano. Se debe poder ocultar el menú haciendo clic en cualquier posición de la página.
*/
    var menu = $("ul#menu");
    var divContenido = $("div#desplazable");
    var fondoNegro = $("div#oscuro");

    $("header#top > div > nav#menu-principal > span").on({
        click: function () {
            menu.css("left", "0px");

            divContenido.css({
                transform: "translateX(20rem)",
                transition: "transform 0.5s ease",
            });

            fondoNegro.show();
        }
    });

    $("div#oscuro").on({
        click: function () {
            menu.css("left", "-20rem");

            divContenido.css({
                transform: "translateX(0)",
                transition: "transform 0.5s ease",
            });

            fondoNegro.hide();
        }
    });

  /*
   2. Modifica el HTML y añade el código CSS necesario para que al posicionar el botón
   sobre un producto aparezca sobre el artículo un botón de COMPRA.
   */
  //var imgProductos = $("main > article")
  var imgProductos = $("#parteArriba > article")

  imgProductos.on({
    mouseenter: function () {
        
        var textoComprar = $(this).find(".comprar").text();
        var botonCompra = $("<span class='botonAñadir'>" + textoComprar + "</span>");
        
        botonCompra.css({
          "position": "absolute",
          "top": "50%",
          "left": "50%",
          "background-color": "black",
          "padding": "1rem",
          "border-radius": "15px",
          "font-weight": "bold",
          "color": "white",
          "transform": "translate(-50%, -50%)" // Ajuste para centrar el botón
        });
        
        $(this).find("a:last-child > picture > img").css("opacity", 0.8);
        $(this).find("a:last-child").append(botonCompra);
      },
      mouseleave: function () {
        $(this).find("a:last-child > picture > img").css("opacity", 1);
        $(this).find(".botonAñadir").remove();
      }
});


  // 3. Investiga como usar un Plugin para crear un slider y utilízalo en esta web. */
  // en el html
});
