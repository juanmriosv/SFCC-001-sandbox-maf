'use strict';

module.exports = function (object, lineItem) {
    Object.defineProperty(object, 'engravingJson', {
        enumerable: true,
        value: lineItem.custom.engravingJson
    });
    
};
