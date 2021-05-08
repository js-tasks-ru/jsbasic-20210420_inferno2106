// Руслан Минайчев
function truncate(str, maxlength) {
  let newStr;
  if (str.length > maxlength) {
    newStr = str.slice(0, 19) + "…";
    return newStr;
  } 
  return str;
}
