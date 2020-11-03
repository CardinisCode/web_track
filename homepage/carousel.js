('.carouselGameboardControls').carousel({
    interval: 2
  })
  ('.carouselColourControls').carousel({
    interval: 2
  })

  $(".left").click(function(){
    $("#carouselGameboardControls").carousel("prev");
  });

  $(".right").click(function(){
    $("#carouselGameboardControls").carousel("next");
  });