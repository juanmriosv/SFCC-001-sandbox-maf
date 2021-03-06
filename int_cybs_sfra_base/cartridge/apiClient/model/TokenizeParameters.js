"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Flexv1tokensCardInfo'], factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Flexv1tokensCardInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }

    root.CyberSource.TokenizeParameters = factory(root.CyberSource.ApiClient, root.CyberSource.Flexv1tokensCardInfo);
  }
})(void 0, function (ApiClient, Flexv1tokensCardInfo) {
  'use strict';
  /**
   * The TokenizeParameters model module.
   * @module model/TokenizeParameters
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TokenizeParameters</code>.
   * @alias module:model/TokenizeParameters
   * @class
   * @param keyId {String} Unique identifier for the generated token. This is obtained from the Generate Key request. See the [Java Script and Java examples](http://apps.cybersource.com/library/documentation/dev_guides/Secure_Acceptance_Flex/Key/html) on how to import the key and encrypt using the imported key.
   */

  var exports = function exports(keyId) {
    var _this = this;

    _this['keyId'] = keyId;
  };
  /**
   * Constructs a <code>TokenizeParameters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TokenizeParameters} obj Optional instance to populate.
   * @return {module:model/TokenizeParameters} The populated <code>TokenizeParameters</code> instance.
   */


  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('keyId')) {
        obj['keyId'] = ApiClient.convertToType(data['keyId'], 'String');
      }

      if (data.hasOwnProperty('cardInfo')) {
        obj['cardInfo'] = Flexv1tokensCardInfo.constructFromObject(data['cardInfo']);
      }
    }

    return obj;
  };
  /**
   * Unique identifier for the generated token. This is obtained from the Generate Key request. See the [Java Script and Java examples](http://apps.cybersource.com/library/documentation/dev_guides/Secure_Acceptance_Flex/Key/html) on how to import the key and encrypt using the imported key.
   * @member {String} keyId
   */


  exports.prototype['keyId'] = undefined;
  /**
   * @member {module:model/Flexv1tokensCardInfo} cardInfo
   */

  exports.prototype['cardInfo'] = undefined;
  return exports;
});