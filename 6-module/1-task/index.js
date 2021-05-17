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
 let rows = [
  {
    name: 'Ilia',
    age: 25,
    salary: 1000,
    city: 'Petrozavodsk'
  },
  {
    name: 'Vasya',
    age: 14,
    salary: 1500,
    city: 'Moscow'
  },
  {
    name: 'Ivan',
    age: 22,
    salary: 100,
    city: 'Bryansk'
  },
  {
    name: 'Petya',
    age: 45,
    salary: 990,
    city: 'Chita'
  }
];

export default class UserTable {
  _wholeTable;
  constructor(rows) {
    // this.elem = _wholeTable;
  }
  outerLayer() {
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
                ${this.innerLayer()}
                </tbody>
            `
  }
  innerLayer() {
    let html = '';
    rows.map(item => {
      html += `<tr>
                 <td>${item.name}</td>
                 <td>${item.age}</td>
                 <td>${item.salary}</td>
                 <td>${item.city}</td>
                 <td>${this.xBtn()}</td>
               </tr>
              `
    })
    return html;
  }
  xBtn() {
    return `<button onclick='this.parentElement.parentElement.remove()'>X</button>`
  }
  render() {
    let elem = document.createElement('table');
    elem.innerHTML = this.outerLayer();
    return elem;
  }
  get elem() {
    return this.render();
  }
}
