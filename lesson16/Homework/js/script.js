$(document).ready(function() {
    $('.main_btna.text-center, .main_btn.text-center.contact, nav ul li:eq(1)').on('click', function() {
        // $('.overlay').css('display', 'block');
        // $('.modal').css('display', 'block');

    //     $('.overlay').animate(
    //         {
    //             opacity: 'toggle'
    //         }, 1000
    //     );
    //     $('.modal').animate(
    //         {
    //             height: 'toggle'
    //         }, 1000
    //     );
    // });

    // $('.close').on('click', function() {
    //     $('.overlay').animate(
    //         {
    //             opacity: 'hide'
    //         }, 1000
    //     );
    //     $('.modal').animate(
    //         {
    //             height: 'hide'
    //         }, 1000
    //     );

    $('.overlay').fadeIn(1000);
    $('.modal').slideDown(1000);
    });

    $('.close').click(function() {
        $('.overlay').fadeOut(1000);
        $('.modal').slideUp(1000);
    });
});