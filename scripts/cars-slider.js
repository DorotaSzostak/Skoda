
$(document).ready(function(){
  $('.cars-slider').slick({
    slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      arrows: false,
      responsive: [
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      }
    }
    ]
  });
});