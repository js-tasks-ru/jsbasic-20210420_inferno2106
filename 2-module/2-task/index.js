function isEmpty(obj) {
  let arr = Object.entries(obj);
  if (arr.length) return true;
  return false;
}
