let calculator = {
  read(num1, num2) {
    this.first = num1;
    this.second = num2;
  },
  sum() {
    return this.first + this.second;
  },
  mul() {
    return this.first * this.second;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
