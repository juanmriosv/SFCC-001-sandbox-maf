if (window.dw
    && window.dw.applepay
    && window.ApplePaySession
    && window.ApplePaySession.canMakePayments()) {
    $('body').addClass('apple-pay-enabled');
}
