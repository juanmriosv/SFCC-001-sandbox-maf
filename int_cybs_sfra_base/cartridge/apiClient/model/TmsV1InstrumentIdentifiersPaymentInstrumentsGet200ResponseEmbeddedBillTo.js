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

    root.CyberSource.TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBillTo = factory(root.CyberSource.ApiClient);
  }
})(void 0, function (ApiClient) {
  'use strict';
  /**
   * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBillTo model module.
   * @module model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBillTo
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBillTo</code>.
   * @alias module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBillTo
   * @class
   */

  var exports = function exports() {
    var _this = this;
  };
  /**
   * Constructs a <code>TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBillTo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBillTo} obj Optional instance to populate.
   * @return {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBillTo} The populated <code>TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBillTo</code> instance.
   */


  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }

      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }

      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }

      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }

      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
      }

      if (data.hasOwnProperty('locality')) {
        obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
      }

      if (data.hasOwnProperty('administrativeArea')) {
        obj['administrativeArea'] = ApiClient.convertToType(data['administrativeArea'], 'String');
      }

      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }

      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }

      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
    }

    return obj;
  };
  /**
   * Customer’s first name. For a credit card transaction, this name must match the name on the card.  This field is optional if your CyberSource account is configured for relaxed requirements for address data and expiration date. See the TMS REST Developer Guide for more information about relaxed address requirements.  **Important**: It is your responsibility to determine whether a field is required for the transaction you are requesting. 
   * @member {String} firstName
   */


  exports.prototype['firstName'] = undefined;
  /**
   * Customer’s last name. For a credit card transaction, this name must match the name on the card.  This field is optional if your CyberSource account is configured for relaxed requirements for address data and expiration date. See the TMS REST Developer Guide for more information about relaxed address requirements.  **Important**: It is your responsibility to determine whether a field is required for the transaction you are requesting. 
   * @member {String} lastName
   */

  exports.prototype['lastName'] = undefined;
  /**
   * Name of the customer’s company.  This field is optional if your CyberSource account is configured for relaxed requirements for address data and expiration date. See the TMS REST Developer Guide for more information about relaxed address requirements.  **Important**: It is your responsibility to determine whether a field is required for the transaction you are requesting. 
   * @member {String} company
   */

  exports.prototype['company'] = undefined;
  /**
   * First line of the billing street address.  This field is optional if your CyberSource account is configured for relaxed requirements for address data and expiration date. See the TMS REST Developer Guide for more information about relaxed address requirements.  **Important**: It is your responsibility to determine whether a field is required for the transaction you are requesting. 
   * @member {String} address1
   */

  exports.prototype['address1'] = undefined;
  /**
   * Additional address information.
   * @member {String} address2
   */

  exports.prototype['address2'] = undefined;
  /**
   * City of the billing address.  This field is optional if your CyberSource account is configured for relaxed requirements for address data and expiration date. See the TMS REST Developer Guide for more information about relaxed address requirements.  **Important**: It is your responsibility to determine whether a field is required for the transaction you are requesting. 
   * @member {String} locality
   */

  exports.prototype['locality'] = undefined;
  /**
   * State or province of the billing address. For an address in the U.S. or Canada, use the State, Province, and Territory Codes for the United States and Canada.  This field is optional if your CyberSource account is configured for relaxed requirements for address data and expiration date. See the TMS REST Developer Guide for more information about relaxed address requirements.  **Important**: It is your responsibility to determine whether a field is required for the transaction you are requesting. 
   * @member {String} administrativeArea
   */

  exports.prototype['administrativeArea'] = undefined;
  /**
   * Postal code for the billing address. The postal code must consist of 5 to 9 digits.  When the billing country is the U.S., the 9-digit postal code must follow this format: [5 digits][dash][4 digits] **Example** 12345-6789  When the billing country is Canada, the 6-digit postal code must follow this format: [alpha][numeric][alpha][space] [numeric][alpha][numeric] Example A1B 2C3  This field is optional if your CyberSource account is configured for relaxed requirements for address data and expiration date. See the TMS REST Developer Guide for more information about relaxed address requirements.  **Important**: It is your responsibility to determine whether a field is required for the transaction you are requesting. 
   * @member {String} postalCode
   */

  exports.prototype['postalCode'] = undefined;
  /**
   * Country of the billing address. Accepts input in the ISO 3166-1 standard, stores as ISO 3166-1-Alpha-2.  This field is optional if your CyberSource account is configured for relaxed requirements for address data and expiration date. See the TMS REST Developer Guide for more information about relaxed address requirements.  **Important** It is your responsibility to determine whether a field is required for the transaction you are requesting. 
   * @member {String} country
   */

  exports.prototype['country'] = undefined;
  /**
   * Customer’s email address.  This field is optional if your CyberSource account is configured for relaxed requirements for address data and expiration date. See the TMS REST Developer Guide for more information about relaxed address requirements.  **Important** It is your responsibility to determine whether a field is required for the transaction you are requesting. 
   * @member {String} email
   */

  exports.prototype['email'] = undefined;
  /**
   * Customer phone number. When you create a customer profile, the requirements depend on the payment method:   * Credit cards — optional.   * Electronic checks — contact your payment processor representative to find out if this field is required or optional.   * PINless debits — optional. 
   * @member {String} phoneNumber
   */

  exports.prototype['phoneNumber'] = undefined;
  return exports;
});