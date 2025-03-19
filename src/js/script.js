$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 1200,
		/* adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/buttons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/buttons/right.svg"></button>'
      });
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 500 ){
        $('.pageup').fadeIn(); 
        } else {
        $('.pageup').fadeOut();
        }
    });

$("a[href^='#']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
});
