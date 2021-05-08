function sumSalary(salaries) {
  let sum = 0;
  for (let man in salaries) {
    if (isFinite(salaries[man]) && typeof salaries[man] === "number") sum += salaries[man];
  }
  return sum;
}
