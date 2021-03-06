"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * CYBS Value Added Service REST API
 * A group of RESTful API that provides value added services to CyberSource clients.
 *
 * OpenAPI spec version: 2.0.0
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

    root.CyberSource.Vasv2accountnumberlookuppost201responseIssuer = factory(root.CyberSource.ApiClient);
  }
})(void 0, function (ApiClient) {
  'use strict';
  /**
   * The Vasv2accountnumberlookuppost201responseIssuer model module.
   * @module model/Vasv2accountnumberlookuppost201responseIssuer
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>Vasv2accountnumberlookuppost201responseIssuer</code>.
   * @alias module:model/Vasv2accountnumberlookuppost201responseIssuer
   * @class
   */

  var exports = function exports() {
    var _this = this;
  };
  /**
   * Constructs a <code>Vasv2accountnumberlookuppost201responseIssuer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Vasv2accountnumberlookuppost201responseIssuer} obj Optional instance to populate.
   * @return {module:model/Vasv2accountnumberlookuppost201responseIssuer} The populated <code>Vasv2accountnumberlookuppost201responseIssuer</code> instance.
   */


  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }

      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }

      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
    }

    return obj;
  };
  /**
   * Bank that issued the card, such as Bank of America, Chase, or Wells Fargo.
   * @member {String} name
   */


  exports.prototype['name'] = undefined;
  /**
   * Country of the issuing bank. For the possible values, Use the [ISO Standard Country Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf).
   * @member {String} country
   */

  exports.prototype['country'] = undefined;
  /**
   * Customer service phone number for the issuing bank.
   * @member {String} phoneNumber
   */

  exports.prototype['phoneNumber'] = undefined;
  return exports;
});