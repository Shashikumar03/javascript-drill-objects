const { testObject } = require("../data/data");
const { defaults } = require("../default");

// checkObj = { name: "Bruce Wayne", age: undefined, location: undefined };

defaultsProbs = {
  name: "shashi",
  age: 24,
  location: "Bihar",
};
const defaultObj = defaults(testObject, defaultsProbs);
console.log(defaultObj);
