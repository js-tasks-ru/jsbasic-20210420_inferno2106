import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this._data = slides;
    this._bareUI = this._outerPart();
    this._curCount = 1,  
    this._slides = this._data.length,
    this._sum = 0
    this.elem = this._createContent()
  }
  
  _onArrowRightClick() {
    this._obtainTags();
    this._sum -= this.imgWidth;
    this._curCount++;
    this._checkCount();
  }
  _onArrowLeftClick() {
    this._obtainTags();
    this._sum += this.imgWidth;
    this._curCount--;
    this._checkCount();
  }
    _checkCount() {
    if(this._curCount === 1) {
      this._hideUI(this.arrowLeft);
      this._sum = 0; 
    }
    else if(this._curCount < this._slides) {
      this._showUI(this.arrowRight);
    }

    if(this._curCount === this._slides) {
      this._hideUI(this.arrowRight);
      this._sum = -this.imgWidth * (this._slides - 1);
    } 
    else if(this._curCount > 1) {
      this._showUI(this.arrowLeft);
    }
    this._outerEl.querySelector('.carousel__inner').style.transform = `translateX(${this._sum}px)`;
  }
  _createEvent(ev) {
    let div = ev.target.closest('.carousel');
    let event = new CustomEvent("product-add", {
      bubbles: true,
      detail: ev.target.closest("[data-id]").dataset.id
    })
    div.dispatchEvent(event);
  }
  _addEvents() {
    // Левая стрелка
    this._outerEl.querySelector('.carousel__arrow_left').addEventListener('click', () => this._onArrowLeftClick());
    // Правая стрелка
    this._outerEl.querySelector('.carousel__arrow_right').addEventListener('click', () => this._onArrowRightClick());
  }
   _hideUI(el) {
    el.style.display = 'none';
  }
   _showUI(el) {
    el.style.display = 'flex';
  }
  _innerPart() {
    let html = ``;
    this._data.forEach(item => {
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
  _outerPart() {
    return `
    <div class='carousel'>
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">
        ${this._innerPart()}
      </div>
    </div>
    `
  }
  _obtainTags() {
    this.arrowLeft = this._outerEl.querySelector('.carousel__arrow_left'),
    this.arrowRight = this._outerEl.querySelector('.carousel__arrow_right'),
    this.list = this._outerEl.querySelector('.carousel__inner'),
    this.imgWidth = this._outerEl.querySelector('.carousel__slide').offsetWidth
  }

  _createContent() {
    let outerEl = createElement(this._outerPart());
    this._outerEl = outerEl;

    this._addEvents();
    this._hideUI(outerEl.querySelector('.carousel__arrow_left'));
    

    outerEl.querySelectorAll('.carousel__button').forEach(item => {
      item.addEventListener('click', this._createEvent);
   });
    
    return outerEl;
  }
  

}
