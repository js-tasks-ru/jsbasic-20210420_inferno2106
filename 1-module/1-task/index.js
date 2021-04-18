function factorial(n) {
  let res = n;
  if (n === 0) return 1;
  while (n > 1) {
    res *= n - 1;
    n--;
  }
  return res;
}


factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120