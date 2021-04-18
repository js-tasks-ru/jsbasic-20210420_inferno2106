function ucFirst(str) {
  let checked = str.trim();
        return checked
          ? (checked = checked[0].toUpperCase() + checked.slice(1, 4))
          : checked;
}
