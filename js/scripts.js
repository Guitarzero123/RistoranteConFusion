/* old tooltip script
$(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
*/

$(function() {

//Carousel Buttons
    $('#mycarousel').carousel({interval: 2000});

    $('#carouselButton').on('click', function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    //Reservation Button
    $('#reserveButton').on('click', function() {
        $('#reservationModal').modal('toggle');
    });

    //Login Link
    $('#loginLink').on('click', function() {
        $('#loginModal').modal('toggle');
    });

});