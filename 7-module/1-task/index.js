import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this._categories = categories;
  }
  get elem() {
    return this._render();
  }
  _createOuter() {
    return `
    <button class="ribbon__arrow ribbon__arrow_left">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>

    <nav class="ribbon__inner">
      ${this._createItems()}
    </nav>

    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    `;
  }
  _createItems() {
    let html = '';
    this._categories.forEach(item => {
      html += `<a href="#" class="ribbon__item" data-id=${item.id}>${item.name}</a>`
    })
    return html;
  }
  _addEvents(el) {
    let inner = el.querySelector('.ribbon__inner');
    // Клик евент на кнопки с категориями
    inner.addEventListener('click', this._chooseCategory);

    // Эвенты на стрелки
    el.querySelector('.ribbon__arrow_left').onclick = () => {
      inner.scrollBy(-350, 0);
      setTimeout(() => this._checkArrowVisibility(inner, el), 350)
    }
    el.querySelector('.ribbon__arrow_right').onclick = () => {
      inner.scrollBy(350, 0);
      setTimeout(() => this._checkArrowVisibility(inner, el), 350)
    }
  }
  _render() {
    let el = createElement(this._createOuter());
    el.classList.add('ribbon');

    this._addEvents(el);
    return el;
  }

  _hideArrow(arrow) {
    arrow.classList.remove('ribbon__arrow_visible');
  }
  _showArrow(arrow) {
    arrow.classList.add('ribbon__arrow_visible');
  }
  _checkArrowVisibility(inner, el) {
    let scrolledRight = inner.scrollWidth - inner.scrollLeft - inner.clientWidth;
    if(!inner.scrollLeft) {
      this._hideArrow(el.querySelector('.ribbon__arrow_left'));
    } else {
      this._showArrow(el.querySelector('.ribbon__arrow_left'));
    }

    if(!scrolledRight) {
      this._hideArrow(el.querySelector('.ribbon__arrow_right'));
    } else {
      this._showArrow(el.querySelector('.ribbon__arrow_right'));
    }
  }

  _chooseCategory(ev) {
    ev.preventDefault();
    // Чекаем есть ли класс с подсветкой на других кнопках
    let parent = ev.target.closest('.ribbon__inner');
    Array.from(parent.children).forEach(item => {
      if(item.classList.contains('ribbon__item_active')) item.classList.remove('ribbon__item_active');
    })
    // Добавляем подсветку на активную кнопку и заодно сгенерим событие с уникальным id
    if(ev.target.classList.contains('ribbon__item')) {
      ev.target.classList.add('ribbon__item_active');
    }
    setTimeout(()=> {
      let event = new CustomEvent('ribbon-select', {
        detail: ev.target.closest('.ribbon__item').dataset.id,
        bubbles: true
      })
      parent.parentElement.dispatchEvent(event);
      parent.parentElement.addEventListener('ribbon-select', (ev) => { console.log(ev);}, {once: true});
    }, 0)
  }
}