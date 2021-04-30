function sumSalary(salaries) {
  let sum = 0;
  for (let i in salaries) {
    if (isFinite(salaries[i]) && salaries[i] != !0) sum += salaries[i];
  }
  return sum;
}
