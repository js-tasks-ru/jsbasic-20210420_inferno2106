function camelize(str) {
  let filtered = str.split("-").map((item, index) => {
    if (index == 0) return item;
    else {
      return item[0].toUpperCase() + item.slice(1);
    }
  });
  return filtered.join("");
}
