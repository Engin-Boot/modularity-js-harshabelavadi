const MajorColors = require("./constants.js").MajorColors;
const MinorColors = require("./constants.js").MinorColors;

function GetColorFromPairNumber(pairNumber) {
    let colorPair = {};
    const zeroBasedPairNumber = pairNumber - 1;
    const majorColorIndex =
        Math.floor(zeroBasedPairNumber / MinorColors.length);
    colorPair.major = MajorColors[majorColorIndex];
    colorPair.minor = MinorColors[zeroBasedPairNumber % MinorColors.length];
    return colorPair;
}

module.exports = GetColorFromPairNumber;