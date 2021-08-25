'use strict';

var server = require('server');
var configObject = require('../configuration/index');
/*
 * Controller that handles the Cybersource Device Fingerprint
*/

/**
 * Get fingertpringing url and outputs it to template
 */
if (configObject.cartridgeEnabled) {
    server.get('GetFingerprint', function (req, res, next) {
        var orgID = configObject.deviceFingerprintOrganizationId;
        var merchID = configObject.merchantID;
        var sessionID = session.sessionID;
        var location = configObject.deviceFingerprintThreadMatrixUrl;
        var now = new Date().valueOf();
        var devicefingerprintTTL = parseInt(configObject.deviceFingerprintTimeToLive, 10);

        var getDeviceFingerprint = false;

        if (configObject.deviceFingerprintEnabled) {
            if (empty(session.privacy.deviceFingerprintTime)) {
                session.privacy.deviceFingerprintTime = now;
                getDeviceFingerprint = true;
            } else {
                var timeSinceLastFingerprint = now - session.privacy.deviceFingerprintTime;
                if (timeSinceLastFingerprint > devicefingerprintTTL) {
                    session.privacy.deviceFingerprintTime = now;
                    getDeviceFingerprint = true;
                }
            }
        }
        var Cipher = require('dw/crypto/Cipher');
        var SecureRandom = require('dw/crypto/SecureRandom');
        SecureRandom = new SecureRandom();
        Cipher = new Cipher();
        if (!session.privacy.key || !session.privacy.iv) {
            var key = SecureRandom.nextBytes(32);
            var iv = SecureRandom.nextBytes(16);
            key = dw.crypto.Encoding.toBase64(key);
            iv = dw.crypto.Encoding.toBase64(iv);
            session.privacy.key = key;
            session.privacy.iv = iv;
        }
        var encryptedSessionID = Cipher.encrypt(sessionID, session.privacy.key, 'AES/CBC/PKCS5Padding', session.privacy.iv, 0);

        var url = location + '/fp/tags.js?org_id=' + orgID + '&session_id=' + merchID + encryptedSessionID;

        res.cacheExpiration(0);
        res.render('common/deviceFingerprint', {
            url: url,
            getDeviceFingerprint: getDeviceFingerprint
        });
        next();
    });
}

/*
 * Module exports
 */
module.exports = server.exports();
