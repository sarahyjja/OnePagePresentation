// Create an eventListener for the whole file so it can be read at the top of HTML and stop using the last function controller
document.addEventListener('DOMContentLoaded', function() {

  // Create an empty array variable to store my images and define their positions in the carousel
  const imgCarousel = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg", "./img/5.jpg"];

  // Reeditable variables for the buttons logic
  let i = 0;
  let x = (imgCarousel.length) - 1;

  // Setup the elements of my HTML page
  const elements = {
    carousel: document.querySelector('.carousel'),
    btn: {
      left: document.querySelector('.btnLeft'),
      right: document.querySelector('.btnRight')
    }
  };

  // Setup the eventListeners for my buttons and keyboard
  elements.btn.left.onclick = function() {
    displayPrevious()
  };
  elements.btn.right.onclick = function() {
    displayNext()
  };

  document.addEventListener('keyup', function(e){
    if(e.keyCode == '37'){
      displayPrevious()
    }
    if(e.keyCode == '39'){
      displayNext()
    }
  });

  // Setup rotation timing when no click
  let int = 3000;
  interval = setInterval(displayNext, int);

  function startInterval() {
    interval = setInterval(displayNext, int);
  };

  function stopInterval() {
    clearInterval(interval);
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
  let initialize = function() {
    changeImg(i);
  };

  initialize();
})
