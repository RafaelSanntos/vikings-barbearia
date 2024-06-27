$(function(){
    $("header").load("./components/header.html"); 
    $("footer").load("./components/footer.html");
    $("#about").load("./pages/about.html"); 
    $("#services").load("./pages/services.html");
    $("#units").load("./pages/units.html");
    $("#professionals").load("./pages/professionals.html");
    $("#subscription").load("./pages/subscription.html");
    $("#banner").load("./pages/banner.html");
    
    let swiperReviw = new Swiper(".review-slider", {
        spaceBetween: 20,
        grabCursor: true,
        loop:true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        breakpoints:{
            0:{
                slidesPerView:1,
            },
            600:{
                slidesPerView:2,
            },
        },
    });

    let swiperHome = new Swiper(".home-slider", {
        spaceBetween: 20,
        effect: "fade",
        grabCursor: true,
        loop:true,
        autoplay: {
            delay: 4000,  
        }, 
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});
