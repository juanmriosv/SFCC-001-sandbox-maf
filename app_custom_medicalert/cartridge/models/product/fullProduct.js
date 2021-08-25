'use strict';
var fullProductBase = module.superModule || require('app_storefront_base/cartridge/models/product/fullProduct');
var decorators = require('*/cartridge/models/product/decorators/index');

module.exports = function fullProduct(product, apiProduct, options) {
    fullProductBase(product, apiProduct, options);
    var engraving = apiProduct.custom.personalizationLines;

    decorators.engraving(product, apiProduct);
    return product;
};