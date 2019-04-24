document.addEventListener('DOMContentLoaded', function() {

  const imgCarousel = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg", "./img/5.jpg"];

  let i = 0;
  let x = (imgCarousel.length) - 1;

  const elements = {
    carousel: document.querySelector('.carousel'),
    btn: {
      left: document.querySelector('.btnLeft'),
      right: document.querySelector('.btnRight')
    }
  };

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

  let int = 3000;
  interval = setInterval(displayNext, int);

  function startInterval() {
    interval = setInterval(displayNext, int);
  };

  function stopInterval() {
    clearInterval(interval);
  };

  function displayPrevious() {
    (i <= 0) ? i = 4 : i--;
    changeImg(i);
  };

  function displayNext() {
    (i >= x) ? i = 0 : i++;
    changeImg(i);
  };

  function changeImg() {
    elements.carousel.style.backgroundImage = 'url(' + imgCarousel[i] + ')';
  };

  let initialize = function() {
    changeImg(i);
  };

  initialize();
})
