'use strict';



function getEngravingAttributes(customAttributes) {
    var personalizationLines = customAttributes.personalizationLines;
    var engravingData = [];
    personalizationLines.forEach(function (line, index) {
        engravingData.push(line.split('-')[0]);
        });
    return engravingData;
}
module.exports = function (productObject, apiProduct) {
    Object.defineProperty(productObject, 'engraving', {
        enumerable: true,
        value: getEngravingAttributes(apiProduct.custom)
    });
};

