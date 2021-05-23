function initCarousel() {
  let _arrowLeft = document.querySelector('.carousel__arrow_left');
  let _arrowRight = document.querySelector('.carousel__arrow_right');
  let _list = document.querySelector('.carousel__inner');
  let _imgWidth = document.querySelector('.carousel__slide').offsetWidth;
  let _curCount = 1;
  let _slides = 4;
  let _sum = 0;
  hideUI(_arrowLeft);

  document.querySelector('.carousel__arrow_left').addEventListener('click', (ev) => {
    _sum += _imgWidth;
    _curCount--;
    _checkCount(); 
  });

  document.querySelector('.carousel__arrow_right').addEventListener('click', (ev) => {
    _sum -= _imgWidth;
    _curCount++;
    _checkCount();
  });

  function _checkCount() {
    if(_curCount === 1) {
      hideUI(_arrowLeft);
      _sum = 0; 
    }
    else if(_curCount < 4) {
      showUI(_arrowRight);
    }

    if(_curCount === 4) {
      hideUI(_arrowRight);
      _sum = -_imgWidth * (_slides - 1);
    } 
    else if(_curCount > 1) {
      showUI(_arrowLeft);
    }
    _list.style.transform =  `translateX(${_sum}px)`; 
  }

  function hideUI(el) {
    el.style.display = 'none';
  }
  function showUI(el) {
    el.style.display = 'flex';
  }
}
