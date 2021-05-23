/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
 

export default class UserTable {
  constructor(rows) {
    this._data = rows;
    this._rendered = this._render();
  }
  _outerLayer() {
    return `<thead>
                  <tr>
                    <th>Имя</th>
                    <th>Возраст</th>
                    <th>Зарплата</th>
                    <th>Город</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                ${this._innerLayer()}
                </tbody>
            `
  }
  _innerLayer() {
    let html = '';
    this._data.map(item => {
      html += `<tr>
                 <td>${item.name}</td>
                 <td>${item.age}</td>
                 <td>${item.salary}</td>
                 <td>${item.city}</td>
                 <td><button>X</button></td>
               </tr>
              `
    })
    return html;
  } 
  _addxBtn(buttons) {
    buttons.forEach(btn => btn.addEventListener('click', () => btn.parentElement.parentElement.remove()))
  }
 
  _render() {
    let elem = document.createElement('table');
    elem.innerHTML = this._outerLayer();

    this._addxBtn(elem.querySelectorAll('button'));
    return elem;
  }
  get elem() {
    return this._rendered;
  }
}
