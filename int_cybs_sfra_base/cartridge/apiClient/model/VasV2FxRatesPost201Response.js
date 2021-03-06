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
    define(['ApiClient', 'model/VasV2FxRatesPost201ResponseOrderInformation'], factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VasV2FxRatesPost201ResponseOrderInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }

    root.CyberSource.VasV2FxRatesPost201Response = factory(root.CyberSource.ApiClient, root.CyberSource.VasV2FxRatesPost201ResponseOrderInformation);
  }
})(void 0, function (ApiClient, VasV2FxRatesPost201ResponseOrderInformation) {
  'use strict';
  /**
   * The VasV2FxRatesPost201Response model module.
   * @module model/VasV2FxRatesPost201Response
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>VasV2FxRatesPost201Response</code>.
   * @alias module:model/VasV2FxRatesPost201Response
   * @class
   */

  var exports = function exports() {
    var _this = this;
  };
  /**
   * Constructs a <code>VasV2FxRatesPost201Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VasV2FxRatesPost201Response} obj Optional instance to populate.
   * @return {module:model/VasV2FxRatesPost201Response} The populated <code>VasV2FxRatesPost201Response</code> instance.
   */


  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'String');
      }

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }

      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = VasV2FxRatesPost201ResponseOrderInformation.constructFromObject(data['orderInformation']);
      }
    }

    return obj;
  };
  /**
   * An unique identification number assigned by CyberSource to identify the submitted request. It is also appended to the endpoint of the resource.  On incremental authorizations, this value with be the same as the identification number returned in the original authorization response. 
   * @member {String} id
   */


  exports.prototype['id'] = undefined;
  /**
   * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` Example `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC. 
   * @member {String} submitTimeUtc
   */

  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * The status of the submitted transaction.  Possible values:  - COMPLETED 
   * @member {String} status
   */

  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/VasV2FxRatesPost201ResponseOrderInformation} orderInformation
   */

  exports.prototype['orderInformation'] = undefined;
  return exports;
});