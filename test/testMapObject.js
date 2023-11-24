const { testObject } = require("../data/data");
const mapObject = require("../mapObject");

const mapObjects = mapObject(testObject, function (value) {
  return value + "something";
});
console.log(mapObjects);
