const expect = require('chai').expect;
const GetColorFromPairNumber = require("./getColorFromPairNumber.js");

function testNumberToPair(number, expectedMajor, expectedMinor) {
    const pairOfColors = GetColorFromPairNumber(number);
    console.log(`${number} = ${expectedMajor} ${expectedMinor}`);
    expect(pairOfColors.major).equals(expectedMajor);
    expect(pairOfColors.minor).equals(expectedMinor);
}

module.exports = testNumberToPair;