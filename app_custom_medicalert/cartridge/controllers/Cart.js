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


server.append('AddProduct', function (req, res, next) {
    var viewData = res.getViewData();
    var rdat = req.httpParameterMap; // eslint-disable-line
    var engravingString = 'engravingline';
    var engravingObj = {};
    var engravingParams = rdat.getParameterMap(engravingString);
    var paramCount = engravingParams.getParameterCount();

// Need to make this dynamic based on Personalization Lines
    for (var index=1; index <= paramCount; index++) {

        engravingObj[engravingString+index] = engravingParams.get(index.toString()).getValue();
    }


    var currentBasket = BasketMgr.getCurrentOrNewBasket();
    var lineItems = currentBasket.getProductLineItems().toArray();
    lineItems.forEach(function (dli) {
        if (dli.getUUID() === viewData.pliUUID) {
            Transaction.wrap(function () {
                dli.custom.engravingJson = JSON.stringify(
                    engravingObj
                );
            });
        }
    });

    return next();
    });

    server.append('GetProduct', function (req, res, next) {
        var viewData = res.getViewData();
    
        var currentBasket = BasketMgr.getCurrentOrNewBasket();
        var lineItems = currentBasket.getProductLineItems().toArray();
        lineItems.forEach(function (dli) {
            if (dli.getUUID() === viewData.uuid) {

                viewData.engravingValues = JSON.parse(dli.custom.engravingJson) ;

            }
        });  
    viewData.engraving = viewData.product.engraving;

    return next();
    
        });

    server.append('EditProductLineItem', function (req, res, next) {
     var viewData = res.getViewData();
     var rdat = req.httpParameterMap; // eslint-disable-line
     var engravingString = 'engravingline';
     var engravingObj = {};
     var uuid = rdat.get('uuid').getValue();
     var engravingParams = rdat.getParameterMap(engravingString);
     var paramCount = engravingParams.getParameterCount();
 
 // Need to make this dynamic based on Personalization Lines
     for (var index=1; index <= paramCount; index++) {
 
         engravingObj[engravingString+index] = engravingParams.get(index.toString()).getValue();
     }
 
 
     var currentBasket = BasketMgr.getCurrentOrNewBasket();
     var lineItems = currentBasket.getProductLineItems().toArray();
     lineItems.forEach(function (dli) {
         if (dli.getUUID() === uuid) {
             Transaction.wrap(function () {
                 dli.custom.engravingJson = JSON.stringify(
                     engravingObj
                 );
             });
         }
     }); 


   return next();

    });

module.exports = server.exports();
