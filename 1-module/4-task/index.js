function checkSpam(str) {
  let lowered = str.toLowerCase();
        return lowered.includes("1xbet") || lowered.includes("xxx")
          ? true
          : false;
}
