/**
 * Doc-Node API
 * Deamon used to periodically generate volume's backup and send of this backups on a predefined persistent system (eg. NFS, SWIFT, ...)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Backup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Backup'));
  } else {
    // Browser globals (root is window)
    if (!root.DocNodeApi) {
      root.DocNodeApi = {};
    }
    root.DocNodeApi.InlineResponse2002 = factory(root.DocNodeApi.ApiClient, root.DocNodeApi.Backup);
  }
}(this, function(ApiClient, Backup) {
  'use strict';




  /**
   * The InlineResponse2002 model module.
   * @module model/InlineResponse2002
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2002</code>.
   * @alias module:model/InlineResponse2002
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2002} obj Optional instance to populate.
   * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('backups')) {
        obj['backups'] = ApiClient.convertToType(data['backups'], [Backup]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Backup>} backups
   */
  exports.prototype['backups'] = undefined;



  return exports;
}));


