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
    define(['ApiClient', 'model/Ptsv2paymentsTravelInformationAgency', 'model/Ptsv2paymentsTravelInformationLodging', 'model/Ptsv2paymentsTravelInformationTransit'], factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsTravelInformationAgency'), require('./Ptsv2paymentsTravelInformationLodging'), require('./Ptsv2paymentsTravelInformationTransit'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }

    root.CyberSource.Ptsv2paymentsidcapturesTravelInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsTravelInformationAgency, root.CyberSource.Ptsv2paymentsTravelInformationLodging, root.CyberSource.Ptsv2paymentsTravelInformationTransit);
  }
})(void 0, function (ApiClient, Ptsv2paymentsTravelInformationAgency, Ptsv2paymentsTravelInformationLodging, Ptsv2paymentsTravelInformationTransit) {
  'use strict';
  /**
   * The Ptsv2paymentsidcapturesTravelInformation model module.
   * @module model/Ptsv2paymentsidcapturesTravelInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidcapturesTravelInformation</code>.
   * @alias module:model/Ptsv2paymentsidcapturesTravelInformation
   * @class
   */

  var exports = function exports() {
    var _this = this;
  };
  /**
   * Constructs a <code>Ptsv2paymentsidcapturesTravelInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidcapturesTravelInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidcapturesTravelInformation} The populated <code>Ptsv2paymentsidcapturesTravelInformation</code> instance.
   */


  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agency')) {
        obj['agency'] = Ptsv2paymentsTravelInformationAgency.constructFromObject(data['agency']);
      }

      if (data.hasOwnProperty('lodging')) {
        obj['lodging'] = Ptsv2paymentsTravelInformationLodging.constructFromObject(data['lodging']);
      }

      if (data.hasOwnProperty('transit')) {
        obj['transit'] = Ptsv2paymentsTravelInformationTransit.constructFromObject(data['transit']);
      }
    }

    return obj;
  };
  /**
   * @member {module:model/Ptsv2paymentsTravelInformationAgency} agency
   */


  exports.prototype['agency'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsTravelInformationLodging} lodging
   */

  exports.prototype['lodging'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsTravelInformationTransit} transit
   */

  exports.prototype['transit'] = undefined;
  return exports;
});