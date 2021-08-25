/* eslint-disable linebreak-style */
'use strict';

var Transaction = require('dw/system/Transaction');
var BasketMgr = require('dw/order/BasketMgr');
/**
 * @namespace Cart
 */


var base = module.superModule;
var server = require('server');
server.extend(base);
//var csrfProtection = require('*/cartridge/scripts/middleware/csrf');
//var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');



server.append('Show', function (req, res, next) {
    var viewData = res.getViewData();
    viewData.engraving = viewData.product.engraving;
    res.setViewData(viewData);
    return next();
    });

module.exports = server.exports();
