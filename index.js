var testNumberToPair = require("./testNumberToPair.js");
var testColorToNumber = require("./testColorToNumber.js");
var toString = require("./manual.js");

console.log("color coder");
testNumberToPair(4, "white", "brown");
testNumberToPair(25, "violet", "slate");
testColorToNumber("black", "brown", 14);
testColorToNumber("yellow", "green", 18);
toString();
