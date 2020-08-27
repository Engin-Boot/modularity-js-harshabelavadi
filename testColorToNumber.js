const expect = require('chai').expect;
const GetPairNumberFromColors = require("./getPairNumberFromColors.js");

function testColorToNumber(majorColor, minorColor, expectedNumber) {
    const pairNumber = GetPairNumberFromColors(majorColor, minorColor);
    console.log(`${majorColor} ${minorColor} = ${pairNumber}`);
    expect(pairNumber).to.equal(expectedNumber);
}

module.exports = testColorToNumber;