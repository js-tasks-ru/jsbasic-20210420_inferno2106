import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.data = slides;
    this.bareUI = this.UICtrl();
    this.curCount = 1,  
    this.slides = this.data.length,
    this.sum = 0
  }

  get elem() {
    return this.createContent();
  }
  createEvent(outerEl, id) {
    let event = new CustomEvent("product-add", {
      bubbles: true,
      detail: id
    })
    outerEl.addEventListener("product-add", (ev) => {
      console.log(ev);
    }, {once: true});
    outerEl.dispatchEvent(event);
    
  }
  addEvents(outerEl) {
    // Левая стрелка
    outerEl.querySelector('.carousel__arrow_left').addEventListener('click', (ev) => {
      this.obtainTags(outerEl);
      this.sum += this.imgWidth;
      this.curCount--;
     
      if(this.curCount === 1) {
        this.hideUI(this.arrowLeft);
        this.sum = 0; 
      }
      else if(this.curCount < this.slides) {
        this.showUI(this.arrowRight);
      }
      outerEl.querySelector('.carousel__inner').style.transform = `translateX(${this.sum}px)`;  
    });
    // Правая стрелка
    outerEl.querySelector('.carousel__arrow_right').addEventListener('click', (ev) => {
      this.obtainTags(outerEl);
      this.sum -= this.imgWidth;
      this.curCount++;
      
      if(this.curCount === this.slides) {
        this.hideUI(this.arrowRight);
        this.sum = -this.imgWidth * (this.slides - 1);
      } 
      else if(this.curCount > 1) {
        this.showUI(this.arrowLeft);
      }
      outerEl.querySelector('.carousel__inner').style.transform = `translateX(${this.sum}px)`;
    });
  }
  hideUI(el) {
    el.style.display = 'none';
  }
  showUI(el) {
    el.style.display = 'flex';
  }
  UICtrl() {
    let html = ``;
    this.data.forEach(item => {
      html += `
      <div class="carousel__slide" data-id="${item.id}">
        <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${item.price.toFixed(2)}</span>
          <div class="carousel__title">${item.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `
    })
    return html;
  }
  obtainTags(outerEl) {
    this.arrowLeft = outerEl.querySelector('.carousel__arrow_left'),
    this.arrowRight = outerEl.querySelector('.carousel__arrow_right'),
    this.list = outerEl.querySelector('.carousel__inner'),
    this.imgWidth = outerEl.querySelector('.carousel__slide').offsetWidth
  }

  createContent() {
    let outerEl = document.createElement('div');
    outerEl.className = 'carousel';
    outerEl.innerHTML = `
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner">
      ${this.UICtrl()}
    </div>
    `;
    
    this.addEvents(outerEl);
    this.hideUI(outerEl.querySelector('.carousel__arrow_left'));
    
    outerEl.querySelectorAll('.carousel__button').forEach(item => {
      item.addEventListener('click', (ev) => {
      this.createEvent(outerEl, ev.target.closest('button').parentElement.parentElement.dataset.id);
    });
   });
    
    return outerEl;
  }
  

}
