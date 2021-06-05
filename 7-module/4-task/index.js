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
    this._addDragNDrop(this._steps);
    return el.firstElementChild;
  }
  // Drag n` Drop area
  _addDragNDrop(steps) {
    let square = this._elem.querySelector('.slider__thumb');
    square.addEventListener('pointerdown', (ev) => {
      ev.preventDefault();
      square.classList.add('slider_dragging');
      
      let rekt = this._elem.getBoundingClientRect();
      
    
      // let shift = ev.clientX - square.getBoundingClientRect().left;
      
      moveTo(ev.pageX);
      function moveTo(X) {
        
        
        let left = X - rekt.left;
        let relativeL = left / rekt.width;
      
        if(relativeL < 0) relativeL = 0;
        if(relativeL > 1) relativeL = 1; 
        
        square.style.left = `${(relativeL) * 100}%`;
        square.nextElementSibling.style.width = `${(relativeL) * 100}%`
        
        let val = Math.round(relativeL * (steps - 1))
        square.firstElementChild.textContent = val;
        StepSlider._makeActive(val);
        
        
      }
      function moveThumb(ev) {
        ev.preventDefault();
        moveTo(ev.pageX);
      }

      document.addEventListener('pointermove', moveThumb);
      // Release the square
      document.addEventListener('pointerup', () => {

        let val = parseInt(square.querySelector('.slider__value').textContent);
        square.style.left = `${val * (100 / (this._steps - 1))}%`;
        this._elem.querySelector('.slider__progress').style.cssText = `width: ${val * (100 / (this._steps - 1))}%`
        
        
        this._addCustomEvent(val);
        

        square.classList.remove('slider_dragging');
        document.removeEventListener('pointermove', moveThumb);
      }, {once: true})
    })
    square.ondragstart = function() {
      return false;
    }
  }

  // ---------------------------------------------
  _addClick() {
    this._elem.addEventListener('click', (ev) => {
      let rekt = this._elem.getBoundingClientRect();
      let clickedPos = ev.clientX - rekt.left;
      // Move the parameter to class-global
      this._value = Math.round((clickedPos / rekt.width) * (this._steps - 1));
      let val = this._value;

      this._insertValue();
      this.__moveColorLine();
      this._moveSquare();
      StepSlider._makeActive(val);
      this._addCustomEvent(val);
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
    let square = this._elem.querySelector('.slider__thumb');
    square.style.left = `${this._value * (100 / (this._steps - 1))}%`;
  }
  static _makeActive(val) {
    let children = Array.from(document.querySelector('.slider__steps').children);
    
    children[val].classList.add('slider__step-active');
    for(let i = 0; i < children.length; i++) {
      if(children[i].classList.contains('slider__step-active') && i === val) continue;
      children[i].classList.remove('slider__step-active')
    }
  }
  _addCustomEvent(x) {
    let event = new CustomEvent('slider-change', {
      bubbles: true,
      detail: x
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