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

    root.CyberSource.Vasv2accountnumberlookuppost400responseDetails = factory(root.CyberSource.ApiClient);
  }
})(void 0, function (ApiClient) {
  'use strict';
  /**
   * The Vasv2accountnumberlookuppost400responseDetails model module.
   * @module model/Vasv2accountnumberlookuppost400responseDetails
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>Vasv2accountnumberlookuppost400responseDetails</code>.
   * @alias module:model/Vasv2accountnumberlookuppost400responseDetails
   * @class
   */

  var exports = function exports() {
    var _this = this;
  };
  /**
   * Constructs a <code>Vasv2accountnumberlookuppost400responseDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Vasv2accountnumberlookuppost400responseDetails} obj Optional instance to populate.
   * @return {module:model/Vasv2accountnumberlookuppost400responseDetails} The populated <code>Vasv2accountnumberlookuppost400responseDetails</code> instance.
   */


  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }

      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
    }

    return obj;
  };
  /**
   * This is the flattened JSON object field name/path that is either missing or invalid.
   * @member {String} field
   */


  exports.prototype['field'] = undefined;
  /**
   * Possible reasons for the error.  Possible values:  - MISSING_FIELD  - INVALID_DATA 
   * @member {String} reason
   */

  exports.prototype['reason'] = undefined;
  return exports;
});