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
    define(['ApiClient', 'model/InlineResponseDefaultLinks', 'model/InlineResponseDefaultResponseStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponseDefaultLinks'), require('./InlineResponseDefaultResponseStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponseDefault = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponseDefaultLinks, root.CyberSource.InlineResponseDefaultResponseStatus);
  }
}(this, function(ApiClient, InlineResponseDefaultLinks, InlineResponseDefaultResponseStatus) {
  'use strict';




  /**
   * The InlineResponseDefault model module.
   * @module model/InlineResponseDefault
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponseDefault</code>.
   * @alias module:model/InlineResponseDefault
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponseDefault</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponseDefault} obj Optional instance to populate.
   * @return {module:model/InlineResponseDefault} The populated <code>InlineResponseDefault</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('responseStatus')) {
        obj['responseStatus'] = InlineResponseDefaultResponseStatus.constructFromObject(data['responseStatus']);
      }
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = InlineResponseDefaultLinks.constructFromObject(data['_links']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponseDefaultResponseStatus} responseStatus
   */
  exports.prototype['responseStatus'] = undefined;
  /**
   * @member {module:model/InlineResponseDefaultLinks} _links
   */
  exports.prototype['_links'] = undefined;



  return exports;
}));

