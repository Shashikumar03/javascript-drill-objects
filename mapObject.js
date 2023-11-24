function mapObject(testObject, callback) {
  const answer = {};
  for (let key in testObject) {
    answer[key] = callback(testObject[key]);
  }
  return answer;
}
module.exports = mapObject;
