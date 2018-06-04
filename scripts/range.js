var moreBtn = document.querySelector(".search__details");
var rangeContainer = document.querySelectorAll(".search-more__container");
var searchBtn = document.querySelector(".search__button")

moreBtn.addEventListener('click', function(){
    rangeContainer.forEach(el => el.classList.toggle("inactive"));
//    for(var i =0; i< rangeContainer.length; i++){
//        rangeContainer[i].classList.toggle("inactive")
//    }
    searchBtn.classList.toggle("inactive")
});

$( function() {
    $( "#slider-range1" ).slider({
      range: true,
      min: 1990,
      max: 2018,
      values: [ 2001,2010 ],
      slide: function( event, ui ) {
        $( "#amount--year" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#amount--year" ).val( $( "#slider-range1" ).slider( "values", 0 ) +
      " - " + $( "#slider-range1" ).slider( "values", 1 ) );
      
      
    $( "#slider-range2" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount--km" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] + " tyś." );
      }
    });
    $( "#amount--km" ).val( $( "#slider-range2" ).slider( "values", 0 ) +
      " - " + $( "#slider-range2" ).slider( "values", 1 ) );
      
       $( "#slider-range3" ).slider({
      range: true,
      min: 2500,
      max: 500000,
      values: [ 15000, 250000 ],
      slide: function( event, ui ) {
        $( "#amount--price" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] + " zł" );
      }
    });
    $( "#amount--price" ).val( $( "#slider-range3" ).slider( "values", 0 ) +
      " - " + $( "#slider-range3" ).slider( "values", 1 ) );
      
       $( "#slider-range4" ).slider({
      range: true,
      min: 500,
      max: 3000,
      values: [ 500, 1200 ],
      slide: function( event, ui ) {
        $( "#amount--loan" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] + " zł" );
      }
    });
    $( "#amount--loan" ).val( $( "#slider-range4" ).slider( "values", 0 ) +
      " - " + $( "#slider-range4" ).slider( "values", 1 ) );
  } );