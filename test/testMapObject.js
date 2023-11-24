const { testObject } = require("../data/data");
const mapObject = require("../mapObject");

const mapObj = mapObject(testObject, function (value) {
  return value + "something";
});
console.log(mapObj);
