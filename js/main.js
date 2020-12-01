/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

function createCarousel(slidesCount = 5) {

  var slidesContainer = document.getElementById('carousel');

  var slides = document.createElement('ul');
  slides.setAttribute('class', 'slides');

  for (let index = 0; index < slidesCount; index++) {
    var slide = document.createElement('li');
    slide.setAttribute('class', 'slides__item');
    if (index == 0) {
      slide.classList.add('active');
    }

    var link = document.createElement('a');
    link.setAttribute('href', '#');

    slide.appendChild(link);

    slides.appendChild(slide);
  }

  slidesContainer.appendChild(slides);

  var indicators = document.createElement('div');
  indicators.setAttribute('class', 'indicators');

  for (let index = 0; index < slidesCount; index++) {
    var indicator = document.createElement('span');
    indicator.setAttribute('class', 'indicators__item');
    if (index == 0) {
      indicator.classList.add('active');
    }
    indicator.setAttribute('data-slide-to', index);
    indicators.appendChild(indicator);
  }
  slidesContainer.appendChild(indicators);


  var controls = document.createElement('div');
  controls.setAttribute('class', 'controls');

  var controlPrev = document.createElement('div');
  controlPrev.setAttribute('class', 'controls__item controls__prev');
  var faLeft = document.createElement('i');
  faLeft.setAttribute('class', 'fas fa-chevron-left');

  controlPrev.appendChild(faLeft);
  controls.appendChild(controlPrev);

  var controlNext = document.createElement('div');
  controlNext.setAttribute('class', 'controls__item controls__next');
  var faRight = document.createElement('i');
  faRight.setAttribute('class', 'fas fa-chevron-right');

  controlNext.appendChild(faRight);
  controls.appendChild(controlNext);

  var controlPause = document.createElement('div');
  controlPause.setAttribute('class', 'controls__item controls__pause');
  var faPlay = document.createElement('i');
  faPlay.setAttribute('class', 'fas fa-play');

  controlPause.appendChild(faPlay);
  controls.appendChild(controlPause);

  slidesContainer.appendChild(controls);

  styleContainer = document.createElement('style');
  let styleCode = `
    .controls,
    .slides {
      position: relative;
    }
    .indicators {
      display: flex;
    }
    .indicators__item {
      display: block;
      width: 20px;
      height: 20px;
      background-color: blue;
      margin: 10px;
      border-radius: 5px;
    }`;

  styleContainer.innerHTML = styleCode;
  slidesContainer.appendChild(styleContainer);

  function indicatorsHandler(event) {
    let target = event.target;
  
    if (target.classList.contains('indicators__item')) {
      target.style.backgroundColor = 'red';

    }
  }
  
  function eventIndicators() {
    let indicators = document.querySelector('div.indicators');
  
    indicators.addEventListener('click', indicatorsHandler);
  }
  eventIndicators();
}

createCarousel();
