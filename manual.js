const GetColorFromPairNumber = require("./getColorFromPairNumber.js");

function toString() {
    console.log("\n\nColor coding manual");
    console.log("PairID ---> MajorColor, MinorColor\n");
    for(let pairnumber = 1; pairnumber <= 25; pairnumber++)
    {
        let color_combination = GetColorFromPairNumber(pairnumber);
        console.log(pairnumber,"--->",color_combination.major,",", color_combination.minor,"\n");
    }
}

module.exports = toString;