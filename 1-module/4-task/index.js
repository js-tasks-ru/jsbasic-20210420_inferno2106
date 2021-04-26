// Руслан Минайчев
function checkSpam(str) {
  const lowered = str.toLowerCase();
  if(lowered.includes("1xbet") || lowered.includes("xxx")) {
    return true;
  } 
  return false;
}
