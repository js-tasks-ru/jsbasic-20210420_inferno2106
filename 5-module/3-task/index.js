function initCarousel() {
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let list = document.querySelector('.carousel__inner');
  let imgWidth = document.querySelector('.carousel__slide').offsetWidth;
  let curCount = 1;
  let slides = 4;
  let sum = 0;
  hideUI(arrowLeft);

  document.querySelector('.carousel__arrow_left').addEventListener('click', (ev) => {
    sum += imgWidth;
    console.log(sum);
    curCount--;

    if(curCount === 1) {
      hideUI(arrowLeft);
      sum = 0; 
    }
    else if(curCount < 4) {
      showUI(arrowRight);
    }
    list.style.transform =  `translateX(${sum}px)`;  
  });

  document.querySelector('.carousel__arrow_right').addEventListener('click', (ev) => {
    
    sum -= imgWidth;
    console.log(sum);
    curCount++;
    if(curCount === 4) {
      hideUI(arrowRight);
      sum = -imgWidth * (slides - 1);
    } 
    else if(curCount > 1) {
      showUI(arrowLeft);
    }
    list.style.transform = `translateX(${sum}px)`;
  });

  function hideUI(el) {
    el.style.display = 'none';
  }
  function showUI(el) {
    el.style.display = 'flex';
  }
}
