function checkSpam(str) {
  let lowered = str.toLowerCase();
  if(lowered.includes("1xbet") || lowered.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}
