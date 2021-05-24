import createElement from '../../assets/lib/create-element.js';



export default class ProductCard {
  
  get elem() {
    return this._rendered;
  }
  
  constructor({name, price, category, image, id} = {}) {
    this._name = name;
    this._price = price.toFixed(2);
    this._category = category;
    this._image = image;
    this._id = id;
    this._rendered = this._render();
  }

   _createEvent(shell) {
    let event = new CustomEvent('product-add', {
      bubbles: true,
      detail: this._id
    })
    
    shell.addEventListener('product-add', (ev) => { console.log(ev)}, { once: true });
    shell.dispatchEvent(event);
  }
  _upperPart() {
    return `
    <div class="card__top">
      <img src="/assets/images/products/${this._image}" class="card__image" alt="product">
      <span class="card__price">€${this._price}</span>
    </div>
    `
  }
  _bottomPart() {
    return `
    <div class="card__body">
      <div class="card__title">${this._name}</div>
      <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>
    `
  }
  _makeShell() {
    return `
      ${this._upperPart()}
      ${this._bottomPart()}
    `
  }
  _onCardBtnClick(shell) {
   this._createEvent(shell);
  }
  _render() {
    let shell = createElement(this._makeShell());
    shell.className = 'card';
    
    shell.querySelector('.card__button').addEventListener('click', () => this._onCardBtnClick(shell));
    return shell;
  }
  
}





// let product = {
//     name: "Laab kai chicken salad", // название товара
//     price: 10, // цена товара
//     category: "salads", // категория, к которой он относится, нам это понадобится чуть позже
//     image: "laab_kai_chicken_salad.png", // название картинки товара
//     id: "laab-kai-chicken-salad" // уникальный идентификатор товара, нужен для добавления товара в корзину
// }

{/* <div class="card">
    <div class="card__top">
        <img src="/assets/images/products/...значение product.image..." class="card__image" alt="product">
        <span class="card__price">€<!--значение product.price--></span>
    </div>
    <div class="card__body">
        <div class="card__title"><!--значение product.name--></div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div> */}