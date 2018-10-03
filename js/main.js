// APPARITION DANS LA CONSOLE AU CLIC

// var myDiv = document.querySelector(".clickMe");
// myDiv.addEventListener("click", function () {
//   console.log("test");
// })


var threshold = 40;
var myHeader = document.querySelector('header');
//Fonction de callback appelait avec un élément
window.addEventListener("scroll", function(e) {
  if (window.scrollY > threshold) {
    myHeader.classList.add('scrolled');

  } else {
    myHeader.classList.remove('scrolled');
  }
})