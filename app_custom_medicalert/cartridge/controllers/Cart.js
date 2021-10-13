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
    
    calculateDonationPrices(currentBasket,2501);

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

    server.get('CheckProductLineItem', function (req, res, next) {
        var viewData = res.getViewData();
        var rdat = req.httpParameterMap; // eslint-disable-line
        var CheckOption = false;
        var currentBasket = BasketMgr.getCurrentOrNewBasket();
        var lineItems = currentBasket.getProductLineItems().toArray();
        lineItems.forEach(function (dli) {
        var productOptions = dli.getOptionProductLineItems().toArray();
         productOptions.forEach(function (option){ 
          if (option.optionValueID !== 00000 ) {
            CheckOption = true;
          }    
         }); 
        }); 
        
        
        res.json({ value: CheckOption });
        next();
    });

server.get('MAFRemoteAddToCart', function (req, res, next) {

    var MAFProductId = req.querystring.pid;
    var MAFProductAmt = req.querystring.amt;

    var URLUtils = require('dw/web/URLUtils');
    var Transaction = require('dw/system/Transaction');
    var cartHelper = require('*/cartridge/scripts/cart/cartHelpers');
    var basketCalculationHelpers = require('*/cartridge/scripts/helpers/basketCalculationHelpers');
    var ProductMgr = require('dw/catalog/ProductMgr');
    var currentBasket = BasketMgr.getCurrentOrNewBasket();
    var childProducts = [];
    var options = [];
    var result = {};
    var quantity = 1;

    var product = ProductMgr.getProduct(MAFProductId);
    if (product && MAFProductAmt) {
        Transaction.wrap(function () {
            result = cartHelper.addProductToCart(
                currentBasket,
                MAFProductId,
                quantity,
                childProducts,
                options
            );
            calculateDonationPrices (currentBasket, MAFProductAmt);
            if (!result.error) {
                cartHelper.ensureAllShipmentsHaveMethods(currentBasket);
                basketCalculationHelpers.calculateTotals(currentBasket);
            }
        });


    }
    //res.redirect(URLUtils.url('Checkout-Show'));

    res.redirect(URLUtils.url('Cart-Show'));
    next();
});

    function calculateDonationPrices (basket, amt) {
        var Transaction = require('dw/system/Transaction');
        var taxMgr = require('dw/order/TaxMgr');
        var donationProductID = "90000A";
        var basketDonationItems = basket.getProductLineItems(donationProductID);
        var productLineItem = null;
        var promotionID = "SetDonationPromo1";

        Transaction.wrap(function () {
            if (basketDonationItems.length > 0) {
                 basketDonationItems.toArray().forEach(function (productLineItem) {
                    var adjustment = productLineItem.getPriceAdjustmentByPromotionID(promotionID);
                    if (adjustment != null) {
                        productLineItem.removePriceAdjustment(adjustment);
                    }
                    var priceAdjustment = productLineItem.createPriceAdjustment(promotionID);
                    priceAdjustment.setPriceValue(parseFloat(amt));
                    productLineItem.setQuantityValue(1);
                    //priceAdjustment.taxClassID = taxMgr.customRateTaxClassID;
                    priceAdjustment.setTaxRate(0);
                    priceAdjustment.updateTax(0);
                 });
             }
         });
        }

        

module.exports = server.exports();
