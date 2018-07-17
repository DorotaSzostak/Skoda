var moreBtn = document.querySelector(".search__details");
var rangeContainer = document.querySelectorAll(".search-more__container");
var searchBtn = document.querySelector(".search__button")

moreBtn.addEventListener('click', function(){
    rangeContainer.forEach(el => el.classList.toggle("inactive"));
    searchBtn.classList.toggle("inactive")
    if(searchBtn.classList.contains("inactive")){
       moreBtn.innerHTML = "więcej szczegółów"
       } else {
           moreBtn.innerHTML = "mniej szczegółów"
       }
});

let newCars = [];
let minPrice = 15000;
let maxPrice = 250000;
let minMilage = 75000;
let maxMilage = 300000;
let minCredit = 540;
let maxCredit = 1200;
const popUp = document.querySelector(".popUp")


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
          minMilage = ui.values[0] *1000;
          maxMilage = ui.values[1] *1000;
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
          minPrice = ui.values[0];
          maxPrice = ui.values[1];
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
           minCredit = ui.values[0];
           maxCredit = ui.values[1];

      }
    });
    $( "#amount--loan" ).val( $( "#slider-range4" ).slider( "values", 0 ) +
      " - " + $( "#slider-range4" ).slider( "values", 1 ) );
    
    function searchingSettings (){
        newCars = cars.filter(function(el){
        return  el.milage > minMilage && el.milage < maxMilage && el.price > minPrice && el.price < maxPrice 
            && el.credit > minCredit && el.credit < maxCredit ;
            
          });

          clearResults();
        if(newCars.length === 0){
            popUp.style.display = "block"
        } else 
         newCars.forEach(renderCars)
        console.log(newCars)
    }
    
    document.querySelector(".search__button").addEventListener('click', function(){
        searchingSettings();
    });
  } );

const popUpbtn = document.querySelector("#close").addEventListener('click', function(){
    popUp.style.display = "none"
});