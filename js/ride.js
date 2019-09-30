/*global WildRydes _config*/
$(document).ready(function() { 
    
    
    
// prendido

   var encender = $('#on').click(function(){

    
        const url = 'http://192.168.0.11/LED=ON'
        
         $.get(url, function(respuesta, status){
             if (status == 'LED=ON'){
                 respuesta("Bombillo encendido");
             }
         });

    });

    //apagado

   var apagar = $('#off').click(function(){       

        const url = 'http://192.168.0.11/LED=OFF'

         $.get(url, function(respuesta, status){
             if (status == 'LED=OFF'){
                respuesta("Bombillo encendido");
             }
         });

    });
    
});

