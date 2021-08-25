'use strict';

function getNonGCPaymemtInstument(lineItemCtnr) {
    var paymentInstruments = lineItemCtnr.getPaymentInstruments();
    if (paymentInstruments.size() > 0) {
        for (var paymentInstrument in paymentInstruments) {
            // For GC we need to create an array of objects to be passed to PayeezyFacade-PaymentAuthorize.
            if (!'GIFT_CERTIFICATE'.equalsIgnoreCase(paymentInstrument.paymentMethod)) { // eslint-disable-line no-mixed-spaces-and-tabs
                return paymentInstrument; // eslint-disable-line no-mixed-spaces-and-tabs
            } // eslint-disable-line no-mixed-spaces-and-tabs
        }
    }
}

// Added for google pay
/**
 * Determines if the basket already contains a payment instrument and removes it from the basket except gift certificate.
 * @param { dw.order.LineItemCtnr contains object of basket or order } basket  Contains object of basket or order
 * @returns void
 */

function removeExistingPaymentInstruments(basket) {
    var ccPaymentInstrs = basket.getPaymentInstruments();

    // get all credit card payment instruments

    var iter = ccPaymentInstrs.iterator();
    var existingPI = null;
    var PaymentInstrument = require('dw/order/PaymentInstrument');

    // remove them
    while (iter.hasNext()) {
        existingPI = iter.next();
        if (existingPI.paymentMethod.equals(PaymentInstrument.METHOD_GIFT_CERTIFICATE)) {
            continue;
        } else {
            basket.removePaymentInstrument(existingPI);
        }
    }
}

module.exports = {
    getNonGCPaymemtInstument: getNonGCPaymemtInstument,
    removeExistingPaymentInstruments: removeExistingPaymentInstruments
};
