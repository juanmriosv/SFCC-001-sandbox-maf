'use strict';

var server = require('server');
var URLUtils = require('dw/web/URLUtils');
var configObject = require('../configuration/index');
var csrfProtection = require('*/cartridge/scripts/middleware/csrf');
var userLoggedIn = require('*/cartridge/scripts/middleware/userLoggedIn');

var page = module.superModule;
server.extend(page);

function setDetailsObject(paymentForm) { // eslint-disable-line no-unused-vars
    return {
        name: '',
        cardNumber: '',
        cardType: '',
        expirationMonth: '',
        expirationYear: '',
        paymentForm: ''
    };
}

function verifyAddess(addressFieldsForm) {
    var addressVerification = require('~/cartridge/scripts/http/addressVerification');
    var mapper = require('~/cartridge/scripts/util/mapper.js');
    var DAVAddress = mapper.SFFCAddressToProviderAddress(addressFieldsForm);
    var result = {
        status: null,
        standard: null,
        original: DAVAddress
    };
    if (addressFieldsForm.addressAccepted.checked || !configObject.davEnabled) {
        result.status = verificationResultEnum.ADDRESS_ACCEPTED;
    } else {
        var DAVResult = addressVerification.httpVerifyCustomerAddress(DAVAddress);
        if (DAVResult.status === addressVerification.STATUSCODES.COMPLETED) {
            var standardAddress = DAVResult.data.standardAddress;
            var inputEqualsStandardAddress = standardAddress.address1.withApartment === DAVAddress.address1
                && standardAddress.administrativeArea === DAVAddress.administrativeArea
                && standardAddress.country === DAVAddress.country
                && standardAddress.locality === DAVAddress.locality
                && standardAddress.postalCode === DAVAddress.postalCode;
            if (inputEqualsStandardAddress) {
                result.status = verificationResultEnum.ADDRESS_ACCEPTED;
            } else {
                result.status = verificationResultEnum.SELECTION_REQUIRED;
                result.standard = standardAddress;
            }
        } else {
            result.status = verificationResultEnum.VERIFICATION_FAILED;
        }
    }
    return result;
}

if (configObject.tokenizationEnabled && configObject.cartridgeEnabled) {
    server.prepend('SavePayment', csrfProtection.validateAjaxRequest, userLoggedIn.validateLoggedInAjax, function (req, res, next) {
        var redirectURL;
        try {
            var tokenRateLimiterHelper = require('~/cartridge/scripts/helpers/tokenRateLimiterHelper');
            var isallowed = tokenRateLimiterHelper.IsCustumerAllowedSinglePaymentInstrumentInsertion(customer);
            if (isallowed.result) {
                return next();
            }
            if (isallowed.reason.indexOf(tokenRateLimiterHelper.FailureReason.RateLimitExceeded) >= 0) {
                redirectURL = URLUtils.url('Error-ErrorCodeAjaxRedirect',
                    'err', 'unable.to.save.payment.due.to.rate.limiter',
                    'statuscode', 429).toString();
                res.setStatusCode(429);
                res.redirectUrl = redirectURL;
                next();
            }
        } catch (e) {
            redirectURL = URLUtils.url('Error-ErrorCodeAjaxRedirect',
                'err', 'card.not.authorized',
                'statuscode', 400).toString();
            res.setStatusCode(400);
            res.redirectUrl = redirectURL;
            next();
        }
    });

    server.append('SavePayment', csrfProtection.validateAjaxRequest, userLoggedIn.validateLoggedInAjax, function (req, res, next) {
        next();
    });

    server.append('SavePayment', csrfProtection.validateAjaxRequest, userLoggedIn.validateLoggedInAjax, function (req, res, next) {
        this.on('route:BeforeComplete', function (req, res) {
            var tokenRateLimiterHelper = require('~/cartridge/scripts/helpers/tokenRateLimiterHelper');
            var wallet = customer.profile.wallet;
            var paymentInstruments = wallet.getPaymentInstruments().toArray();
            // check duplicate logic here
            tokenRateLimiterHelper.checkDuplicateInstrumentIdentifier(paymentInstruments, session.privacy.tokenInformation, customer);

            var limiterResult = tokenRateLimiterHelper.IsCustumerAllowedSinglePaymentInstrumentInsertion(customer);
            if (limiterResult.result) {
                if (limiterResult.resetTimer) {
                    tokenRateLimiterHelper.resetTimer(customer);
                }

                if (limiterResult.increaseCounter) {
                    tokenRateLimiterHelper.increaseCounter(customer);
                }
            }
            session.privacy.tokenInformation = '';
            var paymentForm = server.forms.getForm('creditCard');
            res.setViewData(setDetailsObject(paymentForm));
        });
        return next();
    });

    var verificationResultEnum = {
        ADDRESS_ACCEPTED: 'ADDRESS_ACCEPTED',
        SELECTION_REQUIRED: 'SELECTION_REQUIRED',
        VERIFICATION_FAILED: 'VERIFICATION_FAILED'
    };

    server.post('VerifyAddress', csrfProtection.validateAjaxRequest, userLoggedIn.validateLoggedInAjax, function (req, res, next) {
        var addressFieldsForm = server.forms.getForm('creditCard').billToAddressFields;
        var result = verifyAddess(addressFieldsForm);
        res.json(result);
        next();
    });

    server.prepend('DeletePayment', userLoggedIn.validateLoggedInAjax, function (req, res, next) {
        var tokenManagement = require('../scripts/http/tokenManagement');
        var mapper = require('~/cartridge/scripts/util/mapper.js');
        var array = require('*/cartridge/scripts/util/array');
        var UUID = req.querystring.UUID;
        var paymentInstruments = req.currentCustomer.wallet.paymentInstruments;
        var paymentToDelete = array.find(paymentInstruments, function (item) {
            return UUID === item.UUID;
        });
        if (paymentToDelete) {
            var paymentToken = paymentToDelete.raw.getCreditCardToken();
            var tokenInformation = mapper.deserializeTokenInformation(paymentToken);
            if (tokenInformation.paymentInstrument.id) {
                tokenManagement.httpDeleteCustomerPaymentInstrument(session.getCustomer().getProfile().custom.customerID, tokenInformation.paymentInstrument.id);
            }
        }
        return next();
    });
    server.prepend('List', userLoggedIn.validateLoggedIn, function (req, res, next) {
        var Transaction = require('dw/system/Transaction');
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
        return next();
    });
}

module.exports = server.exports();
