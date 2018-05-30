
$(document).ready(function(){
  $('.cars-slider').slick({
    slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      arrows: true,
      responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false
      }
    }
    ]
  });
});