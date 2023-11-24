function pairs(testObject) {
  const list = [];
  for (let key in testObject) {
    list.push([key, testObject[key]]);
  }
  return list;
}

module.exports = { pairs };
