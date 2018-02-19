(function () {
  'use strict';

  function CustomersService($resource) {
    return $resource('http://localhost:8080/api/customers/:customerId', {
      customerId: '@_id'
    }, {
      'get': {
        method: 'get',
        cache: true,
        transformResponse: []
      },
      'update': {
        method: 'put',
      },
      'remove': {
        method: 'delete',
      }
    }
          // other options:
            // url – {string|TrustedObject} – Absolute or relative URL of the resource that is being requested; or an object created by a call to $sce.trustAsResourceUrl(url).
          // params – {Object.<string|Object>} – Map of strings or objects which will be serialized with the paramSerializer and appended as GET parameters.
          // data – {string|Object} – Data to be sent as the request message data.
          // headers – {Object} – Map of strings or functions which return strings representing HTTP headers to send to the server. If the return value of a function is null, the header will not be sent. Functions accept a config object as an argument.
          // eventHandlers - {Object} - Event listeners to be bound to the XMLHttpRequest object. To bind events to the XMLHttpRequest upload object, use uploadEventHandlers. The handler will be called in the context of a $apply block.
          // uploadEventHandlers - {Object} - Event listeners to be bound to the XMLHttpRequest upload object. To bind events to the XMLHttpRequest object, use eventHandlers. The handler will be called in the context of a $apply block.
          // xsrfHeaderName – {string} – Name of HTTP header to populate with the XSRF token.
          // xsrfCookieName – {string} – Name of cookie containing the XSRF token.
          // transformRequest – {function(data, headersGetter)|Array.<function(data, headersGetter)>} – transform function or an array of such functions. The transform function takes the http request body and headers and returns its transformed (typically serialized) version. See Overriding the Default Transformations
          // transformResponse – {function(data, headersGetter, status)|Array.<function(data, headersGetter, status)>} – transform function or an array of such functions. The transform function takes the http response body, headers and status and returns its transformed (typically deserialized) version. See Overriding the Default Transformations
          // paramSerializer - {string|function(Object<string,string>):string} - A function used to prepare the string representation of request parameters (specified as an object). If specified as string, it is interpreted as function registered with the $injector, which means you can create your own serializer by registering it as a service. The default serializer is the $httpParamSerializer; alternatively, you can use the $httpParamSerializerJQLike
          // cache – {boolean|Object} – A boolean value or object created with $cacheFactory to enable or disable caching of the HTTP response. See $http Caching for more information.
          // timeout – {number|Promise} – timeout in milliseconds, or promise that should abort the request when resolved.
          // withCredentials - {boolean} - whether to set the withCredentials flag on the XHR object. See requests with credentials for more information.
          // responseType - {string}}
  )}

  function PopupService($window) {
    this.showPopup = function (msg) {
      return $window.confirm(msg)
    }
  }
  angular.module('dgmApp').factory('Customer', CustomersService)
    .service('popupService', PopupService);
})()
