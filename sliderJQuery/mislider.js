$(document).ready(function () {

    var SliderModule = (function() {

        var pb = {}; // Creamos un objeto
        // Almacenamos nuestro #slider en el atributo elslider
        pb.elslider = $("#slider");
        // El atributo item es un array que almacena los paneles del slider
        pb.items = {
            panels: pb.elslider.find(".slider-wrapper > li"),
        }

        var SliderInterval,
            currentSlider = 0,
            nextSlider = 1,
            lengthSlider = pb.items.panels.length;



        // Constructor del Slider
        pb.init = function(settings){
            var loscontroles = "";
            // consolo.log("Inicializando");
            SliderInit(); // Para inicializar el slider

            for(var i=0; i<lengthSlider; i++){
                if (i == 0) {
                    loscontroles += '<li class="active"></li>';
                } else {
                    loscontroles +='<li></li>'
                }
            }
            //Insertamos los controles creados en el html;
            $("#control-buttons").html(loscontroles);

            $("#control-buttons li").click(function(){
                // Al hacer clic vemos en la consola el índice
                console.log(currentSlider);
                console.log($(this).index());
                if(currentSlider !== $(this).index()){
                    cambiarPanel($(this).index());
                }
                
            });
        }

        // Funcion que inicializa el slider
        var SliderInit = function(){
            //SliderInterval = setInterval(pb.startSlider,3000);
            SliderInterval = setInterval(pb.startSlider,3000);
        }






        pb.startSlider = function(){
            //console.log("Mensaje"); // ESTO SALE EN LA CONSOLA AL INSPECCIONAR
            var paneles = pb.items.panels;
            var controles = $("#control-buttons li");

            if (nextSlider>=lengthSlider) {
                nextSlider=0;
                currentSlider=lengthSlider-1;
            }
            // Efectos
            // Eliminamos la clase en todos los controles
            controles.removeClass("active");
            // Añadimos la clase al control del panel seleccionado
            controles.eq(nextSlider).addClass("active");
            // Efectos de transición
            paneles.eq(currentSlider).fadeOut("slow");
            paneles.eq(nextSlider).fadeIn("slow");

            //console.log(nextSlider);

            currentSlider=nextSlider;
            nextSlider+=1;
        }

        // Función para los controles del slider
        // Recibe el indice del panel a mostrar
        var cambiarPanel = function (indice){
             // Comprobamos que el indice esté disponible
             // dentro de los paneles de slider

             clearInterval(SliderInterval);

             var paneles = pb.items.panels;
             var controles = $("#control-buttons li");

             if (indice >= lengthSlider) {
                indice=0;
             } else if(indice<0) {
                indice = lengthSlider-1;
             }

             // Efectos
             // Eliminamos la clase en todos los controles
            controles.removeClass("active");
            // Añadimos la clase al control del panel seleccionado
            controles.eq(indice).addClass("active");
            // Efectos de transición
             paneles.eq(currentSlider).fadeOut("slow");
             // El siguiente panel del slider es el que indique
             // el parametro "indice"
             paneles.eq(indice).fadeIn("slow");

             // Actualizamos los datos
             currentSlider = indice;
             nextSlider = indice+1;

            // Reactivamos el Slider
            SliderInit();
        }






        return pb; // Devolvemos el objeto pb.


    }()); // es para que se ejecute automaticamente
					
    //SliderModule.init();
    SliderModule.init({duration:2000});
});