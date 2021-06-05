import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this._modal = this.createOuter();
  }
  
  setTitle(content) {
    this._modal.querySelector('.modal__title').innerHTML = content;
  }
  setBody(content) {
    this._modal.querySelector('.modal__body').innerHTML = content.innerHTML;
  }
  _addXCloseButtonEvent() {
    this._modal.querySelector('.modal__close').addEventListener('click', () => {
      this.close();
    })
  }
  
  createOuter() {
    let html = `
    <div class="modal">
      <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">           
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title">
              
            </h3>
          </div>

          <div class="modal__body">
            
          </div>
        </div>
      </div>
    </div>
    `;
    return createElement(html);
  }

  _modalOpening() {
    document.body.classList.add('is-modal-open');
  }
  _modalClosing() {
    document.body.classList.remove('is-modal-open');
  }
  // Открытие и закрытие модального окна
  open() {
    this._modalOpening();
    this._addXCloseButtonEvent();
    document.documentElement.addEventListener('keydown', (ev) => {
      if(ev.code === 'Escape') this.close();
    }, {once: true});
    document.body.appendChild(this._modal);
  }
  close() {
    this._modalClosing();
    document.body.querySelector('.modal').remove();
  }
}
