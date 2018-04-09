/*responsive text*/
 
        $(document).ready(function() {

            var fontSize = $(window).width()/50;
            $('body').css('font-size', fontSize);

            $(window).resize(function() {
                var fontSize = $(window).width()/50;
                $('body').css('font-size', fontSize);
            });

    });
    
    /*popup hide on page load, fadein, fadeout and close*/
    
        $(document).ready(function() { 
            $("#schedule-popup").hide();
        });
 
        $("#popup").click(function() {
            $("#schedule-popup").fadeIn("");
        });

         $("#close-popup").click(function() {
            $("#schedule-popup").fadeOut();
        });
   
   /*nav link hover font increase*/
    
       $(document).ready( function(){
        var size = $(".nav-links").css("fontSize");
        $(".nav-links").hover(
                function(){
                    $(this).css("fontSize", "187.5%");
                }, 
                function(){
                    $(this).css("fontSize", size);
                }
         );
    });
 