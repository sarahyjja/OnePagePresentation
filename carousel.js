// Create an empty array variable to store my images and define their positions in the carousel
const imgCarousel = [];
imgCarousel[0] = "./img/1.jpg";
imgCarousel[1] = "./img/2.jpg";
imgCarousel[2] = "./img/3.jpg";
imgCarousel[3] = "./img/4.jpg";
imgCarousel[4] = "./img/5.jpg";

// Reeditable variables for the buttons logic
let i = 0;
let x = (imgCarousel.length) - 1;

// Setup rotation timing when no click
let int = 2000;
interval = setInterval(displayNext, int);

function startInterval() {
  interval = setInterval(displayNext, int);
};

function stopInterval() {
  clearInterval(interval);
};

// Setup the elements of my HTML page
const elements = {
  carousel: document.querySelector('.carousel'),
  btn: {
    left: document.querySelector('.btnLeft'),
    right: document.querySelector('.btnRight')
  }
};

// Setup the event listeners for my buttons
function eventListeners() {
  elements.btn.left.onclick = function() {
    displayPrevious()
  };
  elements.btn.right.onclick = function() {
    displayNext()
  };
};

// Create the buttons logic depending on the amount of images of the imgCarousel variable
function displayPrevious() {
  (i <= 0) ? i = 4 : i--;
  changeImg(i);
};

function displayNext() {
  (i >= x) ? i = 0 : i++;
  changeImg(i);
};

// Call of the hardcoded images and create a function who will be used to change them depending on index
function changeImg() {
  elements.carousel.style.backgroundImage = 'url(' + imgCarousel[i] + ')';
};

// Make the calls to display the carousel = controller
let initialize = (function() {
  eventListeners();
  changeImg(i);
})();
