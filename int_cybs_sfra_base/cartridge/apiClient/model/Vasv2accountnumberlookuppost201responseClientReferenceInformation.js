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

    root.CyberSource.Vasv2accountnumberlookuppost201responseClientReferenceInformation = factory(root.CyberSource.ApiClient);
  }
})(void 0, function (ApiClient) {
  'use strict';
  /**
   * The Vasv2accountnumberlookuppost201responseClientReferenceInformation model module.
   * @module model/Vasv2accountnumberlookuppost201responseClientReferenceInformation
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>Vasv2accountnumberlookuppost201responseClientReferenceInformation</code>.
   * @alias module:model/Vasv2accountnumberlookuppost201responseClientReferenceInformation
   * @class
   */

  var exports = function exports() {
    var _this = this;
  };
  /**
   * Constructs a <code>Vasv2accountnumberlookuppost201responseClientReferenceInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Vasv2accountnumberlookuppost201responseClientReferenceInformation} obj Optional instance to populate.
   * @return {module:model/Vasv2accountnumberlookuppost201responseClientReferenceInformation} The populated <code>Vasv2accountnumberlookuppost201responseClientReferenceInformation</code> instance.
   */


  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }

      if (data.hasOwnProperty('submitLocalDateTime')) {
        obj['submitLocalDateTime'] = ApiClient.convertToType(data['submitLocalDateTime'], 'String');
      }

      if (data.hasOwnProperty('ownerMerchantId')) {
        obj['ownerMerchantId'] = ApiClient.convertToType(data['ownerMerchantId'], 'String');
      }
    }

    return obj;
  };
  /**
   * Order reference or tracking number that you generate. It is recommended that you provide a unique value for each transaction so that you can perform meaningful searches for the transaction.  In the API response, the value of this field is the order reference or tracking number for the transaction you provided in the API request.  For information about tracking orders, see Getting Started with CyberSource Advanced for the SCMP API.  #### FDC Nashville Global Certain circumstances can cause the processor to truncate this value to 15 or 17 characters for Level II and Level III processing, which can cause a discrepancy between the value you submit and the value included in some processor reports. 
   * @member {String} code
   */


  exports.prototype['code'] = undefined;
  /**
   * Date and time at your physical location.  Format: `YYYYMMDDhhmmss`, where YYYY = year, MM = month, DD = day, hh = hour, mm = minutes ss = seconds 
   * @member {String} submitLocalDateTime
   */

  exports.prototype['submitLocalDateTime'] = undefined;
  /**
   * Merchant ID that was used to create the subscription or customer profile for which the service was requested.  If your CyberSource account is enabled for Recurring Billing, this field is returned only if you are using subscription sharing and if your merchant ID is in the same merchant ID pool as the owner merchant ID.  If your CyberSource account is enabled for Payment Tokenization, this field is returned only if you are using profile sharing and if your merchant ID is in the same merchant ID pool as the owner merchant ID.  For details about how this field is used for Recurring Billing or Payment Tokenization, see the `ecp_debit_owner_merchant_id` field description in the [Electronic Check Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/EChecks_SCMP_API/html/) 
   * @member {String} ownerMerchantId
   */

  exports.prototype['ownerMerchantId'] = undefined;
  return exports;
});