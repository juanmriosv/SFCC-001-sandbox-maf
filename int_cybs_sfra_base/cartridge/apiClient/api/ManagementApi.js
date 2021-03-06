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
    define(['ApiClient', 'model/ForeignExchangeRatesRequest', 'model/RaccountNumberLookupRequest', 'model/VasV2FxRatesPost201Response', 'model/VasV2FxRatesPost400Response', 'model/Vasv2accountnumberlookuppost201response', 'model/Vasv2accountnumberlookuppost400response', 'model/Vasv2accountnumberlookuppost502response'], factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ForeignExchangeRatesRequest'), require('../model/RaccountNumberLookupRequest'), require('../model/VasV2FxRatesPost201Response'), require('../model/VasV2FxRatesPost400Response'), require('../model/Vasv2accountnumberlookuppost201response'), require('../model/Vasv2accountnumberlookuppost400response'), require('../model/Vasv2accountnumberlookuppost502response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }

    root.CyberSource.ManagementApi = factory(root.CyberSource.ApiClient, root.CyberSource.ForeignExchangeRatesRequest, root.CyberSource.RaccountNumberLookupRequest, root.CyberSource.VasV2FxRatesPost201Response, root.CyberSource.VasV2FxRatesPost400Response, root.CyberSource.Vasv2accountnumberlookuppost201response, root.CyberSource.Vasv2accountnumberlookuppost400response, root.CyberSource.Vasv2accountnumberlookuppost502response);
  }
})(void 0, function (ApiClient, ForeignExchangeRatesRequest, RaccountNumberLookupRequest, VasV2FxRatesPost201Response, VasV2FxRatesPost400Response, Vasv2accountnumberlookuppost201response, Vasv2accountnumberlookuppost400response, Vasv2accountnumberlookuppost502response) {
  'use strict';
  /**
   * Management service.
   * @module api/ManagementApi
   * @version 2.0.0
   */

  /**
   * Constructs a new ManagementApi. 
   * @alias module:api/ManagementApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */

  var exports = function exports(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
    this.apiClient.setConfiguration(configObject);
    /**
     * Callback function to receive the result of the accountNumberLookup operation.
     * @callback module:api/ManagementApi~accountNumberLookupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Vasv2accountnumberlookuppost201response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Account Number Lookup
     * Account Number Lookup
     * @param {module:model/RaccountNumberLookupRequest} raccountNumberLookupRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.useMode The look up use mode to filter the result returned is for &#x60;A&#x60;, all card data, or &#x60;P&#x60;, push payment data.  (default to A)
     * @param {module:api/ManagementApi~accountNumberLookupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Vasv2accountnumberlookuppost201response}
     */

    this.accountNumberLookup = function (raccountNumberLookupRequest, opts, callback) {
      opts = opts || {};
      var postBody = raccountNumberLookupRequest; // verify the required parameter 'raccountNumberLookupRequest' is set

      if (raccountNumberLookupRequest === undefined || raccountNumberLookupRequest === null) {
        throw new Error("Missing the required parameter 'raccountNumberLookupRequest' when calling accountNumberLookup");
      }

      var pathParams = {};
      var queryParams = {
        'useMode': opts['useMode']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Vasv2accountnumberlookuppost201response;
      return this.apiClient.callApi('/vas/v2/account-number-lookup/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    };
    /**
     * Callback function to receive the result of the foreignExchangeRates operation.
     * @callback module:api/ManagementApi~foreignExchangeRatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VasV2FxRatesPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Foreign Exchange Rates
     *  There are two primary use cases for this call: * The sender wants to send a specific amount in a foreign currency and needs to estimate how much money is required in their domestic currency. * The sender wants to send a specific amount of money in their domestic currency in a cross border transaction to a recipient card in a different currency, and needs to know how much the recipient will receive in their currency. Sending a POST request to &#x60;/v2/fxrates&#x60; takes the amount in the &#x60;totalAmount&#x60; field and converts it from the currency in the &#x60;currency&#x60; field into the currency in the &#x60;foreignCurrency&#x60; field. You can also use the &#x60;markUpRate&#x60; field to charge a foreign exchange rate. The response contains a &#x60;markedUpForeignAmount&#x60; field, containing the transaction amount denominated in the recipient&#39;s currency.
     * @param {module:model/ForeignExchangeRatesRequest} foreignExchangeRatesRequest 
     * @param {module:api/ManagementApi~foreignExchangeRatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VasV2FxRatesPost201Response}
     */


    this.foreignExchangeRates = function (foreignExchangeRatesRequest, callback) {
      var postBody = foreignExchangeRatesRequest; // verify the required parameter 'foreignExchangeRatesRequest' is set

      if (foreignExchangeRatesRequest === undefined || foreignExchangeRatesRequest === null) {
        throw new Error("Missing the required parameter 'foreignExchangeRatesRequest' when calling foreignExchangeRates");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = VasV2FxRatesPost201Response;
      return this.apiClient.callApi('/vas/v2/fxrates/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    };
  };

  return exports;
});