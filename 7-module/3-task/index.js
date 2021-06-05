export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this._steps = steps;
    this._value = value;
    this.elem = this._createElement();
  }
  
  _createHTML() {
    return `
    <div class="slider">
      <div class="slider__thumb" style="left:75%">
        <span class="slider__value">3</span>
      </div>

      <div class="slider__progress" style="width: 75%;"></div>

        <div class="slider__steps">
          <span></span>
          <span></span>
          <span></span>
          <span class="slider__step-active"></span>
          <span></span>
        </div>
    </div>`;
  }
  _createElement() {
    let el = document.createElement('div');
    el.innerHTML = this._createHTML();
    this._elem = el.firstElementChild;
    
    // Add click event
    this._addClick();
    return el.firstElementChild;
  }
  _addClick() {
    this._elem.addEventListener('click', (ev) => {
      let rekt = this._elem.getBoundingClientRect();
      let clickedPos = ev.clientX - rekt.left;
      // Move the parameter to class-global
      this._value = Math.round((clickedPos / rekt.width) * (this._steps - 1));


      this._insertValue();
      this.__moveColorLine();
      this._moveSquare();
      this._makeActive();
      this._addCustomEvent();
    })
  }
  _insertValue() {
    this._elem.querySelector('.slider__value').textContent = this._value;
  }
  __moveColorLine() {
    let bar = this._elem.querySelector('.slider__progress');
    bar.style.cssText = `width: ${this._value * (100 / (this._steps - 1))}%`
  }
  _moveSquare() {
    let  square = this._elem.querySelector('.slider__thumb');
    square.style.left = `${this._value * (100 / (this._steps - 1))}%`;
  }
  _makeActive() {
    let children = Array.from(this._elem.querySelector('.slider__steps').children);
    children[this._value].classList.add('slider__step-active');
    for(let i = 0; i < children.length; i++) {
      if(children[i].classList.contains('slider__step-active') && i === this._value) continue;
      children[i].classList.remove('slider__step-active')
    }
  }
  _addCustomEvent() {
    let event = new CustomEvent('slider-change', {
      bubbles: true,
      detail: this._value
    })
    this._elem.dispatchEvent(event);
  }
}


{/* <div class="slider">

<!--Ползунок слайдера с активным значением-->
<div class="slider__thumb" style="left: 50%;">
  <span class="slider__value">2</span>
</div>

<!--Заполненная часть слайдера-->
<div class="slider__progress" style="width: 50%;"></div>

<!--Шаги слайдера-->
<div class="slider__steps">
  <span></span>
  <span></span>
  <span class="slider__step-active"></span>
  <span></span>
  <span></span>
</div>
</div> */}