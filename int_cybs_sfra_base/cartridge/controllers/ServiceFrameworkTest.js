var server = require('server');
var System = require('dw/system/System');
var configObject = require('../configuration/index');

/**
 * Renders Test Capture Service Form.
 */
server.get('TestCaptureService', function (req, res, next) {
    var URLUtils = require('dw/web/URLUtils');
    //  When in production, Redirect to home page.
    if (System.getInstanceType() === System.PRODUCTION_SYSTEM) {
        res.redirect(URLUtils.url('Home-Show'));
        return next();
    }
    // check if service parameter not available,display form
    if (configObject.cartridgeEnabled) {
        if (empty(request.httpParameterMap.service.stringValue)) {
            session.forms.generictestinterfaceform.clearFormElement();
            var captureServiceForm = server.forms.getForm('generictestinterfaceform');
            // render the refund service form
            res.render('captureServiceForm', {
                captureServiceForm: captureServiceForm,
                continueUrl: dw.web.URLUtils.https('ServiceFrameworkTest-CaptureService').toString()
            });
            return next();
        }
    }
});

server.post('CaptureService', function (req, res, next) {
    var URLUtils = require('dw/web/URLUtils');
    //  When in production, Redirect to home page.
    if (System.getInstanceType() === System.PRODUCTION_SYSTEM) {
        res.redirect(URLUtils.url('Home-Show'));
        return next();
    }
    if (configObject.cartridgeEnabled) {
        var requestID = session.forms.generictestinterfaceform.authRequestID.htmlValue;
        var merchantRefCode = session.forms.generictestinterfaceform.merchantReferenceCode.htmlValue;
        var paymentTotal = session.forms.generictestinterfaceform.grandtotalamount.value;
        var currency = session.forms.generictestinterfaceform.currency.value;

        var serviceResponse;
        var captureReply;
        var captureReplyTitle;
        var captureObj = require('~/cartridge/scripts/http/capture.js');
        serviceResponse = captureObj.httpCapturePayment(requestID, merchantRefCode, paymentTotal, currency);

        captureReplyTitle = 'Capture Service Reply';
        captureReply = 'CaptureReply';
        session.forms.generictestinterfaceform.clearFormElement();
        if (!empty(serviceResponse)) {
            res.render('transactionresult', {
                serviceReply: captureReply,
                response: serviceResponse,
                msgHeader: captureReplyTitle
            });
            return next();
        }
        res.render('common/scripterror', {
            log: !empty(serviceResponse.errorMsg) ? serviceResponse.errorMsg : 'System Exception occured contact administrator'
        });
        return next();
    }
});
/**
 * Renders Test authReversal Service Form.
 */
server.get('TestAuthReversal', function (req, res, next) {
    var URLUtils = require('dw/web/URLUtils');
    //  When in production, Redirect to home page.
    if (System.getInstanceType() === System.PRODUCTION_SYSTEM) {
        res.redirect(URLUtils.url('Home-Show'));
        return next();
    }

    // check if service parameter not available,display form
    if (configObject.cartridgeEnabled) {
        if (empty(request.httpParameterMap.service.stringValue)) {
            session.forms.generictestinterfaceform.clearFormElement();
            var authReversalServiceForm = server.forms.getForm('generictestinterfaceform');
            // render the refund service form
            res.render('authreversalform', {
                authreversalform: authReversalServiceForm,
                continueUrl: URLUtils.https('ServiceFrameworkTest-authReversalService').toString()
            });
            return next();
        }
    }
});

server.post('authReversalService', function (req, res, next) {
    var URLUtils = require('dw/web/URLUtils');
    //  When in production, Redirect to home page.
    if (System.getInstanceType() === System.PRODUCTION_SYSTEM) {
        res.redirect(URLUtils.url('Home-Show'));
        return next();
    }
    if (configObject.cartridgeEnabled) {
        var requestID = session.forms.generictestinterfaceform.authRequestID.htmlValue;
        var merchantRefCode = session.forms.generictestinterfaceform.merchantReferenceCode.htmlValue;
        var paymentTotal = session.forms.generictestinterfaceform.grandtotalamount.value;
        var currency = session.forms.generictestinterfaceform.currency.value;

        var serviceResponse;
        var reversalReply;
        var reversalReplyTitle;
        var reversalObj = require('~/cartridge/scripts/http/authReversal.js');
        serviceResponse = reversalObj.httpAuthReversal(requestID, merchantRefCode, paymentTotal, currency);

        reversalReplyTitle = 'Reversal Service Reply';
        reversalReply = 'ccAuthReversalReply';
        session.forms.generictestinterfaceform.clearFormElement();
        if (!empty(serviceResponse)) {
            res.render('transactionresult', {
                serviceReply: reversalReply,
                response: serviceResponse,
                msgHeader: reversalReplyTitle
            });
            return next();
        }
        res.render('common/scripterror', {
            log: !empty(serviceResponse.errorMsg) ? serviceResponse.errorMsg : 'System Exception occured contact administrator'
        });
        return next();
    }
});

module.exports = server.exports();
