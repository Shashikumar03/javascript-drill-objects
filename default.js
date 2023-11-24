function defaults(testObject, defaultProps) {
  for (let key in testObject) {
    if (testObject[key] === undefined) {
      testObject[key] = defaultProps[key];
    }
  }
  return testObject;
}
module.exports = { defaults };
