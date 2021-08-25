/*
 * Description of the module and the logic it provides
 *
 * @module cartridge/scripts/cardinal/JWTBuilder
 */

'use strict';

var Encoding = require('dw/crypto/Encoding');
var Mac = require('dw/crypto/Mac');
var Bytes = require('dw/util/Bytes');
var URLUtils = require('dw/web/URLUtils');
var configObject = require('~/cartridge/configuration/index');

/**
 * The Keys. If you want to verify this in jwt.io, use the content of the files!
 */

function generateTokenWithKey(cardNumber) {
    var PRIVATEKEY = configObject.payerAuthenticationCruiseAPIKey;
    var issuer = configObject.payerAuthenticationCruiseAPIIdentifier;
    var orgUnitID = configObject.payerAuthenticationCruiseOrgUnitID;
    var mac = new Mac('HmacSHA256');

    var time = Math.floor(new Date().getTime() / 1000);
    // var exptime = Math.floor(new Date().getTime()/1000 + 120*60);

    const header = {
        alg: 'HS256',
        typ: 'JWT'
    };
    let accountObject = '';
    accountObject = {
        Consumer: {
            Account: {
                AccountNumber: cardNumber
            }
        }
    };

    let payload = '';
    payload = {
        jti: generatejti(),
        iat: time,
        iss: issuer,
        OrgUnitId: orgUnitID,
        ReferenceId: generateReferenceId(),
        ReturnUrl: URLUtils.https('CheckoutServices-getResponse').toString(),
        Payload: accountObject,
        ObjectifyPayload: true
    };
    session.privacy.ReferenceId = payload.ReferenceId;

    // Encode the Header as Base64
    const headerBase64 = Encoding.toBase64(new Bytes(JSON.stringify(header)));

    // Encode the Payload as Base64
    const payloadBase64 = Encoding.toBase64(new Bytes(JSON.stringify(payload)));

    // Create the content of the JWT Signature
    var signature = headerBase64 + '.' + payloadBase64;
    var token = mac.digest(signature, PRIVATEKEY);

    var signatureUrlEncoded = Encoding.toBase64(token).replace(/\+/g, '-');
    signatureUrlEncoded = signatureUrlEncoded.replace(/\//g, '_').replace(/\=+$/m, ''); // eslint-disable-line no-useless-escape

    // Now, create the signed JWT: Header + Payload + Signature concatenated with a dot
    const jwt = headerBase64 + '.' + payloadBase64 + '.' + signatureUrlEncoded;

    return jwt;
}

function generatejti() {
    var jti;
    jti = randomString(32);
    var firstSubpart = jti.substring(0, 8);
    var secondSubpart = jti.substring(8, 12);
    var thirdSubpart = jti.substring(12, 16);
    var fourthSubpart = jti.substring(16, 20);
    var fifthSubpart = jti.substring(20, 32);
    var modifiedJTI = firstSubpart + '-' + secondSubpart + '-' + thirdSubpart + '-' + fourthSubpart + '-' + fifthSubpart;
    return modifiedJTI;
}

function generateTokenForConsumerAuthentication(acsUrl, pareq, transactionId) {
    var PRIVATEKEY = configObject.payerAuthenticationCruiseAPIKey;
    var issuer = configObject.payerAuthenticationCruiseAPIIdentifier;
    var orgUnitID = configObject.payerAuthenticationCruiseOrgUnitID;
    var mac = new Mac('HmacSHA256');

    var time = Math.floor(new Date().getTime() / 1000);

    const header = {
        alg: 'HS256',
        typ: 'JWT'
    };
    let payloadObject = '';
    payloadObject = {
        ACSUrl: acsUrl,
        Payload: pareq,
        TransactionId: transactionId
    };

    let payload = '';
    payload = {
        jti: generatejti(),
        iat: time,
        iss: issuer,
        OrgUnitId: orgUnitID,
        ReferenceId: session.privacy.ReferenceId, // generateReferenceId(),
        ReturnUrl: URLUtils.https('CheckoutServices-handlingConsumerAuthResponse').toString(),
        Payload: payloadObject,
        ObjectifyPayload: true
    };

    // Encode the Header as Base64
    const headerBase64 = Encoding.toBase64(new Bytes(JSON.stringify(header)));

    // Encode the Payload as Base64
    const payloadBase64 = Encoding.toBase64(new Bytes(JSON.stringify(payload)));

    // Create the content of the JWT Signature
    var signature = headerBase64 + '.' + payloadBase64;
    var token = mac.digest(signature, PRIVATEKEY);

    var signatureUrlEncoded = Encoding.toBase64(token).replace(/\+/g, '-');
    signatureUrlEncoded = signatureUrlEncoded.replace(/\//g, '_').replace(/\=+$/m, ''); // eslint-disable-line no-useless-escape

    // Now, create the signed JWT: Header + Payload + Signature concatenated with a dot
    const jwt = headerBase64 + '.' + payloadBase64 + '.' + signatureUrlEncoded;

    return jwt;
}

function generateReferenceId() {
    var referenceId;
    referenceId = randomString(32);
    var firstSubpart = referenceId.substring(0, 8);
    var secondSubpart = referenceId.substring(8, 12);
    var thirdSubpart = referenceId.substring(12, 16);
    var fourthSubpart = referenceId.substring(16, 20);
    var fifthSubpart = referenceId.substring(20, 32);
    var modifiedReferenceId = '0_' + firstSubpart + '-' + secondSubpart + '-' + thirdSubpart + '-' + fourthSubpart + '-' + fifthSubpart;
    return modifiedReferenceId;
}

function randomString(size) {
    var randomString = '';
    var randomchar = function () {
        var n = Math.floor(Math.random() * 62);
        if (n < 10) return n; // 1-10
        if (n < 36) return String.fromCharCode(n + 55); // A-Z
        return String.fromCharCode(n + 61); // a-z
    };
    while (randomString.length < size) randomString += randomchar();
    return randomString;
}

if (configObject.cartridgeEnabled) {
    module.exports = {
        generateTokenWithKey: generateTokenWithKey,
        generatejti: generatejti,
        randomString: randomString,
        generateTokenForConsumerAuthentication: generateTokenForConsumerAuthentication
    };
}
