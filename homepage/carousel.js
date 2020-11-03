// JS for Gameboard Carousel

$('.carouselGameboardControls').carousel({
    interval: 2
})

$(".gameboard_carousel_left").click(function(){
    $("#carouselGameboardControls").carousel("prev");
});

$(".gameboard_carousel_right").click(function(){
    $("#carouselGameboardControls").carousel("next");
});

// -------------------------------------------------
// JS for Colouring-in Images Carousel

$('.carouselColourControls').carousel({
    interval: 2
})

$(".colour_carousel_left").click(function(){
    $("#carouselColourControls").carousel("prev");
});

$(".colour_carousel_right").click(function(){
    $("#carouselColourControls").carousel("next");
});
