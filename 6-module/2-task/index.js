import createElement from '../../assets/lib/create-element.js';



export default class ProductCard {
  
  get elem() {
    return this.shell;
  }
  
  constructor({name, price, category, image, id} = {}) {
    this.name = name;
    this.price = price.toFixed(2);
    this.category = category;
    this.image = image;
    this.id = id;
    this.shell = this.render();
  }

  createEvent(shell) {
    let event = new CustomEvent('product-add', {
      bubbles: true,
      detail: this.id
    })
    shell.addEventListener('product-add', (ev) => {}, { once: true });
    shell.dispatchEvent(event);
    
  }
  upperPart() {
    return `
    <div class="card__top">
      <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
      <span class="card__price">€${this.price}</span>
    </div>
    `
  }
  bottomPart() {
    return `
    <div class="card__body">
      <div class="card__title">${this.name}</div>
      <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>
    `
  }
  makeShell() {
    return `
      ${this.upperPart()}
      ${this.bottomPart()}
    `
  }
  render() {
    let shell = document.createElement('div');
    shell.className = 'card';
    shell.innerHTML = this.makeShell();
    
    shell.querySelector('.card__button').addEventListener('click', () => {
      this.createEvent(shell);
    });
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