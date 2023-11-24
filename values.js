function values(testObject) {
  const allValues = [];
  for (let key in testObject) {
    allValues.push(testObject[key]);
  }
  return allValues;
}
module.exports = values;
