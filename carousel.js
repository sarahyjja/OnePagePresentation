// Create an empty array variable to store my images and define their positions in the carousel
const imgCarousel = [];
imgCarousel[0] = "img/pic01.jpg";
imgCarousel[1] = "img/pic02.jpg";
imgCarousel[2] = "img/pic03.jpg";

// Setup the elements of my HTML page
const elements = {
  carousel: document.querySelector('.carousel'),
  btn: {
    left: document.querySelector('.btnLeft'),
    right: document.querySelector('.btnRight')
  }
}
