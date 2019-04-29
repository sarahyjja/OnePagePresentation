document.addEventListener('DOMContentLoaded', function() {

  const imgCarousel = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg", "./img/5.jpg"];

  let i = 0;
  let x = (imgCarousel.length) - 1;

  const elements = {
    carousel: document.querySelector('.carousel'),
    btn: {
      left: document.querySelector('.btnLeft'),
      right: document.querySelector('.btnRight'),
      stop: document.querySelector('.btnStop')
    }
  };

  elements.btn.left.onclick = function() {
    displayPrevious()
  };
  elements.btn.right.onclick = function() {
    displayNext()
  };

  elements.btn.stop.onclick = function() {
    controlStop()
  };

  document.addEventListener('keyup', function(e){
    if(e.keyCode == '37'){
      displayPrevious()
    }
    if(e.keyCode == '39'){
      displayNext()
    }
  });

  let int = 2000;
  let interval = 0;
  let play = true;

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

  function controlStop() {
    if(play === true){
      play = false;
      stopInterval();
    } else {
      play = true;
      startInterval();
    }
  }

  function changeImg() {
    elements.carousel.style.backgroundImage = 'url(' + imgCarousel[i] + ')';
  };

  let initialize = function() {
    startInterval();
    changeImg(i);
  };

  initialize();
})
