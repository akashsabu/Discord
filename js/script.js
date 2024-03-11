$(document).ready(function(){

    $(".hamburger-button").click(function () {
        $("#nav").toggleClass("active");
        $("#nav ul").toggleClass("flex");
        $("#overlay").toggleClass("overlay");
    });

    
    $('#overlay').click(function () {
        $("#nav").toggleClass("active");
        $("#nav ul").toggleClass("flex");
        $("#overlay").toggleClass("overlay");
    });


    mQBasedClass(screen.width);

    $(window).resize(function() {
        mQBasedClass(screen.width);
    });
    function mQBasedClass(width){
        if(width<981) {
            $("#nav").addClass('nav-links');
        }
        else{
            $("#nav").removeClass('nav-links');

        }
    } 
});


