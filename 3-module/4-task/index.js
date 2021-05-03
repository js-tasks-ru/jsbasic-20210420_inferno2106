function showSalary(users, age) {
  let str = "";
  let filtered = users.filter((item) => item.age <= age);
  filtered.forEach((item, index, arr) => {
    if(index === arr.length - 1) return str += `${item.name}, ${item.balance}`
    str += `${item.name}, ${item.balance}\n`;
  });
  return str;
}
