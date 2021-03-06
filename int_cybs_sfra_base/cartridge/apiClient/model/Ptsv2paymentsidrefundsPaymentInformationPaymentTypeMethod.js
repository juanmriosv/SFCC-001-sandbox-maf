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
    define(['ApiClient'], factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }

    root.CyberSource.Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod = factory(root.CyberSource.ApiClient);
  }
})(void 0, function (ApiClient) {
  'use strict';
  /**
   * The Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod model module.
   * @module model/Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod</code>.
   * @alias module:model/Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod
   * @class
   */

  var exports = function exports() {
    var _this = this;
  };
  /**
   * Constructs a <code>Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod} The populated <code>Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod</code> instance.
   */


  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }

    return obj;
  };
  /**
   * A Payment Type is enabled through a Method. Examples: Visa, Master Card, ApplePay, iDeal 
   * @member {String} name
   */


  exports.prototype['name'] = undefined;
  return exports;
});