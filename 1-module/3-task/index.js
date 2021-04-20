function ucFirst(str) {
  let checked = str.trim();
  if(checked) {
    checked = checked[0].toUpperCase() + checked.slice(1, 4);
  }
  return checked;
}
