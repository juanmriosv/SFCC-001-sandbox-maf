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
    define(['ApiClient', 'model/TmsV1InstrumentIdentifiersPost200ResponseLinksPaymentInstruments'], factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TmsV1InstrumentIdentifiersPost200ResponseLinksPaymentInstruments'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }

    root.CyberSource.TmsV1InstrumentIdentifiersDelete409ResponseLinks = factory(root.CyberSource.ApiClient, root.CyberSource.TmsV1InstrumentIdentifiersPost200ResponseLinksPaymentInstruments);
  }
})(void 0, function (ApiClient, TmsV1InstrumentIdentifiersPost200ResponseLinksPaymentInstruments) {
  'use strict';
  /**
   * The TmsV1InstrumentIdentifiersDelete409ResponseLinks model module.
   * @module model/TmsV1InstrumentIdentifiersDelete409ResponseLinks
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TmsV1InstrumentIdentifiersDelete409ResponseLinks</code>.
   * @alias module:model/TmsV1InstrumentIdentifiersDelete409ResponseLinks
   * @class
   */

  var exports = function exports() {
    var _this = this;
  };
  /**
   * Constructs a <code>TmsV1InstrumentIdentifiersDelete409ResponseLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TmsV1InstrumentIdentifiersDelete409ResponseLinks} obj Optional instance to populate.
   * @return {module:model/TmsV1InstrumentIdentifiersDelete409ResponseLinks} The populated <code>TmsV1InstrumentIdentifiersDelete409ResponseLinks</code> instance.
   */


  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('paymentInstruments')) {
        obj['paymentInstruments'] = TmsV1InstrumentIdentifiersPost200ResponseLinksPaymentInstruments.constructFromObject(data['paymentInstruments']);
      }
    }

    return obj;
  };
  /**
   * @member {module:model/TmsV1InstrumentIdentifiersPost200ResponseLinksPaymentInstruments} paymentInstruments
   */


  exports.prototype['paymentInstruments'] = undefined;
  return exports;
});