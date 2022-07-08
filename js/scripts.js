$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:500,
        dots: false,
        margin:0,
        nav:false,
        touchDrag: false,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});