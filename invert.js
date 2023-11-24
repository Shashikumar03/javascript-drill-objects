function invert(testObject) {
  const invertObj = {};
  for (let key in testObject) {
    const value = testObject[key];
    invertObj[value] = key;
  }
  return invertObj;
}
module.exports = invert;
