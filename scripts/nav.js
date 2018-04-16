let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav__list");


hamburger.addEventListener('click', function(){
    navMenu.classList.toggle("active");
});