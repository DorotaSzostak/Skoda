const cars = [
     {
         name: "SKODA Yeti 1,4 TDI",
         price:64500,
         image: "components/search/img/Layer%2010.png",
         milage: 121000,
         credit: 1240
     },
         {
         name: "SKODA Yeti 1,4 TDI",
         price:74500,
         image: "components/search/img/Layer%209.png",
         milage: 151000,
         credit: 1300
     },
        {
         name: "SKODA Yeti 1,4 TDI",
         price:35500,
         image: "components/search/img/Layer%205.png",
         milage: 200000,
         credit: 900
     },
            {
         name: "SKODA Yeti 1,4 TDI",
         price:40000,
         image: "components/search/img/Layer%209.png",
         milage: 140000,
         credit: 1200
     },
]

const resultSection = document.querySelector('.search-results__item');

const renderCars = cars => {
    const markup = `
                        <img  class="search-results__item--image" src="${cars.image}" alt="car">
                    <div class="search-results__item--text">
                        <p class="price">${cars.price} zł</p>
                        <p class="model">${cars.name}</p>
                        <p class="description">1,4 TSI (125KM),SUV, 1390cm3 diesel, manual<span class="milage">${cars.milage}km</span></p>
                    </div>
                    <div class="search-results__item--buttons">
                        <img class="background" src="components/search/img/Shape%2031.png" alt="background shape">
                        <div class="credit-label">
                        <img class="credit-label--background" src="components/search/img/Layer%207.png">
                        <p class="credit-label--text">Rata miesięczna już od</p>
                        <p class="credit-label--rate">${cars.credit} zł</p>
                        </div>
                        <button class="small">więcej informacji</button>
                    `
    resultSection.insertAdjacentHTML("beforeend", markup);
}

cars.forEach(renderCars)

const clearResults = () => {
  resultSection.innerHTML = '';
};

const sortValues = (key, order='asc') =>{
    return function(a,b) {
        const varA = (typeof a[key] === 'string') ? 
      a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ? 
      b[key].toUpperCase() : b[key];
      
    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order == 'desc') ? 
      (comparison * -1) : comparison
    );
  };
    }

const selectedItem = document.querySelectorAll('select')
selectedItem.forEach(function(val,i){
    console.log(val.name)
    console.log(i)
    
    selectedItem[i].addEventListener("change", function(){
    if(selectedItem[i].value === "rosnąco") {
        clearResults()
    cars.sort(sortValues(selectedItem[i].name, 'asc'));
    cars.forEach(renderCars);
    
} else {
    clearResults()
    cars.sort(sortValues(selectedItem[i].name, 'desc'))
    cars.forEach(renderCars);
}
});

})






              