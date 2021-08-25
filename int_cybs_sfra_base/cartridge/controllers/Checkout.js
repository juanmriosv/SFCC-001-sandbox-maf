'use strict';

var page = module.superModule;
var server = require('server');

server.extend(page);

server.prepend(
    'Begin',
    server.middleware.https,
    function (req, res, next) {
        var Transaction = require('dw/system/Transaction');
        if (session.getCustomer().getProfile() !== null) {
            var paymentInstrumentToBeDeleted = session.getCustomer().getProfile().custom.deleteInstrumentId;
            if (paymentInstrumentToBeDeleted.length !== 0) {
                var tokenManagement = require('~/cartridge/scripts/http/tokenManagement.js');
                var result = tokenManagement.httpDeleteCustomerPaymentInstrument(session.getCustomer().getProfile().custom.customerID, paymentInstrumentToBeDeleted[0]);
                if (result === true) {
                    Transaction.wrap(function () {
                        session.getCustomer().getProfile().custom.deleteInstrumentId = [];
                    });
                }
            }
        }
        return next();
    }
);

module.exports = server.exports();
