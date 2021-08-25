var base = require('base/checkout/checkout.js');
var shippingHelpers = require('./shipping');
var billingHelpers = require('./billing');
var cleave = require('./cleave');

[billingHelpers, shippingHelpers, cleave].forEach(function (library) {
    Object.keys(library).forEach(function (item) {
        if (typeof library[item] === 'object') {
            exports[item] = $.extend({}, exports[item], library[item]);
        } else {
            exports[item] = library[item];
        }
    });
});

$('button[value="submit-payment"]').on('click', function () {
    $('.payerAuthError').hide();
});
module.exports = base;
