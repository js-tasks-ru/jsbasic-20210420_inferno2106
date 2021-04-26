// Руслан Минайчев
function factorial(n) {
  let res = n;
  if (n === 0) return 1;
  while (n > 1) {
    res *= n - 1;
    n--;
  }
  return res;
}