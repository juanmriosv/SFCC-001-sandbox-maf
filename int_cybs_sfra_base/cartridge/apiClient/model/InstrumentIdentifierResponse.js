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
    define(['ApiClient', 'model/TmsV1InstrumentIdentifiersPost200ResponseCard', 'model/TmsV1InstrumentIdentifiersPost200ResponseIssuer', 'model/TmsV1InstrumentIdentifiersPost200ResponseLinks', 'model/TmsV1InstrumentIdentifiersPost200ResponseMetadata', 'model/TmsV1InstrumentIdentifiersPost200ResponseProcessingInformation', 'model/TmsV1InstrumentIdentifiersPost200ResponseTokenizedCard', 'model/Tmsv1instrumentidentifiersBankAccount'], factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TmsV1InstrumentIdentifiersPost200ResponseCard'), require('./TmsV1InstrumentIdentifiersPost200ResponseIssuer'), require('./TmsV1InstrumentIdentifiersPost200ResponseLinks'), require('./TmsV1InstrumentIdentifiersPost200ResponseMetadata'), require('./TmsV1InstrumentIdentifiersPost200ResponseProcessingInformation'), require('./TmsV1InstrumentIdentifiersPost200ResponseTokenizedCard'), require('./Tmsv1instrumentidentifiersBankAccount'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }

    root.CyberSource.InstrumentIdentifierResponse = factory(root.CyberSource.ApiClient, root.CyberSource.TmsV1InstrumentIdentifiersPost200ResponseCard, root.CyberSource.TmsV1InstrumentIdentifiersPost200ResponseIssuer, root.CyberSource.TmsV1InstrumentIdentifiersPost200ResponseLinks, root.CyberSource.TmsV1InstrumentIdentifiersPost200ResponseMetadata, root.CyberSource.TmsV1InstrumentIdentifiersPost200ResponseProcessingInformation, root.CyberSource.TmsV1InstrumentIdentifiersPost200ResponseTokenizedCard, root.CyberSource.Tmsv1instrumentidentifiersBankAccount);
  }
})(void 0, function (ApiClient, TmsV1InstrumentIdentifiersPost200ResponseCard, TmsV1InstrumentIdentifiersPost200ResponseIssuer, TmsV1InstrumentIdentifiersPost200ResponseLinks, TmsV1InstrumentIdentifiersPost200ResponseMetadata, TmsV1InstrumentIdentifiersPost200ResponseProcessingInformation, TmsV1InstrumentIdentifiersPost200ResponseTokenizedCard, Tmsv1instrumentidentifiersBankAccount) {
  'use strict';
  /**
   * The InstrumentIdentifierResponse model module.
   * @module model/InstrumentIdentifierResponse
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InstrumentIdentifierResponse</code>.
   * @alias module:model/InstrumentIdentifierResponse
   * @class
   */

  var exports = function exports() {
    var _this = this;
  };
  /**
   * Constructs a <code>InstrumentIdentifierResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InstrumentIdentifierResponse} obj Optional instance to populate.
   * @return {module:model/InstrumentIdentifierResponse} The populated <code>InstrumentIdentifierResponse</code> instance.
   */


  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = TmsV1InstrumentIdentifiersPost200ResponseLinks.constructFromObject(data['_links']);
      }

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }

      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }

      if (data.hasOwnProperty('card')) {
        obj['card'] = TmsV1InstrumentIdentifiersPost200ResponseCard.constructFromObject(data['card']);
      }

      if (data.hasOwnProperty('tokenizedCard')) {
        obj['tokenizedCard'] = TmsV1InstrumentIdentifiersPost200ResponseTokenizedCard.constructFromObject(data['tokenizedCard']);
      }

      if (data.hasOwnProperty('issuer')) {
        obj['issuer'] = TmsV1InstrumentIdentifiersPost200ResponseIssuer.constructFromObject(data['issuer']);
      }

      if (data.hasOwnProperty('bankAccount')) {
        obj['bankAccount'] = Tmsv1instrumentidentifiersBankAccount.constructFromObject(data['bankAccount']);
      }

      if (data.hasOwnProperty('processingInformation')) {
        obj['processingInformation'] = TmsV1InstrumentIdentifiersPost200ResponseProcessingInformation.constructFromObject(data['processingInformation']);
      }

      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = TmsV1InstrumentIdentifiersPost200ResponseMetadata.constructFromObject(data['metadata']);
      }
    }

    return obj;
  };
  /**
   * @member {module:model/TmsV1InstrumentIdentifiersPost200ResponseLinks} _links
   */


  exports.prototype['_links'] = undefined;
  /**
   * Unique identification number assigned by CyberSource to the submitted request.
   * @member {String} id
   */

  exports.prototype['id'] = undefined;
  /**
   * 'Describes type of token.'  Valid values: - instrumentIdentifier 
   * @member {String} object
   */

  exports.prototype['object'] = undefined;
  /**
   * 'Current state of the token.'  Valid values: - ACTIVE - CLOSED 
   * @member {String} state
   */

  exports.prototype['state'] = undefined;
  /**
   * @member {module:model/TmsV1InstrumentIdentifiersPost200ResponseCard} card
   */

  exports.prototype['card'] = undefined;
  /**
   * @member {module:model/TmsV1InstrumentIdentifiersPost200ResponseTokenizedCard} tokenizedCard
   */

  exports.prototype['tokenizedCard'] = undefined;
  /**
   * @member {module:model/TmsV1InstrumentIdentifiersPost200ResponseIssuer} issuer
   */

  exports.prototype['issuer'] = undefined;
  /**
   * @member {module:model/Tmsv1instrumentidentifiersBankAccount} bankAccount
   */

  exports.prototype['bankAccount'] = undefined;
  /**
   * @member {module:model/TmsV1InstrumentIdentifiersPost200ResponseProcessingInformation} processingInformation
   */

  exports.prototype['processingInformation'] = undefined;
  /**
   * @member {module:model/TmsV1InstrumentIdentifiersPost200ResponseMetadata} metadata
   */

  exports.prototype['metadata'] = undefined;
  return exports;
});