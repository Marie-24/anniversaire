jQuery(function($) {
    $("#first").click(function () {
        $('#' + $(this).attr('rel'))[0].play();
        $("#second").fadeIn(10000);
        $("#third").fadeIn(3000);
        $("#container_b").slideDown(8000, function () {
            $("#container_c").show('slow');
        });
        
       
        })
    });



        
      




