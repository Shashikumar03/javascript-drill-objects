function keys(testObject) {
  const allKeys = [];
  for (let key in testObject) {
    allKeys.push(key);
  }
  return allKeys;
}
module.exports = keys;
