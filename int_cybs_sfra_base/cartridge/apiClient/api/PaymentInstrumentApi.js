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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse400', 'model/PatchPaymentInstrumentRequest', 'model/PostPaymentInstrumentRequest', 'model/Tmsv2customersEmbeddedDefaultPaymentInstrument'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse400'), require('../model/PatchPaymentInstrumentRequest'), require('../model/PostPaymentInstrumentRequest'), require('../model/Tmsv2customersEmbeddedDefaultPaymentInstrument'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentInstrumentApi = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse400, root.CyberSource.PatchPaymentInstrumentRequest, root.CyberSource.PostPaymentInstrumentRequest, root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrument);
  }
}(this, function(ApiClient, InlineResponse400, PatchPaymentInstrumentRequest, PostPaymentInstrumentRequest, Tmsv2customersEmbeddedDefaultPaymentInstrument) {
  'use strict';

  /**
   * PaymentInstrument service.
   * @module api/PaymentInstrumentApi
   * @version 0.0.1
   */

  /**
   * Constructs a new PaymentInstrumentApi. 
   * @alias module:api/PaymentInstrumentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the deletePaymentInstrument operation.
     * @callback module:api/PaymentInstrumentApi~deletePaymentInstrumentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Payment Instrument
     * @param {String} paymentInstrumentTokenId The TokenId of a payment instrument.
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The id of a profile containing user specific TMS configuration.
     * @param {module:api/PaymentInstrumentApi~deletePaymentInstrumentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePaymentInstrument = function(paymentInstrumentTokenId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'paymentInstrumentTokenId' is set
      if (paymentInstrumentTokenId === undefined || paymentInstrumentTokenId === null) {
        throw new Error("Missing the required parameter 'paymentInstrumentTokenId' when calling deletePaymentInstrument");
      }


      var pathParams = {
        'paymentInstrumentTokenId': paymentInstrumentTokenId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tms/v1/paymentinstruments/{paymentInstrumentTokenId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentInstrument operation.
     * @callback module:api/PaymentInstrumentApi~getPaymentInstrumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrument} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Payment Instrument
     * @param {String} paymentInstrumentTokenId The TokenId of a payment instrument.
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The id of a profile containing user specific TMS configuration.
     * @param {module:api/PaymentInstrumentApi~getPaymentInstrumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tmsv2customersEmbeddedDefaultPaymentInstrument}
     */
    this.getPaymentInstrument = function(paymentInstrumentTokenId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'paymentInstrumentTokenId' is set
      if (paymentInstrumentTokenId === undefined || paymentInstrumentTokenId === null) {
        throw new Error("Missing the required parameter 'paymentInstrumentTokenId' when calling getPaymentInstrument");
      }


      var pathParams = {
        'paymentInstrumentTokenId': paymentInstrumentTokenId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Tmsv2customersEmbeddedDefaultPaymentInstrument;

      return this.apiClient.callApi(
        '/tms/v1/paymentinstruments/{paymentInstrumentTokenId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchPaymentInstrument operation.
     * @callback module:api/PaymentInstrumentApi~patchPaymentInstrumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrument} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Payment Instrument
     * @param {String} paymentInstrumentTokenId The TokenId of a payment instrument.
     * @param {module:model/PatchPaymentInstrumentRequest} patchPaymentInstrumentRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The id of a profile containing user specific TMS configuration.
     * @param {String} opts.ifMatch Contains an ETag value from a GET request to make the request conditional.
     * @param {module:api/PaymentInstrumentApi~patchPaymentInstrumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tmsv2customersEmbeddedDefaultPaymentInstrument}
     */
    this.patchPaymentInstrument = function(paymentInstrumentTokenId, patchPaymentInstrumentRequest, opts, callback) {
      opts = opts || {};
      var postBody = patchPaymentInstrumentRequest;

      // verify the required parameter 'paymentInstrumentTokenId' is set
      if (paymentInstrumentTokenId === undefined || paymentInstrumentTokenId === null) {
        throw new Error("Missing the required parameter 'paymentInstrumentTokenId' when calling patchPaymentInstrument");
      }

      // verify the required parameter 'patchPaymentInstrumentRequest' is set
      if (patchPaymentInstrumentRequest === undefined || patchPaymentInstrumentRequest === null) {
        throw new Error("Missing the required parameter 'patchPaymentInstrumentRequest' when calling patchPaymentInstrument");
      }


      var pathParams = {
        'paymentInstrumentTokenId': paymentInstrumentTokenId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId'],
        'if-match': opts['ifMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Tmsv2customersEmbeddedDefaultPaymentInstrument;

      return this.apiClient.callApi(
        '/tms/v1/paymentinstruments/{paymentInstrumentTokenId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postPaymentInstrument operation.
     * @callback module:api/PaymentInstrumentApi~postPaymentInstrumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrument} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Payment Instrument
     * @param {module:model/PostPaymentInstrumentRequest} postPaymentInstrumentRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The id of a profile containing user specific TMS configuration.
     * @param {module:api/PaymentInstrumentApi~postPaymentInstrumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tmsv2customersEmbeddedDefaultPaymentInstrument}
     */
    this.postPaymentInstrument = function(postPaymentInstrumentRequest, opts, callback) {
      opts = opts || {};
      var postBody = postPaymentInstrumentRequest;

      // verify the required parameter 'postPaymentInstrumentRequest' is set
      if (postPaymentInstrumentRequest === undefined || postPaymentInstrumentRequest === null) {
        throw new Error("Missing the required parameter 'postPaymentInstrumentRequest' when calling postPaymentInstrument");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Tmsv2customersEmbeddedDefaultPaymentInstrument;

      return this.apiClient.callApi(
        '/tms/v1/paymentinstruments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));