function truncate(str, maxlength) {
  let newStr;
  if (str.length > maxlength) {
    newStr = str.slice(0, 19) + "…";
  } else {
    return str;
  }
  return newStr;
}
