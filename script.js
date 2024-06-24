/*PARTIE NAVBAR RESPONSIVE*/

hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function() {
    nav.classList.toggle("active");
}
/*FIN PARTIE NAVBAR RESPONSIVE*/
/*NAVBAR STICKY*/
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 2);
})
/*FIN NAVBAR STICKY*/


/*Scroll section*/
function smoothScroll(cible, offset = 0) {
  const element = document.getElementById(cible);
  if (element) {
    window.scrollTo({
      top: element.offsetTop + offset,
      behavior: 'smooth'
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const anchors = document.querySelectorAll('a[href^="#azienda"]');
  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const target = anchor.getAttribute('href').substring(1);
      // Vous pouvez définir un décalage spécifique ici, par exemple 50 pixels.
      smoothScroll(target, -50);
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const anchors = document.querySelectorAll('a[href^="#chisono"]');
  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const target = anchor.getAttribute('href').substring(1);
      // Vous pouvez définir un décalage spécifique ici, par exemple 50 pixels.
      smoothScroll(target, -50);
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const anchors = document.querySelectorAll('a[href^="#secundo"]');
  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const target = anchor.getAttribute('href').substring(1);
      // Vous pouvez définir un décalage spécifique ici, par exemple 50 pixels.
      smoothScroll(target, -50);
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const anchors = document.querySelectorAll('a[href^="#contatti"]');
  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const target = anchor.getAttribute('href').substring(1);
      // Vous pouvez définir un décalage spécifique ici, par exemple 50 pixels.
      smoothScroll(target, -50);
    });
  });
});
/*Fin Scroll section*/ 


const carousel = document.querySelector('.carousel');

let isDown = false;
let startX;
let scrollLeft;





  //↓ ICI C'EST LA FONCTION QUI FAIT QUE LE BOUTON ME RAMÈNE VERS LE HAUT
function scrollToTop() {
  window.scrollTo({
    top: 10,
    behavior: "smooth",
  });
}



//↓ ICI CA DÉCIDE DE QUAND APPARAÎT MON BOUTON
document.addEventListener("DOMContentLoaded", function() {
  const limit = 250;
  const scrollTopBtn = document.querySelector("#scroll-top-btn");



  document.addEventListener("scroll", function() {
    scrollTopBtn.classList.toggle("show", window.scrollY >= limit);
  });
});




