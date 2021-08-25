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
    define(['ApiClient', 'model/Tmsv1instrumentidentifiersBankAccount', 'model/Tmsv1instrumentidentifiersBillTo', 'model/Tmsv1instrumentidentifiersCard'], factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Tmsv1instrumentidentifiersBankAccount'), require('./Tmsv1instrumentidentifiersBillTo'), require('./Tmsv1instrumentidentifiersCard'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }

    root.CyberSource.CreateInstrumentIdentifierRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Tmsv1instrumentidentifiersBankAccount, root.CyberSource.Tmsv1instrumentidentifiersBillTo, root.CyberSource.Tmsv1instrumentidentifiersCard);
  }
})(void 0, function (ApiClient, Tmsv1instrumentidentifiersBankAccount, Tmsv1instrumentidentifiersBillTo, Tmsv1instrumentidentifiersCard) {
  'use strict';
  /**
   * The CreateInstrumentIdentifierRequest model module.
   * @module model/CreateInstrumentIdentifierRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>CreateInstrumentIdentifierRequest</code>.
   * @alias module:model/CreateInstrumentIdentifierRequest
   * @class
   */

  var exports = function exports() {
    var _this = this;
  };
  /**
   * Constructs a <code>CreateInstrumentIdentifierRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateInstrumentIdentifierRequest} obj Optional instance to populate.
   * @return {module:model/CreateInstrumentIdentifierRequest} The populated <code>CreateInstrumentIdentifierRequest</code> instance.
   */


  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }

      if (data.hasOwnProperty('card')) {
        obj['card'] = Tmsv1instrumentidentifiersCard.constructFromObject(data['card']);
      }

      if (data.hasOwnProperty('BankAccount')) {
        obj['BankAccount'] = Tmsv1instrumentidentifiersBankAccount.constructFromObject(data['BankAccount']);
      }

      if (data.hasOwnProperty('billTo')) {
        obj['billTo'] = Tmsv1instrumentidentifiersBillTo.constructFromObject(data['billTo']);
      }
    }

    return obj;
  };
  /**
   * Enrol card for a Network Token
   * @member {String} type
   */


  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/Tmsv1instrumentidentifiersCard} card
   */

  exports.prototype['card'] = undefined;
  /**
   * @member {module:model/Tmsv1instrumentidentifiersBankAccount} BankAccount
   */

  exports.prototype['BankAccount'] = undefined;
  /**
   * @member {module:model/Tmsv1instrumentidentifiersBillTo} billTo
   */

  exports.prototype['billTo'] = undefined;
  return exports;
});