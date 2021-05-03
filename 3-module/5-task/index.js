function getMinMax(str) {
  let REGEX = /[-.0-9]+/g;
  let filtered = str.match(REGEX).map((item) => Number(item));
  function findMax() {
    return Math.max(...filtered);
  }
  function findMin() {
    return Math.min(...filtered);
  }
  console.log(filtered);
  return {
    min: findMin(),
    max: findMax(),
  };
}
