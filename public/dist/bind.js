/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 104);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(15);
var isBuffer = __webpack_require__(43);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_base_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__css_base_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_bind_css__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_bind_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__css_bind_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_bind__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_ydui__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_ydui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_ydui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_ydui_dist_ydui_rem_css__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_ydui_dist_ydui_rem_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue_ydui_dist_ydui_rem_css__);








__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$axios = __WEBPACK_IMPORTED_MODULE_1_axios___default.a;



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_vue_ydui___default.a);

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  template: '<bind/>',
  components: { bind: __WEBPACK_IMPORTED_MODULE_4__components_bind__["a" /* default */] }
});

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(31);
var buildURL = __webpack_require__(34);
var parseHeaders = __webpack_require__(40);
var isURLSameOrigin = __webpack_require__(38);
var createError = __webpack_require__(14);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(33);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(36);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(30);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../_css-loader@0.28.7@css-loader/index.js!./ydui.rem.css", function() {
			var newContent = require("!!../../_css-loader@0.28.7@css-loader/index.js!./ydui.rem.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

/*! vue-ydui v1.0.4 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){ true?module.exports=e(__webpack_require__(5)):"function"==typeof define&&define.amd?define(["vue"],e):"object"==typeof exports?exports.ydui=e(require("vue")):t.ydui=e(t.Vue)}(this,function(t){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(12);var i=n(266),r=n(278),o=n(255),a=n(281),s=n(256),l=n(294),c=n(273),u=n(274),d=n(280),f=n(275),h=n(284),p=n(254),A=n(296),m=n(295),v=n(288),g=n(252),_=n(290),y=n(277),x=n(291),b=n(292),w=n(259),C=n(283),k=n(260),B=n(286),T=n(297),M=n(282),E=n(261),I=n(287),D=n(276),S=n(272),$=n(285),F=n(257),H=n(253),P=n(251),V=n(263),O=n(279),N=n(298),R=n(293),Y=n(258),L=n(289);window.document.addEventListener("touchstart",function(t){},!1);var Q=function(t){t.component(r.Layout.name,r.Layout),t.component(o.Button.name,o.Button),t.component(o.ButtonGroup.name,o.ButtonGroup),t.component(a.NavBar.name,a.NavBar),t.component(a.NavBarBackIcon.name,a.NavBarBackIcon),t.component(a.NavBarNextIcon.name,a.NavBarNextIcon),t.component(s.CellGroup.name,s.CellGroup),t.component(s.CellItem.name,s.CellItem),t.component(l.Switch.name,l.Switch),t.component(c.GridsItem.name,c.GridsItem),t.component(c.GridsGroup.name,c.GridsGroup),t.component(u.Icons.name,u.Icons),t.component(d.ListTheme.name,d.ListTheme),t.component(d.ListItem.name,d.ListItem),t.component(d.ListOther.name,d.ListOther),t.component(f.InfiniteScroll.name,f.InfiniteScroll),t.component(h.PullRefresh.name,h.PullRefresh),t.component(p.Badge.name,p.Badge),t.component(A.TabBar.name,A.TabBar),t.component(A.TabBarItem.name,A.TabBarItem),t.component(m.Tab.name,m.Tab),t.component(m.TabPanel.name,m.TabPanel),t.component(v.ScrollTab.name,v.ScrollTab),t.component(v.ScrollTabPanel.name,v.ScrollTabPanel),t.component(g.ActionSheet.name,g.ActionSheet),t.component(_.SendCode.name,_.SendCode),t.component(y.KeyBoard.name,y.KeyBoard),t.component(x.Slider.name,x.Slider),t.component(x.SliderItem.name,x.SliderItem),t.component(b.Spinner.name,b.Spinner),t.component(w.CitySelect.name,w.CitySelect),t.component(C.ProgressBar.name,C.ProgressBar),t.component(k.CountDown.name,k.CountDown),t.component(B.Rate.name,B.Rate),t.component(T.TextArea.name,T.TextArea),t.component(M.Popup.name,M.Popup),t.component(E.CountUp.name,E.CountUp),t.component(I.RollNotice.name,I.RollNotice),t.component(I.RollNoticeItem.name,I.RollNoticeItem),t.component(D.Input.name,D.Input),t.component(S.FlexBox.name,S.FlexBox),t.component(S.FlexBoxItem.name,S.FlexBoxItem),t.component($.Radio.name,$.Radio),t.component($.RadioGroup.name,$.RadioGroup),t.component(F.CheckBox.name,F.CheckBox),t.component(F.CheckBoxGroup.name,F.CheckBoxGroup),t.component(H.BackTop.name,H.BackTop),t.component(P.Accordion.name,P.Accordion),t.component(P.AccordionItem.name,P.AccordionItem),t.component(V.DateTime.name,V.DateTime),t.component(O.LightBox.name,O.LightBox),t.component(O.LightBoxImg.name,O.LightBoxImg),t.component(O.LightBoxTxt.name,O.LightBoxTxt),t.component(N.TimeLine.name,N.TimeLine),t.component(N.TimeLineItem.name,N.TimeLineItem),t.component(R.Step.name,R.Step),t.component(R.StepItem.name,R.StepItem),t.component(Y.CheckList.name,Y.CheckList),t.component(Y.CheckListItem.name,Y.CheckListItem),t.component(L.Search.name,L.Search),t.prototype.$dialog={confirm:i.Confirm,alert:i.Alert,toast:i.Toast,notify:i.Notify,loading:i.Loading}};"undefined"!=typeof window&&window.Vue&&Q(window.Vue),e.default={install:Q}},function(t,e){t.exports=function(t,e,n,i){var r,o=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(r=t,o=t.default);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),i){var l=s.computed||(s.computed={});Object.keys(i).forEach(function(t){var e=i[t];l[t]=function(){return e}})}return{esModule:r,exports:o,options:s}}},,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(n){e||(e=!0,(n||document).addEventListener("touchmove",t))},unlock:function(n){e=!1,(n||document).removeEventListener("touchmove",t)}}}(),i=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),r=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,i=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||n.test(t)||i.test(t)},o=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var n=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===n||"auto"===n)return e;e=e.parentNode}return window},a=function(t,e){var n=t===window?document.body.offsetHeight:t.offsetHeight,i=t===window?0:t.getBoundingClientRect().top,r=e.getBoundingClientRect().top-i,o=r+e.offsetHeight;return r>=0&&r<n||o>0&&o<=n},s=function(t,e){return e=e||"",!(0===e.replace(/\s/g,"").length||!t)&&new RegExp(" "+e+" ").test(" "+t.className+" ")},l=function(t,e){s(t,e)||(t.className=""===t.className?e:t.className+" "+e)},c=function(t,e){if(s(t,e)){for(var n=" "+t.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+e+" ")>=0;)n=n.replace(" "+e+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")}},u=function(t){function e(n,i,r){if(n!==i){var o=n+r>i?i:n+r;n>i&&(o=n-r<i?i:n-r),t===window?window.scrollTo(o,o):t.scrollTop=o,window.requestAnimationFrame(function(){return e(o,i,r)})}}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)});var o=Math.abs(n-i),a=Math.ceil(o/r*50);e(n,i,a)};e.pageScroll=n,e.isIOS=i,e.isColor=r,e.getScrollview=o,e.checkInview=a,e.addClass=l,e.removeClass=c,e.scrollTop=u},,function(e,n){e.exports=t},function(t,e,n){n(27);var i=n(1)(n(190),n(136),null,null);t.exports=i.exports},function(t,e,n){n(22);var i=n(1)(n(213),n(125),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(238),n(129),null,null);t.exports=i.exports},function(t,e,n){n(35);var i=n(1)(n(239),n(148),null,null);t.exports=i.exports},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={isDateTimeString:function(t){return/^\d{4}((\.|-|\/)(0[1-9]|1[0-2]))((\.|-|\/)(0[1-9]|[12][0-9]|3[0-1]))( ([01][0-9]|2[0-3]):([012345][0-9]))?$/.test(t)},isTimeString:function(t){return/^([01][0-9]|2[0-3]):([012345][0-9])$/.test(t)},mentStr:function(t){return(100+~~t+"").substr(1,2)},getYearItems:function(t){var e=[],n=~~t.startYear,i=~~t.endYear,r=new Date,o=r.getFullYear()-10,a=r.getFullYear()+10;for(0!==n&&(o=n),0!==i&&(a=i),a<o&&(a=o+10),t.startDate&&(o=new Date(t.startDate.replace(/-/g,"/")).getFullYear()),t.endDate&&(a=new Date(t.endDate.replace(/-/g,"/")).getFullYear()),t.startDate>t.endDate&&(a=o+10),o<n&&0!==n&&(o=n),a>i&&0!==i&&(a=i);o<=a;)e.push({value:o,name:t.format.replace("{value}",o)}),o++;return e},getMonthItems:function(t){var e=[],n=1,i=12;if(t.startDate){var r=new Date(t.startDate.replace(/-/g,"/"));r.getFullYear()===~~t.currentYear&&(n=r.getMonth()+1)}if(t.endDate){var o=new Date(t.endDate.replace(/-/g,"/"));o.getFullYear()===~~t.currentYear&&(i=o.getMonth()+1)}for(;n<=i;){var a=this.mentStr(n);e.push({value:a,name:t.format.replace("{value}",a)}),n++}return e},getDateItems:function(t){var e=[],n=new Date,i=n.getFullYear(),r=n.getMonth();t.currentYear&&(i=~~t.currentYear),t.currentMonth&&(r=~~t.currentMonth-1);var o=30;if([0,2,4,6,7,9,11].indexOf(r)>-1?o=31:1===r&&(o=i%100===0?i%400===0?29:28:i%4===0?29:28),t.endDate){var a=new Date(t.endDate.replace(/-/g,"/"));a.getMonth()+1===~~t.currentMonth&&a.getFullYear()===~~t.currentYear&&a.getDate()<o&&(o=a.getDate())}var s=1;if(t.startDate){var l=new Date(t.startDate.replace(/-/g,"/"));l.getMonth()+1===~~t.currentMonth&&l.getFullYear()===~~t.currentYear&&(s=l.getDate())}for(;s<=o;){var c=this.mentStr(s);e.push({value:c,name:t.format.replace("{value}",c)}),s++}return e},getHourItems:function(t){var e=[],n=~~t.startHour,i=~~t.endHour,r=n,o=i;if(o<r&&(o=23),t.startDate){var a=new Date(t.startDate.replace(/-/g,"/"));a.getFullYear()===~~t.currentYear&&a.getMonth()+1===~~t.currentMonth&&a.getDate()===~~t.currentDay&&r<=n&&(r=a.getHours(),r<n&&(r=n))}if(t.endDate){var s=new Date(t.endDate.replace(/-/g,"/"));s.getFullYear()===~~t.currentYear&&s.getMonth()+1===~~t.currentMonth&&s.getDate()===~~t.currentDay&&(o=s.getHours()),o>i&&(o=i)}for(;r<=o;){var l=this.mentStr(r);e.push({value:l,name:t.format.replace("{value}",l)}),r++}return e},getMinuteItems:function(t){var e=[],n=0,i=59;if(t.startDate){var r=new Date(t.startDate.replace(/-/g,"/"));r.getFullYear()===~~t.currentYear&&r.getMonth()+1===~~t.currentMonth&&r.getDate()===~~t.currentDay&&r.getHours()===~~t.currentHour&&(n=r.getMinutes())}if(t.endDate){var o=new Date(t.endDate.replace(/-/g,"/"));o.getFullYear()===~~t.currentYear&&o.getMonth()+1===~~t.currentMonth&&o.getDate()===~~t.currentDay&&o.getHours()===~~t.currentHour&&(i=o.getMinutes())}for(;n<=i;){var a=this.mentStr(n);e.push({value:a,name:t.format.replace("{value}",a)}),n++}return e}}},function(t,e,n){function i(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=h[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(c(i.parts[o],e))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(c(i.parts[o],e));h[i.id]={id:i.id,refs:1,parts:a}}}}function r(t){for(var e=[],n={},i=0;i<t.length;i++){var r=t[i],o=r[0],a=r[1],s=r[2],l=r[3],c={css:a,media:s,sourceMap:l};n[o]?n[o].parts.push(c):e.push(n[o]={id:o,parts:[c]})}return e}function o(t,e){var n=m(),i=_[_.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),_.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=_.indexOf(t);e>=0&&_.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function l(t){var e=document.createElement("link");return e.rel="stylesheet",o(t,e),e}function c(t,e){var n,i,r;if(e.singleton){var o=g++;n=v||(v=s(e)),i=u.bind(null,n,o,!1),r=u.bind(null,n,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(e),i=f.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),i=d.bind(null,n),r=function(){a(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}function u(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function d(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function f(t,e){var n=e.css,i=e.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var r=new Blob([n],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(r),o&&URL.revokeObjectURL(o)}var h={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},A=p(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),m=p(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,g=0,_=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=A()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=r(t);return i(n,e),function(t){for(var o=[],a=0;a<n.length;a++){var s=n[a],l=h[s.id];l.refs--,o.push(l)}if(t){var c=r(t);i(c,e)}for(var a=0;a<o.length;a++){var l=o[a];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete h[l.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var i=n(13);"string"==typeof i&&(i=[[t.id,i,""]]);n(11)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,n){e=t.exports=n(14)(),e.push([t.id,'*,:after,:before{box-sizing:border-box;outline:none}body,html{height:100%}body{background-color:#f5f5f5;font-size:12px;-webkit-font-smoothing:antialiased;font-family:arial,sans-serif}blockquote,body,button,dd,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,hr,iframe,img,input,legend,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0}article,aside,audio,details,figcaption,figure,footer,header,mark,menu,nav,section,summary,time,video{display:block;margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%}fieldset,img{border:0}address,caption,cite,dfn,em,i,th,var{font-style:normal;font-weight:400}ol,ul{list-style:none}a{color:inherit}a,a:hover{text-decoration:none}a,button,input,label,select{-webkit-tap-highlight-color:rgba(0,0,0,0)}button,input,select{font:100% tahoma,\\5b8b\\4f53,arial;vertical-align:baseline;border-radius:0;background-color:transparent}select{-webkit-appearance:none;-moz-appearance:none}button::-moz-focus-inner,input[type=button]::-moz-focus-inner,input[type=file]>input[type=button]::-moz-focus-inner,input[type=reset]::-moz-focus-inner,input[type=submit]::-moz-focus-inner{border:none}input[type=checkbox],input[type=radio]{vertical-align:middle}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none!important;-moz-appearance:none!important;margin:0}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px #fff inset}textarea{outline:none;border-radius:0;-webkit-appearance:none;-moz-appearance:none;overflow:auto;resize:none;font:100% tahoma,\\5b8b\\4f53,arial}@font-face{font-family:YDUI-INLAY;src:url(data:application/x-font-ttf;base64,AAEAAAALAIAAAwAwR1NVQrD+s+0AAAE4AAAAQk9TLzJW+kmeAAABfAAAAFZjbWFwPsI/zwAAAigAAALCZ2x5ZmZIFUYAAAUYAAAJ5GhlYWQPOcmhAAAA4AAAADZoaGVhB94DlgAAALwAAAAkaG10eFPpAAAAAAHUAAAAVGxvY2EZSBu6AAAE7AAAACxtYXhwASUAZwAAARgAAAAgbmFtZT5U/n0AAA78AAACbXBvc3TaScgCAAARbAAAAWIAAQAAA4D/gABcBAAAAAAABAAAAQAAAAAAAAAAAAAAAAAAABUAAQAAAAEAAMgj0SxfDzz1AAsEAAAAAADWDULYAAAAANYNQtgAAP90BAADgAAAAAgAAgAAAAAAAAABAAAAFQBbAAYAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKAB4ALAABREZMVAAIAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAAAAQP/AZAABQAIAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABAAHjnrQOA/4AAXAOAAIwAAAABAAAAAAAABAAAAAPpAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAAAAAABQAAAAMAAAAsAAAABAAAAcIAAQAAAAAAvAADAAEAAAAsAAMACgAAAcIABACQAAAAFgAQAAMABgB45gLmBOYN5hTmJud+54jnmOet//8AAAB45gDmBOYH5hTmJud954jnmOes//8AAAAAAAAAAAAAAAAAAAAAAAAAAAABABYAFgAaABoAJgAmACYAKAAoACgAAAABAAUABwANAAMACQAKAAsADAAOAAIACAAEAAYADwAQABEAEgATABQAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAQAAAAAAAAAAFAAAAHgAAAB4AAAAAQAA5gAAAOYAAAAABQAA5gEAAOYBAAAABwAA5gIAAOYCAAAADQAA5gQAAOYEAAAAAwAA5gcAAOYHAAAACQAA5ggAAOYIAAAACgAA5gkAAOYJAAAACwAA5goAAOYKAAAADAAA5gsAAOYLAAAADgAA5gwAAOYMAAAAAgAA5g0AAOYNAAAACAAA5hQAAOYUAAAABAAA5iYAAOYmAAAABgAA530AAOd9AAAADwAA534AAOd+AAAAEAAA54gAAOeIAAAAEQAA55gAAOeYAAAAEgAA56wAAOesAAAAEwAA560AAOetAAAAFAAAAAAAAAB2ALwBDgFGAVwBmgHaAjYCTgJmAtoDBAMeAy4DbgQABEIEXgSYBPIABQAA/+EDvAMYABMAKAAxAEQAUAAAAQYrASIOAh0BISc0LgIrARUhBRUXFA4DJyMnIQcjIi4DPQEXIgYUFjI2NCYXBgcGDwEOAR4BMyEyNicuAicBNTQ+AjsBMhYdAQEZGxpTEiUcEgOQAQoYJx6F/koCogEVHyMcDz4t/kksPxQyIBMIdwwSEhkSEowIBgUFCAICBA8OAW0XFgkFCQoG/qQFDxoVvB8pAh8BDBknGkxZDSAbEmGING4dJRcJAQGAgAETGyAOpz8RGhERGhF8GhYTEhkHEA0IGBoNIyQUAXfkCxgTDB0m4wAAAAADAAD/wAPAA0AADAAoACkAAAEOAQceARc+ATcuAScTFhQGIi8BBwYiJjQ/AScmNDYyHwE3NjIWFA8BFwIAvv0FBf2+vv0FBf2+twkTGgqJigoZFAqKigkTGgqJigoaEwqKigNABf2+vv0FBf2+vv0F/bYKGRMJiokJFBkKiIoKGRMJiokJFBkKiIoAAAMAAP+5A8QDQAAhAC4ALwAAEzU3Njc2NzY3Nj8BMxcWFxYXFhcWBwYHBgcGJyYnJicmJwE+ATcuAScOAQceARcxQAEDBhVESWtARhYZBz46fFNYDAYNDyZAbXKAQTy6TBkFAb6o3AQE3aem3gQE3qYBcRwGJCNqVFosGwUCAQIUKGVrikA/SkFsOz0IBBdHuD5C/p0E3qan3QQE3aen3QQAAAAAAwAA/8ADwANAAAsAFAAgAAABDgEHHgEXPgE3LgEDLgE0NjIWFAY3FAYiJj0BNDYyFhUCAL79BQX9vr79BQX9vhAVFSAVFRUVIBUVIBUDQAX9vr79BQX9vr79/WUBFR8VFR8VpxAVFRDzDxUVDwAAAAIAAAAAA8AC5wAFAAYAAAkCNxcBFwO//br+x3PGAe1ZAoz9jgGTYs8BploABQAA/8ADxgNAAAMABAASACAAIQAAJQcXNycBDgEHHgEXPgE3LgEnMQEOAQcuASc+ATceARc5AQMjMaIxov6kqOAEBOCoqOAEBOCoAUcEuIuLuAQEuIuLuASUMaMxowKsBd+pqOAEBOCoqd8F/nOKuQQEuYqLuQMDuYsAAAMAAP/AA8ADQAAMACMAJAAAAQ4BBx4BFz4BNy4BJwkBMQ4BJyYnMDEnJjQ2Mh8BATYyFhQHMQIAvv0FBf2+vv0FBf2+AQH+3gobDAQEpwwZIAyLAQUMIBkMA0AF/b6+/QUF/b6+/QX+tP7fCgQHAwSmDSAYC4oBBAwYIA0AAAAABAAA/8UDTgM5ABkAGgA1ADYAAAUDJjYXHgEHEz4BFxM+ARc+ARc+ARcRFgYHIRMOAQceARc1LgE1PgE3HgEXFAYHFT4BNy4BJzEBj9wEFkYqJAECA0MpAQFPOgFKPQFDLAERIf50Al99AgE8MhoeAl1HRl4BHRkyPAECfV46ARIITBkWNwIBoQgyOv74CC89CTNBCzpO/rQBIBYDcwJ9Xz5jHkUXPyVHXQICXUckPxdGHmM+X30CAAIAAP/AAwMDQAAFAAYAACUJATcJAScC9v6sAVQN/foCBg1ZAScBJ5n+QP5BmAAAAAIAAP/AAwMDQAAFAAYAACUHCQEXCQEBCg0CBv36DQFU/qxZmAG/AcCZ/tn+2QAAAAIAAAAAA8MCkQAWAE4AACURLgEHISIGFQcGDwEeATMXHgE3IT4BJQ4BMS4BMScHMAYHIiYnLgEnNDY/AScuATE+ATE+ATEeARUXNzQ2NzAWFzAWFTIGDwEXHgEVDgEDwAhTBv3ZCgrdBQEBAQYB2gcLAQIqRx3+6AcODAtISAsMAQ0HAQgBAwdHSAgBAQgIDQsNSEgMDA0ICAECCEdHBwMBCdQBVkYgAwYB9AYFBgoL8gYCAQlSPAYCAQhISAgBAgYBDAoBEAdHSAgPCwoHAwEIAUhIAQgBAwcKCw8ISEcHEAEKDAAAAAACAAD/dAPrA4AACwARAAABBiQnBgQnEgA3JBIBJzcXExcD1qf+0wt1/rcRHQGVHQF5ev3mviaF+DkCzAKpDXlABf4H/qEM7AJF/hGYOXIBHSYAAAABAAD/wAPAA0AACwAAASERIxEhFSERMxEhA8D+f37+fwGBfgGBAb8Bgf5/fv5/AYEAAAAAAQAAAAADwAG/AAUAAAExIRUhNQI//gEDgAG/fn4AAAACAAAAAAPAAr4AHQApAAABMDkBLgEnMSYjDgEHMR4BFzEWFxUeARczMT4BPwEFLgEnPgE3HgEXDgEDwDC9fCssmu44GUwxHyEzdD4Xi9o7Dv5APFACAlA8PFACAlABgXijGQgCrI4+aykZEwEeIAEHmn0gjwJQPDxQAgJQPDxQAAYAAAAAA8ACvgAmADcAPwBHAFkAWgAAATEuASc3PgEvAS4BDwEuASMOAQcxHgEXBw4BHwEeAT8BHgEzPgE3IT4BNxYXByYjDgEHFBcHLgElDgEHJic3Fgc+ATcyFwcmFyYnNx4BMz4BNyYnNx4BFw4BBwPAGlQ3KAkBCAQJFwk0M3M+mu44GU80MAkBCAQIFwo7NXhBmu05/MM0yYBgUlgoMkRbAhNnLEUBxwE3KR0XigvCATcpFROEBWFnVlgVMx1EWwIBGWUvShg0yYABgUNvKiQJFwkECQEILx0fAqyOQG0pLAkXCQUIAgg2ICICro5yiQIBKFEbAVtEKiJeIVcyKTcBAQ99FBgpNwEJdw/sAS5QERIBW0QxJ1shWjZyiwEAAAACAAD/wAOeA0AAGgAmAAAJASYjJyIGBwEGFBYyPwERFBYyNjURExYyNjQTISImNDY3IR4BFAYDUf7LCw4DCA0F/ukKFRsL3hMeE/8KHBQg/QoOFBQOAvYOFBQBdAE3CgEGBf7qCxwUCt39og8TEw8CYP8AChUbAZIUHRMBARMdFAAAAAACAAAAAANqA4AACwAMAAATHgEXPgE3LgEnDgEHlgTMmprMBATMmprMBAIWmcwEBMyZmswEBMyaAAEAAP/AA9kDQAAfAAABJiclJyYiDwEFDgEfAQMGFxYzMjclBRYzMjc2JwM3NgPUBhD+8JQJIgmU/vAQCwu0FAEOCAoGBgEDAQMGBgoIDgEUtAsB7BAFQ+4NDe5DBSAN1v7pEQsGA2hoAwYLEQEX1g0AAAAAAgAA/8AD2QNAAB8ANAAAASYnJScmIg8BBQ4BHwEDBhcWMzI3JQUWMzI3NicDNzYFNi8BNzY/ARcWHwEHBh8BJyYiDwED1AYQ/vCUCSIJlP7wEAsLtBQBDggKBgYBAwEDBgYKCA4BFLQL/UwBCJzrDAeAgAcM65wIARHgBgwG4AHsEAVD7g0N7kMFIA3W/ukRCwYDaGgDBgsRARfWDdsMCrk7AwvNzQsDO7kKDPJbAgJbAAAAAAASAN4AAQAAAAAAAAAVAAAAAQAAAAAAAQAIABUAAQAAAAAAAgAHAB0AAQAAAAAAAwAIACQAAQAAAAAABAAIACwAAQAAAAAABQALADQAAQAAAAAABgAIAD8AAQAAAAAACgArAEcAAQAAAAAACwATAHIAAwABBAkAAAAqAIUAAwABBAkAAQAQAK8AAwABBAkAAgAOAL8AAwABBAkAAwAQAM0AAwABBAkABAAQAN0AAwABBAkABQAWAO0AAwABBAkABgAQAQMAAwABBAkACgBWARMAAwABBAkACwAmAWkKQ3JlYXRlZCBieSBpY29uZm9udAppY29uZm9udFJlZ3VsYXJpY29uZm9udGljb25mb250VmVyc2lvbiAxLjBpY29uZm9udEdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAAoAQwByAGUAYQB0AGUAZAAgAGIAeQAgAGkAYwBvAG4AZgBvAG4AdAAKAGkAYwBvAG4AZgBvAG4AdABSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdABpAGMAbwBuAGYAbwBuAHQAVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG4AZgBvAG4AdABHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWAAF4D3lkdWljdW93dXNoaXhpbhB5ZHVpZGFueHVhbmt1YW5nE3lkdWlnYW50YW5oYW9zaGl4aW4LeWR1aWdvdXh1YW4KeWR1aXNvdXN1bxJ5ZHVpemhlbmdxdWVzaGl4aW4Hc2hvdXpoaQp5ZHVpZmFuaHVpC3lkdWlxaWFuamluCXlkdWl0dWlnZQd5ZHVpZHVuB3lkdWlqaWEIeWR1aWppYW4QWURVSS15aW5jYW5nbWltYRFZRFVJLXlpbmNhbmdtaW1hMRFZRFVJLWZhbmh1aWRpbmdidQ9ZRFVJLXNoaXhpbnl1YW4UWURVSS14aW5neGluZ3NoaXhpbjEVWURVSS14aW5neGluZ2tvbmd4aW4xAAAAAA==) format("truetype")}.g-fix-ios-overflow-scrolling-bug{-webkit-overflow-scrolling:auto!important}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var i=n(1)(n(184),n(169),null,null);t.exports=i.exports},function(t,e,n){n(31);var i=n(1)(n(185),n(144),null,null);t.exports=i.exports},function(t,e,n){n(18);var i=n(1)(n(186),n(120),null,null);t.exports=i.exports},function(t,e,n){n(25);var i=n(1)(n(187),n(133),null,null);t.exports=i.exports},function(t,e,n){n(29);var i=n(1)(n(188),n(139),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(189),n(151),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(191),n(171),null,null);t.exports=i.exports},function(t,e,n){n(37);var i=n(1)(n(192),n(150),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(193),n(138),null,null);t.exports=i.exports},function(t,e,n){n(45);var i=n(1)(n(194),n(165),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(195),n(163),null,null);t.exports=i.exports},function(t,e,n){n(51);var i=n(1)(n(196),n(182),null,null);t.exports=i.exports},function(t,e,n){n(38);var i=n(1)(n(197),n(155),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(198),n(157),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(199),n(152),null,null);t.exports=i.exports},function(t,e,n){n(49);var i=n(1)(n(200),n(179),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(201),n(156),null,null);t.exports=i.exports},function(t,e,n){n(24);var i=n(1)(n(202),n(127),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(203),n(166),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(204),n(177),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(205),n(116),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(206),n(131),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(207),n(168),null,null);t.exports=i.exports},function(t,e,n){n(33);var i=n(1)(n(208),n(146),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(209),n(173),null,null);t.exports=i.exports},function(t,e,n){n(16);var i=n(1)(n(210),n(118),null,null);t.exports=i.exports},function(t,e,n){n(23);var i=n(1)(n(211),n(126),null,null);t.exports=i.exports},function(t,e,n){n(40);var i=n(1)(n(212),n(159),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(null,n(172),null,null);t.exports=i.exports},function(t,e,n){n(47);var i=n(1)(n(214),n(170),null,null);t.exports=i.exports},function(t,e,n){n(19);var i=n(1)(n(215),n(121),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(216),n(153),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(217),n(140),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(218),n(178),null,null);t.exports=i.exports},function(t,e,n){n(17);var i=n(1)(n(219),n(119),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(220),n(142),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(221),n(154),null,null);t.exports=i.exports},function(t,e,n){n(30);var i=n(1)(n(222),n(143),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(223),n(128),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(224),n(141),null,null);t.exports=i.exports},function(t,e,n){n(44);var i=n(1)(n(225),n(164),null,null);t.exports=i.exports},function(t,e,n){n(50);var i=n(1)(n(226),n(180),null,null);t.exports=i.exports},function(t,e,n){n(42);var i=n(1)(n(227),n(161),null,null);t.exports=i.exports},function(t,e,n){n(20);var i=n(1)(n(228),n(122),null,null);t.exports=i.exports},function(t,e,n){n(48);var i=n(1)(n(229),n(176),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(230),n(175),null,null);t.exports=i.exports},function(t,e,n){n(15);var i=n(1)(n(231),n(117),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(232),n(134),null,null);t.exports=i.exports},function(t,e,n){n(36);var i=n(1)(n(233),n(149),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(234),n(132),null,null);t.exports=i.exports},function(t,e,n){n(28);var i=n(1)(n(235),n(137),null,null);t.exports=i.exports},function(t,e,n){n(43);var i=n(1)(n(236),n(162),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(237),n(124),null,null);t.exports=i.exports},function(t,e,n){n(41);var i=n(1)(n(240),n(160),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(241),n(183),null,null);t.exports=i.exports},function(t,e,n){n(46);var i=n(1)(n(242),n(167),null,null);t.exports=i.exports},function(t,e,n){n(39);var i=n(1)(n(243),n(158),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(244),n(181),null,null);t.exports=i.exports},function(t,e,n){n(26);var i=n(1)(n(245),n(135),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(246),n(174),null,null);t.exports=i.exports},function(t,e,n){n(32);var i=n(1)(n(247),n(145),null,null);t.exports=i.exports},function(t,e,n){n(21);var i=n(1)(n(248),n(123),null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(249),n(130),null,null);t.exports=i.exports},function(t,e,n){n(34);var i=n(1)(n(250),n(147),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-notify",class:t.classes,domProps:{innerHTML:t._s(t.mes)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"yd-rate",style:{fontSize:t.size,color:t.color}},[t._l(~~t.count,function(e,i){return n("a",{key:i,class:t.index>=e?"rate-active":"",style:{color:t.index>=e?t.activeColor:t.color,paddingRight:t.padding},attrs:{href:"javascript:;"},on:{click:function(n){!t.readonly&&t.choose(e)}}})}),t._v(" "),t.str?n("span",{staticClass:"yd-rate-text",domProps:{innerHTML:t._s(t.str)}}):t._e()],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"yd-grids-item",class:0!=t.$parent.itemHeight?"yd-grids-item-center":"",style:t.styles,attrs:{to:t.link||""}},[t.checkIcon?n("div",{staticClass:"yd-grids-icon"},[t._t("icon")],2):t._e(),t._v(" "),t.checkText?n("div",{staticClass:"yd-grids-txt"},[t._t("text")],2):t._e(),t._v(" "),t._t("else")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"yd-actionsheet-mask",on:{click:function(e){e.stopPropagation(),t.close(e)}}}),t._v(" "),n("div",{staticClass:"yd-actionsheet",class:t.show?"yd-actionsheet-active":""},[t._l(t.items,function(e,i){return n("a",{key:i,staticClass:"yd-actionsheet-item",attrs:{href:"javascript:;"},on:{click:function(n){n.stopPropagation(),t.itemClick(e)}}},[t._v(t._s(e.label))])}),t._v(" "),t.cancel?n("a",{staticClass:"yd-actionsheet-action",attrs:{href:"javascript:;"},on:{click:function(e){e.stopPropagation(),t.close(e)}}},[t._v(t._s(t.cancel))]):t._e()],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"yd-flexview"},[t.showNavbar?t._t("navbar",[t.title?n("yd-navbar",{attrs:{title:t.title}},[n("router-link",{attrs:{slot:"left",to:t.link||"/"},slot:"left"},[n("yd-navbar-back-icon")],1)],1):t._e()]):t._e(),t._v(" "),t._t("top"),t._v(" "),n("section",{ref:"scrollView",staticClass:"yd-scrollview",attrs:{id:"scrollView"}},[t._t("default")],2),t._v(" "),t._t("bottom"),t._v(" "),t._t("tabbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"dragBox"},[t._t("default"),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.touches.isDraging,expression:"touches.isDraging"}],ref:"dragTip",staticClass:"yd-pullrefresh-dragtip",class:t.dragTip.animationTiming,style:{transform:"translate3d(0, "+t.dragTip.translate+"px, 0) scale("+t.dragTip.scale+")"}},[n("span",{class:t.dragTip.loadingIcon,style:{transform:"rotate("+t.dragTip.iconRotate+"deg)",opacity:t.dragTip.iconOpacity}})])],2),t._v(" "),t.showHelpTag?n("div",{staticClass:"yd-pullrefresh-draghelp",on:{click:function(e){t.showHelpTag=!1}}},[t._m(0)]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("下拉更新")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-textarea"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.mlstr,expression:"mlstr"}],attrs:{placeholder:t.placeholder,maxlength:t.maxlength,readonly:t.readonly},domProps:{value:t.mlstr},on:{input:function(e){e.target.composing||(t.mlstr=e.target.value)}}}),t._v(" "),t.showCounter&&t.maxlength?n("div",{staticClass:"yd-textarea-counter"},[t._v(t._s(t.num)+"/"+t._s(t.maxlength))]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("yd-sendcode-button",{class:t.start?"btn-disabled":"",style:{backgroundColor:t.bgcolor,color:t.color},attrs:{size:t.size,type:t.type,disabled:t.start}},[t._v(t._s(t.tmpStr)+"\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-input"},["mobile"==t.regex?[n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",attrs:{type:"tel",pattern:"[0-9]*",name:t.name,maxlength:"11",placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.blurHandler,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}})]:["password"==t.type?[t.showPwd?t._e():n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",attrs:{type:"password",name:t.name,maxlength:t.max,placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},
domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.blurHandler,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}),t._v(" "),t.showPwd?n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",attrs:{type:"text",name:t.name,maxlength:t.max,placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.blurHandler,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e()]:t._e(),t._v(" "),"text"==t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",attrs:{type:"text",name:t.name,maxlength:t.max,placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.blurHandler,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"search"==t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",attrs:{type:"search",name:t.name,maxlength:t.max,placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.blurHandler,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"number"==t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",attrs:{type:"number",name:t.name,maxlength:t.max,placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.blurHandler,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"email"==t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",attrs:{type:"email",name:t.name,maxlength:t.max,placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.blurHandler,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"tel"==t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",attrs:{type:"tel",name:t.name,maxlength:t.max,placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.blurHandler,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"datetime-local"==t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",attrs:{type:"datetime-local",name:t.name,maxlength:t.max,placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.blurHandler,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"date"==t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",attrs:{type:"date",name:t.name,maxlength:t.max,placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.blurHandler,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"time"==t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",attrs:{type:"time",name:t.name,maxlength:t.max,placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.blurHandler,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e()],t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:t.showClearIcon&&t.showClear&&!t.isempty,expression:"showClearIcon && showClear && !isempty"}],staticClass:"yd-input-clear",attrs:{href:"javascript:;",tabindex:"-1"},on:{click:t.clearInput}}),t._v(" "),t.showErrorIcon?n("span",{directives:[{name:"show",rawName:"v-show",value:(!!t.regex||!!t.min||!!t.max||t.required)&&t.iserror&&t.initError,expression:"(!!regex || !!min || !!max || required) && iserror && initError"}],staticClass:"yd-input-error"}):t._e(),t._v(" "),t.showRequiredIcon&&t.showErrorIcon?n("span",{directives:[{name:"show",rawName:"v-show",value:(t.required||!!t.min&&t.min>0)&&t.isempty&&t.showWarn,expression:"(required || (!!min && min > 0)) && isempty && showWarn"}],staticClass:"yd-input-warn"}):t._e(),t._v(" "),t.showSuccessIcon?n("span",{directives:[{name:"show",rawName:"v-show",value:(!!t.regex||!!t.min||!!t.max||t.required)&&!t.iserror&&""!=t.currentValue,expression:"(!!regex || !!min || !!max || required) && !iserror && currentValue != ''"}],staticClass:"yd-input-success"}):t._e(),t._v(" "),"password"==t.type?n("a",{staticClass:"yd-input-password",class:t.showPwd?"yd-input-password-open":"",attrs:{href:"javascript:;",tabindex:"-1"},on:{click:function(e){e.stopPropagation(),t.showPwd=!t.showPwd}}}):t._e()],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{class:t.classes,style:t.styles})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-dialog-black-mask"},[n("div",{staticClass:"yd-confirm yd-alert"},[n("div",{staticClass:"yd-confirm-bd",domProps:{innerHTML:t._s(t.mes)}}),t._v(" "),n("div",{staticClass:"yd-confirm-ft"},[n("a",{staticClass:"yd-confirm-btn primary",attrs:{href:"javascript:;"},on:{click:function(e){e.stopPropagation(),t.closeAlert(e)}}},[t._v("确定")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i",{staticClass:"yd-back-icon",style:{color:t.color}}),t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-slider-item"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$slots.icon?"yd-timeline-custom-item":"yd-timeline-item"},[t.$slots.icon?[n("span",{staticClass:"yd-timeline-icon"},[t._t("icon")],2)]:[n("em",{staticClass:"yd-timeline-icon"})],t._v(" "),t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-dialog-white-mask"},[n("div",{staticClass:"yd-toast",class:""==t.iconsClass?"yd-toast-none-icon":""},[t.iconsClass?n("div",{class:t.iconsClass}):t._e(),t._v(" "),n("p",{staticClass:"yd-toast-content",domProps:{innerHTML:t._s(t.mes)}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-scrolltab-content-item"},[n("strong",{staticClass:"yd-scrolltab-content-title"},[t._v(t._s(t.label))]),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],on:{click:function(e){e.stopPropagation(),t.backtop(e)}}},[t.$slots.default?t._t("default"):n("div",{staticClass:"yd-backtop"})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-rollnotice-item"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-tab"},[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.navList.length>0,expression:"navList.length > 0"}],staticClass:"yd-tab-nav",style:{color:t.activeColor}},t._l(t.navList,function(e,i){return n("li",{key:i,staticClass:"yd-tab-nav-item",class:e._uid==t.activeIndex?"yd-tab-active":"",on:{click:function(n){t.changeHandler(e._uid,e.label,e.tabkey)}}},[n("a",{attrs:{href:"javascript:;"}},[t._v(t._s(e.label))])])})),t._v(" "),n("div",{staticClass:"yd-tab-panel"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.classes,style:{backgroundColor:t.bgcolor,color:t.color},attrs:{disabled:t.disabled}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-scrolltab"},[n("div",{staticClass:"yd-scrolltab-nav"},t._l(t.navList,function(e,i){return n("a",{key:i,staticClass:"yd-scrolltab-item",class:t.activeIndex==e._uid?"yd-scrolltab-active":"",attrs:{href:"javascript:;"},on:{click:function(n){t.moveHandler(e._uid)}}},[n("div",{staticClass:"yd-scrolltab-icon"},[n("i",{class:e.icon})]),t._v(" "),n("div",{staticClass:"yd-scrolltab-title"},[t._v(t._s(e.label))])])})),t._v(" "),n("div",{ref:"scrollView",staticClass:"yd-scrolltab-content"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"yd-badge",class:t.typesClass,style:{backgroundColor:t.bgcolor,color:t.color}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{attrs:{src:t.src,original:t.original}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._t("default"),n("i",{staticClass:"yd-next-icon",style:{color:t.color}})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return"link"==t.type?n("router-link",{staticClass:"yd-list-item",attrs:{to:t.href}},[n("div",{staticClass:"yd-list-img"},[t._t("img")],2),t._v(" "),n("div",{staticClass:"yd-list-mes"},[n("div",{staticClass:"yd-list-title"},[t._t("title")],2),t._v(" "),t._t("other")],2)]):"a"==t.type?n("a",{staticClass:"yd-list-item",attrs:{href:t.href||"javascript:;"}},[n("div",{staticClass:"yd-list-img"},[t._t("img")],2),t._v(" "),n("div",{staticClass:"yd-list-mes"},[n("div",{staticClass:"yd-list-title"},[t._t("title")],2),t._v(" "),t._t("other")],2)]):n("div",{staticClass:"yd-list-item"},[n("div",{staticClass:"yd-list-img"},[t._t("img")],2),t._v(" "),n("div",{staticClass:"yd-list-mes"},[n("div",{staticClass:"yd-list-title"},[t._t("title")],2),t._v(" "),t._t("other")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"yd-list",class:t.classes},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-accordion"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"yd-tabbar tabbbar-top-line-color",class:t.classes,style:t.styles},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-flexbox",class:"vertical"==t.direction?"yd-flexbox-vertical":"yd-flexbox-horizontal"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-timeline"},[n("ul",{staticClass:"yd-timeline-content"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"slider",staticClass:"yd-slider"},[n("div",{ref:"warpper",staticClass:"yd-slider-wrapper",class:"vertical"==t.direction?"yd-slider-wrapper-vertical":"",style:t.dragStyleObject},[t.loop?n("div",{staticClass:"yd-slider-item",style:t.itemHeight,domProps:{innerHTML:t._s(t.lastItem)}}):t._e(),t._v(" "),t._t("default"),t._v(" "),t.loop?n("div",{staticClass:"yd-slider-item",style:t.itemHeight,domProps:{innerHTML:t._s(t.firtstItem)}}):t._e()],2),t._v(" "),t.itemsArr.length>1&&t.showPagination?n("div",{staticClass:"yd-slider-pagination",class:"vertical"==t.direction?"yd-slider-pagination-vertical":""},t._l(t.itemNums,function(e,i){return n("span",{key:i,staticClass:"yd-slider-pagination-item",class:t.paginationIndex==i?"yd-slider-pagination-item-active":""})})):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-rollnotice",style:{height:t.height+"px"}},[n("div",{staticClass:"yd-rollnotice-box",class:"yd-rollnotice-align-"+t.align,style:t.styles},[n("div",{staticClass:"yd-rollnotice-item",domProps:{innerHTML:t._s(t.lastItem)}}),t._v(" "),t._t("default"),t._v(" "),n("div",{staticClass:"yd-rollnotice-item",domProps:{innerHTML:t._s(t.firtstItem)}})],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return"label"==t.type||"checkbox"==t.type||"radio"==t.type?n("label",{staticClass:"yd-cell-item"},[t.checkLeft?n("span",{staticClass:"yd-cell-left"},[n("span",{staticClass:"yd-cell-icon"},[t._t("icon")],2),t._v(" "),t._t("left")],2):t._e(),t._v(" "),n("label",{staticClass:"yd-cell-right",class:t.classes},[t._t("right"),t._v(" "),"checkbox"==t.type?n("i",{staticClass:"yd-cell-checkbox-icon"}):t._e(),t._v(" "),"radio"==t.type?n("i",{staticClass:"yd-cell-radio-icon"}):t._e()],2)]):"link"==t.type?n("router-link",{staticClass:"yd-cell-item",attrs:{to:t.href}},[t.checkLeft?n("div",{staticClass:"yd-cell-left"},[n("span",{staticClass:"yd-cell-icon"},[t._t("icon")],2),t._v(" "),t._t("left")],2):t._e(),t._v(" "),n("div",{staticClass:"yd-cell-right",class:t.classes},[t._t("right")],2)]):"a"==t.type?n("a",{staticClass:"yd-cell-item",attrs:{href:t.href}},[t.checkLeft?n("div",{staticClass:"yd-cell-left"},[n("span",{staticClass:"yd-cell-icon"},[t._t("icon")],2),t._v(" "),t._t("left")],2):t._e(),t._v(" "),n("div",{staticClass:"yd-cell-right",class:t.classes},[t._t("right")],2)]):n("div",{staticClass:"yd-cell-item"},[t.checkLeft?n("div",{staticClass:"yd-cell-left"},[n("span",{staticClass:"yd-cell-icon"},[t._t("icon")],2),t._v(" "),t._t("left")],2):t._e(),t._v(" "),n("div",{staticClass:"yd-cell-right",class:t.classes},[t._t("right")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-button"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span")},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"yd-lightbox"},[n("div",{staticClass:"yd-lightbox-head",class:t.show?"":"yd-lightbox-up-hide"},[n("span",[t._v(t._s(t.currentIndex+1)+" / "+t._s(t.imgItems.length))]),t._v(" "),n("a",{attrs:{href:"javascript:;"},on:{click:t.close}},[t._v(t._s(t.closeText))])]),t._v(" "),n("div",{staticClass:"yd-lightbox-img",on:{click:function(e){t.show=!t.show}}},[n("slider",{attrs:{autoplay:"0","show-pagination":!1,loop:!1,callback:t.changeIndex,index:t.index}},t._l(t.imgItems,function(e,i){return n("slider-item",{key:i},[n("img",{attrs:{src:t.getImgSrc(e.$el)}})])})),t._v(" "),n("div",{staticClass:"yd-lightbox-loading"},[n("svg",{attrs:{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[n("circle",{attrs:{cx:"50",cy:"50",fill:"none",stroke:"#ffffff","stroke-width":"7",r:"47","stroke-dasharray":"221.48228207808043 75.82742735936014",transform:"rotate(25.5138 50 50)"}},[n("animateTransform",{attrs:{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"0.8s",begin:"0s",repeatCount:"indefinite"}})],1)])])],1),t._v(" "),t.txtHTML?n("div",{staticClass:"yd-lightbox-foot",class:t.show?"":"yd-lightbox-down-hide",domProps:{innerHTML:t._s(t.txtHTML)}}):t._e()])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-list-other"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"mask",staticClass:"yd-cityselect-mask",on:{click:function(e){e.stopPropagation(),t.close(e)}}}),t._v(" "),n("div",{staticClass:"yd-cityselect",class:t.show?"yd-cityselect-active":""},[n("div",{staticClass:"yd-cityselect-header"},[n("p",{staticClass:"yd-cityselect-title",on:{touchstart:function(t){t.stopPropagation(),t.preventDefault()}}},[t._v(t._s(t.title))]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticClass:"yd-cityselect-nav"},t._l(t.columnNum,function(e,i){return n("a",{directives:[{name:"show",rawName:"v-show",value:!!t.nav["txt"+e],expression:"!!nav['txt' + index]"}],key:i,class:e==t.navIndex?"yd-cityselect-nav-active":"",attrs:{href:"javascript:;"},on:{click:function(n){n.stopPropagation(),t.navEvent(e)}}},[t._v(t._s(t.nav["txt"+e]))])}))]),t._v(" "),t.ready?t._e():n("div",{staticClass:"yd-cityselect-loading"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[n("path",{attrs:{stroke:"none",d:"M3 50A47 47 0 0 0 97 50A47 49 0 0 1 3 50",fill:"#bababa",transform:"rotate(317.143 50 51)"}},[n("animateTransform",{attrs:{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 51;360 50 51",keyTimes:"0;1",dur:"0.6s",begin:"0s",repeatCount:"indefinite"}})],1)])]),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticClass:"yd-cityselect-content",class:t.activeClasses},t._l(t.columnNum,function(e,i){return n("li",{key:i,ref:"itemBox"+e,refInFor:!0,staticClass:"yd-cityselect-item"},[t.columns["columnItems"+e].length>0?[n("div",{staticClass:"yd-cityselect-item-box"},t._l(t.columns["columnItems"+e],function(i,r){return n("a",{key:r,class:t.currentClass(i.v,i.n,e),attrs:{href:"javascript:;"},on:{click:function(n){n.stopPropagation(),t.itemEvent(e,i.n,i.v,i.c)}}},[n("span",[t._v(t._s(i.n))])])}))]:[n("div",{staticClass:"yd-cityselect-item-box",on:{touchstart:function(t){t.stopPropagation(),t.preventDefault()}}})]],2)}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"yd-datetime-mask",on:{click:function(e){e.stopPropagation(),t.close(e)}}}),t._v(" "),n("div",{staticClass:"yd-datetime",class:t.show?"yd-datetime-active":""},[n("div",{staticClass:"yd-datetime-head"},[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){e.stopPropagation(),t.close(e)}}},[t._v(t._s(t.cancelText))]),t._v(" "),n("a",{attrs:{href:"javascript:;"},on:{click:function(e){e.stopPropagation(),t.setValue(e)}}},[t._v(t._s(t.confirmText))])]),t._v(" "),n("div",{staticClass:"yd-datetime-content"},[t._l(t.columns,function(e,i){return n("div",{key:i,staticClass:"yd-datetime-item"},[n("div",{ref:"Component_"+e,refInFor:!0,staticClass:"yd-datetime-item-box"},[n("div",{ref:"Content_"+e,refInFor:!0,staticClass:"yd-datetime-item-content"},t._l(t.items[e],function(e,i){return n("span",{key:i,attrs:{"data-value":e.value},domProps:{innerHTML:t._s(e.name)}})}))])])}),t._v(" "),n("div",{staticClass:"yd-datetime-shade"}),t._v(" "),t._m(0)],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-datetime-indicator"},[n("span")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("span",{domProps:{innerHTML:t._s(t.str)}}),t._v(" "),t.showTpl?n("span",{ref:"tpl"},[t._t("default")],2):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],staticClass:"yd-switch",style:{color:t.color},attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:function(e){var n=t.checked,i=e.target,r=!!i.checked;if(Array.isArray(n)){var o=null,a=t._i(n,o);i.checked?a<0&&(t.checked=n.concat([o])):a>-1&&(t.checked=n.slice(0,a).concat(n.slice(a+1)))}else t.checked=r}}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("list"),t._v(" "),n("div",{ref:"tag",staticStyle:{height:"0"}}),t._v(" "),t.isDone?t._e():n("div",{staticClass:"yd-list-loading"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]},[t._t("loadingTip",[n("loading")])],2)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading&&t.isDone,expression:"!isLoading && isDone"}],staticClass:"yd-list-donetip"},[t._t("doneTip",[t._v("没有更多数据了")])],2)],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"yd-spinner",style:{height:t.height,width:t.width}},[n("a",{ref:"minus",attrs:{href:"javascript:;"}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.counter,expression:"counter"}],ref:"numInput",staticClass:"yd-spinner-input",attrs:{type:"number",pattern:"[0-9]*",readonly:t.readonly,placeholder:""},domProps:{value:t.counter},on:{input:function(e){e.target.composing||(t.counter=e.target.value)}}}),t._v(" "),n("a",{ref:"add",attrs:{href:"javascript:;"}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-progressbar"},["line"!=t.type?n("div",{staticClass:"yd-progressbar-content"},[t._t("default")],2):t._e(),t._v(" "),n("svg",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{viewBox:t.viewBox,preserveAspectRatio:"line"==t.type?"none":""}},[n("path",{attrs:{"fill-opacity":t.fillColor?1:0,d:t.getPathString,fill:t.fillColor,stroke:t.strokeColor,"stroke-width":t.trailWidth}}),t._v(" "),n("path",{ref:"trailPath",style:{strokeDasharray:t.stroke.dasharray,strokeDashoffset:t.stroke.dashoffset},attrs:{"fill-opacity":"0",d:t.getPathString,stroke:t.trailColor,"stroke-width":t.strokeWidth?t.strokeWidth:t.trailWidth}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"yd-search"},[n("div",{staticClass:"yd-search-input"},[n("form",{staticClass:"search-input",attrs:{action:"#"},on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[n("i",{staticClass:"search-icon"}),t._v(" "),n("yd-search-input",{ref:"search",attrs:{type:"search",placeholder:t.placeholder,readonly:t.fullpage},nativeOn:{click:function(e){t.open(e)}},model:{value:t.currentValue,callback:function(e){t.currentValue=e},expression:"currentValue"}})],1),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:""!==t.currentValue,expression:"currentValue !== ''"}],staticClass:"cancel-text",attrs:{href:"javascript:;"},on:{click:t.close}},[t._v(t._s(t.cancelText))])])]),t._v(" "),t.fullpage?[n("div",{staticClass:"yd-search yd-search-fly",class:t.show?"yd-search-show":"",style:{top:t.top}},[n("div",{staticClass:"yd-search-input"},[n("form",{staticClass:"search-input",attrs:{action:"#"},on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[n("i",{staticClass:"search-icon"}),t._v(" "),n("yd-search-input",{ref:"search",attrs:{type:"search",placeholder:t.placeholder},model:{value:t.currentValue,callback:function(e){t.currentValue=e},expression:"currentValue"}})],1),t._v(" "),n("a",{staticClass:"cancel-text",attrs:{href:"javascript:;"},on:{click:t.close}},[t._v(t._s(t.cancelText))])]),t._v(" "),n("div",{staticClass:"yd-search-list",style:{paddingBottom:t.top}},t._l(t.result,function(e,i){return n("p",{key:i,staticClass:"yd-search-list-item",on:{click:function(n){t.clickHandler(e)}}},[t._v(t._s(e))])}))])]:t._e()],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-checklist-item",on:{click:t.emitChangeHandler}},[t.label?n("div",{staticClass:"yd-checklist-item-icon"},[n("input",{attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:t.checked}}),t._v(" "),t._m(0)]):n("label",{staticClass:"yd-checklist-item-icon"},[n("input",{attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:t.checked},on:{change:t.changeHandler}}),t._v(" "),t._m(1)]),t._v(" "),n("div",{staticClass:"yd-checklist-content"},[t._t("default")],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"yd-checklist-icon"},[n("i")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"yd-checklist-icon"},[n("i")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"yd-navbar navbar-bottom-line-color",class:t.classes,style:{backgroundColor:t.bgcolor,height:t.height}},[n("div",{staticClass:"yd-navbar-item"},[t._t("left")],2),t._v(" "),n("div",{staticClass:"yd-navbar-center-box",style:{height:t.height}},[n("div",{staticClass:"yd-navbar-center"},[t._t("center",[n("span",{staticClass:"yd-navbar-center-title",style:{color:t.color,fontSize:t.fontsize}},[t._v(t._s(t.title))])])],2)]),t._v(" "),n("div",{staticClass:"yd-navbar-item"},[t._t("right")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"yd-checkbox",class:"circle"==t.shape?"yd-checkbox-circle":""},[t.group?[n("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],attrs:{type:"checkbox",disabled:t.disabled},domProps:{value:t.val,checked:Array.isArray(t.model)?t._i(t.model,t.val)>-1:t.model},on:{change:[function(e){var n=t.model,i=e.target,r=!!i.checked;if(Array.isArray(n)){var o=t.val,a=t._i(n,o);i.checked?a<0&&(t.model=n.concat([o])):a>-1&&(t.model=n.slice(0,a).concat(n.slice(a+1)))}else t.model=r},t.changeHandler]}})]:[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:function(e){var n=t.checked,i=e.target,r=!!i.checked;if(Array.isArray(n)){var o=null,a=t._i(n,o);i.checked?a<0&&(t.checked=n.concat([o])):a>-1&&(t.checked=n.slice(0,a).concat(n.slice(a+1)))}else t.checked=r}}})],t._v(" "),n("span",{staticClass:"yd-checkbox-icon",style:t.iconStyles()},[n("i",{style:t.checkIconStyles()})]),t._v(" "),t.$slots.default?[n("span",{staticClass:"yd-checkbox-text"},[t._t("default")],2)]:[n("span",{staticClass:"yd-checkbox-text"},[t._v(t._s(t.val))])]],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-dialog-black-mask"},[n("div",{staticClass:"yd-confirm"},[n("div",{staticClass:"yd-confirm-hd"},[n("strong",{staticClass:"yd-confirm-title",domProps:{innerHTML:t._s(t.title)}})]),t._v(" "),n("div",{staticClass:"yd-confirm-bd",domProps:{innerHTML:t._s(t.mes)}}),t._v(" "),"function"==typeof t.opts?[n("div",{staticClass:"yd-confirm-ft"},[n("a",{staticClass:"yd-confirm-btn default",attrs:{href:"javascript:;"},on:{click:function(e){e.stopPropagation(),t.closeConfirm(!1)}}},[t._v("取消")]),t._v(" "),n("a",{staticClass:"yd-confirm-btn primary",attrs:{href:"javascript:;"},on:{click:function(e){e.stopPropagation(),t.closeConfirm(!1,t.opts)}}},[t._v("确定")])])]:[n("div",{staticClass:"yd-confirm-ft"},t._l(t.opts,function(e,i){return n("a",{key:i,staticClass:"yd-confirm-btn",class:"boolean"==typeof e.color?e.color?"primary":"default":"",style:{color:e.color},attrs:{href:"javascript:;"},on:{click:function(n){n.stopPropagation(),t.closeConfirm(e.stay,e.callback)}}},[t._v(t._s(e.txt))])}))]],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-step",class:"yd-step-theme"+t.theme},[n("ul",{staticClass:"yd-step-content",style:{paddingBottom:t.hasBottom?"42px":"10px",paddingTop:t.hasTop?"42px":"10px",color:t.currentColor}},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-flexbox-item",class:t.classes},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"yd-accordion-head"},[n("div",{staticClass:"yd-accordion-head-content"},[t._t("icon"),t._v(" "),n("div",{staticClass:"yd-accordion-title",class:t.$slots.icon||t.$slots.txt?"":"yd-accordion-title-full",on:{click:t.toggle}},[t.$slots.title?n("span",[t._t("title")],2):n("span",[t._v(t._s(t.title))])]),t._v(" "),t._t("txt")],2),t._v(" "),n("i",{class:t.show?"yd-accordion-rotated":""})]),t._v(" "),n("div",{staticClass:"yd-accordion-content",style:t.styleHeight},[n("div",{ref:"content"},[t._t("default")],2)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.triggerClose?n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"yd-keyboard-mask",on:{click:function(e){e.stopPropagation(),t.close(e)}}}):n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"yd-mask-keyboard"}),t._v(" "),n("div",{staticClass:"yd-keyboard",class:t.show?"yd-keyboard-active":""},[n("div",{staticClass:"yd-keyboard-head"},[n("strong",[t._v(t._s(t.inputText))])]),t._v(" "),n("div",{staticClass:"yd-keyboard-error"},[t._v(t._s(t.error))]),t._v(" "),n("ul",{staticClass:"yd-keyboard-password"},t._l(6,function(e,i){return n("li",{key:i},[n("i",{directives:[{name:"show",rawName:"v-show",value:t.nums.length>=e,expression:"nums.length >= n"}]})])})),t._v(" "),n("div",{staticClass:"yd-keyboard-content"},[n("div",{staticClass:"yd-keyboard-title"},[t._v(t._s(t.title))]),t._v(" "),n("ul",{staticClass:"yd-keyboard-numbers"},t._l(4,function(e,i){return n("li",{key:i},[t.triggerClose?[4==e?n("a",{attrs:{href:"javascript:;"},on:{click:function(e){e.stopPropagation(),t.close(e)}}},[t._v(t._s(t.cancelText))]):t._e()]:[4==e?n("a",{attrs:{href:"javascript:;"}}):t._e()],t._v(" "),t.isMobile?t._l(t.numsArr.slice(3*(e-1),3*e),function(e,i){return n("a",{key:i,attrs:{href:"javascript:;"},on:{touchstart:function(n){n.stopPropagation(),t.numclick(e)}}},[t._v(t._s(e))])}):t._l(t.numsArr.slice(3*(e-1),3*e),function(e,i){return n("a",{key:i,attrs:{href:"javascript:;"},on:{click:function(n){n.stopPropagation(),t.numclick(e)}}},[t._v(t._s(e))])}),t._v(" "),4==e?n("a",{attrs:{href:"javascript:;"},on:{
click:function(e){e.stopPropagation(),t.backspace(e)}}}):t._e()],2)}))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-cell-box"},[n("div",{staticClass:"yd-cell"},[t.title?n("div",{staticClass:"yd-cell-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t._t("default")],2),t._v(" "),t._t("bottom")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"lds-ellipsis",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[n("circle",{attrs:{cx:"84",cy:"50",r:"5.04711",fill:"#f3b72e"}},[n("animate",{attrs:{attributeName:"r",values:"10;0;0;0;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"0s"}}),t._v(" "),n("animate",{attrs:{attributeName:"cx",values:"84;84;84;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"0s"}})]),t._v(" "),n("circle",{attrs:{cx:"66.8398",cy:"50",r:"10",fill:"#E8574E"}},[n("animate",{attrs:{attributeName:"r",values:"0;10;10;10;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"-0.85s"}}),t._v(" "),n("animate",{attrs:{attributeName:"cx",values:"16;16;50;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"-0.85s"}})]),t._v(" "),n("circle",{attrs:{cx:"32.8398",cy:"50",r:"10",fill:"#43A976"}},[n("animate",{attrs:{attributeName:"r",values:"0;10;10;10;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"-0.425s"}}),t._v(" "),n("animate",{attrs:{attributeName:"cx",values:"16;16;50;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"-0.425s"}})]),t._v(" "),n("circle",{attrs:{cx:"16",cy:"50",r:"4.95289",fill:"#304153"}},[n("animate",{attrs:{attributeName:"r",values:"0;10;10;10;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"0s"}}),t._v(" "),n("animate",{attrs:{attributeName:"cx",values:"16;16;50;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"0s"}})]),t._v(" "),n("circle",{attrs:{cx:"16",cy:"50",r:"0",fill:"#f3b72e"}},[n("animate",{attrs:{attributeName:"r",values:"0;0;10;10;10",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"0s"}}),t._v(" "),n("animate",{attrs:{attributeName:"cx",values:"16;16;16;50;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1.7s",repeatCount:"indefinite",begin:"0s"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.title?n("div",{staticClass:"yd-gridstitle"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{class:t.classes},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"yd-tabbar-item",class:t.classes,style:t.styles,attrs:{to:t.link,exact:t.$parent.exact,"active-class":t.$parent.activeClass}},[n("span",{staticClass:"yd-tabbar-icon"},[t._t("icon"),t._v(" "),n("span",{staticClass:"yd-tabbar-badge"},[t._t("badge")],2),t._v(" "),t.dot?n("span",{staticClass:"yd-tabbar-dot"}):t._e()],2),t._v(" "),n("span",{staticClass:"yd-tabbar-txt"},[t._v(t._s(t.title))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"yd-radio"},[n("input",{attrs:{type:"radio",disabled:t.disabled},domProps:{checked:t.checked},on:{change:t.changeHandler}}),t._v(" "),n("span",{staticClass:"yd-radio-icon",style:[{color:t.$parent.color},t.styles(1)]},[n("i",{style:t.styles(2)})]),t._v(" "),t.$slots.default?n("span",{staticClass:"yd-radio-text"},[t._t("default")],2):n("span",{staticClass:"yd-radio-text"},[t._v(t._s(t.val))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-dialog-white-mask"},[n("div",{staticClass:"yd-loading"},[n("div",{staticClass:"yd-loading-icon"}),t._v(" "),n("div",{staticClass:"yd-loading-txt",domProps:{innerHTML:t._s(t.title)}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"none"}},[t._t("top"),t._v(" "),n("div",{staticClass:"yd-lightbox-scroller"},[t._t("content")],2),t._v(" "),t._t("bottom")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-datetime-input",on:{click:function(e){e.stopPropagation(),t.open(e)}}},[t._v(t._s(t.value))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"yd-popup-mask",on:{click:function(e){e.stopPropagation(),t.close(e)}}}),t._v(" "),n("div",{ref:"box",class:t.classes,style:t.styles()},[t.$slots.top&&"center"!=t.position?n("div",{ref:"top"},[t._t("top")],2):t._e(),t._v(" "),n("div",{staticClass:"yd-popup-content"},[n("div",{ref:"content"},[t._t("default")],2)]),t._v(" "),t.$slots.bottom&&"center"!=t.position?n("div",{ref:"bottom"},[t._t("bottom")],2):t._e()])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-tab-panel-item",class:t.classes},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-checklist",class:"right"==t.align?"yd-checklist-alignright":"",style:{color:t.color}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"yd-step-item",class:t.currentClass},[1==t.theme?[n("em",{class:t.stepNumber<t.current?"yd-step-checkmark":""},[n("i",[t._v(t._s(t.stepNumber>=t.current?t.stepNumber:""))])])]:[n("em")],t._v(" "),n("div",{staticClass:"yd-step-item-top"},[n("div",{staticClass:"yd-step-item-top-text"},[n("span",[t._t("top")],2)])]),t._v(" "),n("div",{staticClass:"yd-step-item-bottom"},[t._t("bottom")],2)],2)},staticRenderFns:[]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-accordion-item",data:function(){return{show:this.open,height:0,styleHeight:{height:0}}},props:{title:String,open:{type:Boolean,default:!1},auto:{type:Boolean,default:!0}},watch:{open:function(t){t?this.$parent.open(this._uid):this.closeItem()}},methods:{toggle:function(){this.auto&&this.$parent.open(this._uid)},openItem:function(){var t=this;this.$parent.opening=!0,this.styleHeight={height:this.$refs.content.offsetHeight+"px"},setTimeout(function(){t.styleHeight={},t.$parent.opening=!1},200),this.show=!0},closeItem:function(){var t=this;void 0===this.styleHeight.height?(this.styleHeight={height:this.$refs.content.offsetHeight+"px"},setTimeout(function(){t.styleHeight={height:0}},50)):this.styleHeight={height:0},this.show=!1}},mounted:function(){var t=this;this.$nextTick(function(){t.open&&t.openItem()})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-accordion",data:function(){return{opening:!1}},props:{accordion:{type:Boolean,default:!1}},methods:{open:function(t){var e=this;this.opening||this.$children.forEach(function(n){n._uid===t?n.show?n.closeItem():n.openItem():!e.accordion&&n.closeItem()})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-actionsheet",data:function(){return{show:this.value}},props:{value:{type:Boolean,default:!1},items:{type:Array,require:!0},cancel:String},watch:{value:function(t){i.isIOS&&(t?(i.pageScroll.lock(),(0,i.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")):(i.pageScroll.unlock(),(0,i.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"))),this.show=t}},methods:{itemClick:function(t){t&&("function"==typeof t.method&&t.method(t),"function"==typeof t.callback&&t.callback(t),!t.stay&&this.close())},close:function(){i.isIOS&&(0,i.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"),this.$emit("input",!1)}},destroyed:function(){this.close(),i.pageScroll.unlock()},mounted:function(){this.scrollView=(0,i.getScrollview)(this.$el)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-backtop",data:function(){return{show:!1}},methods:{backtop:function(){var t=this.scrollView===window?document.body.scrollTop:this.scrollView.scrollTop;(0,i.scrollTop)(this.scrollView,t,0)},scrollHandler:function(){var t=window.pageYOffset,e=window.innerHeight;this.scrollView!==window&&(t=this.scrollView.scrollTop,e=this.scrollView.offsetHeight),this.show=t>=e/2},throttle:function(t,e){clearTimeout(t.tId),t.tId=setTimeout(function(){t.call(e)},50)},throttledCheck:function(){this.throttle(this.scrollHandler)}},mounted:function(){this.scrollView=(0,i.getScrollview)(this.$el),this.scrollView.addEventListener("scroll",this.throttledCheck,!1),this.scrollView.addEventListener("resize",this.scrollHandler,!1)},destroyed:function(){this.scrollView.removeEventListener("scroll",this.throttledCheck,!1),this.scrollView.removeEventListener("resize",this.scrollHandler,!1)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-badge",props:{type:{validator:function(t){return["primary","danger","warning","hollow"].indexOf(t)>-1}},shape:{validator:function(t){return["circle","square"].indexOf(t)>-1}},color:{validator:function(t){return!t||(0,i.isColor)(t)}},bgcolor:{validator:function(t){return!t||(0,i.isColor)(t)}}},computed:{typesClass:function(){return this.bgcolor?"square"==this.shape?" yd-badge-radius":"":(this.type?"yd-badge-"+this.type:"")+("square"==this.shape?" yd-badge-radius":"")}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-button-group"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-button",props:{disabled:Boolean,type:{validator:function(t){return["primary","danger","warning","hollow","disabled"].indexOf(t)>-1},default:"primary"},size:{validator:function(t){return["small","large"].indexOf(t)>-1}},bgcolor:{validator:function(t){return!t||(0,i.isColor)(t)}},color:{validator:function(t){return!t||(0,i.isColor)(t)}},shape:{validator:function(t){return["square","circle"].indexOf(t)>-1},default:"square"}},computed:{classes:function(){var t="large"===this.size?"yd-btn-block":"yd-btn",e="yd-btn-"+this.type;return this.disabled&&(e="yd-btn-disabled"),this.bgcolor&&(e=""),t+" "+e+("circle"===this.shape?" yd-btn-circle":"")}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-cell-group",props:{title:String}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-cell-item",props:{type:{validator:function(t){return["link","a","label","div","checkbox","radio"].indexOf(t)>-1},default:"div"},arrow:{type:Boolean,default:!1},href:{type:[String,Object]}},computed:{checkLeft:function(){return!!this.$slots.left||!!this.$slots.icon},classes:function(){return this.arrow?"yd-cell-arrow":""}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-checkbox-group",props:{value:{type:Array,default:[]},color:{validator:function(t){return!t||(0,i.isColor)(t)},default:"#4CD864"},size:{validator:function(t){return/^([1-9]\d*)$/.test(t)},default:20}},methods:{updateValue:function(){var t=this.value;this.childrens=this.$children.filter(function(t){return"yd-checkbox"===t.$options.name}),this.childrens&&this.childrens.forEach(function(e){e.model=t})},change:function(t){this.$emit("input",t)}},watch:{value:function(){this.updateValue()}},mounted:function(){this.$nextTick(this.updateValue)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-checkbox",data:function(){return{model:[],group:!1,checked:this.value}},props:{value:{type:Boolean,default:!1},val:{type:[Boolean,String,Number]},disabled:{type:Boolean,default:!1},color:{validator:function(t){return!t||(0,i.isColor)(t)},default:"#4CD864"},size:{validator:function(t){return/^([1-9]\d*)$/.test(t)},default:20},shape:{validator:function(t){return["square","circle"].indexOf(t)>-1},default:"square"}},methods:{changeHandler:function(){var t=this;this.disabled||setTimeout(function(){t.$parent.change(t.model)},0)},iconStyles:function(){var t=(this.group?this.$parent.size:this.size)+"px",e=this.group?this.$parent.color:this.color;return{width:t,height:t,color:e}},checkIconStyles:function(){var t=this.group?this.$parent.size:this.size;return{width:Math.round(t/3.2)+"px",height:Math.round(t/1.7)+"px"}}},watch:{checked:function(t){this.$emit("input",t)},value:function(t){this.checked=t}},created:function(){this.$parent.color&&(this.group=!0)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-checklist-item",data:function(){return{checked:!1,label:!0}},methods:{changeHandler:function(){this.disabled||(this.checked=!this.checked,this.$parent.emitInput())},emitChangeHandler:function(){this.label&&this.changeHandler()}},props:{disabled:{type:Boolean,default:!1},val:{type:[Boolean,String,Number],required:!0}},mounted:function(){this.$nextTick(this.$parent.checkItem)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-checklist",data:function(){return{isCheckAll:!1}},props:{value:{type:Array},color:{validator:function(t){return(0,i.isColor)(t)},default:"#4CD864"},align:{type:String,validator:function(t){return["left","right"].indexOf(t)>-1},default:"left"},label:{type:Boolean,default:!0},callback:{type:Function}},methods:{checkItem:function(){var t=this,e=this.$children.filter(function(t){return"yd-checklist-item"===t.$options.name});e.forEach(function(e){e.checked=t.contains(t.value,e.val),e.label=t.label})},contains:function(t,e){for(var n=t.length;n--;)if(t[n]==e)return!0;return!1},emitInput:function(t,e){var n=[],i=this.$children.filter(function(t){return"yd-checklist-item"===t.$options.name}),r=0;i.forEach(function(i){i.disabled?r++:t&&(i.checked=e),i.checked&&n.push(i.val)}),this.isCheckAll=n.length>=i.length-r,this.$emit("input",n)},checkAll:function(t){this.emitInput(!0,t)}},watch:{value:function(t){this.callback&&this.callback(t,this.isCheckAll),this.$nextTick(this.checkItem)}},mounted:function(){this.$on("ydui.checklist.checkall",this.checkAll)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-cityselect",data:function(){return{show:this.value,navIndex:1,nav:{txt1:this.chooseTitle,txt2:"",txt3:""},columns:{columnItems1:this.items,columnItems2:[],columnItems3:[]},active:{},activeClasses:"",itemHeight:40,columnNum:1}},props:{ready:{type:Boolean,default:!0},provance:String,city:String,area:String,done:Function,callback:Function,title:{type:String,default:"所在地区"},chooseTitle:{type:String,default:"请选择"},value:{type:Boolean,default:!1},items:{type:Array,required:!0}},watch:{value:function(t){i.isIOS&&(t?(i.pageScroll.lock(this.$refs.mask),(0,i.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")):(i.pageScroll.unlock(this.$refs.mask),(0,i.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"))),this.show=t},ready:function(t){t&&this.$nextTick(this.init)}},methods:{init:function(){var t=this;this.scrollView=(0,i.getScrollview)(this.$el),this.ready&&(this.isArray(this.items)&&this.provance&&this.setDefalutValue(this.items,"provance",1),this.$on("ydui.cityselect.reset",function(){for(var e=1;e<=t.columnNum;e++)t.active["itemValue"+e]="",t.active["itemName"+e]="",e-1===0?(t.navIndex=e,t.nav["txt"+e]=t.chooseTitle,t.$refs["itemBox"+e][0].scrollTop=0,t.backoffView(!1)):(t.nav["txt"+e]="",t.columns["columnItems"+e]=[]),e===t.columnNum&&t.returnValue()}))},navEvent:function(t){this.columnNum>2&&(t>=this.columnNum?this.forwardView(!0):this.backoffView(!0)),this.navIndex=t},itemEvent:function(t,e,n,i){this.active["itemValue"+t]=n,this.active["itemName"+t]=e,this.nav["txt"+t]=e,this.columns["columnItems"+(t+1)]=i,t>1&&i&&this.columnNum>2&&this.forwardView(!0),this.clearNavTxt(t),t===this.columnNum||i.length<=0?(this.navIndex=t,this.returnValue()):(this.navIndex=t+1,this.nav["txt"+(t+1)]=this.chooseTitle)},currentClass:function(t,e,n){return t&&t==this.active["itemValue"+n]||e&&e===this.active["itemName"+n]?"yd-cityselect-item-active":""},clearNavTxt:function(t){for(var e=0;e<this.columnNum;e++)e>t&&(this.nav["txt"+(e+1)]="")},getColumsNum:function(t){this.isArray(t.c)&&(this.columnNum++,this.getColumsNum(t.c[0]))},isArray:function(t){return t&&t.constructor===Array&&t.length>0},setDefalutValue:function(t,e,n){var i=this;t.every(function(t,r){if(t.v==i[e]||t.n===i[e]){var o=i.columns["columnItems"+(n+1)]=t.c,a=i.$refs["itemBox"+n][0];return a.scrollTop=r*i.itemHeight-a.offsetHeight/3,i.active["itemValue"+n]=t.v,i.active["itemName"+n]=t.n,i.nav["txt"+n]=t.n,i.navIndex=n,++n,n>=i.columnNum&&i.columnNum>2&&i.forwardView(!1),i.isArray(o)&&i.setDefalutValue(o,["","provance","city","area"][n],n),!1}return!0})},returnValue:function(){this.done&&this.done(this.active),this.callback&&this.callback(this.active),this.close()},close:function(){i.isIOS&&(0,i.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"),this.$emit("input",!1),this.show=!1},backoffView:function(t){this.activeClasses=(t?"yd-cityselect-move-animate":"")+" yd-cityselect-prev"},forwardView:function(t){this.activeClasses=(t?"yd-cityselect-move-animate":"")+" yd-cityselect-next"}},created:function(){this.items&&this.items[0]&&this.getColumsNum(this.items[0])},mounted:function(){this.init()},destroyed:function(){this.close()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-countdown",data:function(){return{str:"",timer:null,tempFormat:"",showTpl:!0}},props:{time:{type:[String,Number,Date]},format:{type:String,default:"{%d}天{%h}时{%m}分{%s}秒"},timetype:{validator:function(t){return["datetime","second"].indexOf(t)>-1},default:"datetime"},callback:{type:Function},doneText:{type:String,default:"已结束"}},watch:{time:function(t){t&&this.run()}},methods:{run:function(){this.time&&("second"===this.timetype?this.lastTime=Math.floor(new Date/1e3)+~~this.time:this.time instanceof Date?this.lastTime=Math.floor(this.time.getTime()/1e3):this.lastTime=Math.floor(new Date(this.time).getTime()/1e3),this.doRun(),this.timer=setInterval(this.doRun,1e3))},doRun:function(){var t=this.lastTime-Math.floor((new Date).getTime()/1e3);t>0?this.str=this.timestampTotime(t):(this.callback&&this.callback(),this.str=this.doneText,clearInterval(this.timer))},timestampTotime:function(t){var e=this.tempFormat,n={};n.s=t%60,t=Math.floor(t/60),n.m=t%60,t=Math.floor(t/60),n.h=t%24,n.d=Math.floor(t/24);var i=function(t){return t<=0?"00":t<10?"0"+t:t},r=["d","h","m","s"];return r.forEach(function(t){var r=i(n[t]).toString().split("");e=e.replace("{%"+t+"}",i(n[t])),e=e.replace("{%"+t+"0}",0!=~~r[0]?r[0]:""),e=e.replace("{%"+t+"1}",~~r[r.length-2]),e=e.replace("{%"+t+"2}",~~r[r.length-1])}),e}},mounted:function(){var t=this;this.$nextTick(function(){t.tempFormat=t.$slots.default?t.$refs.tpl.innerHTML:t.format,t.showTpl=!1,t.run()})},destroyed:function(){clearInterval(this.timer)}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(262),o=i(r);e.default={name:"yd-countup",data:function(){return{instance:null}},props:{start:{type:Boolean,default:!0},startnum:{validator:function(t){return/^([0]|[1-9]\d*)(\.\d*)?$/.test(t)},default:0},endnum:{validator:function(t){return/^([0]|[1-9]\d*)(\.\d*)?$/.test(t)},required:!0},decimals:{validator:function(t){return/^\d*$/.test(t)},default:0},duration:{validator:function(t){return/^([0]|[1-9]\d*)(\.\d*)?$/.test(t)},default:2},useEasing:{type:Boolean,default:!1},separator:{type:String,default:""},prefix:{type:String,default:""},suffix:{type:String,default:""},callback:{type:Function}},watch:{start:function(t){var e=this;t&&this.instance.start(function(){e.callback&&e.callback(e.instance)})},endnum:function(t){this.instance&&this.instance.update&&this.instance.update(t)}},methods:{init:function(){var t=this;if(!this.instance){var e={decimal:".",useEasing:this.useEasing,separator:this.separator,prefix:this.prefix,suffix:this.suffix};this.instance=new o.default(this.$el,this.startnum,this.endnum,this.decimals,this.duration,e),this.start&&this.instance.start(function(){t.callback&&t.callback(t.instance)})}}},mounted:function(){this.init()},destroyed:function(){this.instance=null}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),o=i(r),a=n(10),s=i(a),l=n(68),c=i(l),u=n(3);e.default={name:"yd-datetime",data:function(){return{picker:null,currentValue:this.value,tmpNum:0}},props:{readonly:{type:Boolean,default:!1},type:{type:String,validator:function(t){return["datetime","date","time"].indexOf(t)>-1},default:"datetime"},startDate:{type:String,validator:function(t){return!t||s.default.isDateTimeString(t)}},endDate:{type:String,validator:function(t){return!t||s.default.isDateTimeString(t)}},startYear:{validator:function(t){return/^\d{4}|0$/.test(t)},default:0},endYear:{validator:function(t){return/^\d{4}|0$/.test(t)},default:0},startHour:{validator:function(t){return/^(0|[1-9]|1[0-9]|2[0-3])?$/.test(t)},default:0},endHour:{validator:function(t){return/^([1-9]|1[0-9]|2[0-3])?$/.test(t)},default:23},yearFormat:{type:String,default:"{value}年"},monthFormat:{type:String,default:"{value}月"},dayFormat:{type:String,default:"{value}日"},hourFormat:{type:String,default:"{value}时"},minuteFormat:{type:String,default:"{value}分"},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确定"},value:{type:String,validator:function(t){return!t||(s.default.isDateTimeString(t)||s.default.isTimeString(t))}},initEmit:{type:Boolean,default:!0}},watch:{value:function(t){this.currentValue!=t&&this.render()},startDate:function(){this.render()},endDate:function(){this.render()}},methods:{open:function(){this.readonly||this.picker.open()},close:function(){this.picker.close()},removeElement:function(){this.picker&&this.picker.$el&&document.body.removeChild(this.picker.$el)},render:function(){var t=this;this.removeElement();var e=o.default.extend(c.default),n=this._props;n.parentEL=this.$el,this.picker=new e({el:document.createElement("div"),data:n}),document.body.appendChild(this.picker.$el),this.picker.$on("pickerConfirm",function(e){(t.tmpNum>0||t.initEmit)&&(t.currentValue=e,t.$emit("input",e)),t.tmpNum++})}},mounted:function(){this.render()},beforeDestroy:function(){u.pageScroll.unlock(),this.removeElement()}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(265),o=i(r),a=n(10),s=i(a),l=n(3);e.default={data:function(){return{value:"",show:!1,parentEL:null,columns:[],scroller:[],type:"",cancelText:"",confirmText:"",items:{Year:[],Month:[],Day:[],Hour:[],Minute:[]},scrolling:{Year:!1,Month:!1,Day:!1,Hour:!1,Minute:!1},readonly:!1,currentYear:"",currentMonth:"",currentDay:"",currentHour:"",currentMinute:"",currentValue:"",yearFormat:"{value}年",monthFormat:"{value}月",dayFormat:"{value}日",hourFormat:"{value}时",minuteFormat:"{value}分",startYear:0,endYear:0,startHour:0,endHour:23}},watch:{currentYear:function(t){this.setMonths(t)},currentMonth:function(t){this.setDays(t)},currentDay:function(t){this.setHours(t)},currentHour:function(t){this.setMinutes(t)}},methods:{init:function(){var t=this,e=t.currentValue=t.value.replace(/-/g,"/");t.startDate&&new Date(e).getTime()<new Date(t.startDate).getTime()&&(e=t.currentValue=t.startDate),t.endDate&&new Date(e).getTime()>new Date(t.endDate).getTime()&&(e=t.currentValue=t.endDate);var n=t.items.Year=s.default.getYearItems({format:t.yearFormat,startDate:t.startDate,endDate:t.endDate,startYear:t.startYear,endYear:t.endYear}),i=s.default.getMonthItems({format:t.monthFormat,currentYear:n[0].value,startDate:t.startDate,endDate:t.endDate}),r=s.default.getDateItems({format:t.dayFormat,currentYear:n[0].value,currentMonth:i[0].value,startDate:t.startDate,endDate:t.endDate});if("time"!==t.type)if(e){var o=new Date(e);t.currentYear=o.getFullYear(),t.inDatas(n,t.currentYear)||(t.currentYear=n[0].value),t.currentMonth=s.default.mentStr(o.getMonth()+1),t.inDatas(i,t.currentMonth)||(t.currentMonth=i[0].value),t.currentDay=s.default.mentStr(o.getDate()),t.inDatas(r,t.currentDay)||(t.currentDay=r[0].value)}else t.currentYear=n[0].value,t.currentMonth=i[0].value,t.currentDay=r[0].value;if("datetime"===t.type||"time"===t.type){var a=s.default.getHourItems({format:t.hourFormat,currentYear:n[0].value,currentMonth:i[0].value,currentDay:r[0].value,startDate:t.startDate,endDate:t.endDate,startHour:t.startHour,endHour:t.endHour}),l=s.default.getMinuteItems({format:t.minuteFormat,currentYear:n[0].value,currentMonth:i[0].value,currentDay:r[0].value,currentHour:a[0].value,startDate:t.startDate,endDate:t.endDate});if("time"===t.type&&(t.items.Hour=a),e){if(s.default.isDateTimeString(e)){var c=new Date(e);t.currentHour=s.default.mentStr(c.getHours()),t.currentMinute=s.default.mentStr(c.getMinutes())}else{var u=e.split(":");t.currentHour=s.default.mentStr(u[0]),t.currentMinute=s.default.mentStr(u[1])}t.inDatas(a,t.currentHour)||(t.currentHour=a[0].value),t.inDatas(l,t.currentMinute)||(t.currentMinute=l[0].value)}else t.currentHour=a[0].value,t.currentMinute=l[0].value}"datetime"===t.type?t.columns=["Year","Month","Day","Hour","Minute"]:"date"===t.type?t.columns=["Year","Month","Day"]:t.columns=["Hour","Minute"]},render:function(){var t=this;t.columns.forEach(function(e){var n=t.$refs["Component_"+e][0],i=t.$refs["Content_"+e][0];t.scroller[e]=new o.default(n,i,{itemHeight:38,onSelect:function(n){t["current"+e]=n,t.scrolling[e]=!1},callback:function(n,r){r&&(t.scrolling[e]=!0),i.style.webkitTransform="translate3d(0, "+-n+"px, 0)"}}),t.scroller[e].setDimensions(n.clientHeight,i.offsetHeight,t.items[e].length),t.scroller[e].select(t["current"+e],!1),t.scrolling[e]=!1}),t.setValue()},setMonths:function(t){var e=this,n=e.items.Month=s.default.getMonthItems({format:e.monthFormat,currentYear:t,startDate:e.startDate,endDate:e.endDate});e.scrolloToPosition("Month",n,function(){e.setDays(e.currentMonth)})},setDays:function(t){var e=this,n=e.items.Day=s.default.getDateItems({format:e.dayFormat,currentYear:e.currentYear,currentMonth:t,startDate:e.startDate,endDate:e.endDate});e.scrolloToPosition("Day",n,function(){e.setHours(e.currentDay)})},setHours:function(t){var e=this,n=e.items.Hour=s.default.getHourItems({format:e.hourFormat,currentYear:e.currentYear,currentMonth:e.currentMonth,currentDay:t,startDate:e.startDate,endDate:e.endDate,startHour:e.startHour,endHour:e.endHour});e.scrolloToPosition("Hour",n,function(){e.setMinutes(e.currentHour)})},setMinutes:function(t){var e=this,n=e.items.Minute=s.default.getMinuteItems({format:e.minuteFormat,currentYear:e.currentYear,currentMonth:e.currentMonth,currentDay:e.currentDay,currentHour:t,startDate:e.startDate,endDate:e.endDate});e.scrolloToPosition("Minute",n)},scrolloToPosition:function(t,e,n){var i=this,r=i.scroller[t];r&&(r.setDimensions(i.$refs["Component_"+t][0].clientHeight,i.$refs["Content_"+t][0].offsetHeight,e.length),setTimeout(function(){var o=i.inDatas(e,i["current"+t]);i.scrolling[t]||r.select(o?i["current"+t]:e[0].value,!1),"function"==typeof n&&n()},0))},setValue:function(){var t="";t="datetime"===this.type?this.currentYear+"-"+this.currentMonth+"-"+this.currentDay+" "+this.currentHour+":"+this.currentMinute:"date"===this.type?this.currentYear+"-"+this.currentMonth+"-"+this.currentDay:this.currentHour+":"+this.currentMinute,this.currentValue=t,this.$emit("pickerConfirm",t),this.close()},inDatas:function(t,e){var n=!1;return t.forEach(function(t){t.value==e&&(n=!0)}),n},open:function(){this.readonly||(this.show=!0,l.isIOS&&(l.pageScroll.lock(),(0,l.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")))},close:function(){this.show=!1,l.isIOS&&(l.pageScroll.unlock(),(0,l.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"))}},created:function(){this.init()},mounted:function(){this.scrollView=(0,l.getScrollview)(this.parentEL),this.$nextTick(this.render)},beforeDestroy:function(){var t=this;this.columns.forEach(function(e){t.scroller[e]=null})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mes:String,callback:Function}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:String,mes:String,opts:{type:[Array,Function],default:function(){}}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:String}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{classes:""}},props:{mes:String,timeout:Number,callback:Function}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mes:String,icon:String,timeout:Number,callback:Function},computed:{iconsClass:function(){var t="";return"success"!==this.icon&&"error"!==this.icon||(t="yd-toast-"+this.icon+"-icon"),t}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-flexbox-item",props:{align:{validator:function(t){return["top","center","bottom"].indexOf(t)>-1},default:"center"}},computed:{classes:function(){return"top"===this.align?"yd-flexbox-item-start":"bottom"===this.align?"yd-flexbox-item-end":"yd-flexbox-item-center"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-flexbox",props:{direction:{validator:function(t){return["horizontal","vertical"].indexOf(t)>-1},default:"horizontal"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-grids-group",data:function(){return{height:55}},props:{rows:{validator:function(t){return["2","3","4","5"].indexOf(t+"")>-1},default:"4"},title:String,itemHeight:{validator:function(t){return 0==t||/^(\.|\d+\.)?\d+(px|rem)$/.test(t)},default:0}},computed:{classes:function(){return"yd-grids-"+this.rows}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-grids-item",props:{link:[String,Object]},computed:{checkIcon:function(){return!!this.$slots.icon},checkText:function(){return!!this.$slots.text},styles:function(){if(0!=this.$parent.itemHeight)return{height:this.$parent.itemHeight,padding:0}}}}},function(t,e,n){
"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-icon",props:{name:String,color:{validator:function(t){return!t||(0,i.isColor)(t)}},size:{validator:function(t){return/^(\.|\d+\.)?\d+(px|rem)$/.test(t)},default:".6rem"},custom:{type:Boolean,default:!1}},computed:{classes:function(){return this.custom?"icon-custom-"+this.name:"yd-icon-"+this.name},styles:function(){var t={};return this.size&&(t.fontSize=this.size),this.color&&(t.color=this.color),t}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(80),o=i(r),a=n(3);e.default={name:"yd-infinitescroll",components:{Loading:o.default},data:function(){return{isLoading:!1,isDone:!1,num:1}},props:{onInfinite:{type:Function},callback:{type:Function},distance:{default:0,validator:function(t){return/^\d*$/.test(t)}},scrollTop:{type:Boolean,default:!0}},methods:{init:function(){var t=this;this.scrollview=(0,a.getScrollview)(this.$el),this.scrollTop&&(this.scrollview===window?window.scrollTo(0,0):this.scrollview.scrollTop=0),this.scrollview.addEventListener("scroll",this.throttledCheck,!1),this.$on("ydui.infinitescroll.loadedDone",function(){t.isLoading=!1,t.isDone=!0}),this.$on("ydui.infinitescroll.finishLoad",function(e){t.isLoading=!1}),this.$on("ydui.infinitescroll.reInit",function(){t.isLoading=!1,t.isDone=!1})},scrollHandler:function(){if(!this.isLoading&&!this.isDone){var t=this.scrollview,e=document.body.offsetHeight,n=t===window,i=n?0:t.getBoundingClientRect().top,r=n?e:t.offsetHeight;if(!t)return void console.warn("Can't find the scrollview!");if(!this.$refs.tag)return void console.warn("Can't find the refs.tag!");var o=Math.floor(this.$refs.tag.getBoundingClientRect().top)-1,a=this.distance&&this.distance>0?~~this.distance:Math.floor(e/10);o>i&&o-(a+i)*this.num<=e&&this.$el.offsetHeight>r&&(this.isLoading=!0,this.onInfinite&&this.onInfinite(),this.callback&&this.callback(),this.num++)}},throttle:function(t,e){clearTimeout(t.tId),t.tId=setTimeout(function(){t.call(e)},30)},throttledCheck:function(){this.throttle(this.scrollHandler)}},mounted:function(){this.$nextTick(this.init)},destroyed:function(){this.scrollview.removeEventListener("scroll",this.throttledCheck)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-input",data:function(){return{currentValue:this.value,isempty:!this.value,iserror:!1,showPwd:!1,showClear:!1,showWarn:!0,initError:!1,valid:!0,errorMsg:"",errorCode:"",regexObj:{email:"^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",mobile:"^(86)?1[3,4,5,7,8]\\d{9}$",bankcard:"^\\d{15,19}$"}}},props:{name:String,placeholder:String,value:[String,Number],readonly:Boolean,disabled:Boolean,regex:String,autocomplete:{type:String,default:"off"},showClearIcon:{type:Boolean,default:!0},showErrorIcon:{type:Boolean,default:!0},showSuccessIcon:{type:Boolean,default:!0},showRequiredIcon:{type:Boolean,default:!0},required:{type:Boolean,default:!1},type:{validator:function(t){return["text","password","search","email","number","tel","datetime-local","date","time"].indexOf(t)>-1},default:"text"},max:{validator:function(t){return/^\d*$/.test(t)}},min:{validator:function(t){return/^\d*$/.test(t)}},onBlur:{type:Function},onFocus:{type:Function}},watch:{value:function(t){this.currentValue=t,this.emitInput()},currentValue:function(t){this.isempty=!t,this.validatorInput(t,!0),this.emitInput()},required:function(t){this.required=t,this.validatorInput(this.currentValue,!1)}},methods:{validatorInput:function(t,e){if(this.initError=e,e&&(this.showWarn=!1),this.required&&""===t)return this.setError("不能为空","NOT_NULL"),void(this.iserror=!0);if(this.min&&t.length<this.min)return this.setError("最少输入"+this.min+"位字符","NOT_MIN_SIZE"),void(this.iserror=!0);var n="bankcard"===this.regex?t.replace(/\s/g,""):t,i=this.regexObj[this.regex]?this.regexObj[this.regex]:this.trim(this.regex,"/");return n&&this.regex&&!new RegExp(i).test(n)?(this.setError("输入字符不符合规则","NOT_REGEX_RULE"),void(this.iserror=!0)):(this.iserror=!1,this.valid=!0,this.errorMsg="",void(this.errorCode=""))},blurHandler:function(t){var e=this;this.validatorInput(this.currentValue,!0),setTimeout(function(){e.showClear=!1},200),this.onBlur&&this.onBlur(t)},focusHandler:function(t){this.showClear=!0,this.onFocus&&this.onFocus(t)},clearInput:function(){this.currentValue="",this.emitInput()},emitInput:function(){return"bankcard"===this.regex?(/\S{5}/.test(this.currentValue)&&(this.currentValue=this.currentValue.replace(/\s/g,"").replace(/(\d{4})(?=\d)/g,"$1 ")),void this.$emit("input",this.currentValue.replace(/\s/g,""))):void this.$emit("input",this.currentValue)},setError:function(t,e){this.errorMsg=t,this.errorCode=e,this.valid=!1},trim:function(t,e){return t?t.replace(new RegExp("^\\"+e+"+|\\"+e+"+$","g"),""):t},setFocus:function(){this.$refs.input.focus()},setBlur:function(){this.$refs.input.blur()}},mounted:function(){this.validatorInput(this.currentValue,!1)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-keyboard",data:function(){return{nums:"",show:this.value,error:"",numsArr:[1,2,3,4,5,6,7,8,9,0]}},props:{inputDone:{type:Function},callback:{type:Function},disorder:{type:Boolean,default:!1},value:{type:Boolean,default:!1},title:{type:String,default:"YDUI安全键盘"},cancelText:{type:String,default:"取消"},inputText:{type:String,default:"输入数字密码"},triggerClose:{type:Boolean,default:!0}},watch:{value:function(t){i.isIOS&&(t?(i.pageScroll.lock(),(0,i.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")):(i.pageScroll.unlock(),(0,i.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"))),this.nums="",this.error="",this.show=t,this.show&&this.disorder&&(this.numsArr=this.upsetOrder(this.numsArr))},nums:function(t){t.length>=6&&(this.inputDone&&this.inputDone(t),this.callback&&this.callback(t))}},methods:{init:function(){var t=this;this.scrollView=(0,i.getScrollview)(this.$el),this.$on("ydui.keyboard.error",function(e){t.setError(e)}),this.$on("ydui.keyboard.close",this.close)},numclick:function(t){this.error="",this.nums.length>=6||(this.nums+=t)},backspace:function(){var t=this.nums;t&&(this.nums=t.substr(0,t.length-1))},upsetOrder:function(t){for(var e=Math.floor,n=Math.random,i=t.length,r=void 0,o=void 0,a=void 0,s=e(i/2)+1;s--;)r=e(n()*i),o=e(n()*i),r!==o&&(a=t[r],t[r]=t[o],t[o]=a);return t},close:function(){i.isIOS&&(0,i.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"),this.$emit("input",!1)},setError:function(t){this.error=t,this.nums=""}},created:function(){var t=window.navigator&&window.navigator.userAgent||"";this.isMobile=!!t.match(/AppleWebKit.*Mobile.*/)||"ontouchstart"in document.documentElement,this.$nextTick(this.init)},destroyed:function(){this.close(),i.pageScroll.unlock()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-layout",props:{link:String,title:String,showNavbar:{type:Boolean,default:!0}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),o=i(r),a=n(8),s=i(a);e.default={components:{slider:o.default,sliderItem:s.default},data:function(){return{currentIndex:0,index:1,imgItems:[],show:!0,txtHTML:"",closeText:""}},methods:{close:function(){this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)},changeIndex:function(t){this.currentIndex=t},getImgSrc:function(t){return t.getAttribute("original")||t.getAttribute("src")}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-lightbox-img",props:{src:String,original:String}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-lightbox-txt"}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),o=i(r),a=n(83),s=i(a);e.default={name:"yd-lightbox",data:function(){return{show:!0,tabPanels:[],imgItems:[]}},props:{num:{default:0,validator:function(t){return/^\d*$/.test(t)}},closeText:{type:String,default:"关闭"}},watch:{num:function(){this.init()}},methods:{init:function(){var t=this;this.$nextTick(function(){t.imgItems=[],t.findImgs(t.$children),t.imgItems.forEach(function(e,n){e.bindedEvent||(e.bindedEvent=!0,e.$el.addEventListener("click",function(){t.appendDOM(n)},!1))})})},findImgs:function(t){var e=this;t.forEach(function(t){t&&"yd-lightbox-img"===t.$options.name&&e.imgItems.push(t),t.$children&&e.findImgs(t.$children)})},appendDOM:function(t){var e=o.default.extend(s.default),n=this.$children.filter(function(t){return"yd-lightbox-txt"===t.$options.name});this.box=new e({el:document.createElement("div"),data:{index:t,currentIndex:t,imgItems:this.imgItems,txtHTML:n[0]&&n[0].$el?n[0].$el.innerHTML:"",closeText:this.closeText}}),document.body.appendChild(this.box.$el)}},mounted:function(){this.$nextTick(this.init)},beforeDestroy:function(){this.box&&this.box.close()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-list-item",props:{type:{type:String,validator:function(t){return["link","a","div"].indexOf(t)>-1},default:"a"},href:[String,Object]}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-list-other"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-list",props:{theme:{validator:function(t){return["1","2","3","4","5"].indexOf(t+"")>-1},default:"1"}},computed:{classes:function(){return"yd-list-theme"+this.theme}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-navbar-back-icon",props:{color:{validator:function(t){return!t||(0,i.isColor)(t)},default:"#5C5C5C"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-navbar-next-icon",props:{color:{validator:function(t){return!t||(0,i.isColor)(t)},default:"#5C5C5C"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-navbar",props:{title:String,fixed:Boolean,bgcolor:{validator:function(t){return!t||(0,i.isColor)(t)},default:"#FFF"},color:{validator:function(t){return!t||(0,i.isColor)(t)},default:"#5C5C5C"},fontsize:{validator:function(t){return/^(\.|\d+\.)?\d+(px|rem)$/.test(t)},default:".4rem"},height:{validator:function(t){return/^(\.|\d+\.)?\d+(px|rem)$/.test(t)},default:"1rem"}},computed:{classes:function(){return this.fixed?"yd-navbar-fixed":""}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-popup",data:function(){return{show:this.value}},props:{position:{validator:function(t){return["bottom","center","left","right"].indexOf(t)>-1},default:"bottom"},height:{type:String,default:"50%"},width:{type:String,default:"50%"},value:{type:Boolean},closeOnMasker:{type:Boolean,default:!0}},watch:{value:function(t){if(i.isIOS){var e=this.$refs,n=this.$slots.top&&"center"!==this.position?e.top.offsetHeight:0,r=this.$slots.bottom&&"center"!==this.position?e.bottom.offsetHeight:0,o=n+e.content.offsetHeight+r;t?(i.pageScroll.lock(),o>e.box.offsetHeight&&e.box.addEventListener("touchmove",this.stopPropagation),(0,i.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")):(i.pageScroll.unlock(),o>e.box.offsetHeight&&e.box.removeEventListener("touchmove",this.stopPropagation),(0,i.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"))}this.show=t}},computed:{classes:function(){return("center"===this.position?"yd-popup-center ":"yd-popup yd-popup-"+this.position)+(this.show?" yd-popup-show ":"")}},methods:{stopPropagation:function(t){t.stopPropagation()},styles:function(){return"left"===this.position||"right"===this.position?{width:this.width}:"bottom"===this.position?{width:"100%",height:this.height}:{width:this.width}},close:function(){i.isIOS&&(0,i.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"),this.closeOnMasker&&(this.show=!1,this.$emit("input",!1))}},mounted:function(){this.scrollView=(0,i.getScrollview)(this.$el)},destroyed:function(){i.isIOS&&(0,i.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"),i.pageScroll.unlock()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-progressbar",data:function(){return{viewBox:"0 0 100 100",show:!1,stroke:{dasharray:"",dashoffset:""}}},props:{type:{validator:function(t){return["circle","line"].indexOf(t)>-1},default:"circle"},fillColor:{validator:function(t){return!t||(0,i.isColor)(t)}},strokeWidth:{validator:function(t){return/^\d*$/.test(t)},default:0},strokeColor:{validator:function(t){return!t||(0,i.isColor)(t)},default:"#E5E5E5"},trailWidth:{validator:function(t){return/^\d*$/.test(t)},default:0,require:!0},trailColor:{validator:function(t){return!t||(0,i.isColor)(t)},default:"#646464"},progress:{validator:function(t){return/^(0(.\d+)?|1(\.0+)?)$/.test(t)},default:0}},methods:{init:function(){var t=this,e=this.length=this.$refs.trailPath.getTotalLength();this.stroke.dashoffset=e,this.stroke.dasharray=e+","+e,this.scrollview=(0,i.getScrollview)(this.$el),this.show=!0,"line"===this.type&&(this.viewBox="0 0 100 "+(this.strokeWidth?this.strokeWidth:this.trailWidth)),this.$nextTick(function(){t.scrollHandler()}),this.bindEvent()},scrollHandler:function(){(0,i.checkInview)(this.scrollview,this.$el)&&(this.stroke.dashoffset=this.length-this.progress*this.length)},bindEvent:function(){this.scrollview.addEventListener("scroll",this.scrollHandler),window.addEventListener("resize",this.scrollHandler)},unbindEvent:function(){this.scrollview.removeEventListener("scroll",this.scrollHandler),window.removeEventListener("resize",this.scrollHandler)}},watch:{progress:function(t){this.stroke.dashoffset=this.length-t*this.length}},computed:{getPathString:function(){if("line"===this.type)return"M 0,{R} L 100,{R}".replace(/\{R\}/g,this.trailWidth/2);var t=50-(this.strokeWidth?this.strokeWidth:this.trailWidth)/2;return"M 50,50 m 0,-{R} a {R},{R} 0 1 1 0,{2R} a {R},{R} 0 1 1 0,-{2R}".replace(/\{R\}/g,t).replace(/\{2R\}/g,2*t)}},mounted:function(){this.init()},destoryed:function(){this.unbindEvent()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-pullrefresh",props:{onInfinite:{type:Function},callback:{type:Function},stopDrag:{type:Boolean,default:!1}},data:function(){return{showHelpTag:!1,dragTip:{iconOpacity:.5,iconRotate:0,loadingIcon:"",animationTiming:"",scale:1,translate:0,distance:100},touches:{loading:!1,startClientY:0,moveOffset:0,isDraging:!1},limitSpeed:0}},methods:{init:function(){this.offsetTop=this.$refs.dragBox.getBoundingClientRect().top,this.bindEvents(),this.$on("ydui.pullrefresh.finishLoad",this.finishLoad),this.showHelp()},showHelp:function(){var t=this,e="PULLREFRESH-TIP",n=window.localStorage;1!=n.getItem(e)&&(this.showHelpTag=!0,setTimeout(function(){t.showHelpTag=!1},5e3)),n.setItem(e,1)},bindEvents:function(){var t=this.$refs.dragBox;t.addEventListener("touchstart",this.touchStartHandler),t.addEventListener("touchmove",this.touchMoveHandler),t.addEventListener("touchend",this.touchEndHandler),document.body.addEventListener("touchmove",this.stopDragEvent)},unbindEvents:function(){var t=this.$refs.dragBox;t.removeEventListener("touchstart",this.touchStartHandler),t.removeEventListener("touchmove",this.touchMoveHandler),t.removeEventListener("touchend",this.touchEndHandler),document.body.removeEventListener("touchmove",this.stopDragEvent)},stopDragEvent:function(t){this.touches.isDraging&&t.preventDefault()},touchStartHandler:function(t){if(!this.stopDrag)return this.touches.loading?void t.preventDefault():void(this.scrollview.scrollTop>0||this.$refs.dragBox.getBoundingClientRect().top<this.offsetTop||(this.touches.startClientX=t.touches[0].clientX,this.touches.startClientY=t.touches[0].clientY))},touchMoveHandler:function(t){var e=this.touches;if(!this.stopDrag){if(this.touches.loading)return void t.preventDefault();if(this.scrollview.scrollTop>0)return this.dragTip.translate=0,void this.resetParams();var n=t.touches[0].clientY,i=t.touches[0].clientX;if(!(e.startClientY>n||this.$refs.dragBox.getBoundingClientRect().top<this.offsetTop)){e.isDraging=!0;var r=180*Math.atan2(Math.abs(n-e.startClientY),Math.abs(i-e.startClientX))/Math.PI,o=n-e.startClientY;90-r>45||(this.dragTip.iconOpacity=o/100,o>=this.dragTip.distance&&(o=this.dragTip.distance),this.dragTip.iconRotate=o/.25,this.limitSpeed+=10,this.limitSpeed<o&&(o=this.limitSpeed),e.moveOffset=this.dragTip.translate=o)}}},touchEndHandler:function(t){if(!this.stopDrag){var e=this.touches;if(e.loading)return void t.preventDefault();if(this.limitSpeed=0,!(this.$refs.dragBox.getBoundingClientRect().top<this.offsetTop)){if(this.dragTip.animationTiming="yd-pullrefresh-animation-timing",e.moveOffset>=this.dragTip.distance)return this.dragTip.translate=this.dragTip.distance/1.5,this.dragTip.loadingIcon="yd-pullrefresh-loading",void this.triggerLoad();this.dragTip.translate=0,this.resetParams()}}},triggerLoad:function(){this.touches.loading=!0,this.onInfinite&&this.onInfinite(),this.callback&&this.callback()},finishLoad:function(){var t=this;setTimeout(function(){t.dragTip.iconRotate=0,t.dragTip.scale=0,t.resetParams()},200)},resetParams:function(){var t=this;setTimeout(function(){var e=t.touches,n=t.dragTip;e.isDraging=!1,e.loading=!1,e.moveOffset=0,n.animationTiming="",n.iconOpacity=.5,n.translate=0,n.scale=1,n.loadingIcon=""},150)}},mounted:function(){this.scrollview=(0,i.getScrollview)(this.$el),this.$nextTick(this.init)},beforeDestroy:function(){this.unbindEvents()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-radio-group",data:function(){return{currentValue:this.value}},props:{value:{type:[String,Number],default:""},color:{validator:function(t){return!t||(0,i.isColor)(t)},default:"#4CD864"},size:{validator:function(t){return/^([1-9]\d*)$/.test(t)},default:20}},methods:{updateValue:function(){var t=this.value;this.childrens=this.$children.filter(function(t){return"yd-radio"===t.$options.name}),this.childrens&&this.childrens.forEach(function(e){e.checked=t==e.val})},change:function(t){this.currentValue=t,this.updateValue(),this.$emit("input",t)}},watch:{value:function(){this.updateValue()}},mounted:function(){this.$nextTick(this.updateValue)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-radio",data:function(){return{checked:!1}},props:{val:[String,Number],disabled:{type:Boolean,default:!1}},methods:{changeHandler:function(t){this.disabled||(this.checked=t.target.checked,this.$parent.change(this.val))},styles:function(t){return{width:this.$parent.size/t+"px",height:this.$parent.size/t+"px"}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-rate",data:function(){return{index:0,str:""}},watch:{value:function(t){this.choose(t)}},props:{count:{validator:function(t){return/^(([1-9]\d*)|0)$/.test(t)},default:5},size:{validator:function(t){return/^(\.|\d+\.)?\d+(px|rem)$/.test(t)},default:".5rem"},color:{validator:function(t){return!t||(0,i.isColor)(t)},default:"#CCC"},activeColor:{validator:function(t){return!t||(0,i.isColor)(t)},default:"#FF5D50"},value:{validator:function(t){return/^(([1-9]\d*)|0)$/.test(t)}},showText:{type:Array},readonly:{type:Boolean,default:!1},padding:{validator:function(t){return/^(\.|\d+\.)?\d+(px|rem)$/.test(t)},default:".06rem"}},methods:{choose:function(t){this.index=t,this.$emit("input",t),this.showText&&(this.str=(this.showText[t-1]||"").replace("$",t))}},mounted:function(){var t=this;this.$nextTick(function(){t.choose(t.value)})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-rollnotice-item",mounted:function(){this.$parent.init()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-rollnotice",data:function(){return{timer:null,index:1,totalNum:0,firtstItem:"",lastItem:"",styles:{transform:0,transitionDuration:0}}},props:{height:{validator:function(t){return/^\d*$/.test(t)},default:30},speed:{validator:function(t){return/^\d*$/.test(t)},default:500},autoplay:{validator:function(t){return/^\d*$/.test(t)},default:3e3},align:{validator:function(t){return["left","center","right"].indexOf(t)>-1},default:"left"},direction:{validator:function(t){return["up","down"].indexOf(t)>-1},default:"up"}},methods:{init:function(){this.destroy(),this.items=this.$children.filter(function(t){return"yd-rollnotice-item"===t.$options.name}),this.totalNum=this.items.length,this.totalNum<=0||(this.firtstItem=this.items[0].$el.innerHTML,this.lastItem=this.items[this.totalNum-1].$el.innerHTML,this.setTranslate(0,-this.height),this.autoPlay())},autoPlay:function(){var t=this;this.timer=setInterval(function(){"up"===t.direction?(t.setTranslate(t.speed,-(++t.index*t.height)),t.index>=t.totalNum&&(t.index=0,setTimeout(function(){t.setTranslate(0,0)},t.speed))):(t.setTranslate(t.speed,-(--t.index*t.height)),t.index<=0&&(t.index=t.totalNum,setTimeout(function(){t.setTranslate(0,-t.totalNum*t.height)},t.speed)))},this.autoplay)},setTranslate:function(t,e){this.styles.transitionDuration=t+"ms",this.styles.transform="translate3d(0, "+e+"px, 0)"},destroy:function(){clearInterval(this.timer)}},destroyed:function(){this.destroy()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-scrolltab-panel",props:{label:String,icon:String,active:Boolean},mounted:function(){this.$parent.addItem({label:this.label,icon:this.icon,_uid:this._uid})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-scrolltab",data:function(){return{scrolling:!1,navList:[],activeIndex:0,timer:null}},methods:{init:function(){this.scrollView=this.$refs.scrollView,this.contentOffsetTop=this.scrollView.getBoundingClientRect().top,this.bindEvent()},addItem:function(t){this.navList.push(t)},getPanels:function(){return this.$children.filter(function(t){return"yd-scrolltab-panel"===t.$options.name})},bindEvent:function(){this.scrollView.addEventListener("scroll",this.scrollHandler),window.addEventListener("resize",this.scrollHandler)},setDefault:function(){var t=this,e=this.getPanels(),n=0;e.forEach(function(i){i.active?(t.activeIndex=i._uid,t.moveHandler(i._uid)):(++n,n>=e.length&&(t.activeIndex=e[0]._uid))})},moveHandler:function(t){var e=this;if(!this.scrolling){this.scrolling=!0;var n=this.getPanels(),i=n.filter(function(e){return e._uid==t})[0].$el.getBoundingClientRect().top;this.scrollView.scrollTop=i+this.scrollView.scrollTop-this.contentOffsetTop+2,this.activeIndex=t,setTimeout(function(){e.scrolling=!1},6)}},scrollHandler:function(){var t=this;if(!this.scrolling){var e=this.getPanels(),n=e.length,i=this.scrollView,r=i.offsetHeight,o=i.scrollTop,a=e[0].$el.offsetHeight;return o>=a*n-r?void(this.activeIndex=e[n-1]._uid):void e.forEach(function(e){e.$el.getBoundingClientRect().top<=t.contentOffsetTop&&(t.activeIndex=e._uid)})}}},watch:{navList:function(){this.setDefault()}},mounted:function(){this.init()},destroyed:function(){this.scrollView.removeEventListener("scroll",this.scrollHandler),window.removeEventListener("resize",this.scrollHandler)}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=n(7),a=i(o);e.default={name:"yd-search",extends:a.default,components:{"yd-search-input":a.default},data:function(){return{show:!1,currentValue:this.value}},props:{placeholder:{type:String,default:"搜 索"},cancelText:{type:String,default:"取消"},result:{type:Array,default:function(){return[]}},itemClick:{type:Function},value:{type:String,default:""},fullpage:{type:Boolean,defaut:!1},top:{validator:function(t){return/^-?(\.|\d+\.)?\d+(px|rem)$/.test(t)},default:"-1px"},onSubmit:{type:Function}},watch:{currentValue:function(t){this.$emit("input",t)},value:function(t){this.currentValue=t},show:function(t){t?(this.$refs.search.setFocus(),r.isIOS&&(0,r.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")):(this.$refs.search.setBlur(),r.isIOS&&(0,r.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"))}},methods:{open:function(){this.fullpage&&(this.show=!0)},close:function(){this.show=!1,this.currentValue=""},submit:function(){this.$refs.search.setBlur(),this.onSubmit&&this.onSubmit(this.currentValue),this.close()},clickHandler:function(t){this.itemClick&&this.itemClick(t),this.close()}},destroyed:function(){r.isIOS&&(0,r.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")},mounted:function(){this.scrollView=(0,r.getScrollview)(this.$el)}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(6),o=i(r);e.default={name:"yd-sendcode",extends:o.default,components:{"yd-sendcode-button":o.default},data:function(){return{tmpStr:"获取短信验证码",timer:null,start:!1,runSecond:this.second}},props:{initStr:String,second:{default:60,validator:function(t){return/^\d*$/.test(t)}},runStr:{type:String,default:"{%s}秒后重新获取"},resetStr:{type:String,default:"重新获取验证码"},value:{type:Boolean,default:!1},storageKey:{type:String}},methods:{run:function(t){var e=this,n=t?t:this.runSecond;if(this.storageKey){var i=(new Date).getTime()+1e3*n;window.sessionStorage.setItem(this.storageKey,i)}t||(this.tmpStr=this.getStr(n)),this.timer=setInterval(function(){n--,e.tmpStr=e.getStr(n),n<=0&&e.stop()},1e3)},stop:function(){this.tmpStr=this.resetStr,this.start=!1,this.$emit("input",!1),clearInterval(this.timer)},getStr:function(t){return this.runStr.replace(/\{([^{]*?)%s(.*?)\}/g,t)}},watch:{value:function(t){this.start=t,t&&this.run()}},created:function(){var t=~~((window.sessionStorage.getItem(this.storageKey)-(new Date).getTime())/1e3);t>0&&this.storageKey?(this.tmpStr=this.getStr(t),this.start=!0,this.run(t)):this.initStr&&(this.tmpStr=this.initStr)},destroyed:function(){!this.storageKey&&this.stop()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-slider-item",mounted:function(){this.$nextTick(this.$parent.init)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-slider",data:function(){return{firtstItem:"",lastItem:"",currentIndex:~~this.index,itemNums:0,itemsArr:[],autoPlayTimer:null,paginationIndex:0,itemHeight:{height:null},dragStyleObject:{transform:0,speed:0},touches:{moveTag:0,moveOffset:0,touchStartTime:0,isTouchEvent:!1,allowClick:!1,isDraging:!1}}},props:{index:{default:0,validator:function(t){return/^\d*$/.test(t)}},speed:{default:300,validator:function(t){return/^\d*$/.test(t)}},autoplay:{default:0,validator:function(t){return/^\d*$/.test(t)}},direction:{validator:function(t){return["horizontal","vertical"].indexOf(t)>-1},default:"horizontal"},showPagination:{type:Boolean,default:!0},callback:{type:Function},loop:{type:Boolean,default:!0}},watch:{index:function(t){t=~~t,t>this.itemNums&&(t=this.itemNums),this.currentIndex=t,this.showItem(t)},currentIndex:function(t){var e=this.itemNums,n=(t-1)%e;this.loop?this.paginationIndex=n<0?e-1:n:this.paginationIndex=t}},methods:{init:function(){this.destroy(),this.isVertical="vertical"===this.direction,this.itemsArr=this.$children.filter(function(t){return"yd-slider-item"===t.$options.name}),this.itemNums=this.itemsArr.length,this.loop&&(this.currentIndex=1),this.cloneItem(),this.showItem(this.currentIndex),this.bindEvents(),this.autoPlay()},showItem:function(t){if(this.isVertical){this.$refs.slider.style.height="100%";var e=this.$el.clientHeight;this.itemHeight.height=e+"px",this.setTranslate(0,-e*t),this.itemsArr.forEach(function(t){t.$el.style.height=e+"px"})}else this.setTranslate(0,-this.$refs.warpper.offsetWidth*t)},cloneItem:function(){if(!(this.itemsArr.length<=1)&&this.loop){var t=this.itemsArr;this.firtstItem=t[0].$el.innerHTML,this.lastItem=t[t.length-1].$el.innerHTML}},touchStartHandler:function(t){var e=this.touches;if(e.allowClick=!0,e.isTouchEvent="touchstart"===t.type,(e.isTouchEvent||!("which"in t)||3!==t.which)&&0===e.moveTag){e.moveTag=1,e.startX=t.touches?t.touches[0].clientX:t.clientX,e.startY=t.touches?t.touches[0].clientY:t.clientY,e.touchStartTime=Date.now();var n=this.itemNums;if(this.loop){if(0===this.currentIndex)return this.currentIndex=n,void this.setTranslate(0,-n*(this.isVertical?this.$el.clientHeight:this.$refs.warpper.offsetWidth));this.currentIndex>n&&(this.currentIndex=1,this.setTranslate(0,this.isVertical?-this.$el.clientHeight:-this.$refs.warpper.offsetWidth))}else{if(this.currentIndex===-1)return this.currentIndex=n-1,void this.setTranslate(0,-(n-1)*(this.isVertical?this.$el.clientHeight:this.$refs.warpper.offsetWidth));this.currentIndex>n-1&&(this.currentIndex=1,this.setTranslate(0,this.isVertical?-this.$el.clientHeight:-this.$refs.warpper.offsetWidth))}}},touchMoveHandler:function(t){this.supportTouch&&!this.isVertical||t.preventDefault();var e=this.touches;if(e.allowClick=!1,!e.isTouchEvent||"mousemove"!==t.type){var n=t.touches?t.touches[0].clientY:t.clientY,i=t.touches?t.touches[0].clientX:t.clientX,r=180*Math.atan2(Math.abs(n-e.startY),Math.abs(i-e.startX))/Math.PI;if((this.isVertical?90-r>45:r>45)&&this.supportTouch)return e.moveTag=3,this.stopAutoplay(),void this.setTranslate(0,-this.currentIndex*(this.isVertical?this.$el.clientHeight:this.$refs.warpper.offsetWidth));e.isDraging=!0;var o=e.moveOffset=this.isVertical?n-e.startY:i-e.startX;0!==o&&0!==e.moveTag&&(1===e.moveTag&&(this.stopAutoplay(),e.moveTag=2),2===e.moveTag&&this.setTranslate(0,-this.currentIndex*(this.isVertical?this.$el.clientHeight:this.$refs.warpper.offsetWidth)+o/2))}},touchEndHandler:function(){var t=this.touches,e=t.moveOffset,n=this.isVertical?this.$el.clientHeight:this.$refs.warpper.offsetWidth;if(1===t.moveTag&&(t.moveTag=0),setTimeout(function(){t.allowClick=!0,t.isDraging=!1},this.speed),2===t.moveTag){t.moveTag=0;var i=Date.now()-t.touchStartTime,r=!this.loop&&(0===this.currentIndex&&e>0||this.currentIndex>=this.itemNums-1&&e<0);return i>300&&Math.abs(e)<=.5*n||this.itemsArr.length<=1||r?this.setTranslate(this.speed,-this.currentIndex*n):(this.setTranslate(this.speed,-((e>0?--this.currentIndex:++this.currentIndex)*n)),this.sendIndex()),void this.autoPlay()}3===t.moveTag&&(t.moveTag=0,this.autoPlay())},autoPlay:function(){var t=this;this.autoplay<=0||this.itemsArr.length<=1||(this.autoPlayTimer=setInterval(function(){var e=t.isVertical?t.$el.clientHeight:t.$refs.warpper.offsetWidth;return t.loop||t.currentIndex+1>=t.itemNums&&(t.currentIndex=-1),t.currentIndex>t.itemNums?(t.currentIndex=1,t.setTranslate(0,-e),void setTimeout(function(){t.setTranslate(t.speed,-(++t.currentIndex*e))},100)):(t.setTranslate(t.speed,-(++t.currentIndex*e)),void t.sendIndex())},this.autoplay))},sendIndex:function(){if(this.loop){var t=this.currentIndex%this.itemNums;this.callback&&this.callback(0===t?this.itemNums-1:t-1)}else this.callback&&this.callback(this.currentIndex)},stopAutoplay:function(){clearInterval(this.autoPlayTimer)},stopDrag:function(t){this.touches.isDraging&&t.preventDefault()},bindEvents:function(){var t=this;this.$el.addEventListener("touchstart",this.touchStartHandler),this.$el.addEventListener("touchmove",this.touchMoveHandler),this.$el.addEventListener("touchend",this.touchEndHandler),this.$el.addEventListener("click",function(e){t.touches.allowClick||e.preventDefault()}),window.addEventListener("resize",this.resizeSlides),document.body.addEventListener("touchmove",this.stopDrag)},unbindEvents:function(){this.$el.removeEventListener("touchstart",this.touchStartHandler),this.$el.removeEventListener("touchmove",this.touchMoveHandler),
this.$el.removeEventListener("touchend",this.touchEndHandler),window.removeEventListener("resize",this.resizeSlides),document.body.removeEventListener("touchmove",this.stopDrag)},setTranslate:function(t,e){this.dragStyleObject.transitionDuration=t+"ms",this.isVertical?this.dragStyleObject.transform="translate3d(0, "+e+"px, 0)":this.dragStyleObject.transform="translate3d("+e+"px, 0, 0)"},resizeSlides:function(){if(this.isVertical){var t=this.$el.clientHeight;this.dragStyleObject.transform="translate3d(0, "+-this.currentIndex*t+"px, 0)"}else{var e=this.$refs.warpper.offsetWidth;this.dragStyleObject.transform="translate3d("+-this.currentIndex*e+"px, 0, 0)"}},destroy:function(){this.unbindEvents(),this.stopAutoplay()}},mounted:function(){this.supportTouch=window.Modernizr&&!!window.Modernizr.touch||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}()},destroyed:function(){this.destroy()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-spinner",data:function(){return{counter:0,tapParams:{timer:null,tapStartTime:0},parms:{max:0,min:-1}}},watch:{value:function(){this.setDefalutValue()}},props:{unit:{default:1,validator:function(t){return/^([1-9]\d*)$/.test(t)}},max:{default:0,validator:function(t){return/^(([1-9]\d*)|0)$/.test(t)}},min:{default:-1,validator:function(t){return/^((-?([1-9]\d*))|0)$/.test(t)}},longpress:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},value:{validator:function(t){return/^(([1-9]\d*)|0)$/.test(t)}},width:{validator:function(t){return/^(\.|\d+\.)?\d+(px|rem)$/.test(t)},default:"2rem"},height:{validator:function(t){return/^(\.|\d+\.)?\d+(px|rem)$/.test(t)},default:".6rem"}},methods:{init:function(){this.checkParameters()&&(this.setDefalutValue(),this.bindEvents())},checkParameters:function(){var t=~~this.max,e=~~this.unit,n=~~this.min;return t<e&&0!=t?(console.error("[YDUI warn]: The parameter 'max'("+t+") must be greater than or equal to 'unit'("+e+")."),!1):t%e!=0?(console.error("[YDUI warn]: The parameter 'max'("+t+") and 'unit'("+e+") must be multiple."),!1):n%e!=0&&n>=0?(console.error("[YDUI warn]: The parameter 'min'("+n+") and 'unit'("+e+") must be multiple."),!1):!(t<n&&0!=t)||(console.error("[YDUI warn]: The parameter 'max'("+t+") must be greater than to 'min'("+n+")."),!1)},setDefalutValue:function(){var t=~~this.unit,e=~~this.min,n=~~this.value;return~~n>0?void this.setValue(n):void this.setValue(e<0?t:e)},calculation:function(t){var e=~~this.max,n=~~this.min<0?~~this.unit:~~this.min,i=~~this.unit;if(!this.readonly){var r=~~this.counter,o=void 0;if("add"==t){if(o=r+i,0!=e&&o>e)return}else if(o=r-i,o<n)return;this.setValue(o),this.longpress&&this.longpressHandler(t)}},setValue:function(t){var e=~~this.max,n=~~this.min<0?~~this.unit:~~this.min,i=~~this.unit;/^(([1-9]\d*)|0)$/.test(t)||(t=i),t>e&&0!=e&&(t=e),t%i>0&&(t=t-t%i+i,t>e&&0!=e&&(t-=i)),t<n&&(t=n-n%i),this.counter=t,this.$emit("input",t)},longpressHandler:function(t){var e=this,n=(new Date).getTime()/1e3,i=n-this.tapParams.tapStartTime;i<1&&(i=.5);var r=10*i;30==i&&(r=50),i>=40&&(r=100),this.tapParams.timer=setTimeout(function(){e.calculation(t)},1e3/r)},clearTapTimer:function(){clearTimeout(this.tapParams.timer)},bindEvents:function(){var t=this,e=this.$refs.add,n=this.$refs.minus,i={mousedownEvent:"touchstart",mouseupEvent:"touchend"},r=window.Modernizr&&!!window.Modernizr.touch||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}();r||(i.mousedownEvent="mousedown",i.mouseupEvent="mouseup"),e.addEventListener(i.mousedownEvent,function(n){t.longpress&&(n.preventDefault(),n.stopPropagation(),t.tapParams.tapStartTime=(new Date).getTime()/1e3,e.addEventListener(i.mouseupEvent,t.clearTapTimer)),t.calculation("add")}),n.addEventListener(i.mousedownEvent,function(e){t.longpress&&(e.preventDefault(),e.stopPropagation(),t.tapParams.tapStartTime=(new Date).getTime()/1e3,n.addEventListener(i.mouseupEvent,t.clearTapTimer)),t.calculation("minus")}),this.$refs.numInput.addEventListener("change",function(){t.setValue(~~t.counter)})}},mounted:function(){this.$nextTick(this.init)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-step-item",data:function(){return{stepNumber:"",current:"",theme:"",currentClass:""}},methods:{setCurrentClass:function(){return 2==this.theme?void(this.currentClass=this.stepNumber==this.current?"yd-step-item-current":""):void(this.currentClass=this.stepNumber<=this.current?"yd-step-item-current":"")}},mounted:function(){this.$nextTick(this.$parent.updateChildStatus)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-step",data:function(){return{hasTop:!1,hasBottom:!1}},props:{theme:{validator:function(t){return["1","2"].indexOf(t)>-1},default:"1"},current:{validator:function(t){return/^\d*$/.test(t)},default:0},currentColor:{validator:function(t){return(0,i.isColor)(t)},default:"#0DB78A"}},methods:{updateChildStatus:function(t){var e=this,n=this.$children.filter(function(t){return"yd-step-item"===t.$options.name});n.forEach(function(i,r){i.stepNumber=r+1,r+1===n.length&&e.current>=i.stepNumber?i.current=i.stepNumber:i.current=e.current,i.theme=e.theme,i.$slots.bottom&&(e.hasBottom=!0),i.$slots.top&&(e.hasTop=!0),i.loaded&&!t||(i.setCurrentClass(),i.loaded=!0)})}},watch:{current:function(){var t=this;this.$nextTick(function(){t.updateChildStatus(!0)})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-switch",data:function(){return{checked:this.value}},props:{value:Boolean,disabled:{type:Boolean,default:!1},color:{validator:function(t){return!t||(0,i.isColor)(t)},default:"#4CD864"}},watch:{checked:function(t){this.$emit("input",t)},value:function(t){this.checked=t}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-tab-panel",props:{label:String,active:Boolean,tabkey:[String,Number]},computed:{classes:function(){return this.$parent.activeIndex==this._uid?"yd-tab-active":""}},watch:{active:function(){this.$parent.init(!0)},label:function(){this.$parent.init(!1,"label")}},mounted:function(){var t=this;this.$nextTick(function(){t.$parent.init(!1)})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-tab",data:function(){return{navList:[],activeIndex:0,tmpIndex:0}},props:{change:Function,callback:Function,activeColor:{validator:function(t){return!t||(0,i.isColor)(t)},default:"#FF5E53"}},methods:{init:function(t,e){var n=this,i=this.$children.filter(function(t){return"yd-tab-panel"===t.$options.name}),r=0;t||(this.navList=[]),i.forEach(function(o,a){return"label"===e?n.navList[a]=o:(t||n.navList.push({_uid:o._uid,label:o.label,tabkey:o.tabkey}),void(o.active?(n.activeIndex=n.tmpIndex=o._uid,n.emitChange(o.label,o.tabkey)):(++r,r>=i.length&&(n.activeIndex=n.tmpIndex=i[0]._uid,n.emitChange(i[0].label,i[0].tabkey)))))})},emitChange:function(t,e){this.change&&this.change(t,e),this.callback&&this.callback(t,e)},changeHandler:function(t,e,n){this.tmpIndex!=t&&(this.activeIndex=this.tmpIndex=t,this.emitChange(e,n))}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(3);e.default={name:"yd-tabbar-item",props:{link:[String,Object],title:String,active:Boolean,dot:Boolean},computed:{classes:function(){return this.active?"yd-tabbar-active":""},styles:function(){return this.active?{}:{color:this.$parent.color}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"yd-tabbar",props:{fixed:Boolean,exact:{type:Boolean,default:!0},activeClass:{type:String,default:"router-link-active"},activeColor:{validator:function(t){return!t||(0,i.isColor)(t)},default:"#09BB07"},bgcolor:{validator:function(t){return!t||(0,i.isColor)(t)},default:"#FFF"},color:{validator:function(t){return!t||(0,i.isColor)(t)},default:"#979797"},fontsize:{validator:function(t){return/^(\.|\d+\.)?\d+(px|rem)$/.test(t)},default:".24rem"}},computed:{classes:function(){return this.fixed?"yd-tabbar-fixed":""},styles:function(){return{color:this.activeColor,backgroundColor:this.bgcolor,fontSize:this.fontsize}}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-textarea",data:function(){return{num:0,mlstr:""}},props:{maxlength:{validator:function(t){return!t||/^(([1-9]\d*)|0)$/.test(t)}},placeholder:{type:String},readonly:{type:Boolean,default:!1},value:{type:String},showCounter:{type:Boolean,default:!0},change:{type:Function},callback:{type:Function}},watch:{mlstr:function(t){this.$emit("input",t),this.change&&this.change(),this.callback&&this.change(),this.showCounter&&(this.num=t.length)},value:function(t){this.mlstr=t}},mounted:function(){var t=this;this.$nextTick(function(){var e=t.value;e&&(t.mlstr=e.length>t.maxlength?e.substr(e,t.maxlength):e)})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-timeline-item"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-timeline"}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.AccordionItem=e.Accordion=void 0;var r=n(53),o=i(r),a=n(52),s=i(a);e.Accordion=o.default,e.AccordionItem=s.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.ActionSheet=void 0;var r=n(54),o=i(r);e.ActionSheet=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.BackTop=void 0;var r=n(55),o=i(r);e.BackTop=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Badge=void 0;var r=n(56),o=i(r);e.Badge=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.ButtonGroup=e.Button=void 0;var r=n(6),o=i(r),a=n(57),s=i(a);e.Button=o.default,e.ButtonGroup=s.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.CellGroup=e.CellItem=void 0;var r=n(59),o=i(r),a=n(58),s=i(a);e.CellItem=o.default,e.CellGroup=s.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.CheckBoxGroup=e.CheckBox=void 0;var r=n(61),o=i(r),a=n(60),s=i(a);e.CheckBox=o.default,e.CheckBoxGroup=s.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.CheckListItem=e.CheckList=void 0;var r=n(63),o=i(r),a=n(62),s=i(a);e.CheckList=o.default,e.CheckListItem=s.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.CitySelect=void 0;var r=n(64),o=i(r);e.CitySelect=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.CountDown=void 0;var r=n(65),o=i(r);e.CountDown=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.CountUp=void 0;var r=n(66),o=i(r);e.CountUp=o.default},function(t,e,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(o,a){i=a,r="function"==typeof i?i.call(e,n,e,t):i,!(void 0!==r&&(t.exports=r))}(void 0,function(t,e,n){var i=function(t,e,n,i,r,a){for(var s=0,l=["webkit","moz","ms","o"],c=0;c<l.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[l[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[l[c]+"CancelAnimationFrame"]||window[l[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var n=(new Date).getTime(),i=Math.max(0,16-(n-s)),r=window.setTimeout(function(){t(n+i)},i);return s=n+i,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)});var u=this;if(u.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null,prefix:"",suffix:""},a&&"object"===("undefined"==typeof a?"undefined":o(a)))for(var d in u.options)a.hasOwnProperty(d)&&(u.options[d]=a[d]);""===u.options.separator&&(u.options.useGrouping=!1),u.version=function(){return"1.8.2"},u.d="string"==typeof t?document.getElementById(t):t,u.startVal=Number(e),u.endVal=Number(n),u.countDown=u.startVal>u.endVal,u.frameVal=u.startVal,u.decimals=Math.max(0,i||0),u.dec=Math.pow(10,u.decimals),u.duration=1e3*Number(r)||2e3,u.formatNumber=function(t){t=t.toFixed(u.decimals),t+="";var e,n,i,r;if(e=t.split("."),n=e[0],i=e.length>1?u.options.decimal+e[1]:"",r=/(\d+)(\d{3})/,u.options.useGrouping)for(;r.test(n);)n=n.replace(r,"$1"+u.options.separator+"$2");return u.options.prefix+n+i+u.options.suffix},u.easeOutExpo=function(t,e,n,i){return n*(-Math.pow(2,-10*t/i)+1)*1024/1023+e},u.easingFn=u.options.easingFn?u.options.easingFn:u.easeOutExpo,u.formattingFn=u.options.formattingFn?u.options.formattingFn:u.formatNumber,u.printValue=function(t){var e=u.formattingFn(t);"INPUT"===u.d.tagName?this.d.value=e:"text"===u.d.tagName||"tspan"===u.d.tagName?this.d.textContent=e:this.d.innerHTML=e},u.count=function(t){u.startTime||(u.startTime=t),u.timestamp=t;var e=t-u.startTime;u.remaining=u.duration-e,u.options.useEasing?u.countDown?u.frameVal=u.startVal-u.easingFn(e,0,u.startVal-u.endVal,u.duration):u.frameVal=u.easingFn(e,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(e/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(e/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.dec)/u.dec,u.printValue(u.frameVal),e<u.duration?u.rAF=requestAnimationFrame(u.count):u.callback&&u.callback()},u.start=function(t){return u.callback=t,u.rAF=requestAnimationFrame(u.count),!1},u.pauseResume=function(){u.paused?(u.paused=!1,delete u.startTime,u.duration=u.remaining,u.startVal=u.frameVal,requestAnimationFrame(u.count)):(u.paused=!0,cancelAnimationFrame(u.rAF))},u.reset=function(){u.paused=!1,delete u.startTime,u.startVal=e,cancelAnimationFrame(u.rAF),u.printValue(u.startVal)},u.update=function(t){cancelAnimationFrame(u.rAF),u.paused=!1,delete u.startTime,u.startVal=u.frameVal,u.endVal=Number(t),u.countDown=u.startVal>u.endVal,u.rAF=requestAnimationFrame(u.count)},u.printValue(u.startVal)};return i})},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.DateTime=void 0;var r=n(67),o=i(r);e.DateTime=o.default},function(t,e){"use strict";var n=Date.now||function(){return+new Date},i={},r=1,o=60,a=1e3;t.exports={requestAnimationFrame:function(){var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame,e=!!t;if(t&&!/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(t.toString())&&(e=!1),e)return function(e,n){t(e,n)};var n=60,i={},r=0,o=1,a=null,s=+new Date;return function(t,e){var l=o++;return i[l]=t,r++,null===a&&(a=setInterval(function(){var t=+new Date,e=i;i={},r=0;for(var n in e)e.hasOwnProperty(n)&&(e[n](t),s=t);t-s>2500&&(clearInterval(a),a=null)},1e3/n)),l}}(),stop:function(t){var e=null!=i[t];return e&&(i[t]=null),e},isRunning:function(t){return null!=i[t]},start:function t(e,s,l,c,u,d){var f=this,t=n(),h=t,p=0,A=0,m=r++;if(d||(d=document.body),m%20===0){var v={};for(var g in i)v[g]=!0;i=v}var _=function r(v){var g=v!==!0,_=n();if(!i[m]||s&&!s(m))return i[m]=null,void(l&&l(o-A/((_-t)/a),m,!1));if(g)for(var y=Math.round((_-h)/(a/o))-1,x=0;x<Math.min(y,4);x++)r(!0),A++;c&&(p=(_-t)/c,p>1&&(p=1));var b=u?u(p):p;e(b,_,g)!==!1&&1!==p||!g?g&&(h=_,f.requestAnimationFrame(r,d)):(i[m]=null,l&&l(o-A/((_-t)/a),m,1===p||null==c))};return i[m]=!0,f.requestAnimationFrame(_,d),m}}},function(t,e,n){"use strict";var i=n(264),r=function(t,e,n){var i=this;if(t){n=n||{},i.options={onSelect:function(){},itemHeight:38};for(var r in n)void 0!==n[r]&&(i.options[r]=n[r]);i.__content=e,i.__component=t,i.__itemHeight=i.options.itemHeight;var o=window.Modernizr&&!!window.Modernizr.touch||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),a={start:o?"touchstart":"mousedown",move:o?"touchmove":"mousemove",end:o?"touchend":"mouseup"};t.addEventListener(a.start,function(t){t.target.tagName.match(/input|textarea|select/i)||(t.preventDefault(),i.__doTouchStart(t,t.timeStamp))},!1),t.addEventListener(a.move,function(t){i.__doTouchMove(t,t.timeStamp)},!1),t.addEventListener(a.end,function(t){i.__doTouchEnd(t.timeStamp)},!1)}},o={value:null,__prevValue:null,__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientTop:0,__clientHeight:0,__contentHeight:0,__itemHeight:0,__scrollTop:0,__minScrollTop:0,__maxScrollTop:0,__scheduledTop:0,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollTop:null,__maxDecelerationScrollTop:null,__decelerationVelocityY:null,setDimensions:function(t,e,n){var i=this;i.__clientHeight=t,i.__contentHeight=e;var r=Math.round(i.__clientHeight/i.__itemHeight);i.__minScrollTop=-i.__itemHeight*(r/2),i.__maxScrollTop=i.__minScrollTop+n*i.__itemHeight-.1},selectByIndex:function(t,e){var n=this;t<0||t>n.__content.childElementCount-1||(n.__scrollTop=n.__minScrollTop+t*n.__itemHeight,n.scrollTo(n.__scrollTop,e),n.__selectItem(n.__content.children[t]))},select:function(t,e){for(var n=this,i=n.__content.children,r=0,o=i.length;r<o;r++)if(i[r].dataset.value==t)return void n.selectByIndex(r,e);n.selectByIndex(0,e)},scrollTo:function(t,e){var n=this;return e=void 0===e||e,n.__isDecelerating&&(i.stop(n.__isDecelerating),n.__isDecelerating=!1),t=Math.round(t/n.__itemHeight)*n.__itemHeight,t=Math.max(Math.min(n.__maxScrollTop,t),n.__minScrollTop),t!==n.__scrollTop&&e?void n.__publish(t,250):(n.__publish(t),void n.__scrollingComplete())},__selectItem:function(t){var e=this;null!==e.value&&(e.__prevValue=e.value),e.value=t.dataset.value},__scrollingComplete:function(){var t=this,e=Math.round((t.__scrollTop-t.__minScrollTop-t.__itemHeight/2)/t.__itemHeight);t.__selectItem(t.__content.children[e]),null!==t.__prevValue&&t.__prevValue!==t.value&&t.options.onSelect(t.value)},__doTouchStart:function(t,e){var n=t.touches,r=this,o=t.touches?t.touches[0]:t,a=!!t.touches;if(t.touches&&null==n.length)throw new Error("Invalid touch list: "+n);if(e instanceof Date&&(e=e.valueOf()),"number"!=typeof e)throw new Error("Invalid timestamp value: "+e);r.__interruptedAnimation=!0,r.__isDecelerating&&(i.stop(r.__isDecelerating),r.__isDecelerating=!1,r.__interruptedAnimation=!0),r.__isAnimating&&(i.stop(r.__isAnimating),r.__isAnimating=!1,r.__interruptedAnimation=!0);var s,l=a&&1===n.length||!a;s=l?o.pageY:Math.abs(o.pageY+n[1].pageY)/2,r.__initialTouchTop=s,r.__lastTouchTop=s,r.__lastTouchMove=e,r.__lastScale=1,r.__enableScrollY=!l,r.__isTracking=!0,r.__didDecelerationComplete=!1,r.__isDragging=!l,r.__isSingleTouch=l,r.__positions=[]},__doTouchMove:function(t,e,n){var i=this,r=t.touches,o=t.touches?t.touches[0]:t,a=!!t.touches;if(r&&null==r.length)throw new Error("Invalid touch list: "+r);if(e instanceof Date&&(e=e.valueOf()),"number"!=typeof e)throw new Error("Invalid timestamp value: "+e);if(i.__isTracking){var s;s=a&&2===r.length?Math.abs(o.pageY+r[1].pageY)/2:o.pageY;var l=i.__positions;if(i.__isDragging){var c=s-i.__lastTouchTop,u=i.__scrollTop;if(i.__enableScrollY){u-=c;var d=i.__minScrollTop,f=i.__maxScrollTop;(u>f||u<d)&&(u=u>f?f:d)}l.length>40&&l.splice(0,20),l.push(u,e),i.__publish(u)}else{var h=0,p=5,A=Math.abs(s-i.__initialTouchTop);i.__enableScrollY=A>=h,l.push(i.__scrollTop,e),i.__isDragging=i.__enableScrollY&&A>=p,i.__isDragging&&(i.__interruptedAnimation=!1)}i.__lastTouchTop=s,i.__lastTouchMove=e,i.__lastScale=n}},__doTouchEnd:function(t){var e=this;if(t instanceof Date&&(t=t.valueOf()),"number"!=typeof t)throw new Error("Invalid timestamp value: "+t);if(e.__isTracking){if(e.__isTracking=!1,e.__isDragging&&(e.__isDragging=!1,e.__isSingleTouch&&t-e.__lastTouchMove<=100)){for(var n=e.__positions,i=n.length-1,r=i,o=i;o>0&&n[o]>e.__lastTouchMove-100;o-=2)r=o;if(r!==i){var a=n[i]-n[r],s=e.__scrollTop-n[r-1];e.__decelerationVelocityY=s/a*(1e3/60);var l=4;Math.abs(e.__decelerationVelocityY)>l&&e.__startDeceleration(t)}}e.__isDecelerating||e.scrollTo(e.__scrollTop),e.__positions.length=0}},__easeOutCubic:function(t){return Math.pow(t-1,3)+1},__easeInOutCubic:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},__publish:function(t,e){var n=this,r=n.__isAnimating;if(r&&(i.stop(r),n.__isAnimating=!1),e){n.__scheduledTop=t;var o=n.__scrollTop,a=t-o,s=function(t,e,i){n.__scrollTop=o+a*t,n.options.callback&&n.options.callback(n.__scrollTop,n.__isDragging)},l=function(t){return n.__isAnimating===t},c=function(t,e,i){e===n.__isAnimating&&(n.__isAnimating=!1),(n.__didDecelerationComplete||i)&&n.__scrollingComplete()};n.__isAnimating=i.start(s,l,c,e,r?n.__easeOutCubic:n.__easeInOutCubic)}else n.__scheduledTop=n.__scrollTop=t,n.options.callback&&n.options.callback(t,n.__isDragging)},__startDeceleration:function(t){var e=this;e.__minDecelerationScrollTop=e.__minScrollTop,e.__maxDecelerationScrollTop=e.__maxScrollTop;var n=function(t,n,i){e.__stepThroughDeceleration(i)},r=.5,o=function(){var t=Math.abs(e.__decelerationVelocityY)>=r;return t||(e.__didDecelerationComplete=!0),t},a=function(t,n,i){return e.__isDecelerating=!1,e.__scrollTop<=e.__minScrollTop||e.__scrollTop>=e.__maxScrollTop?void e.scrollTo(e.__scrollTop):void(e.__didDecelerationComplete&&e.__scrollingComplete())};e.__isDecelerating=i.start(n,o,a)},__stepThroughDeceleration:function(t){var e=this,n=e.__scrollTop+e.__decelerationVelocityY,i=Math.max(Math.min(e.__maxDecelerationScrollTop,n),e.__minDecelerationScrollTop);i!==n&&(n=i,e.__decelerationVelocityY=0),Math.abs(e.__decelerationVelocityY)<=1?Math.abs(n%e.__itemHeight)<1&&(e.__decelerationVelocityY=0):e.__decelerationVelocityY*=.95,e.__publish(n)}};for(var a in o)r.prototype[a]=o[a];t.exports=r},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Loading=e.Notify=e.Toast=e.Alert=e.Confirm=void 0;var r=n(267),o=i(r),a=n(268),s=i(a),l=n(271),c=i(l),u=n(270),d=i(u),f=n(269),h=i(f);e.Confirm=s.default,e.Alert=o.default,e.Toast=c.default,e.Notify=d.default,e.Loading=h.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),o=i(r),a=n(3),s=o.default.extend(n(69)),l=new s({el:document.createElement("div")}),c=function(){a.pageScroll.unlock();var t=l.$el;t.parentNode&&t.parentNode.removeChild(t)};s.prototype.closeAlert=function(){a.pageScroll.unlock();var t=l.$el;t.parentNode&&t.parentNode.removeChild(t),window.removeEventListener("hashchange",c),"function"==typeof this.callback&&this.callback()};var u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l.mes=t.mes,l.callback=t.callback,window.addEventListener("hashchange",c),document.body.appendChild(l.$el),a.pageScroll.lock()};e.default=u},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),o=i(r),a=n(3),s=o.default.extend(n(70)),l=new s({el:document.createElement("div")}),c=function(){a.pageScroll.unlock();var t=l.$el;t.parentNode&&t.parentNode.removeChild(t)};s.prototype.closeConfirm=function(t,e){if("function"==typeof e&&e(),!t){a.pageScroll.unlock();var n=l.$el;n.parentNode&&n.parentNode.removeChild(n),window.removeEventListener("hashchange",c)}};var u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l.mes=t.mes||"",l.title=t.title||"提示",l.opts=t.opts,window.addEventListener("hashchange",c),document.body.appendChild(l.$el),a.pageScroll.lock()};e.default=u},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),o=i(r),a=n(3),s=o.default.extend(n(71)),l=new s({el:document.createElement("div")});s.prototype.open=function(t){l.title=t||"正在加载",document.body.appendChild(l.$el),a.pageScroll.lock()},s.prototype.close=function(){var t=l.$el;t.parentNode&&t.parentNode.removeChild(t),a.pageScroll.unlock()},e.default={open:l.open,close:l.close}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),o=i(r),a=o.default.extend(n(72)),s=new a({el:document.createElement("div")}),l=null,c=!1;a.prototype.closeNotify=function(){s.classes="yd-notify-out",setTimeout(function(){var t=s.$el;t.parentNode&&t.parentNode.removeChild(t),c=!1},150),"function"==typeof this.callback&&this.callback()};var u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s.classes="",s.mes=t.mes,s.timeout=~~t.timeout||5e3,s.callback=t.callback,c||(c=!0,document.body.appendChild(s.$el),s.$el.addEventListener("click",function(){clearTimeout(l),s.closeNotify()}),l=setTimeout(function(){clearTimeout(l),s.closeNotify()},s.timeout))};e.default=u},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),o=i(r),a=n(3),s=o.default.extend(n(73)),l=new s({el:document.createElement("div")});s.prototype.closeToast=function(){var t=l.$el;t.parentNode&&t.parentNode.removeChild(t),a.pageScroll.unlock(),"function"==typeof this.callback&&this.callback()};var c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l.mes=t.mes,l.icon=t.icon,l.timeout=~~t.timeout||2e3,l.callback=t.callback,document.body.appendChild(l.$el),a.pageScroll.lock();var e=setTimeout(function(){clearTimeout(e),l.closeToast()},l.timeout+100)};e.default=c},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.FlexBoxItem=e.FlexBox=void 0;var r=n(75),o=i(r),a=n(74),s=i(a);e.FlexBox=o.default,e.FlexBoxItem=s.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.GridsGroup=e.GridsItem=void 0;var r=n(77),o=i(r),a=n(76),s=i(a);e.GridsItem=o.default,e.GridsGroup=s.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Icons=void 0;var r=n(78),o=i(r);e.Icons=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.InfiniteScroll=void 0;var r=n(79),o=i(r);e.InfiniteScroll=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Input=void 0;var r=n(7),o=i(r);e.Input=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.KeyBoard=void 0;var r=n(81),o=i(r);e.KeyBoard=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Layout=void 0;var r=n(82),o=i(r);e.Layout=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.LightBoxTxt=e.LightBoxImg=e.LightBox=void 0;var r=n(86),o=i(r),a=n(84),s=i(a),l=n(85),c=i(l);e.LightBox=o.default,e.LightBoxImg=s.default,e.LightBoxTxt=c.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.ListOther=e.ListItem=e.ListTheme=void 0;var r=n(89),o=i(r),a=n(87),s=i(a),l=n(88),c=i(l);e.ListTheme=o.default,e.ListItem=s.default,e.ListOther=c.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.NavBarNextIcon=e.NavBarBackIcon=e.NavBar=void 0;var r=n(92),o=i(r),a=n(90),s=i(a),l=n(91),c=i(l);e.NavBar=o.default,e.NavBarBackIcon=s.default,e.NavBarNextIcon=c.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Popup=void 0;var r=n(93),o=i(r);e.Popup=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.ProgressBar=void 0;var r=n(94),o=i(r);e.ProgressBar=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.PullRefresh=void 0;var r=n(95),o=i(r);e.PullRefresh=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.RadioGroup=e.Radio=void 0;var r=n(97),o=i(r),a=n(96),s=i(a);e.Radio=o.default,e.RadioGroup=s.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Rate=void 0;var r=n(98),o=i(r);e.Rate=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.RollNoticeItem=e.RollNotice=void 0;var r=n(100),o=i(r),a=n(99),s=i(a);e.RollNotice=o.default,e.RollNoticeItem=s.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.ScrollTabPanel=e.ScrollTab=void 0;var r=n(102),o=i(r),a=n(101),s=i(a);e.ScrollTab=o.default,e.ScrollTabPanel=s.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Search=void 0;var r=n(103),o=i(r);e.Search=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SendCode=void 0;var r=n(104),o=i(r);e.SendCode=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SliderItem=e.Slider=void 0;var r=n(9),o=i(r),a=n(8),s=i(a);e.Slider=o.default,e.SliderItem=s.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var r=n(105),o=i(r);e.Spinner=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.StepItem=e.Step=void 0;var r=n(107),o=i(r),a=n(106),s=i(a);e.Step=o.default,e.StepItem=s.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Switch=void 0;var r=n(108),o=i(r);e.Switch=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.TabPanel=e.Tab=void 0;var r=n(110),o=i(r),a=n(109),s=i(a);e.Tab=o.default,e.TabPanel=s.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.TabBarItem=e.TabBar=void 0;var r=n(112),o=i(r),a=n(111),s=i(a);e.TabBar=o.default,e.TabBarItem=s.default;
},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.TextArea=void 0;var r=n(113),o=i(r);e.TextArea=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.TimeLineItem=e.TimeLine=void 0;var r=n(115),o=i(r),a=n(114),s=i(a);e.TimeLine=o.default,e.TimeLineItem=s.default}])});

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "html,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nsup,\r\ntt,\r\nvar,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\na[href^=\"javascript\"]{-webkit-touch-callout: none;}\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n    display: block;\r\n}\r\n\r\nbody {\r\n    line-height: 1;\r\n}\r\nsup{\r\n    vertical-align: text-bottom;\r\n}\r\nol,\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n    quotes: none;\r\n}\r\n\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n    content: ' ';\r\n    content: none;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\nbody {\r\n    font: 13px/1.5 Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, Arial, sans-serif;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    font-weight: normal;\r\n}\r\n\r\ninput {\r\n    outline: 0;\r\n}\r\n\r\n.hidden {\r\n    float: left;\r\n    width: 0;\r\n    height: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.hiddenText {\r\n    text-indent: 100%;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n.none {\r\n    display: none;\r\n}\r\n\r\n.bold {\r\n    font-weight: bold;\r\n}\r\n\r\n.center {\r\n    text-align: center;\r\n}\r\n\r\n.clearfix:before,\r\n.clearfix:after {\r\n    content: \"\";\r\n    display: table;\r\n}\r\n\r\n.clearfix:after {\r\n    clear: both;\r\n}\r\n\r\n.clearfix {\r\n    zoom: 1;\r\n}\r\n\r\ntable {\r\n    margin-left: 1px;\r\n}\r\n\r\ntable td,\r\ntable th {\r\n    padding: 5px 10px;\r\n    border: 1px solid #ccc;\r\n    vertical-align: middle;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: #000;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    background: #f2f2f2;\r\n}\r\nhtml{\r\n    font-size: 50px;\r\n}", ""]);

// exports


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(2)))

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wrap" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "form-cnt" },
      [
        _c(
          "yd-cell-group",
          [
            _c(
              "div",
              { staticClass: "barcode_form" },
              [
                _c(
                  "yd-cell-item",
                  [
                    _c("span", { attrs: { slot: "left" }, slot: "left" }, [
                      _vm._v("条形码"),
                      _c("span", { staticClass: "required" }, [_vm._v(" *")]),
                      _vm._v("：")
                    ]),
                    _vm._v(" "),
                    _c("yd-input", {
                      attrs: {
                        slot: "right",
                        placeholder: "请输入采集器上的条形码",
                        "on-blur": _vm.outproduct,
                        required: "",
                        "show-clear-icon": false,
                        "show-error-icon": false,
                        "show-success-icon": false,
                        "show-required-icon": false,
                        min: "6",
                        max: "10"
                      },
                      slot: "right",
                      model: {
                        value: _vm.barcode,
                        callback: function($$v) {
                          _vm.barcode = $$v
                        },
                        expression: "barcode"
                      }
                    }),
                    _vm._v(" "),
                    _c("yd-icon", {
                      attrs: { slot: "icon", name: "qrscan", size: ".4rem" },
                      nativeOn: {
                        click: function($event) {
                          _vm.qrscan($event)
                        }
                      },
                      slot: "icon"
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("span", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.barcode_success,
                      expression: "!barcode_success"
                    }
                  ],
                  staticClass: "yd-input-error input_state"
                }),
                _vm._v(" "),
                _c("span", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.barcode_success,
                      expression: "barcode_success"
                    }
                  ],
                  staticClass: "yd-input-success input_state"
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "yd-cell-item",
              [
                _c("span", { attrs: { slot: "left" }, slot: "left" }, [
                  _vm._v("检测产品：")
                ]),
                _vm._v(" "),
                _c("yd-input", {
                  attrs: {
                    slot: "right",
                    readonly: true,
                    "show-clear-icon": false
                  },
                  slot: "right",
                  model: {
                    value: _vm.product,
                    callback: function($$v) {
                      _vm.product = $$v
                    },
                    expression: "product"
                  }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "yd-cell-group",
          [
            _c(
              "yd-cell-item",
              [
                _c("yd-icon", {
                  attrs: { slot: "icon", name: "phone3", size: ".45rem" },
                  slot: "icon"
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.tel,
                      expression: "tel"
                    }
                  ],
                  attrs: {
                    slot: "right",
                    type: "tel",
                    placeholder: "请输入手机号码",
                    readonly: _vm.phoneIn,
                    maxlength: "11",
                    minlength: "11"
                  },
                  domProps: { value: _vm.tel },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.tel = $event.target.value
                    }
                  },
                  slot: "right"
                }),
                _vm._v(" "),
                _c("yd-sendcode", {
                  attrs: {
                    slot: "right",
                    type: "warning",
                    "init-str": "获取验证码",
                    "run-str": "{%s}秒重新获取",
                    "reset-str": "重新获取",
                    "storage-key": "true"
                  },
                  nativeOn: {
                    click: function($event) {
                      _vm.sendCode1($event)
                    }
                  },
                  slot: "right",
                  model: {
                    value: _vm.start,
                    callback: function($$v) {
                      _vm.start = $$v
                    },
                    expression: "start"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "captcha_wrap" },
              [
                _c("img", {
                  staticClass: "captcha_ico",
                  attrs: { src: "/static/img/code.png" }
                }),
                _vm._v(" "),
                _c(
                  "yd-cell-item",
                  { staticClass: "captcha_input" },
                  [
                    _c("yd-input", {
                      attrs: {
                        slot: "right",
                        type: "tel",
                        required: "",
                        max: "4",
                        min: "4",
                        placeholder: "验证码"
                      },
                      slot: "right",
                      model: {
                        value: _vm.captcha,
                        callback: function($$v) {
                          _vm.captcha = $$v
                        },
                        expression: "captcha"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "yd-cell-group",
          [
            _c(
              "yd-cell-item",
              [
                _c("span", { attrs: { slot: "left" }, slot: "left" }, [
                  _vm._v("姓名"),
                  _c("span", { staticClass: "required" }, [_vm._v(" *")]),
                  _vm._v("：")
                ]),
                _vm._v(" "),
                _c("yd-input", {
                  attrs: {
                    slot: "right",
                    regex: "/\\S{2,}/",
                    "show-clear-icon": false,
                    placeholder: "请输入受检者的姓名",
                    required: ""
                  },
                  slot: "right",
                  model: {
                    value: _vm.name,
                    callback: function($$v) {
                      _vm.name = $$v
                    },
                    expression: "name"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("yd-cell-item", { attrs: { arrow: "", type: "label" } }, [
              _c("span", { attrs: { slot: "left" }, slot: "left" }, [
                _vm._v("性别"),
                _c("span", { staticClass: "required" }, [_vm._v(" *")]),
                _vm._v("：")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.gender,
                      expression: "gender"
                    }
                  ],
                  staticStyle: { color: "#555" },
                  attrs: { slot: "right" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.gender = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  },
                  slot: "right"
                },
                [
                  _c("option", { attrs: { value: "male" } }, [_vm._v("男")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "female" } }, [_vm._v("女")])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "yd-cell-item",
              { attrs: { arrow: "" } },
              [
                _c("span", { attrs: { slot: "left" }, slot: "left" }, [
                  _vm._v("出生日期"),
                  _c("span", { staticClass: "required" }, [_vm._v(" *")]),
                  _vm._v("：")
                ]),
                _vm._v(" "),
                _c("yd-datetime", {
                  staticClass: "hide",
                  class: { show: _vm.isdob },
                  attrs: {
                    slot: "right",
                    type: "date",
                    startYear: "1900",
                    endDate: _vm.today
                  },
                  slot: "right",
                  model: {
                    value: _vm.dob,
                    callback: function($$v) {
                      _vm.dob = $$v
                    },
                    expression: "dob"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("yd-cell-item", { attrs: { arrow: "", type: "label" } }, [
              _c("span", { attrs: { slot: "left" }, slot: "left" }, [
                _vm._v("民族"),
                _c("span", { staticClass: "required" }, [_vm._v(" *")]),
                _vm._v("：")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.ethnicity,
                      expression: "ethnicity"
                    }
                  ],
                  staticStyle: { color: "#555" },
                  attrs: { slot: "right" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.ethnicity = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  },
                  slot: "right"
                },
                _vm._l(_vm.ethnicityArray, function(item) {
                  return _c("option", {
                    domProps: { value: item, textContent: _vm._s(item) }
                  })
                })
              )
            ]),
            _vm._v(" "),
            _c(
              "yd-cell-item",
              [
                _c("span", { attrs: { slot: "left" }, slot: "left" }, [
                  _vm._v("身高(cm)"),
                  _c("span", { staticClass: "required" }, [_vm._v(" *")]),
                  _vm._v("：")
                ]),
                _vm._v(" "),
                _c("yd-input", {
                  attrs: {
                    slot: "right",
                    type: "number",
                    placeholder: "请输入受检者的身高，厘米",
                    required: ""
                  },
                  slot: "right",
                  model: {
                    value: _vm.height,
                    callback: function($$v) {
                      _vm.height = $$v
                    },
                    expression: "height"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "yd-cell-item",
              [
                _c("span", { attrs: { slot: "left" }, slot: "left" }, [
                  _vm._v("体重(kg)"),
                  _c("span", { staticClass: "required" }, [_vm._v(" *")]),
                  _vm._v("：")
                ]),
                _vm._v(" "),
                _c("yd-input", {
                  attrs: {
                    slot: "right",
                    type: "number",
                    placeholder: "请输入受检者的体重，千克",
                    required: ""
                  },
                  slot: "right",
                  model: {
                    value: _vm.weight,
                    callback: function($$v) {
                      _vm.weight = $$v
                    },
                    expression: "weight"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "yd-cell-item",
              [
                _c("span", { attrs: { slot: "left" }, slot: "left" }, [
                  _vm._v("电子邮箱：")
                ]),
                _vm._v(" "),
                _c("yd-input", {
                  attrs: {
                    slot: "right",
                    debug: true,
                    regex: "email",
                    placeholder: "请输入您的电子邮箱"
                  },
                  slot: "right",
                  model: {
                    value: _vm.email,
                    callback: function($$v) {
                      _vm.email = $$v
                    },
                    expression: "email"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "yd-cell-item",
              [
                _c("span", { attrs: { slot: "left" }, slot: "left" }, [
                  _vm._v("国籍：")
                ]),
                _vm._v(" "),
                _c("yd-input", {
                  attrs: { slot: "right", placeholder: "请输入您的国籍" },
                  slot: "right",
                  model: {
                    value: _vm.country,
                    callback: function($$v) {
                      _vm.country = $$v
                    },
                    expression: "country"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("yd-cell-item", { attrs: { arrow: "" } }, [
              _c("span", { attrs: { slot: "left" }, slot: "left" }, [
                _vm._v("籍贯：")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.pob,
                    expression: "pob"
                  }
                ],
                attrs: { slot: "right", type: "text", readonly: "" },
                domProps: { value: _vm.pob },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    _vm.show2 = true
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.pob = $event.target.value
                  }
                },
                slot: "right"
              })
            ]),
            _vm._v(" "),
            _c("yd-cityselect", {
              attrs: { callback: _vm.result2, items: _vm.city },
              model: {
                value: _vm.show2,
                callback: function($$v) {
                  _vm.show2 = $$v
                },
                expression: "show2"
              }
            }),
            _vm._v(" "),
            _c(
              "yd-cell-item",
              [
                _c("span", { attrs: { slot: "left" }, slot: "left" }, [
                  _vm._v("家族病史：")
                ]),
                _vm._v(" "),
                _c("yd-input", {
                  attrs: { slot: "right", placeholder: "可提高结果的准确度" },
                  slot: "right",
                  model: {
                    value: _vm.disease,
                    callback: function($$v) {
                      _vm.disease = $$v
                    },
                    expression: "disease"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("yd-cell-item", { attrs: { arrow: "" } }, [
              _c("span", { attrs: { slot: "left" }, slot: "left" }, [
                _vm._v("所在地区：")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.location,
                    expression: "location"
                  }
                ],
                attrs: { slot: "right", type: "text", readonly: "" },
                domProps: { value: _vm.location },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    _vm.show1 = true
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.location = $event.target.value
                  }
                },
                slot: "right"
              })
            ]),
            _vm._v(" "),
            _vm.address_provance && _vm.address_city && _vm.address_area
              ? _c("yd-cityselect", {
                  attrs: {
                    callback: _vm.result1,
                    items: _vm.district,
                    provance: _vm.address_provance,
                    city: _vm.address_city,
                    area: _vm.address_area
                  },
                  model: {
                    value: _vm.show1,
                    callback: function($$v) {
                      _vm.show1 = $$v
                    },
                    expression: "show1"
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _c(
              "yd-cell-item",
              [
                _c("span", { attrs: { slot: "left" }, slot: "left" }, [
                  _vm._v("详细地址：")
                ]),
                _vm._v(" "),
                _c("yd-input", {
                  attrs: { slot: "right", placeholder: "请输入您可邮寄的地址" },
                  slot: "right",
                  model: {
                    value: _vm.address,
                    callback: function($$v) {
                      _vm.address = $$v
                    },
                    expression: "address"
                  }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "yd-button",
          {
            staticClass: "bind-btn",
            attrs: { size: "large", type: "primary" },
            nativeOn: {
              click: function($event) {
                _vm.bind($event)
              }
            }
          },
          [_vm._v("绑定")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header" }, [
      _c("div", { staticClass: "logo" }, [
        _c("img", { attrs: { src: "/static/img/favico.png" } })
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-3c5d472b", esExports)
  }
}

/***/ }),

/***/ 22:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(21);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(158);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("8040ca1a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/_vue-loader@13.3.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3c5d472b\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./bind.vue", function() {
     var newContent = require("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/_vue-loader@13.3.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3c5d472b\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./bind.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(15);
var Axios = __webpack_require__(27);
var defaults = __webpack_require__(7);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(12);
axios.CancelToken = __webpack_require__(26);
axios.isCancel = __webpack_require__(13);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(41);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

/*! vue-ydui v1.0.4 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){ true?module.exports=t(__webpack_require__(5)):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.ydui=t(require("vue")):e.ydui=t(e.Vue)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.DateTime=void 0;var a=n(76),i=r(a);t.DateTime=i.default},1:function(e,t){e.exports=function(e,t,n,r){var a,i=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(a=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var l=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:a,exports:i,options:s}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<t.length;a++){var o=t[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},3:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(i(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(i(n.parts[a]));c[n.id]={id:n.id,refs:1,parts:o}}}}function a(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(p)return _;r.parentNode.removeChild(r)}if(h){var i=m++;r=f||(f=a()),t=o.bind(null,r,i,!1),n=o.bind(null,r,i,!0)}else r=a(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function o(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document,u=n(4),c={},d=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,m=0,p=!1,_=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){p=n;var a=u(e,t);return r(a),function(t){for(var n=[],i=0;i<a.length;i++){var o=a[i],s=c[o.id];s.refs--,n.push(s)}t?(a=u(e,t),r(a)):a=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete c[s.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var i=t[a],o=i[0],s=i[1],l=i[2],u=i[3],c={id:e+":"+a,css:s,media:l,sourceMap:u};r[o]?r[o].parts.push(c):n.push(r[o]={id:o,parts:[c]})}return n}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(n){t||(t=!0,(n||document).addEventListener("touchmove",e))},unlock:function(n){t=!1,(n||document).removeEventListener("touchmove",e)}}}(),r=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),a=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,r=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||r.test(e)},i=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},o=function(e,t){var n=e===window?document.body.offsetHeight:e.offsetHeight,r=e===window?0:e.getBoundingClientRect().top,a=t.getBoundingClientRect().top-r,i=a+t.offsetHeight;return a>=0&&a<n||i>0&&i<=n},s=function(e,t){return t=t||"",!(0===t.replace(/\s/g,"").length||!e)&&new RegExp(" "+t+" ").test(" "+e.className+" ")},l=function(e,t){s(e,t)||(e.className=""===e.className?t:e.className+" "+t)},u=function(e,t){if(s(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},c=function(e){function t(n,r,a){if(n!==r){var i=n+a>r?r:n+a;n>r&&(i=n-a<r?r:n-a),e===window?window.scrollTo(i,i):e.scrollTop=i,window.requestAnimationFrame(function(){return t(i,r,a)})}}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var i=Math.abs(n-r),o=Math.ceil(i/a*50);t(n,r,o)};t.pageScroll=n,t.isIOS=r,t.isColor=a,t.getScrollview=i,t.checkInview=o,t.addClass=l,t.removeClass=u,t.scrollTop=c},8:function(t,n){t.exports=e},27:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={isDateTimeString:function(e){return/^\d{4}((\.|-|\/)(0[1-9]|1[0-2]))((\.|-|\/)(0[1-9]|[12][0-9]|3[0-1]))( ([01][0-9]|2[0-3]):([012345][0-9]))?$/.test(e)},isTimeString:function(e){return/^([01][0-9]|2[0-3]):([012345][0-9])$/.test(e)},mentStr:function(e){return(100+~~e+"").substr(1,2)},getYearItems:function(e){var t=[],n=~~e.startYear,r=~~e.endYear,a=new Date,i=a.getFullYear()-10,o=a.getFullYear()+10;for(0!==n&&(i=n),0!==r&&(o=r),o<i&&(o=i+10),e.startDate&&(i=new Date(e.startDate.replace(/-/g,"/")).getFullYear()),e.endDate&&(o=new Date(e.endDate.replace(/-/g,"/")).getFullYear()),e.startDate>e.endDate&&(o=i+10),i<n&&0!==n&&(i=n),o>r&&0!==r&&(o=r);i<=o;)t.push({value:i,name:e.format.replace("{value}",i)}),i++;return t},getMonthItems:function(e){var t=[],n=1,r=12;if(e.startDate){var a=new Date(e.startDate.replace(/-/g,"/"));a.getFullYear()===~~e.currentYear&&(n=a.getMonth()+1)}if(e.endDate){var i=new Date(e.endDate.replace(/-/g,"/"));i.getFullYear()===~~e.currentYear&&(r=i.getMonth()+1)}for(;n<=r;){var o=this.mentStr(n);t.push({value:o,name:e.format.replace("{value}",o)}),n++}return t},getDateItems:function(e){var t=[],n=new Date,r=n.getFullYear(),a=n.getMonth();e.currentYear&&(r=~~e.currentYear),e.currentMonth&&(a=~~e.currentMonth-1);var i=30;if([0,2,4,6,7,9,11].indexOf(a)>-1?i=31:1===a&&(i=r%100===0?r%400===0?29:28:r%4===0?29:28),e.endDate){var o=new Date(e.endDate.replace(/-/g,"/"));o.getMonth()+1===~~e.currentMonth&&o.getFullYear()===~~e.currentYear&&o.getDate()<i&&(i=o.getDate())}var s=1;if(e.startDate){var l=new Date(e.startDate.replace(/-/g,"/"));l.getMonth()+1===~~e.currentMonth&&l.getFullYear()===~~e.currentYear&&(s=l.getDate())}for(;s<=i;){var u=this.mentStr(s);t.push({value:u,name:e.format.replace("{value}",u)}),s++}return t},getHourItems:function(e){var t=[],n=~~e.startHour,r=~~e.endHour,a=n,i=r;if(i<a&&(i=23),e.startDate){var o=new Date(e.startDate.replace(/-/g,"/"));o.getFullYear()===~~e.currentYear&&o.getMonth()+1===~~e.currentMonth&&o.getDate()===~~e.currentDay&&a<=n&&(a=o.getHours(),a<n&&(a=n))}if(e.endDate){var s=new Date(e.endDate.replace(/-/g,"/"));s.getFullYear()===~~e.currentYear&&s.getMonth()+1===~~e.currentMonth&&s.getDate()===~~e.currentDay&&(i=s.getHours()),i>r&&(i=r)}for(;a<=i;){var l=this.mentStr(a);t.push({value:l,name:e.format.replace("{value}",l)}),a++}return t},getMinuteItems:function(e){var t=[],n=0,r=59;if(e.startDate){var a=new Date(e.startDate.replace(/-/g,"/"));a.getFullYear()===~~e.currentYear&&a.getMonth()+1===~~e.currentMonth&&a.getDate()===~~e.currentDay&&a.getHours()===~~e.currentHour&&(n=a.getMinutes())}if(e.endDate){var i=new Date(e.endDate.replace(/-/g,"/"));i.getFullYear()===~~e.currentYear&&i.getMonth()+1===~~e.currentMonth&&i.getDate()===~~e.currentDay&&i.getHours()===~~e.currentHour&&(r=i.getMinutes())}for(;n<=r;){var o=this.mentStr(n);t.push({value:o,name:e.format.replace("{value}",o)}),n++}return t}}},58:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,'.yd-datetime-mask{background-color:rgba(0,0,0,.4);right:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-datetime,.yd-datetime-mask{position:fixed;z-index:1502;bottom:0;left:0}.yd-datetime{width:100%;background-color:#fff;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .25s;transition:-webkit-transform .25s;transition:transform .25s;transition:transform .25s,-webkit-transform .25s;-ms-touch-action:none;touch-action:none}.yd-datetime-active{-webkit-transform:translate(0);transform:translate(0)}.yd-datetime-input{width:100%}.yd-datetime-head{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;position:relative;background-color:#fbfbfb}.yd-datetime-head:after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-datetime-head>a{height:43px;padding:0 30px;font-size:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#555}.yd-datetime-head>a:last-child{color:#0bb20c}.yd-datetime-content{position:relative;width:100%;height:266px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-datetime-item{font-size:16px;height:100%;position:relative;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.yd-datetime-item-content>span{width:100%;display:block;height:38px;line-height:38px;text-align:center}.yd-datetime-item-box{height:100%}.yd-datetime-indicator,.yd-datetime-shade{pointer-events:none;position:absolute;left:0;top:0;height:100%;width:100%}.yd-datetime-shade{z-index:3;-webkit-transform:translateZ(0);transform:translateZ(0);background-image:-webkit-linear-gradient(top,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6)),-webkit-linear-gradient(bottom,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6));background-image:linear-gradient(180deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6)),linear-gradient(0deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6));background-position:top,bottom;background-size:100% 114px;background-repeat:no-repeat}.yd-datetime-indicator{z-index:4;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.yd-datetime-indicator>span{display:block;width:100%;height:38px;position:relative}.yd-datetime-indicator>span:after{top:0;border-top:1px solid #d9d9d9}.yd-datetime-indicator>span:after,.yd-datetime-indicator>span:before{content:"";position:absolute;z-index:0;left:0;width:100%;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-datetime-indicator>span:before{bottom:0;border-bottom:1px solid #d9d9d9}',""])},76:function(e,t,n){n(217);var r=n(1)(n(238),n(182),null,null);e.exports=r.exports},77:function(e,t,n){var r=n(1)(n(239),n(159),null,null);e.exports=r.exports},159:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"yd-datetime-mask",on:{click:function(t){t.stopPropagation(),e.close(t)}}}),e._v(" "),n("div",{staticClass:"yd-datetime",class:e.show?"yd-datetime-active":""},[n("div",{staticClass:"yd-datetime-head"},[n("a",{attrs:{href:"javascript:;"},on:{click:function(t){t.stopPropagation(),e.close(t)}}},[e._v(e._s(e.cancelText))]),e._v(" "),n("a",{attrs:{href:"javascript:;"},on:{click:function(t){t.stopPropagation(),e.setValue(t)}}},[e._v(e._s(e.confirmText))])]),e._v(" "),n("div",{staticClass:"yd-datetime-content"},[e._l(e.columns,function(t,r){return n("div",{key:r,staticClass:"yd-datetime-item"},[n("div",{ref:"Component_"+t,refInFor:!0,staticClass:"yd-datetime-item-box"},[n("div",{ref:"Content_"+t,refInFor:!0,staticClass:"yd-datetime-item-content"},e._l(e.items[t],function(t,r){return n("span",{key:r,attrs:{"data-value":t.value},domProps:{innerHTML:e._s(t.name)}})}))])])}),e._v(" "),n("div",{staticClass:"yd-datetime-shade"}),e._v(" "),e._m(0)],2)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"yd-datetime-indicator"},[n("span")])}]}},182:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"yd-datetime-input",on:{click:function(t){t.stopPropagation(),e.open(t)}}},[e._v(e._s(e.value))])},staticRenderFns:[]}},217:function(e,t,n){var r=n(58);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);n(3)("108dfbcc",r,!0)},238:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(8),i=r(a),o=n(27),s=r(o),l=n(77),u=r(l),c=n(5);t.default={name:"yd-datetime",data:function(){return{picker:null,currentValue:this.value,tmpNum:0}},props:{readonly:{type:Boolean,default:!1},type:{type:String,validator:function(e){return["datetime","date","time"].indexOf(e)>-1},default:"datetime"},startDate:{type:String,validator:function(e){return!e||s.default.isDateTimeString(e)}},endDate:{type:String,validator:function(e){return!e||s.default.isDateTimeString(e)}},startYear:{validator:function(e){return/^\d{4}|0$/.test(e)},default:0},endYear:{validator:function(e){return/^\d{4}|0$/.test(e)},default:0},startHour:{validator:function(e){return/^(0|[1-9]|1[0-9]|2[0-3])?$/.test(e)},default:0},endHour:{validator:function(e){return/^([1-9]|1[0-9]|2[0-3])?$/.test(e)},default:23},yearFormat:{type:String,default:"{value}年"},monthFormat:{type:String,default:"{value}月"},dayFormat:{type:String,default:"{value}日"},hourFormat:{type:String,default:"{value}时"},minuteFormat:{type:String,default:"{value}分"},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确定"},value:{type:String,validator:function(e){return!e||(s.default.isDateTimeString(e)||s.default.isTimeString(e))}},initEmit:{type:Boolean,default:!0}},watch:{value:function(e){this.currentValue!=e&&this.render()},startDate:function(){this.render()},endDate:function(){this.render()}},methods:{open:function(){this.readonly||this.picker.open()},close:function(){this.picker.close()},removeElement:function(){this.picker&&this.picker.$el&&document.body.removeChild(this.picker.$el)},render:function(){var e=this;this.removeElement();var t=i.default.extend(u.default),n=this._props;n.parentEL=this.$el,this.picker=new t({el:document.createElement("div"),data:n}),document.body.appendChild(this.picker.$el),this.picker.$on("pickerConfirm",function(t){(e.tmpNum>0||e.initEmit)&&(e.currentValue=t,e.$emit("input",t)),e.tmpNum++})}},mounted:function(){this.render()},beforeDestroy:function(){c.pageScroll.unlock(),this.removeElement()}}},239:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(287),i=r(a),o=n(27),s=r(o),l=n(5);t.default={data:function(){return{value:"",show:!1,parentEL:null,columns:[],scroller:[],type:"",cancelText:"",confirmText:"",items:{Year:[],Month:[],Day:[],Hour:[],Minute:[]},scrolling:{Year:!1,Month:!1,Day:!1,Hour:!1,Minute:!1},readonly:!1,currentYear:"",currentMonth:"",currentDay:"",currentHour:"",currentMinute:"",currentValue:"",yearFormat:"{value}年",monthFormat:"{value}月",dayFormat:"{value}日",hourFormat:"{value}时",minuteFormat:"{value}分",startYear:0,endYear:0,startHour:0,endHour:23}},watch:{currentYear:function(e){this.setMonths(e)},currentMonth:function(e){this.setDays(e)},currentDay:function(e){this.setHours(e)},currentHour:function(e){this.setMinutes(e)}},methods:{init:function(){var e=this,t=e.currentValue=e.value.replace(/-/g,"/");e.startDate&&new Date(t).getTime()<new Date(e.startDate).getTime()&&(t=e.currentValue=e.startDate),e.endDate&&new Date(t).getTime()>new Date(e.endDate).getTime()&&(t=e.currentValue=e.endDate);var n=e.items.Year=s.default.getYearItems({format:e.yearFormat,startDate:e.startDate,endDate:e.endDate,startYear:e.startYear,endYear:e.endYear}),r=s.default.getMonthItems({format:e.monthFormat,currentYear:n[0].value,startDate:e.startDate,endDate:e.endDate}),a=s.default.getDateItems({format:e.dayFormat,currentYear:n[0].value,currentMonth:r[0].value,startDate:e.startDate,endDate:e.endDate});if("time"!==e.type)if(t){var i=new Date(t);e.currentYear=i.getFullYear(),e.inDatas(n,e.currentYear)||(e.currentYear=n[0].value),e.currentMonth=s.default.mentStr(i.getMonth()+1),e.inDatas(r,e.currentMonth)||(e.currentMonth=r[0].value),e.currentDay=s.default.mentStr(i.getDate()),e.inDatas(a,e.currentDay)||(e.currentDay=a[0].value)}else e.currentYear=n[0].value,e.currentMonth=r[0].value,e.currentDay=a[0].value;if("datetime"===e.type||"time"===e.type){var o=s.default.getHourItems({format:e.hourFormat,currentYear:n[0].value,currentMonth:r[0].value,currentDay:a[0].value,startDate:e.startDate,endDate:e.endDate,startHour:e.startHour,endHour:e.endHour}),l=s.default.getMinuteItems({format:e.minuteFormat,currentYear:n[0].value,currentMonth:r[0].value,currentDay:a[0].value,currentHour:o[0].value,startDate:e.startDate,endDate:e.endDate});if("time"===e.type&&(e.items.Hour=o),t){if(s.default.isDateTimeString(t)){var u=new Date(t);e.currentHour=s.default.mentStr(u.getHours()),e.currentMinute=s.default.mentStr(u.getMinutes())}else{var c=t.split(":");e.currentHour=s.default.mentStr(c[0]),e.currentMinute=s.default.mentStr(c[1])}e.inDatas(o,e.currentHour)||(e.currentHour=o[0].value),e.inDatas(l,e.currentMinute)||(e.currentMinute=l[0].value)}else e.currentHour=o[0].value,e.currentMinute=l[0].value}"datetime"===e.type?e.columns=["Year","Month","Day","Hour","Minute"]:"date"===e.type?e.columns=["Year","Month","Day"]:e.columns=["Hour","Minute"]},render:function(){var e=this;e.columns.forEach(function(t){var n=e.$refs["Component_"+t][0],r=e.$refs["Content_"+t][0];e.scroller[t]=new i.default(n,r,{itemHeight:38,onSelect:function(n){e["current"+t]=n,e.scrolling[t]=!1},callback:function(n,a){a&&(e.scrolling[t]=!0),r.style.webkitTransform="translate3d(0, "+-n+"px, 0)"}}),e.scroller[t].setDimensions(n.clientHeight,r.offsetHeight,e.items[t].length),e.scroller[t].select(e["current"+t],!1),e.scrolling[t]=!1}),e.setValue()},setMonths:function(e){var t=this,n=t.items.Month=s.default.getMonthItems({format:t.monthFormat,currentYear:e,startDate:t.startDate,endDate:t.endDate});t.scrolloToPosition("Month",n,function(){t.setDays(t.currentMonth)})},setDays:function(e){var t=this,n=t.items.Day=s.default.getDateItems({format:t.dayFormat,currentYear:t.currentYear,currentMonth:e,startDate:t.startDate,endDate:t.endDate});t.scrolloToPosition("Day",n,function(){t.setHours(t.currentDay)})},setHours:function(e){var t=this,n=t.items.Hour=s.default.getHourItems({format:t.hourFormat,currentYear:t.currentYear,currentMonth:t.currentMonth,currentDay:e,startDate:t.startDate,endDate:t.endDate,startHour:t.startHour,endHour:t.endHour});t.scrolloToPosition("Hour",n,function(){t.setMinutes(t.currentHour)})},setMinutes:function(e){var t=this,n=t.items.Minute=s.default.getMinuteItems({format:t.minuteFormat,currentYear:t.currentYear,currentMonth:t.currentMonth,currentDay:t.currentDay,currentHour:e,startDate:t.startDate,endDate:t.endDate});t.scrolloToPosition("Minute",n)},scrolloToPosition:function(e,t,n){var r=this,a=r.scroller[e];a&&(a.setDimensions(r.$refs["Component_"+e][0].clientHeight,r.$refs["Content_"+e][0].offsetHeight,t.length),setTimeout(function(){var i=r.inDatas(t,r["current"+e]);r.scrolling[e]||a.select(i?r["current"+e]:t[0].value,!1),"function"==typeof n&&n()},0))},setValue:function(){var e="";e="datetime"===this.type?this.currentYear+"-"+this.currentMonth+"-"+this.currentDay+" "+this.currentHour+":"+this.currentMinute:"date"===this.type?this.currentYear+"-"+this.currentMonth+"-"+this.currentDay:this.currentHour+":"+this.currentMinute,this.currentValue=e,this.$emit("pickerConfirm",e),this.close()},inDatas:function(e,t){var n=!1;return e.forEach(function(e){e.value==t&&(n=!0)}),n},open:function(){this.readonly||(this.show=!0,l.isIOS&&(l.pageScroll.lock(),(0,l.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")))},close:function(){this.show=!1,l.isIOS&&(l.pageScroll.unlock(),(0,l.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"))}},created:function(){this.init()},mounted:function(){this.scrollView=(0,l.getScrollview)(this.parentEL),this.$nextTick(this.render)},beforeDestroy:function(){var e=this;this.columns.forEach(function(t){e.scroller[t]=null})}}},286:function(e,t){"use strict";var n=Date.now||function(){return+new Date},r={},a=1,i=60,o=1e3;e.exports={requestAnimationFrame:function(){var e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame,t=!!e;if(e&&!/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(e.toString())&&(t=!1),t)return function(t,n){e(t,n)};var n=60,r={},a=0,i=1,o=null,s=+new Date;return function(e,t){var l=i++;return r[l]=e,a++,null===o&&(o=setInterval(function(){var e=+new Date,t=r;r={},a=0;for(var n in t)t.hasOwnProperty(n)&&(t[n](e),s=e);e-s>2500&&(clearInterval(o),o=null)},1e3/n)),l}}(),stop:function(e){var t=null!=r[e];return t&&(r[e]=null),t},isRunning:function(e){return null!=r[e]},start:function e(t,s,l,u,c,d){var f=this,e=n(),m=e,p=0,_=0,h=a++;if(d||(d=document.body),h%20===0){var v={};for(var g in r)v[g]=!0;r=v}var D=function a(v){var g=v!==!0,D=n();if(!r[h]||s&&!s(h))return r[h]=null,void(l&&l(i-_/((D-e)/o),h,!1));if(g)for(var y=Math.round((D-m)/(o/i))-1,w=0;w<Math.min(y,4);w++)a(!0),_++;u&&(p=(D-e)/u,p>1&&(p=1));var b=c?c(p):p;t(b,D,g)!==!1&&1!==p||!g?g&&(m=D,f.requestAnimationFrame(a,d)):(r[h]=null,l&&l(i-_/((D-e)/o),h,1===p||null==u))};return r[h]=!0,f.requestAnimationFrame(D,d),h}}},287:function(e,t,n){"use strict";var r=n(286),a=function(e,t,n){var r=this;if(e){n=n||{},r.options={onSelect:function(){},itemHeight:38};for(var a in n)void 0!==n[a]&&(r.options[a]=n[a]);r.__content=t,r.__component=e,r.__itemHeight=r.options.itemHeight;var i=window.Modernizr&&!!window.Modernizr.touch||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),o={start:i?"touchstart":"mousedown",move:i?"touchmove":"mousemove",end:i?"touchend":"mouseup"};e.addEventListener(o.start,function(e){e.target.tagName.match(/input|textarea|select/i)||(e.preventDefault(),r.__doTouchStart(e,e.timeStamp))},!1),e.addEventListener(o.move,function(e){r.__doTouchMove(e,e.timeStamp)},!1),e.addEventListener(o.end,function(e){r.__doTouchEnd(e.timeStamp)},!1)}},i={value:null,__prevValue:null,__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientTop:0,__clientHeight:0,__contentHeight:0,__itemHeight:0,__scrollTop:0,__minScrollTop:0,__maxScrollTop:0,__scheduledTop:0,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollTop:null,__maxDecelerationScrollTop:null,__decelerationVelocityY:null,setDimensions:function(e,t,n){var r=this;r.__clientHeight=e,r.__contentHeight=t;var a=Math.round(r.__clientHeight/r.__itemHeight);r.__minScrollTop=-r.__itemHeight*(a/2),r.__maxScrollTop=r.__minScrollTop+n*r.__itemHeight-.1},selectByIndex:function(e,t){var n=this;e<0||e>n.__content.childElementCount-1||(n.__scrollTop=n.__minScrollTop+e*n.__itemHeight,n.scrollTo(n.__scrollTop,t),n.__selectItem(n.__content.children[e]))},select:function(e,t){for(var n=this,r=n.__content.children,a=0,i=r.length;a<i;a++)if(r[a].dataset.value==e)return void n.selectByIndex(a,t);n.selectByIndex(0,t)},scrollTo:function(e,t){var n=this;return t=void 0===t||t,n.__isDecelerating&&(r.stop(n.__isDecelerating),n.__isDecelerating=!1),e=Math.round(e/n.__itemHeight)*n.__itemHeight,e=Math.max(Math.min(n.__maxScrollTop,e),n.__minScrollTop),e!==n.__scrollTop&&t?void n.__publish(e,250):(n.__publish(e),void n.__scrollingComplete())},__selectItem:function(e){var t=this;null!==t.value&&(t.__prevValue=t.value),t.value=e.dataset.value},__scrollingComplete:function(){var e=this,t=Math.round((e.__scrollTop-e.__minScrollTop-e.__itemHeight/2)/e.__itemHeight);e.__selectItem(e.__content.children[t]),null!==e.__prevValue&&e.__prevValue!==e.value&&e.options.onSelect(e.value)},__doTouchStart:function(e,t){var n=e.touches,a=this,i=e.touches?e.touches[0]:e,o=!!e.touches;if(e.touches&&null==n.length)throw new Error("Invalid touch list: "+n);if(t instanceof Date&&(t=t.valueOf()),"number"!=typeof t)throw new Error("Invalid timestamp value: "+t);a.__interruptedAnimation=!0,a.__isDecelerating&&(r.stop(a.__isDecelerating),a.__isDecelerating=!1,a.__interruptedAnimation=!0),a.__isAnimating&&(r.stop(a.__isAnimating),a.__isAnimating=!1,a.__interruptedAnimation=!0);var s,l=o&&1===n.length||!o;s=l?i.pageY:Math.abs(i.pageY+n[1].pageY)/2,a.__initialTouchTop=s,a.__lastTouchTop=s,a.__lastTouchMove=t,a.__lastScale=1,a.__enableScrollY=!l,a.__isTracking=!0,a.__didDecelerationComplete=!1,a.__isDragging=!l,a.__isSingleTouch=l,a.__positions=[]},__doTouchMove:function(e,t,n){var r=this,a=e.touches,i=e.touches?e.touches[0]:e,o=!!e.touches;if(a&&null==a.length)throw new Error("Invalid touch list: "+a);if(t instanceof Date&&(t=t.valueOf()),"number"!=typeof t)throw new Error("Invalid timestamp value: "+t);if(r.__isTracking){var s;s=o&&2===a.length?Math.abs(i.pageY+a[1].pageY)/2:i.pageY;var l=r.__positions;if(r.__isDragging){var u=s-r.__lastTouchTop,c=r.__scrollTop;if(r.__enableScrollY){c-=u;var d=r.__minScrollTop,f=r.__maxScrollTop;(c>f||c<d)&&(c=c>f?f:d)}l.length>40&&l.splice(0,20),l.push(c,t),r.__publish(c)}else{var m=0,p=5,_=Math.abs(s-r.__initialTouchTop);r.__enableScrollY=_>=m,l.push(r.__scrollTop,t),r.__isDragging=r.__enableScrollY&&_>=p,r.__isDragging&&(r.__interruptedAnimation=!1)}r.__lastTouchTop=s,r.__lastTouchMove=t,r.__lastScale=n}},__doTouchEnd:function(e){var t=this;if(e instanceof Date&&(e=e.valueOf()),"number"!=typeof e)throw new Error("Invalid timestamp value: "+e);if(t.__isTracking){if(t.__isTracking=!1,t.__isDragging&&(t.__isDragging=!1,t.__isSingleTouch&&e-t.__lastTouchMove<=100)){for(var n=t.__positions,r=n.length-1,a=r,i=r;i>0&&n[i]>t.__lastTouchMove-100;i-=2)a=i;if(a!==r){var o=n[r]-n[a],s=t.__scrollTop-n[a-1];t.__decelerationVelocityY=s/o*(1e3/60);var l=4;Math.abs(t.__decelerationVelocityY)>l&&t.__startDeceleration(e)}}t.__isDecelerating||t.scrollTo(t.__scrollTop),t.__positions.length=0}},__easeOutCubic:function(e){return Math.pow(e-1,3)+1},__easeInOutCubic:function(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)},__publish:function(e,t){var n=this,a=n.__isAnimating;if(a&&(r.stop(a),n.__isAnimating=!1),t){n.__scheduledTop=e;var i=n.__scrollTop,o=e-i,s=function(e,t,r){n.__scrollTop=i+o*e,n.options.callback&&n.options.callback(n.__scrollTop,n.__isDragging)},l=function(e){return n.__isAnimating===e},u=function(e,t,r){t===n.__isAnimating&&(n.__isAnimating=!1),(n.__didDecelerationComplete||r)&&n.__scrollingComplete()};n.__isAnimating=r.start(s,l,u,t,a?n.__easeOutCubic:n.__easeInOutCubic)}else n.__scheduledTop=n.__scrollTop=e,n.options.callback&&n.options.callback(e,n.__isDragging)},__startDeceleration:function(e){var t=this;t.__minDecelerationScrollTop=t.__minScrollTop,t.__maxDecelerationScrollTop=t.__maxScrollTop;var n=function(e,n,r){t.__stepThroughDeceleration(r)},a=.5,i=function(){var e=Math.abs(t.__decelerationVelocityY)>=a;return e||(t.__didDecelerationComplete=!0),e},o=function(e,n,r){return t.__isDecelerating=!1,t.__scrollTop<=t.__minScrollTop||t.__scrollTop>=t.__maxScrollTop?void t.scrollTo(t.__scrollTop):void(t.__didDecelerationComplete&&t.__scrollingComplete())};t.__isDecelerating=r.start(n,i,o)},__stepThroughDeceleration:function(e){var t=this,n=t.__scrollTop+t.__decelerationVelocityY,r=Math.max(Math.min(t.__maxDecelerationScrollTop,n),t.__minDecelerationScrollTop);r!==n&&(n=r,t.__decelerationVelocityY=0),Math.abs(t.__decelerationVelocityY)<=1?Math.abs(n%t.__itemHeight)<1&&(t.__decelerationVelocityY=0):t.__decelerationVelocityY*=.95,t.__publish(n)}};for(var o in i)a.prototype[o]=i[o];e.exports=a}})});

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(){var district=[{"v":"110000","n":"北京市","c":[{"v":"110100","n":"市辖区","c":[]}]},{"v":"120000","n":"天津市","c":[{"v":"120100","n":"市辖区","c":[]}]},{"v":"130000","n":"河北省","c":[{"v":"130100","n":"石家庄市","c":[]},{"v":"130200","n":"唐山市","c":[]},{"v":"130300","n":"秦皇岛市","c":[]},{"v":"130400","n":"邯郸市","c":[]},{"v":"130500","n":"邢台市","c":[]},{"v":"130600","n":"保定市","c":[]},{"v":"130700","n":"张家口市","c":[]},{"v":"130800","n":"承德市","c":[]},{"v":"130900","n":"沧州市","c":[]},{"v":"131000","n":"廊坊市","c":[]},{"v":"131100","n":"衡水市","c":[]},{"v":"139000","n":"省直辖县级行政区划","c":[]}]},{"v":"140000","n":"山西省","c":[{"v":"140100","n":"太原市","c":[]},{"v":"140200","n":"大同市","c":[]},{"v":"140300","n":"阳泉市","c":[]},{"v":"140400","n":"长治市","c":[]},{"v":"140500","n":"晋城市","c":[]},{"v":"140600","n":"朔州市","c":[]},{"v":"140700","n":"晋中市","c":[]},{"v":"140800","n":"运城市","c":[]},{"v":"140900","n":"忻州市","c":[]},{"v":"141000","n":"临汾市","c":[]},{"v":"141100","n":"吕梁市","c":[]}]},{"v":"150000","n":"内蒙古自治区","c":[{"v":"150100","n":"呼和浩特市","c":[]},{"v":"150200","n":"包头市","c":[]},{"v":"150300","n":"乌海市","c":[]},{"v":"150400","n":"赤峰市","c":[]},{"v":"150500","n":"通辽市","c":[]},{"v":"150600","n":"鄂尔多斯市","c":[]},{"v":"150700","n":"呼伦贝尔市","c":[]},{"v":"150800","n":"巴彦淖尔市","c":[]},{"v":"150900","n":"乌兰察布市","c":[]},{"v":"152200","n":"兴安盟","c":[]},{"v":"152500","n":"锡林郭勒盟","c":[]},{"v":"152900","n":"阿拉善盟","c":[]}]},{"v":"210000","n":"辽宁省","c":[{"v":"210100","n":"沈阳市","c":[]},{"v":"210200","n":"大连市","c":[]},{"v":"210300","n":"鞍山市","c":[]},{"v":"210400","n":"抚顺市","c":[]},{"v":"210500","n":"本溪市","c":[]},{"v":"210600","n":"丹东市","c":[]},{"v":"210700","n":"锦州市","c":[]},{"v":"210800","n":"营口市","c":[]},{"v":"210900","n":"阜新市","c":[]},{"v":"211000","n":"辽阳市","c":[]},{"v":"211100","n":"盘锦市","c":[]},{"v":"211200","n":"铁岭市","c":[]},{"v":"211300","n":"朝阳市","c":[]},{"v":"211400","n":"葫芦岛市","c":[]}]},{"v":"220000","n":"吉林省","c":[{"v":"220100","n":"长春市","c":[]},{"v":"220200","n":"吉林市","c":[]},{"v":"220300","n":"四平市","c":[]},{"v":"220400","n":"辽源市","c":[]},{"v":"220500","n":"通化市","c":[]},{"v":"220600","n":"白山市","c":[]},{"v":"220700","n":"松原市","c":[]},{"v":"220800","n":"白城市","c":[]},{"v":"222400","n":"延边朝鲜族自治州","c":[]}]},{"v":"230000","n":"黑龙江省","c":[{"v":"230100","n":"哈尔滨市","c":[]},{"v":"230200","n":"齐齐哈尔市","c":[]},{"v":"230300","n":"鸡西市","c":[]},{"v":"230400","n":"鹤岗市","c":[]},{"v":"230500","n":"双鸭山市","c":[]},{"v":"230600","n":"大庆市","c":[]},{"v":"230700","n":"伊春市","c":[]},{"v":"230800","n":"佳木斯市","c":[]},{"v":"230900","n":"七台河市","c":[]},{"v":"231000","n":"牡丹江市","c":[]},{"v":"231100","n":"黑河市","c":[]},{"v":"231200","n":"绥化市","c":[]},{"v":"232700","n":"大兴安岭地区","c":[]}]},{"v":"310000","n":"上海市","c":[{"v":"310100","n":"市辖区","c":[]}]},{"v":"320000","n":"江苏省","c":[{"v":"320100","n":"南京市","c":[]},{"v":"320200","n":"无锡市","c":[]},{"v":"320300","n":"徐州市","c":[]},{"v":"320400","n":"常州市","c":[]},{"v":"320500","n":"苏州市","c":[]},{"v":"320600","n":"南通市","c":[]},{"v":"320700","n":"连云港市","c":[]},{"v":"320800","n":"淮安市","c":[]},{"v":"320900","n":"盐城市","c":[]},{"v":"321000","n":"扬州市","c":[]},{"v":"321100","n":"镇江市","c":[]},{"v":"321200","n":"泰州市","c":[]},{"v":"321300","n":"宿迁市","c":[]}]},{"v":"330000","n":"浙江省","c":[{"v":"330100","n":"杭州市","c":[]},{"v":"330200","n":"宁波市","c":[]},{"v":"330300","n":"温州市","c":[]},{"v":"330400","n":"嘉兴市","c":[]},{"v":"330500","n":"湖州市","c":[]},{"v":"330600","n":"绍兴市","c":[]},{"v":"330700","n":"金华市","c":[]},{"v":"330800","n":"衢州市","c":[]},{"v":"330900","n":"舟山市","c":[]},{"v":"331000","n":"台州市","c":[]},{"v":"331100","n":"丽水市","c":[]}]},{"v":"340000","n":"安徽省","c":[{"v":"340100","n":"合肥市","c":[]},{"v":"340200","n":"芜湖市","c":[]},{"v":"340300","n":"蚌埠市","c":[]},{"v":"340400","n":"淮南市","c":[]},{"v":"340500","n":"马鞍山市","c":[]},{"v":"340600","n":"淮北市","c":[]},{"v":"340700","n":"铜陵市","c":[]},{"v":"340800","n":"安庆市","c":[]},{"v":"341000","n":"黄山市","c":[]},{"v":"341100","n":"滁州市","c":[]},{"v":"341200","n":"阜阳市","c":[]},{"v":"341300","n":"宿州市","c":[]},{"v":"341500","n":"六安市","c":[]},{"v":"341600","n":"亳州市","c":[]},{"v":"341700","n":"池州市","c":[]},{"v":"341800","n":"宣城市","c":[]}]},{"v":"350000","n":"福建省","c":[{"v":"350100","n":"福州市","c":[]},{"v":"350200","n":"厦门市","c":[]},{"v":"350300","n":"莆田市","c":[]},{"v":"350400","n":"三明市","c":[]},{"v":"350500","n":"泉州市","c":[]},{"v":"350600","n":"漳州市","c":[]},{"v":"350700","n":"南平市","c":[]},{"v":"350800","n":"龙岩市","c":[]},{"v":"350900","n":"宁德市","c":[]}]},{"v":"360000","n":"江西省","c":[{"v":"360100","n":"南昌市","c":[]},{"v":"360200","n":"景德镇市","c":[]},{"v":"360300","n":"萍乡市","c":[]},{"v":"360400","n":"九江市","c":[]},{"v":"360500","n":"新余市","c":[]},{"v":"360600","n":"鹰潭市","c":[]},{"v":"360700","n":"赣州市","c":[]},{"v":"360800","n":"吉安市","c":[]},{"v":"360900","n":"宜春市","c":[]},{"v":"361000","n":"抚州市","c":[]},{"v":"361100","n":"上饶市","c":[]}]},{"v":"370000","n":"山东省","c":[{"v":"370100","n":"济南市","c":[]},{"v":"370200","n":"青岛市","c":[]},{"v":"370300","n":"淄博市","c":[]},{"v":"370400","n":"枣庄市","c":[]},{"v":"370500","n":"东营市","c":[]},{"v":"370600","n":"烟台市","c":[]},{"v":"370700","n":"潍坊市","c":[]},{"v":"370800","n":"济宁市","c":[]},{"v":"370900","n":"泰安市","c":[]},{"v":"371000","n":"威海市","c":[]},{"v":"371100","n":"日照市","c":[]},{"v":"371200","n":"莱芜市","c":[]},{"v":"371300","n":"临沂市","c":[]},{"v":"371400","n":"德州市","c":[]},{"v":"371500","n":"聊城市","c":[]},{"v":"371600","n":"滨州市","c":[]},{"v":"371700","n":"菏泽市","c":[]}]},{"v":"410000","n":"河南省","c":[{"v":"410100","n":"郑州市","c":[]},{"v":"410200","n":"开封市","c":[]},{"v":"410300","n":"洛阳市","c":[]},{"v":"410400","n":"平顶山市","c":[]},{"v":"410500","n":"安阳市","c":[]},{"v":"410600","n":"鹤壁市","c":[]},{"v":"410700","n":"新乡市","c":[]},{"v":"410800","n":"焦作市","c":[]},{"v":"410900","n":"濮阳市","c":[]},{"v":"411000","n":"许昌市","c":[]},{"v":"411100","n":"漯河市","c":[]},{"v":"411200","n":"三门峡市","c":[]},{"v":"411300","n":"南阳市","c":[]},{"v":"411400","n":"商丘市","c":[]},{"v":"411500","n":"信阳市","c":[]},{"v":"411600","n":"周口市","c":[]},{"v":"411700","n":"驻马店市","c":[]},{"v":"419000","n":"省直辖县级行政区划","c":[]}]},{"v":"420000","n":"湖北省","c":[{"v":"420100","n":"武汉市","c":[]},{"v":"420200","n":"黄石市","c":[]},{"v":"420300","n":"十堰市","c":[]},{"v":"420500","n":"宜昌市","c":[]},{"v":"420600","n":"襄阳市","c":[]},{"v":"420700","n":"鄂州市","c":[]},{"v":"420800","n":"荆门市","c":[]},{"v":"420900","n":"孝感市","c":[]},{"v":"421000","n":"荆州市","c":[]},{"v":"421100","n":"黄冈市","c":[]},{"v":"421200","n":"咸宁市","c":[]},{"v":"421300","n":"随州市","c":[]},{"v":"422800","n":"恩施土家族苗族自治州","c":[]},{"v":"429000","n":"省直辖县级行政区划","c":[]}]},{"v":"430000","n":"湖南省","c":[{"v":"430100","n":"长沙市","c":[]},{"v":"430200","n":"株洲市","c":[]},{"v":"430300","n":"湘潭市","c":[]},{"v":"430400","n":"衡阳市","c":[]},{"v":"430500","n":"邵阳市","c":[]},{"v":"430600","n":"岳阳市","c":[]},{"v":"430700","n":"常德市","c":[]},{"v":"430800","n":"张家界市","c":[]},{"v":"430900","n":"益阳市","c":[]},{"v":"431000","n":"郴州市","c":[]},{"v":"431100","n":"永州市","c":[]},{"v":"431200","n":"怀化市","c":[]},{"v":"431300","n":"娄底市","c":[]},{"v":"433100","n":"湘西土家族苗族自治州","c":[]}]},{"v":"440000","n":"广东省","c":[{"v":"440100","n":"广州市","c":[]},{"v":"440200","n":"韶关市","c":[]},{"v":"440300","n":"深圳市","c":[]},{"v":"440400","n":"珠海市","c":[]},{"v":"440500","n":"汕头市","c":[]},{"v":"440600","n":"佛山市","c":[]},{"v":"440700","n":"江门市","c":[]},{"v":"440800","n":"湛江市","c":[]},{"v":"440900","n":"茂名市","c":[]},{"v":"441200","n":"肇庆市","c":[]},{"v":"441300","n":"惠州市","c":[]},{"v":"441400","n":"梅州市","c":[]},{"v":"441500","n":"汕尾市","c":[]},{"v":"441600","n":"河源市","c":[]},{"v":"441700","n":"阳江市","c":[]},{"v":"441800","n":"清远市","c":[]},{"v":"441900","n":"东莞市","c":[]},{"v":"442000","n":"中山市","c":[]},{"v":"445100","n":"潮州市","c":[]},{"v":"445200","n":"揭阳市","c":[]},{"v":"445300","n":"云浮市","c":[]}]},{"v":"450000","n":"广西壮族自治区","c":[{"v":"450100","n":"南宁市","c":[]},{"v":"450200","n":"柳州市","c":[]},{"v":"450300","n":"桂林市","c":[]},{"v":"450400","n":"梧州市","c":[]},{"v":"450500","n":"北海市","c":[]},{"v":"450600","n":"防城港市","c":[]},{"v":"450700","n":"钦州市","c":[]},{"v":"450800","n":"贵港市","c":[]},{"v":"450900","n":"玉林市","c":[]},{"v":"451000","n":"百色市","c":[]},{"v":"451100","n":"贺州市","c":[]},{"v":"451200","n":"河池市","c":[]},{"v":"451300","n":"来宾市","c":[]},{"v":"451400","n":"崇左市","c":[]}]},{"v":"460000","n":"海南省","c":[{"v":"460100","n":"海口市","c":[]},{"v":"460200","n":"三亚市","c":[]},{"v":"460300","n":"三沙市","c":[]},{"v":"460400","n":"儋州市","c":[]},{"v":"469000","n":"省直辖县级行政区划","c":[]}]},{"v":"500000","n":"重庆市","c":[{"v":"500100","n":"市辖区","c":[]},{"v":"500200","n":"县","c":[]}]},{"v":"510000","n":"四川省","c":[{"v":"510100","n":"成都市","c":[]},{"v":"510300","n":"自贡市","c":[]},{"v":"510400","n":"攀枝花市","c":[]},{"v":"510500","n":"泸州市","c":[]},{"v":"510600","n":"德阳市","c":[]},{"v":"510700","n":"绵阳市","c":[]},{"v":"510800","n":"广元市","c":[]},{"v":"510900","n":"遂宁市","c":[]},{"v":"511000","n":"内江市","c":[]},{"v":"511100","n":"乐山市","c":[]},{"v":"511300","n":"南充市","c":[]},{"v":"511400","n":"眉山市","c":[]},{"v":"511500","n":"宜宾市","c":[]},{"v":"511600","n":"广安市","c":[]},{"v":"511700","n":"达州市","c":[]},{"v":"511800","n":"雅安市","c":[]},{"v":"511900","n":"巴中市","c":[]},{"v":"512000","n":"资阳市","c":[]},{"v":"513200","n":"阿坝藏族羌族自治州","c":[]},{"v":"513300","n":"甘孜藏族自治州","c":[]},{"v":"513400","n":"凉山彝族自治州","c":[]}]},{"v":"520000","n":"贵州省","c":[{"v":"520100","n":"贵阳市","c":[]},{"v":"520200","n":"六盘水市","c":[]},{"v":"520300","n":"遵义市","c":[]},{"v":"520400","n":"安顺市","c":[]},{"v":"520500","n":"毕节市","c":[]},{"v":"520600","n":"铜仁市","c":[]},{"v":"522300","n":"黔西南布依族苗族自治州","c":[]},{"v":"522600","n":"黔东南苗族侗族自治州","c":[]},{"v":"522700","n":"黔南布依族苗族自治州","c":[]}]},{"v":"530000","n":"云南省","c":[{"v":"530100","n":"昆明市","c":[]},{"v":"530300","n":"曲靖市","c":[]},{"v":"530400","n":"玉溪市","c":[]},{"v":"530500","n":"保山市","c":[]},{"v":"530600","n":"昭通市","c":[]},{"v":"530700","n":"丽江市","c":[]},{"v":"530800","n":"普洱市","c":[]},{"v":"530900","n":"临沧市","c":[]},{"v":"532300","n":"楚雄彝族自治州","c":[]},{"v":"532500","n":"红河哈尼族彝族自治州","c":[]},{"v":"532600","n":"文山壮族苗族自治州","c":[]},{"v":"532800","n":"西双版纳傣族自治州","c":[]},{"v":"532900","n":"大理白族自治州","c":[]},{"v":"533100","n":"德宏傣族景颇族自治州","c":[]},{"v":"533300","n":"怒江傈僳族自治州","c":[]},{"v":"533400","n":"迪庆藏族自治州","c":[]}]},{"v":"540000","n":"西藏自治区","c":[{"v":"540100","n":"拉萨市","c":[]},{"v":"540200","n":"日喀则市","c":[]},{"v":"540300","n":"昌都市","c":[]},{"v":"540400","n":"林芝市","c":[]},{"v":"540500","n":"山南市","c":[]},{"v":"542400","n":"那曲地区","c":[]},{"v":"542500","n":"阿里地区","c":[]}]},{"v":"610000","n":"陕西省","c":[{"v":"610100","n":"西安市","c":[]},{"v":"610200","n":"铜川市","c":[]},{"v":"610300","n":"宝鸡市","c":[]},{"v":"610400","n":"咸阳市","c":[]},{"v":"610500","n":"渭南市","c":[]},{"v":"610600","n":"延安市","c":[]},{"v":"610700","n":"汉中市","c":[]},{"v":"610800","n":"榆林市","c":[]},{"v":"610900","n":"安康市","c":[]},{"v":"611000","n":"商洛市","c":[]}]},{"v":"620000","n":"甘肃省","c":[{"v":"620100","n":"兰州市","c":[]},{"v":"620200","n":"嘉峪关市","c":[]},{"v":"620300","n":"金昌市","c":[]},{"v":"620400","n":"白银市","c":[]},{"v":"620500","n":"天水市","c":[]},{"v":"620600","n":"武威市","c":[]},{"v":"620700","n":"张掖市","c":[]},{"v":"620800","n":"平凉市","c":[]},{"v":"620900","n":"酒泉市","c":[]},{"v":"621000","n":"庆阳市","c":[]},{"v":"621100","n":"定西市","c":[]},{"v":"621200","n":"陇南市","c":[]},{"v":"622900","n":"临夏回族自治州","c":[]},{"v":"623000","n":"甘南藏族自治州","c":[]}]},{"v":"630000","n":"青海省","c":[{"v":"630100","n":"西宁市","c":[]},{"v":"630200","n":"海东市","c":[]},{"v":"632200","n":"海北藏族自治州","c":[]},{"v":"632300","n":"黄南藏族自治州","c":[]},{"v":"632500","n":"海南藏族自治州","c":[]},{"v":"632600","n":"果洛藏族自治州","c":[]},{"v":"632700","n":"玉树藏族自治州","c":[]},{"v":"632800","n":"海西蒙古族藏族自治州","c":[]}]},{"v":"640000","n":"宁夏回族自治区","c":[{"v":"640100","n":"银川市","c":[]},{"v":"640200","n":"石嘴山市","c":[]},{"v":"640300","n":"吴忠市","c":[]},{"v":"640400","n":"固原市","c":[]},{"v":"640500","n":"中卫市","c":[]}]},{"v":"650000","n":"新疆维吾尔自治区","c":[{"v":"650100","n":"乌鲁木齐市","c":[]},{"v":"650200","n":"克拉玛依市","c":[]},{"v":"650400","n":"吐鲁番市","c":[]},{"v":"650500","n":"哈密市","c":[]},{"v":"652300","n":"昌吉回族自治州","c":[]},{"v":"652700","n":"博尔塔拉蒙古自治州","c":[]},{"v":"652800","n":"巴音郭楞蒙古自治州","c":[]},{"v":"652900","n":"阿克苏地区","c":[]},{"v":"653000","n":"克孜勒苏柯尔克孜自治州","c":[]},{"v":"653100","n":"喀什地区","c":[]},{"v":"653200","n":"和田地区","c":[]},{"v":"654000","n":"伊犁哈萨克自治州","c":[]},{"v":"654200","n":"塔城地区","c":[]},{"v":"654300","n":"阿勒泰地区","c":[]},{"v":"659000","n":"自治区直辖县级行政区划","c":[]}]},{"v":"710000","n":"台湾省","c":[]},{"v":"810000","n":"香港特别行政区","c":[]},{"v":"820000","n":"澳门特别行政区","c":[]}];if(true){!(__WEBPACK_AMD_DEFINE_FACTORY__ = (district),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else{window.YDUI_DISTRICT=district}}();

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(){var district=[{"v":"1","n":"北京","c":[{"v":"2816","n":"密云区","c":[{"v":"6667","n":"城区"},{"v":"2862","n":"城区以外"}]},{"v":"72","n":"朝阳区","c":[{"v":"2819","n":"三环到四环之间"},{"v":"2839","n":"四环到五环之间"},{"v":"2840","n":"五环到六环之间"},{"v":"4137","n":"管庄"},{"v":"4139","n":"北苑"},{"v":"4211","n":"定福庄"},{"v":"2799","n":"三环以内"}]},{"v":"2901","n":"昌平区","c":[{"v":"4135","n":"六环以内"},{"v":"4136","n":"城区"},{"v":"2906","n":"城区以外"}]},{"v":"2953","n":"平谷区","c":[{"v":"6666","n":"城区"},{"v":"2954","n":"城区以外"}]},{"v":"2800","n":"海淀区","c":[{"v":"2848","n":"三环以内"},{"v":"2849","n":"三环到四环之间"},{"v":"2850","n":"四环到五环之间"},{"v":"2851","n":"五环到六环之间"},{"v":"2852","n":"六环以外"},{"v":"4134","n":"西三旗"},{"v":"4209","n":"西二旗"}]},{"v":"2801","n":"西城区","c":[{"v":"2827","n":"内环到二环里"},{"v":"2853","n":"二环到三环"}]},{"v":"2802","n":"东城区","c":[{"v":"2821","n":"内环到三环里"}]},{"v":"2803","n":"崇文区","c":[{"v":"2829","n":"一环到二环"},{"v":"2842","n":"二环到三环"}]},{"v":"2804","n":"宣武区","c":[{"v":"2828","n":"内环到三环里"}]},{"v":"2805","n":"丰台区","c":[{"v":"2832","n":"四环到五环之间"},{"v":"2854","n":"二环到三环"},{"v":"2855","n":"三环到四环之间"},{"v":"34544","n":"五环到六环之间"},{"v":"34545","n":"六环之外"}]},{"v":"2806","n":"石景山区","c":[{"v":"2831","n":"四环到五环内"},{"v":"4187","n":"石景山城区"},{"v":"4188","n":"八大处科技园区"}]},{"v":"2807","n":"门头沟","c":[{"v":"51552","n":"城区"},{"v":"51553","n":"龙泉镇"},{"v":"51554","n":"永定镇"},{"v":"51555","n":"大台镇"},{"v":"51556","n":"潭柘寺镇"},{"v":"51557","n":"王平镇"},{"v":"51558","n":"军庄镇"},{"v":"51559","n":"妙峰山镇"},{"v":"51560","n":"雁翅镇"},{"v":"51561","n":"斋堂镇"},{"v":"51562","n":"清水镇"}]},{"v":"2808","n":"房山区","c":[{"v":"51529","n":"大安山乡"},{"v":"51530","n":"大石窝镇"},{"v":"51531","n":"窦店镇"},{"v":"51532","n":"佛子庄乡"},{"v":"51534","n":"韩村河镇"},{"v":"51535","n":"河北镇"},{"v":"51536","n":"良乡镇"},{"v":"51537","n":"琉璃河镇"},{"v":"51538","n":"南窖乡"},{"v":"51539","n":"蒲洼乡"},{"v":"51540","n":"青龙湖镇"},{"v":"51541","n":"十渡镇"},{"v":"51542","n":"石楼镇"},{"v":"51543","n":"史家营乡"},{"v":"51544","n":"霞云岭乡"},{"v":"51545","n":"新镇"},{"v":"51546","n":"阎村镇"},{"v":"51547","n":"燕山地区"},{"v":"51548","n":"张坊镇"},{"v":"51549","n":"长沟镇"},{"v":"51550","n":"长阳镇"},{"v":"51551","n":"周口店镇"},{"v":"51528","n":"城区"}]},{"v":"2809","n":"通州区","c":[{"v":"51216","n":"六环内（马驹桥镇）"},{"v":"51228","n":"中仓街道"},{"v":"51229","n":"新华街道"},{"v":"51230","n":"玉桥街道"},{"v":"51231","n":"北苑街道"},{"v":"51217","n":"六环外（马驹桥镇）"},{"v":"51218","n":"永顺镇"},{"v":"51219","n":"梨园镇"},{"v":"51220","n":"宋庄镇"},{"v":"51221","n":"漷县镇"},{"v":"51222","n":"张家湾镇"},{"v":"51223","n":"西集镇"},{"v":"51224","n":"永乐店镇"},{"v":"51225","n":"潞城镇"},{"v":"51226","n":"台湖镇"},{"v":"51227","n":"于家务乡"},{"v":"51232","n":"次渠镇"}]},{"v":"3065","n":"延庆县","c":[{"v":"51505","n":"延庆镇"},{"v":"51506","n":"城区"},{"v":"51507","n":"康庄镇"},{"v":"51508","n":"八达岭镇"},{"v":"51509","n":"永宁镇"},{"v":"51510","n":"旧县镇"},{"v":"51511","n":"张山营镇"},{"v":"51512","n":"四海镇"},{"v":"51513","n":"千家店镇"},{"v":"51514","n":"沈家营镇"},{"v":"51515","n":"大榆树镇"},{"v":"51516","n":"井庄镇"},{"v":"51517","n":"大庄科乡"},{"v":"51518","n":"刘斌堡乡"},{"v":"51519","n":"香营乡"},{"v":"51520","n":"珍珠泉乡"}]},{"v":"2810","n":"大兴区","c":[{"v":"4194","n":"四环至五环之间"},{"v":"6501","n":"五环至六环之间"},{"v":"4205","n":"六环以外"},{"v":"51081","n":"亦庄经济开发区"}]},{"v":"2812","n":"顺义区","c":[{"v":"51125","n":"北石槽镇"},{"v":"51126","n":"北务镇"},{"v":"51127","n":"北小营镇"},{"v":"51128","n":"大孙各庄镇"},{"v":"51129","n":"高丽营镇"},{"v":"51130","n":"光明街道"},{"v":"51131","n":"后沙峪地区"},{"v":"51132","n":"空港街道"},{"v":"51133","n":"李桥镇"},{"v":"51134","n":"李遂镇"},{"v":"51135","n":"龙湾屯镇"},{"v":"51136","n":"马坡地区"},{"v":"51137","n":"木林镇"},{"v":"51138","n":"南彩镇"},{"v":"51139","n":"南法信地区"},{"v":"51140","n":"牛栏山地区"},{"v":"51141","n":"仁和地区"},{"v":"51142","n":"胜利街道"},{"v":"51143","n":"石园街道"},{"v":"51144","n":"双丰街道"},{"v":"51145","n":"天竺地区"},{"v":"51146","n":"旺泉街道"},{"v":"51147","n":"杨镇地区"},{"v":"51148","n":"张镇"},{"v":"51149","n":"赵全营镇"}]},{"v":"2814","n":"怀柔区","c":[{"v":"6115","n":"城区以内"},{"v":"2847","n":"郊区"}]}]},{"v":"2","n":"上海","c":[{"v":"2817","n":"静安区","c":[{"v":"51973","n":"城区"}]},{"v":"2820","n":"闸北区","c":[{"v":"51972","n":"城区"}]},{"v":"2822","n":"虹口区","c":[{"v":"51979","n":"城区"}]},{"v":"2823","n":"杨浦区","c":[{"v":"51974","n":"城区"}]},{"v":"2824","n":"宝山区","c":[{"v":"51911","n":"罗店镇"},{"v":"51921","n":"城区"},{"v":"51912","n":"大场镇"},{"v":"51913","n":"杨行镇"},{"v":"51914","n":"月浦镇"},{"v":"51915","n":"罗泾镇"},{"v":"51916","n":"顾村镇"},{"v":"51917","n":"高境镇"},{"v":"51918","n":"庙行镇"},{"v":"51919","n":"淞南镇"},{"v":"51920","n":"宝山城市工业园区"}]},{"v":"2825","n":"闵行区","c":[{"v":"51931","n":"城区"},{"v":"51932","n":"莘庄镇"},{"v":"51933","n":"七宝镇"},{"v":"51934","n":"浦江镇"},{"v":"51935","n":"梅陇镇"},{"v":"51936","n":"虹桥镇"},{"v":"51937","n":"马桥镇"},{"v":"51938","n":"吴泾镇"},{"v":"51939","n":"华漕镇"},{"v":"51940","n":"颛桥镇"}]},{"v":"2826","n":"嘉定区","c":[{"v":"51941","n":"城区"},{"v":"51942","n":"南翔镇"},{"v":"51943","n":"马陆镇"},{"v":"51944","n":"华亭镇"},{"v":"51945","n":"江桥镇"},{"v":"51946","n":"菊园新区"},{"v":"51947","n":"安亭镇"},{"v":"51948","n":"徐行镇"},{"v":"51949","n":"外冈镇"},{"v":"51950","n":"嘉定工业区"}]},{"v":"2830","n":"浦东新区","c":[{"v":"51800","n":"城区"},{"v":"51801","n":"川沙新镇"},{"v":"51822","n":"祝桥镇"},{"v":"51823","n":"新场镇"},{"v":"51802","n":"高桥镇"},{"v":"51824","n":"惠南镇"},{"v":"51803","n":"北蔡镇"},{"v":"51804","n":"合庆镇"},{"v":"51805","n":"唐镇"},{"v":"51806","n":"曹路镇"},{"v":"51807","n":"金桥镇"},{"v":"51808","n":"高行镇"},{"v":"51809","n":"高东镇"},{"v":"51810","n":"张江镇"},{"v":"51811","n":"三林镇"},{"v":"51812","n":"南汇新城镇"},{"v":"51825","n":"康桥镇"},{"v":"51826","n":"宣桥镇"},{"v":"51827","n":"书院镇"},{"v":"51828","n":"大团镇"},{"v":"51829","n":"周浦镇"},{"v":"51830","n":"芦潮港镇"},{"v":"51831","n":"泥城镇"},{"v":"51832","n":"航头镇"},{"v":"51833","n":"万祥镇"},{"v":"51834","n":"老港镇"}]},{"v":"2833","n":"青浦区","c":[{"v":"51959","n":"城区"},{"v":"51952","n":"赵巷镇"},{"v":"51953","n":"徐泾镇"},{"v":"51954","n":"华新镇"},{"v":"51955","n":"重固镇"},{"v":"51956","n":"白鹤镇"},{"v":"51957","n":"练塘镇"},{"v":"51958","n":"金泽镇"},{"v":"51951","n":"朱家角镇"}]},{"v":"2834","n":"松江区","c":[{"v":"51982","n":"城区"},{"v":"51983","n":"泗泾镇"},{"v":"51984","n":"佘山镇"},{"v":"51985","n":"车墩镇"},{"v":"51986","n":"新桥镇"},{"v":"51987","n":"洞泾镇"},{"v":"51988","n":"九亭镇"},{"v":"51989","n":"泖港镇"},{"v":"51990","n":"石湖荡镇"},{"v":"51991","n":"新浜镇"},{"v":"51992","n":"叶榭镇"},{"v":"51993","n":"小昆山镇"}]},{"v":"2835","n":"金山区","c":[{"v":"51960","n":"城区"},{"v":"51961","n":"金山工业区"},{"v":"51962","n":"朱泾镇"},{"v":"51963","n":"枫泾镇"},{"v":"51964","n":"张堰镇"},{"v":"51965","n":"亭林镇"},{"v":"51966","n":"吕巷镇"},{"v":"51967","n":"廊下镇"},{"v":"51968","n":"金山卫镇"},{"v":"51970","n":"漕泾镇"},{"v":"51971","n":"山阳镇"}]},{"v":"2837","n":"奉贤区","c":[{"v":"51928","n":"南桥镇"},{"v":"51929","n":"奉城镇"},{"v":"51930","n":"四团镇"},{"v":"51994","n":"柘林镇"},{"v":"51995","n":"庄行镇"},{"v":"51996","n":"金汇镇"},{"v":"51997","n":"青村镇"},{"v":"51998","n":"海湾镇"}]},{"v":"2841","n":"普陀区","c":[{"v":"51980","n":"城区"}]},{"v":"78","n":"黄浦区","c":[{"v":"51978","n":"城区"}]},{"v":"2919","n":"崇明县","c":[{"v":"50779","n":"堡镇"},{"v":"50780","n":"庙镇"},{"v":"50781","n":"陈家镇"},{"v":"50782","n":"城桥镇"},{"v":"50783","n":"东平镇"},{"v":"50784","n":"港西镇"},{"v":"50785","n":"港沿镇"},{"v":"50786","n":"建设镇"},{"v":"50787","n":"绿华镇"},{"v":"50788","n":"三星镇"},{"v":"50789","n":"竖新镇"},{"v":"50790","n":"向化镇"},{"v":"50791","n":"新海镇"},{"v":"50792","n":"新河镇"},{"v":"50793","n":"中兴镇"},{"v":"50794","n":"长兴乡"},{"v":"50795","n":"横沙乡"},{"v":"50796","n":"新村乡"}]},{"v":"2813","n":"徐汇区","c":[{"v":"51976","n":"城区"}]},{"v":"2815","n":"长宁区","c":[{"v":"51975","n":"城区"}]}]},{"v":"3","n":"天津","c":[{"v":"51035","n":"东丽区","c":[{"v":"39620","n":"全境"}]},{"v":"51036","n":"和平区","c":[{"v":"2984","n":"全境"}]},{"v":"51037","n":"河北区","c":[{"v":"2987","n":"全境"}]},{"v":"51038","n":"河东区","c":[{"v":"3000","n":"全境"}]},{"v":"51039","n":"河西区","c":[{"v":"2985","n":"全境"}]},{"v":"51040","n":"红桥区","c":[{"v":"2986","n":"全境"}]},{"v":"51041","n":"蓟县","c":[{"v":"98","n":"全境"}]},{"v":"51042","n":"静海县","c":[{"v":"36157","n":"全境"}]},{"v":"51043","n":"南开区","c":[{"v":"2907","n":"全境"}]},{"v":"51044","n":"塘沽区","c":[{"v":"25708","n":"全境"}]},{"v":"51045","n":"西青区","c":[{"v":"25712","n":"杨柳青,中北,精武,大寺镇,环外海泰及外环内"},{"v":"25711","n":"其它地区"}]},{"v":"51046","n":"武清区","c":[{"v":"22846","n":"杨村镇、下朱庄内"},{"v":"22847","n":"其它地区"}]},{"v":"51047","n":"津南区","c":[{"v":"36171","n":"双港，辛庄"},{"v":"25704","n":"咸水沽镇、海河教育园，海河科技园"},{"v":"36172","n":"其他地区"}]},{"v":"51048","n":"汉沽区","c":[{"v":"23672","n":"汉沽区街里、汉沽开发区"},{"v":"23673","n":"其它地区"}]},{"v":"51049","n":"大港区","c":[{"v":"8545","n":"大港油田"},{"v":"8546","n":"主城区内"},{"v":"8547","n":"主城区外"}]},{"v":"51050","n":"北辰区","c":[{"v":"36167","n":"外环外双街镇，河北工大新校，屈店工业园"},{"v":"6646","n":"外环内"},{"v":"36168","n":"外环外其它地区"}]},{"v":"51051","n":"宝坻区","c":[{"v":"22848","n":"城关镇、马家店开发区、天宝工业园"},{"v":"22849","n":"其它地区"}]},{"v":"51052","n":"宁河县","c":[{"v":"23674","n":"芦台镇、经济开发区、贸易开发区"},{"v":"23675","n":"其它地区"}]}]},{"v":"4","n":"重庆","c":[{"v":"48131","n":"璧山县","c":[{"v":"48185","n":"县城内"},{"v":"48188","n":"青杠镇"},{"v":"48189","n":"来凤镇"},{"v":"48190","n":"丁家镇"},{"v":"48191","n":"大路镇"},{"v":"48192","n":"八塘镇"},{"v":"48193","n":"七塘镇"},{"v":"48194","n":"河边镇"},{"v":"48195","n":"福禄镇"},{"v":"48196","n":"大兴镇"},{"v":"48197","n":"正兴镇"},{"v":"48198","n":"广普镇"},{"v":"48199","n":"三合镇"},{"v":"48200","n":"健龙镇"}]},{"v":"48132","n":"荣昌县","c":[{"v":"48163","n":"县城内"},{"v":"48166","n":"广顺镇"},{"v":"48167","n":"安富镇"},{"v":"48168","n":"峰高镇"},{"v":"48169","n":"双河镇"},{"v":"48170","n":"直升镇"},{"v":"48171","n":"路孔镇"},{"v":"48172","n":"清江镇"},{"v":"48173","n":"仁义镇"},{"v":"48174","n":"河包镇"},{"v":"48175","n":"古昌镇"},{"v":"48176","n":"吴家镇"},{"v":"48177","n":"观胜镇"},{"v":"48178","n":"铜鼓镇"},{"v":"48179","n":"清流镇"},{"v":"48180","n":"盘龙镇"},{"v":"48181","n":"远觉镇"},{"v":"48182","n":"清升镇"},{"v":"48183","n":"荣隆镇"},{"v":"48184","n":"龙集镇"}]},{"v":"48133","n":"铜梁县","c":[{"v":"48134","n":"县城内"},{"v":"48138","n":"土桥镇"},{"v":"48139","n":"二坪镇"},{"v":"48140","n":"水口镇"},{"v":"48141","n":"安居镇"},{"v":"48142","n":"白羊镇"},{"v":"48143","n":"平滩镇"},{"v":"48144","n":"石鱼镇"},{"v":"48145","n":"福果镇"},{"v":"48146","n":"维新镇"},{"v":"48147","n":"高楼镇"},{"v":"48148","n":"大庙镇"},{"v":"48149","n":"围龙镇"},{"v":"48150","n":"华兴镇"},{"v":"48151","n":"永嘉镇"},{"v":"48152","n":"安溪镇"},{"v":"48153","n":"西河镇"},{"v":"48154","n":"太平镇"},{"v":"48155","n":"旧县镇"},{"v":"48156","n":"虎峰镇"},{"v":"48157","n":"少云镇"},{"v":"48158","n":"蒲吕镇"},{"v":"48159","n":"侣俸镇"},{"v":"48160","n":"小林乡"},{"v":"48161","n":"双山乡"},{"v":"48162","n":"庆隆乡"}]},{"v":"50950","n":"江北区","c":[{"v":"88","n":"内环以内"},{"v":"50957","n":"寸滩镇"},{"v":"50958","n":"郭家沱镇"},{"v":"50959","n":"铁山坪镇"},{"v":"50960","n":"鱼嘴镇"},{"v":"50961","n":"复盛镇"},{"v":"50962","n":"五宝镇"},{"v":"51198","n":"大石坝镇"}]},{"v":"50951","n":"南岸区","c":[{"v":"52496","n":"城区"},{"v":"4298","n":"内环以内"},{"v":"50963","n":"茶园新区"},{"v":"50964","n":"鸡冠石镇"},{"v":"50965","n":"长生桥镇"},{"v":"50966","n":"峡口镇"},{"v":"50967","n":"广阳镇"},{"v":"50968","n":"迎龙镇"}]},{"v":"50952","n":"九龙坡区","c":[{"v":"106","n":"内环以内"},{"v":"50969","n":"白市驿镇"},{"v":"50970","n":"铜罐驿镇"},{"v":"50971","n":"华岩镇"},{"v":"50972","n":"巴福镇"},{"v":"50973","n":"含谷镇"},{"v":"50974","n":"金凤镇"},{"v":"50975","n":"石板镇"},{"v":"50976","n":"陶家镇"},{"v":"50977","n":"西彭镇"},{"v":"50978","n":"走马镇"}]},{"v":"50953","n":"沙坪坝区","c":[{"v":"50979","n":"内环以内"},{"v":"50980","n":"陈家桥镇"},{"v":"50981","n":"歌乐山镇"},{"v":"50982","n":"青木关镇"},{"v":"50983","n":"回龙坝镇"},{"v":"50984","n":"大学城"},{"v":"50985","n":"虎溪镇"},{"v":"50986","n":"西永镇"},{"v":"50987","n":"土主镇"},{"v":"50988","n":"井口镇"},{"v":"50989","n":"曾家镇"},{"v":"50990","n":"凤凰镇"},{"v":"50991","n":"中梁镇"}]},{"v":"50954","n":"大渡口区","c":[{"v":"50992","n":"茄子溪镇"},{"v":"50993","n":"建胜镇"},{"v":"50994","n":"跳磴镇"},{"v":"111","n":"内环以内"}]},{"v":"50995","n":"綦江区","c":[{"v":"52497","n":"城区"},{"v":"51000","n":"三江镇"},{"v":"51001","n":"安稳镇"},{"v":"51002","n":"打通镇"},{"v":"51003","n":"丁山镇"},{"v":"51004","n":"东溪镇"},{"v":"51005","n":"扶欢镇"},{"v":"51006","n":"赶水镇"},{"v":"51007","n":"郭扶镇"},{"v":"51008","n":"横山镇"},{"v":"51009","n":"隆盛镇"},{"v":"51010","n":"三角镇"},{"v":"51011","n":"石壕镇"},{"v":"51012","n":"石角镇"},{"v":"51013","n":"新盛镇"},{"v":"51014","n":"永城镇"},{"v":"51015","n":"永新镇"},{"v":"51016","n":"中峰镇"},{"v":"51017","n":"篆塘镇"},{"v":"51018","n":"丛林镇"},{"v":"51019","n":"关坝镇"},{"v":"51020","n":"黑山镇"},{"v":"51021","n":"金桥镇"},{"v":"51022","n":"南桐镇"},{"v":"51023","n":"青年镇"},{"v":"51024","n":"石林镇"},{"v":"51025","n":"万东镇"}]},{"v":"48201","n":"合川区","c":[{"v":"52489","n":"城区"},{"v":"48298","n":"草街镇"},{"v":"48299","n":"盐井镇"},{"v":"48300","n":"云门镇"},{"v":"48301","n":"大石镇"},{"v":"48302","n":"沙鱼镇"},{"v":"48303","n":"官渡镇"},{"v":"48304","n":"涞滩镇"},{"v":"48305","n":"肖家镇"},{"v":"48306","n":"古楼镇"},{"v":"48307","n":"三庙镇"},{"v":"48308","n":"二郎镇"},{"v":"48309","n":"龙凤镇"},{"v":"48310","n":"隆兴镇"},{"v":"48311","n":"铜溪镇"},{"v":"48312","n":"双凤镇"},{"v":"48313","n":"狮滩镇"},{"v":"48314","n":"清平镇"},{"v":"48315","n":"土场镇"},{"v":"48316","n":"小沔镇"},{"v":"48317","n":"三汇镇"},{"v":"48318","n":"香龙镇"},{"v":"48319","n":"钱塘镇"},{"v":"48320","n":"龙市镇"},{"v":"48321","n":"燕窝镇"},{"v":"48322","n":"太和镇"},{"v":"48323","n":"渭沱镇"},{"v":"48324","n":"双槐镇"}]},{"v":"48202","n":"巴南区","c":[{"v":"52490","n":"城区"},{"v":"48355","n":"南泉镇"},{"v":"48356","n":"一品镇"},{"v":"48357","n":"南彭镇"},{"v":"48358","n":"惠民镇"},{"v":"48359","n":"麻柳嘴镇"},{"v":"48360","n":"天星寺镇"},{"v":"48361","n":"双河口镇"},{"v":"48362","n":"界石镇"},{"v":"48363","n":"安澜镇"},{"v":"48364","n":"跳石镇"},{"v":"48365","n":"木洞镇"},{"v":"48366","n":"丰盛镇"},{"v":"48367","n":"二圣镇"},{"v":"48368","n":"东泉镇"},{"v":"48369","n":"姜家镇"},{"v":"48370","n":"接龙镇"},{"v":"48371","n":"石滩镇"},{"v":"48372","n":"石龙镇"}]},{"v":"48203","n":"北碚区","c":[{"v":"52491","n":"城区"},{"v":"48240","n":"东阳镇"},{"v":"48242","n":"蔡家岗镇"},{"v":"48243","n":"童家溪镇"},{"v":"48244","n":"施家梁镇"},{"v":"48245","n":"金刀峡镇"},{"v":"48246","n":"澄江镇"},{"v":"48247","n":"水土镇"},{"v":"48248","n":"歇马镇"},{"v":"48249","n":"天府镇"},{"v":"48250","n":"复兴镇"},{"v":"48251","n":"静观镇"},{"v":"48252","n":"柳荫镇"},{"v":"48253","n":"三圣镇"}]},{"v":"48204","n":"江津区","c":[{"v":"52492","n":"城区"},{"v":"48213","n":"四面山镇"},{"v":"48214","n":"支坪镇"},{"v":"48215","n":"白沙镇"},{"v":"48216","n":"珞璜镇"},{"v":"48217","n":"柏林镇"},{"v":"48218","n":"蔡家镇"},{"v":"48219","n":"慈云镇"},{"v":"48220","n":"杜市镇"},{"v":"48221","n":"广兴镇"},{"v":"48222","n":"嘉平镇"},{"v":"48223","n":"贾嗣镇"},{"v":"48224","n":"李市镇"},{"v":"48225","n":"龙华镇"},{"v":"48226","n":"石蟆镇"},{"v":"48227","n":"石门镇"},{"v":"48228","n":"塘河镇"},{"v":"48229","n":"吴滩镇"},{"v":"48230","n":"西湖镇"},{"v":"48231","n":"夏坝镇"},{"v":"48232","n":"先锋镇"},{"v":"48233","n":"永兴镇"},{"v":"48234","n":"油溪镇"},{"v":"48235","n":"中山镇"},{"v":"48236","n":"朱杨镇"}]},{"v":"48205","n":"渝北区","c":[{"v":"52493","n":"城区"},{"v":"48332","n":"礼嘉镇"},{"v":"48337","n":"两路镇"},{"v":"48338","n":"王家镇"},{"v":"48339","n":"悦来镇"},{"v":"48340","n":"玉峰山镇"},{"v":"48341","n":"茨竹镇"},{"v":"48342","n":"大盛镇"},{"v":"48343","n":"大塆镇"},{"v":"48344","n":"古路镇"},{"v":"48345","n":"龙兴镇"},{"v":"48346","n":"洛碛镇"},{"v":"48347","n":"木耳镇"},{"v":"48348","n":"石船镇"},{"v":"48349","n":"统景镇"},{"v":"48350","n":"兴隆镇"}]},{"v":"48206","n":"长寿区","c":[{"v":"52494","n":"城区"},{"v":"48281","n":"长寿湖镇"},{"v":"48282","n":"邻封镇"},{"v":"48283","n":"但渡镇"},{"v":"48284","n":"云集镇"},{"v":"48285","n":"双龙镇"},{"v":"48286","n":"龙河镇"},{"v":"48287","n":"石堰镇"},{"v":"48288","n":"云台镇"},{"v":"48289","n":"海棠镇"},{"v":"48290","n":"葛兰镇"},{"v":"48291","n":"新市镇"},{"v":"48292","n":"八颗镇"},{"v":"48293","n":"洪湖镇"},{"v":"48294","n":"万顺镇"}]},{"v":"48207","n":"永川区","c":[{"v":"52495","n":"城区"},{"v":"48257","n":"双竹镇"},{"v":"48258","n":"三教镇"},{"v":"48259","n":"大安镇"},{"v":"48260","n":"陈食镇"},{"v":"48261","n":"板桥镇"},{"v":"48262","n":"宝峰镇"},{"v":"48263","n":"临江镇"},{"v":"48264","n":"红炉镇"},{"v":"48265","n":"吉安镇"},{"v":"48266","n":"金龙镇"},{"v":"48267","n":"来苏镇"},{"v":"48268","n":"青峰镇"},{"v":"48270","n":"双石镇"},{"v":"48271","n":"松溉镇"},{"v":"48272","n":"五间镇"},{"v":"48273","n":"仙龙镇"},{"v":"48274","n":"永荣镇"},{"v":"48275","n":"朱沱镇"},{"v":"48276","n":"何埂镇"}]},{"v":"51026","n":"渝中区","c":[{"v":"103","n":"全境"}]},{"v":"51027","n":"高新区","c":[{"v":"50956","n":"全境"}]},{"v":"51028","n":"北部新区","c":[{"v":"50955","n":"全境"}]},{"v":"126","n":"大足区","c":[{"v":"52487","n":"城区"},{"v":"13520","n":"龙滩子镇"},{"v":"13521","n":"龙水镇"},{"v":"13522","n":"智凤镇"},{"v":"13523","n":"宝顶镇"},{"v":"13524","n":"中敖镇"},{"v":"13525","n":"三驱镇"},{"v":"13526","n":"宝兴镇"},{"v":"13527","n":"玉龙镇"},{"v":"13528","n":"石马镇"},{"v":"13529","n":"拾万镇"},{"v":"13530","n":"回龙镇"},{"v":"13531","n":"金山镇"},{"v":"13532","n":"万古镇"},{"v":"13533","n":"国梁镇"},{"v":"13534","n":"雍溪镇"},{"v":"13535","n":"珠溪镇"},{"v":"13536","n":"龙石镇"},{"v":"13537","n":"邮亭镇"},{"v":"13538","n":"铁山镇"},{"v":"13539","n":"高升镇"},{"v":"13540","n":"季家镇"},{"v":"13541","n":"古龙镇"},{"v":"13542","n":"高坪镇"},{"v":"13543","n":"双路镇"},{"v":"13544","n":"通桥镇"}]},{"v":"113","n":"万州区","c":[{"v":"52484","n":"城区"},{"v":"9786","n":"白土镇"},{"v":"9787","n":"白羊镇"},{"v":"9788","n":"大周镇"},{"v":"9789","n":"弹子镇"},{"v":"9790","n":"分水镇"},{"v":"9791","n":"甘宁镇"},{"v":"9792","n":"高峰镇"},{"v":"9793","n":"高梁镇"},{"v":"9794","n":"后山镇"},{"v":"9795","n":"李河镇"},{"v":"9796","n":"龙驹镇"},{"v":"9797","n":"龙沙镇"},{"v":"9798","n":"罗田镇"},{"v":"9799","n":"孙家镇"},{"v":"9800","n":"太安镇"},{"v":"9801","n":"太龙镇"},{"v":"9802","n":"天城镇"},{"v":"9803","n":"武陵镇"},{"v":"9804","n":"响水镇"},{"v":"9805","n":"小周镇"},{"v":"9806","n":"新田镇"},{"v":"9807","n":"新乡镇"},{"v":"9808","n":"熊家镇"},{"v":"9809","n":"余家镇"},{"v":"9810","n":"长岭镇"},{"v":"9811","n":"长坪镇"},{"v":"9812","n":"长滩镇"},{"v":"9813","n":"走马镇"},{"v":"9814","n":"瀼渡镇"},{"v":"9815","n":"茨竹乡"},{"v":"9816","n":"柱山乡"},{"v":"9817","n":"燕山乡"},{"v":"9818","n":"溪口乡"},{"v":"9819","n":"普子乡"},{"v":"9820","n":"地宝乡"},{"v":"9821","n":"铁峰乡"},{"v":"9822","n":"黄柏乡"},{"v":"9823","n":"九池乡"},{"v":"9824","n":"梨树乡"},{"v":"9825","n":"郭村乡"},{"v":"9826","n":"恒合乡"}]},{"v":"114","n":"涪陵区","c":[{"v":"52485","n":"城区"},{"v":"9898","n":"李渡镇"},{"v":"9899","n":"白涛镇"},{"v":"9900","n":"百胜镇"},{"v":"9901","n":"堡子镇"},{"v":"9902","n":"焦石镇"},{"v":"9903","n":"蔺市镇"},{"v":"9904","n":"龙桥镇"},{"v":"9905","n":"龙潭镇"},{"v":"9906","n":"马武镇"},{"v":"9907","n":"南沱镇"},{"v":"9908","n":"青羊镇"},{"v":"9909","n":"清溪镇"},{"v":"9910","n":"石沱镇"},{"v":"9911","n":"新妙镇"},{"v":"9912","n":"义和镇"},{"v":"9913","n":"增福乡"},{"v":"9914","n":"珍溪镇"},{"v":"9915","n":"镇安镇"},{"v":"9916","n":"致韩镇"},{"v":"9917","n":"土地坡乡"},{"v":"9918","n":"武陵山乡"},{"v":"9919","n":"中峰乡"},{"v":"9920","n":"梓里乡"},{"v":"9921","n":"丛林乡"},{"v":"9922","n":"大木乡"},{"v":"9923","n":"惠民乡"},{"v":"9924","n":"酒店乡"},{"v":"9925","n":"聚宝乡"},{"v":"9926","n":"卷洞乡"},{"v":"9927","n":"两汇乡"},{"v":"9928","n":"罗云乡"},{"v":"9929","n":"明家乡"},{"v":"9930","n":"仁义乡"},{"v":"9931","n":"山窝乡"},{"v":"9932","n":"石和乡"},{"v":"9933","n":"石龙乡"},{"v":"9934","n":"太和乡"},{"v":"9935","n":"天台乡"},{"v":"9936","n":"同乐乡"},{"v":"9937","n":"新村乡"}]},{"v":"115","n":"梁平县","c":[{"v":"39680","n":"县城内"},{"v":"9938","n":"梁山镇"},{"v":"9939","n":"柏家镇"},{"v":"9940","n":"碧山镇"},{"v":"9941","n":"大观镇"},{"v":"9942","n":"福禄镇"},{"v":"9943","n":"合兴镇"},{"v":"9944","n":"和林镇"},{"v":"9945","n":"虎城镇"},{"v":"9946","n":"回龙镇"},{"v":"9947","n":"金带镇"},{"v":"9948","n":"聚奎镇"},{"v":"9949","n":"礼让镇"},{"v":"9950","n":"龙门镇"},{"v":"9951","n":"明达镇"},{"v":"9952","n":"蟠龙镇"},{"v":"9953","n":"屏锦镇"},{"v":"9954","n":"仁贤镇"},{"v":"9955","n":"石安镇"},{"v":"9956","n":"文化镇"},{"v":"9957","n":"新盛镇"},{"v":"9958","n":"荫平镇"},{"v":"9959","n":"袁驿镇"},{"v":"9960","n":"云龙镇"},{"v":"9961","n":"竹山镇"},{"v":"9962","n":"安胜乡"},{"v":"9963","n":"铁门乡"},{"v":"9964","n":"紫照乡"},{"v":"9965","n":"曲水乡"},{"v":"9966","n":"龙胜乡"},{"v":"9967","n":"城北乡"},{"v":"9968","n":"城东乡"},{"v":"9969","n":"复平乡"}]},{"v":"119","n":"南川区","c":[{"v":"52486","n":"城区"},{"v":"9984","n":"头渡镇"},{"v":"9985","n":"兴隆镇"},{"v":"9986","n":"冷水关乡"},{"v":"9987","n":"德隆乡"},{"v":"9988","n":"峰岩乡"},{"v":"9989","n":"福寿乡"},{"v":"9990","n":"古花乡"},{"v":"9991","n":"河图乡"},{"v":"9992","n":"民主乡"},{"v":"9993","n":"木凉乡"},{"v":"9994","n":"乾丰乡"},{"v":"9995","n":"庆元乡"},{"v":"9996","n":"石莲乡"},{"v":"9997","n":"石溪乡"},{"v":"9998","n":"铁村乡"},{"v":"9999","n":"土溪乡"},{"v":"10000","n":"鱼泉乡"},{"v":"10001","n":"中桥乡"},{"v":"9973","n":"太平场镇"},{"v":"9974","n":"大观镇"},{"v":"9975","n":"大有镇"},{"v":"9976","n":"合溪镇"},{"v":"9977","n":"金山镇"},{"v":"9978","n":"鸣玉镇"},{"v":"9979","n":"南平镇"},{"v":"9980","n":"三泉镇"},{"v":"9981","n":"神童镇"},{"v":"9982","n":"石墙镇"},{"v":"9983","n":"水江镇"}]},{"v":"123","n":"潼南县","c":[{"v":"39688","n":"县城内"},{"v":"9756","n":"柏梓镇"},{"v":"9757","n":"宝龙镇"},{"v":"9758","n":"崇龛镇"},{"v":"9759","n":"古溪镇"},{"v":"9760","n":"龙形镇"},{"v":"9761","n":"米心镇"},{"v":"9762","n":"群力镇"},{"v":"9763","n":"上和镇"},{"v":"9764","n":"双江镇"},{"v":"9765","n":"太安镇"},{"v":"9766","n":"塘坝镇"},{"v":"9767","n":"卧佛镇"},{"v":"9768","n":"五桂镇"},{"v":"9769","n":"小渡镇"},{"v":"9770","n":"新胜镇"},{"v":"9771","n":"玉溪镇"},{"v":"9772","n":"别口乡"},{"v":"9773","n":"田家乡"},{"v":"9774","n":"寿桥乡"}]},{"v":"128","n":"黔江区","c":[{"v":"52488","n":"城区"},{"v":"10005","n":"正阳镇"},{"v":"10006","n":"舟白镇"},{"v":"10007","n":"阿蓬江镇"},{"v":"10008","n":"小南海镇"},{"v":"10009","n":"鹅池镇"},{"v":"10010","n":"冯家镇"},{"v":"10011","n":"黑溪镇"},{"v":"10012","n":"黄溪镇"},{"v":"10013","n":"金溪镇"},{"v":"10014","n":"黎水镇"},{"v":"10015","n":"邻鄂镇"},{"v":"10016","n":"马喇镇"},{"v":"10017","n":"石会镇"},{"v":"10018","n":"石家镇"},{"v":"10019","n":"濯水镇"},{"v":"10020","n":"白石乡"},{"v":"10021","n":"白土乡"},{"v":"10022","n":"金洞乡"},{"v":"10023","n":"蓬东乡"},{"v":"10024","n":"沙坝乡"},{"v":"10025","n":"杉岭乡"},{"v":"10026","n":"水市乡"},{"v":"10027","n":"水田乡"},{"v":"10028","n":"太极乡"},{"v":"10029","n":"五里乡"},{"v":"10030","n":"新华乡"},{"v":"10031","n":"中塘乡"}]},{"v":"132","n":"开县","c":[{"v":"51202","n":"白桥镇"},{"v":"51203","n":"大德镇"},{"v":"51204","n":"金峰镇"},{"v":"51205","n":"谭家镇"},{"v":"51206","n":"天和镇"},{"v":"51207","n":"白泉乡"},{"v":"39699","n":"县城内"},{"v":"9831","n":"九龙山镇"},{"v":"9832","n":"大进镇"},{"v":"9833","n":"敦好镇"},{"v":"9834","n":"高桥镇"},{"v":"9835","n":"郭家镇"},{"v":"9836","n":"和谦镇"},{"v":"9837","n":"河堰镇"},{"v":"9838","n":"厚坝镇"},{"v":"9839","n":"临江镇"},{"v":"9840","n":"南门镇"},{"v":"9841","n":"南雅镇"},{"v":"9842","n":"渠口镇"},{"v":"9843","n":"铁桥镇"},{"v":"52083","n":"岳溪镇"},{"v":"9844","n":"温泉镇"},{"v":"9845","n":"义和镇"},{"v":"9846","n":"长沙镇"},{"v":"9847","n":"赵家镇"},{"v":"9848","n":"镇安镇"},{"v":"9849","n":"中和镇"},{"v":"9850","n":"竹溪镇"},{"v":"9851","n":"三汇口乡"},{"v":"9852","n":"白桥乡"},{"v":"9853","n":"大德乡"},{"v":"9854","n":"关面乡"},{"v":"9855","n":"金峰乡"},{"v":"9856","n":"麻柳乡"},{"v":"9857","n":"满月乡"},{"v":"9858","n":"谭家乡"},{"v":"9859","n":"天和乡"},{"v":"9860","n":"巫山镇"},{"v":"9861","n":"五通乡"},{"v":"9862","n":"紫水乡"}]},{"v":"133","n":"云阳县","c":[{"v":"39701","n":"县城内"},{"v":"10091","n":"云阳镇"},{"v":"10092","n":"巴阳镇"},{"v":"10093","n":"凤鸣镇"},{"v":"10094","n":"高阳镇"},{"v":"10095","n":"故陵镇"},{"v":"10096","n":"红狮镇"},{"v":"10097","n":"黄石镇"},{"v":"10098","n":"江口镇"},{"v":"10099","n":"龙角镇"},{"v":"10100","n":"路阳镇"},{"v":"10101","n":"南溪镇"},{"v":"10102","n":"农坝镇"},{"v":"10103","n":"盘龙镇"},{"v":"10104","n":"平安镇"},{"v":"10105","n":"渠马镇"},{"v":"10106","n":"人和镇"},{"v":"10107","n":"桑坪镇"},{"v":"10108","n":"沙市镇"},{"v":"10109","n":"双土镇"},{"v":"10110","n":"鱼泉镇"},{"v":"10111","n":"云安镇"},{"v":"10112","n":"洞鹿乡"},{"v":"10113","n":"后叶乡"},{"v":"10114","n":"龙洞乡"},{"v":"10115","n":"毛坝乡"},{"v":"10116","n":"泥溪乡"},{"v":"10117","n":"票草乡"},{"v":"10118","n":"普安乡"},{"v":"10119","n":"栖霞乡"},{"v":"10120","n":"清水乡"},{"v":"10121","n":"上坝乡"},{"v":"10122","n":"石门乡"},{"v":"10123","n":"双龙乡"},{"v":"10124","n":"水口乡"},{"v":"10125","n":"外郎乡"},{"v":"10126","n":"新津乡"},{"v":"10127","n":"堰坪乡"},{"v":"10128","n":"养鹿乡"},{"v":"10129","n":"耀灵乡"},{"v":"10130","n":"云硐乡"}]},{"v":"134","n":"忠县","c":[{"v":"39702","n":"县城内"},{"v":"10131","n":"忠州镇"},{"v":"10132","n":"拔山镇"},{"v":"10133","n":"白石镇"},{"v":"10134","n":"东溪镇"},{"v":"10135","n":"复兴镇"},{"v":"10136","n":"官坝镇"},{"v":"10137","n":"花桥镇"},{"v":"10138","n":"黄金镇"},{"v":"10139","n":"金鸡镇"},{"v":"10140","n":"马灌镇"},{"v":"10141","n":"任家镇"},{"v":"10142","n":"汝溪镇"},{"v":"10143","n":"三汇镇"},{"v":"10144","n":"石宝镇"},{"v":"10145","n":"石黄镇"},{"v":"10146","n":"双桂镇"},{"v":"10147","n":"乌杨镇"},{"v":"10148","n":"新生镇"},{"v":"10149","n":"洋渡镇"},{"v":"10150","n":"野鹤镇"},{"v":"10151","n":"永丰镇"},{"v":"10152","n":"金声乡"},{"v":"10153","n":"磨子乡"},{"v":"10154","n":"善广乡"},{"v":"10155","n":"石子乡"},{"v":"10156","n":"涂井乡"},{"v":"10157","n":"兴峰乡"},{"v":"19915","n":"新立镇"}]},{"v":"139","n":"垫江县","c":[{"v":"39712","n":"县城内"},{"v":"10283","n":"桂溪镇"},{"v":"10284","n":"澄溪镇"},{"v":"10285","n":"高安镇"},{"v":"10286","n":"高峰镇"},{"v":"10287","n":"鹤游镇"},{"v":"10288","n":"普顺镇"},{"v":"10289","n":"沙坪镇"},{"v":"10290","n":"太平镇"},{"v":"10291","n":"五洞镇"},{"v":"10292","n":"新民镇"},{"v":"10293","n":"砚台镇"},{"v":"10294","n":"永安镇"},{"v":"10295","n":"周嘉镇"},{"v":"10296","n":"白家乡"},{"v":"10297","n":"包家乡"},{"v":"10298","n":"曹回乡"},{"v":"10299","n":"大石乡"},{"v":"10300","n":"杠家乡"},{"v":"32060","n":"坪山镇"},{"v":"10301","n":"黄沙乡"},{"v":"10302","n":"裴兴乡"},{"v":"10303","n":"三溪乡"},{"v":"10304","n":"沙河乡"},{"v":"10305","n":"永平乡"},{"v":"10306","n":"长龙乡"}]},{"v":"4164","n":"城口县","c":[{"v":"39717","n":"县城内"},{"v":"10406","n":"葛城镇"},{"v":"10407","n":"巴山镇"},{"v":"10408","n":"高观镇"},{"v":"10409","n":"庙坝镇"},{"v":"10410","n":"明通镇"},{"v":"10411","n":"坪坝镇"},{"v":"10412","n":"修齐镇"},{"v":"10413","n":"北屏乡"},{"v":"10414","n":"东安乡"},{"v":"10415","n":"高楠乡"},{"v":"10416","n":"高燕乡"},{"v":"10417","n":"河鱼乡"},{"v":"10418","n":"厚坪乡"},{"v":"10419","n":"鸡鸣乡"},{"v":"10420","n":"岚天乡"},{"v":"10421","n":"蓼子乡"},{"v":"10422","n":"龙田乡"},{"v":"10423","n":"明中乡"},{"v":"10424","n":"双河乡"},{"v":"10425","n":"咸宜乡"},{"v":"10426","n":"沿河乡"},{"v":"10427","n":"治平乡"},{"v":"10428","n":"周溪乡"},{"v":"10429","n":"左岚乡"}]},{"v":"129","n":"武隆县","c":[{"v":"39692","n":"县城内"},{"v":"10032","n":"仙女山镇"},{"v":"10033","n":"巷口镇"},{"v":"10034","n":"白马镇"},{"v":"10035","n":"火炉镇"},{"v":"10036","n":"江口镇"},{"v":"10037","n":"平桥镇"},{"v":"10038","n":"桐梓镇"},{"v":"10039","n":"土坎镇"},{"v":"10040","n":"鸭江镇"},{"v":"10041","n":"羊角镇"},{"v":"10042","n":"长坝镇"},{"v":"10043","n":"白云乡"},{"v":"10044","n":"沧沟乡"},{"v":"10045","n":"凤来乡"},{"v":"10046","n":"浩口乡"},{"v":"10047","n":"和顺乡"},{"v":"10048","n":"后坪乡"},{"v":"10049","n":"黄莺乡"},{"v":"10050","n":"接龙乡"},{"v":"10051","n":"庙垭乡"},{"v":"10052","n":"石桥乡"},{"v":"10053","n":"双河乡"},{"v":"10054","n":"铁矿乡"},{"v":"10055","n":"土地乡"},{"v":"10056","n":"文复乡"},{"v":"10057","n":"赵家乡"}]},{"v":"130","n":"丰都县","c":[{"v":"39694","n":"县城内"},{"v":"10059","n":"南天湖镇"},{"v":"10060","n":"许明寺镇"},{"v":"10061","n":"包鸾镇"},{"v":"10062","n":"董家镇"},{"v":"10063","n":"高家镇"},{"v":"10064","n":"虎威镇"},{"v":"10065","n":"江池镇"},{"v":"10066","n":"龙河镇"},{"v":"10067","n":"名山镇"},{"v":"10068","n":"三元镇"},{"v":"10069","n":"社坛镇"},{"v":"10070","n":"十直镇"},{"v":"10071","n":"树人镇"},{"v":"10072","n":"双路镇"},{"v":"10073","n":"武平镇"},{"v":"10074","n":"兴义镇"},{"v":"10075","n":"湛普镇"},{"v":"10076","n":"镇江镇"},{"v":"10077","n":"太平坝乡"},{"v":"10078","n":"双龙场乡"},{"v":"10079","n":"保合乡"},{"v":"10080","n":"崇兴乡"},{"v":"10081","n":"都督乡"},{"v":"10082","n":"暨龙乡"},{"v":"10083","n":"栗子乡"},{"v":"10084","n":"龙孔乡"},{"v":"10085","n":"青龙乡"},{"v":"10086","n":"仁沙乡"},{"v":"10087","n":"三坝乡"},{"v":"10088","n":"三建乡"}]},{"v":"131","n":"奉节县","c":[{"v":"51706","n":"永乐镇"},{"v":"39698","n":"县城内"},{"v":"10377","n":"永安镇"},{"v":"10378","n":"白帝镇"},{"v":"10379","n":"草堂镇"},{"v":"10380","n":"大树镇"},{"v":"10381","n":"汾河镇"},{"v":"10382","n":"公平镇"},{"v":"10383","n":"甲高镇"},{"v":"10384","n":"康乐镇"},{"v":"10385","n":"青龙镇"},{"v":"10386","n":"吐祥镇"},{"v":"10387","n":"新民镇"},{"v":"10388","n":"兴隆镇"},{"v":"10389","n":"羊市镇"},{"v":"10390","n":"朱衣镇"},{"v":"10391","n":"竹园镇"},{"v":"10392","n":"安坪乡"},{"v":"10393","n":"冯坪乡"},{"v":"10394","n":"鹤峰乡"},{"v":"10395","n":"红土乡"},{"v":"10396","n":"康坪乡"},{"v":"10397","n":"龙桥乡"},{"v":"10398","n":"平安乡"},{"v":"10399","n":"石岗乡"},{"v":"10400","n":"太和乡"},{"v":"10401","n":"五马乡"},{"v":"10402","n":"新政乡"},{"v":"10403","n":"岩湾乡"},{"v":"10404","n":"云雾乡"},{"v":"10405","n":"长安乡"}]},{"v":"135","n":"巫溪县","c":[{"v":"39704","n":"县城内"},{"v":"10158","n":"城厢镇"},{"v":"10159","n":"凤凰镇"},{"v":"10160","n":"古路镇"},{"v":"10161","n":"尖山镇"},{"v":"10162","n":"宁厂镇"},{"v":"10163","n":"上磺镇"},{"v":"10164","n":"文峰镇"},{"v":"10165","n":"下堡镇"},{"v":"10166","n":"徐家镇"},{"v":"10167","n":"朝阳洞乡"},{"v":"10168","n":"大河乡"},{"v":"10169","n":"峰灵乡"},{"v":"10170","n":"花台乡"},{"v":"10171","n":"兰英乡"},{"v":"10172","n":"菱角乡"},{"v":"10173","n":"蒲莲乡"},{"v":"10174","n":"胜利乡"},{"v":"10175","n":"双阳乡"},{"v":"10176","n":"塘坊乡"},{"v":"10177","n":"天星乡"},{"v":"10178","n":"天元乡"},{"v":"10179","n":"田坝乡"},{"v":"10180","n":"通城乡"},{"v":"10181","n":"土城乡"},{"v":"10182","n":"乌龙乡"},{"v":"10183","n":"鱼鳞乡"},{"v":"10184","n":"长桂乡"},{"v":"10185","n":"中岗乡"},{"v":"10186","n":"中梁乡"}]},{"v":"136","n":"巫山县","c":[{"v":"39706","n":"县城内"},{"v":"10187","n":"巫峡镇"},{"v":"10188","n":"大昌镇"},{"v":"10189","n":"福田镇"},{"v":"10190","n":"官渡镇"},{"v":"10191","n":"官阳镇"},{"v":"10192","n":"龙溪镇"},{"v":"10193","n":"骡坪镇"},{"v":"10194","n":"庙堂乡"},{"v":"10195","n":"庙宇镇"},{"v":"10196","n":"双龙镇"},{"v":"10197","n":"铜鼓镇"},{"v":"10198","n":"抱龙镇"},{"v":"10199","n":"大溪乡"},{"v":"10200","n":"当阳乡"},{"v":"10201","n":"邓家乡"},{"v":"10202","n":"笃坪乡"},{"v":"10203","n":"红椿乡"},{"v":"10204","n":"建平乡"},{"v":"10205","n":"金坪乡"},{"v":"10206","n":"两坪乡"},{"v":"10207","n":"龙井乡"},{"v":"10208","n":"培石乡"},{"v":"10209","n":"平河乡"},{"v":"10210","n":"曲尺乡"},{"v":"10211","n":"三溪乡"},{"v":"10212","n":"竹贤乡"}]},{"v":"137","n":"石柱县","c":[{"v":"10240","n":"王家乡"},{"v":"10241","n":"洗新乡"},{"v":"10242","n":"新乐乡"},{"v":"10243","n":"中益乡"},{"v":"39710","n":"县城内"},{"v":"10213","n":"南宾镇"},{"v":"10214","n":"黄水镇"},{"v":"10215","n":"临溪镇"},{"v":"10216","n":"龙沙镇"},{"v":"10217","n":"马武镇"},{"v":"10218","n":"沙子镇"},{"v":"10219","n":"王场镇"},{"v":"10220","n":"西沱镇"},{"v":"10221","n":"下路镇"},{"v":"10222","n":"沿溪镇"},{"v":"10223","n":"渔池镇"},{"v":"10224","n":"悦崃镇"},{"v":"10225","n":"大歇乡"},{"v":"10226","n":"枫木乡"},{"v":"10227","n":"河嘴乡"},{"v":"10228","n":"黄鹤乡"},{"v":"10229","n":"金铃乡"},{"v":"10230","n":"金竹乡"},{"v":"10231","n":"冷水乡"},{"v":"10232","n":"黎场乡"},{"v":"10233","n":"六塘乡"},{"v":"10234","n":"龙潭乡"},{"v":"10235","n":"桥头乡"},{"v":"10236","n":"三河乡"},{"v":"10237","n":"三益乡"},{"v":"10238","n":"石家乡"},{"v":"10239","n":"万朝乡"}]},{"v":"138","n":"彭水县","c":[{"v":"10245","n":"保家镇"},{"v":"10246","n":"高谷镇"},{"v":"10247","n":"黄家镇"},{"v":"10248","n":"连湖镇"},{"v":"10249","n":"龙射镇"},{"v":"10250","n":"鹿角镇"},{"v":"10251","n":"普子镇"},{"v":"10252","n":"桑柘镇"},{"v":"10253","n":"万足镇"},{"v":"10254","n":"郁山镇"},{"v":"10255","n":"梅子垭乡"},{"v":"10256","n":"鞍子乡"},{"v":"10257","n":"大垭乡"},{"v":"10258","n":"棣棠乡"},{"v":"10259","n":"靛水乡"},{"v":"10260","n":"朗溪乡"},{"v":"10261","n":"联合乡"},{"v":"10262","n":"龙塘乡"},{"v":"10263","n":"龙溪乡"},{"v":"10264","n":"芦塘乡"},{"v":"10265","n":"鹿鸣乡"},{"v":"10266","n":"平安乡"},{"v":"10267","n":"迁乔乡"},{"v":"10268","n":"乔梓乡"},{"v":"10269","n":"润溪乡"},{"v":"10270","n":"三义乡"},{"v":"10271","n":"善感乡"},{"v":"39711","n":"县城内"},{"v":"10272","n":"石柳乡"},{"v":"10273","n":"石盘乡"},{"v":"10274","n":"双龙乡"},{"v":"10275","n":"太原乡"},{"v":"10276","n":"桐楼乡"},{"v":"10277","n":"小厂乡"},{"v":"10278","n":"新田乡"},{"v":"10279","n":"岩东乡"},{"v":"10280","n":"长滩乡"},{"v":"10281","n":"诸佛乡"},{"v":"10282","n":"走马乡"}]},{"v":"140","n":"酉阳县","c":[{"v":"39714","n":"县城内"},{"v":"10307","n":"钟多镇"},{"v":"10308","n":"苍岭镇"},{"v":"10309","n":"车田乡"},{"v":"10310","n":"大溪镇"},{"v":"10311","n":"丁市镇"},{"v":"10312","n":"泔溪镇"},{"v":"10313","n":"龚滩镇"},{"v":"10314","n":"黑水镇"},{"v":"10315","n":"后溪镇"},{"v":"10316","n":"李溪镇"},{"v":"10317","n":"龙潭镇"},{"v":"10318","n":"麻旺镇"},{"v":"10319","n":"小河镇"},{"v":"10320","n":"兴隆镇"},{"v":"10321","n":"酉酬镇"},{"v":"10322","n":"南腰界乡"},{"v":"10323","n":"后坪坝乡"},{"v":"10324","n":"板溪乡"},{"v":"10325","n":"官清乡"},{"v":"10326","n":"花田乡"},{"v":"10327","n":"江丰乡"},{"v":"10328","n":"可大乡"},{"v":"10329","n":"浪坪乡"},{"v":"10330","n":"两罾乡"},{"v":"10331","n":"毛坝乡"},{"v":"10332","n":"庙溪乡"},{"v":"10333","n":"木叶乡"},{"v":"10334","n":"楠木乡"},{"v":"10335","n":"偏柏乡"},{"v":"10336","n":"清泉乡"},{"v":"10337","n":"双泉乡"},{"v":"10338","n":"天馆乡"},{"v":"10339","n":"铜鼓乡"},{"v":"10340","n":"涂市乡"},{"v":"10341","n":"万木乡"},{"v":"10342","n":"五福乡"},{"v":"10343","n":"宜居乡"},{"v":"10344","n":"腴地乡"},{"v":"10345","n":"板桥乡"}]},{"v":"141","n":"秀山县","c":[{"v":"39716","n":"县城内"},{"v":"10346","n":"清溪场镇"},{"v":"10347","n":"中和镇"},{"v":"10348","n":"隘口镇"},{"v":"10349","n":"峨溶镇"},{"v":"10350","n":"官庄镇"},{"v":"10351","n":"洪安镇"},{"v":"10352","n":"兰桥镇"},{"v":"10353","n":"龙池镇"},{"v":"10354","n":"梅江镇"},{"v":"10355","n":"平凯镇"},{"v":"10356","n":"溶溪镇"},{"v":"10357","n":"石堤镇"},{"v":"10358","n":"石耶镇"},{"v":"10359","n":"雅江镇"},{"v":"10360","n":"巴家乡"},{"v":"10361","n":"保安乡"},{"v":"10362","n":"岑溪乡"},{"v":"10363","n":"大溪乡"},{"v":"10364","n":"干川乡"},{"v":"10365","n":"膏田乡"},{"v":"10366","n":"官舟乡"},{"v":"10367","n":"海洋乡"},{"v":"10368","n":"里仁乡"},{"v":"10369","n":"妙泉乡"},{"v":"10370","n":"平马乡"},{"v":"10371","n":"宋农乡"},{"v":"10372","n":"溪口乡"},{"v":"10373","n":"孝溪乡"},{"v":"10374","n":"涌洞乡"},{"v":"10375","n":"中平乡"},{"v":"10376","n":"钟灵乡"}]}]},{"v":"5","n":"河北","c":[{"v":"258","n":"唐山市","c":[{"v":"41497","n":"路北区"},{"v":"41499","n":"路南区"},{"v":"41500","n":"迁安市"},{"v":"41502","n":"丰润区"},{"v":"3202","n":"古冶区"},{"v":"3203","n":"开平区"},{"v":"2756","n":"遵化市"},{"v":"2757","n":"丰南区"},{"v":"2759","n":"迁西县"},{"v":"2760","n":"滦南县"},{"v":"2762","n":"玉田县"},{"v":"2763","n":"曹妃甸区"},{"v":"2764","n":"乐亭县"},{"v":"2765","n":"滦县"}]},{"v":"264","n":"沧州市","c":[{"v":"265","n":"沧县"},{"v":"266","n":"泊头市"},{"v":"268","n":"河间市"},{"v":"269","n":"献县"},{"v":"270","n":"肃宁县"},{"v":"271","n":"青县"},{"v":"272","n":"东光县"},{"v":"273","n":"吴桥县"},{"v":"276","n":"南皮县"},{"v":"277","n":"盐山县"},{"v":"278","n":"海兴县"},{"v":"279","n":"孟村县"},{"v":"49576","n":"运河区"},{"v":"49577","n":"新华区"},{"v":"49578","n":"任丘市"},{"v":"49579","n":"黄骅市"}]},{"v":"274","n":"廊坊市","c":[{"v":"49707","n":"三河市"},{"v":"3207","n":"广阳区"},{"v":"4097","n":"开发区"},{"v":"284","n":"固安县"},{"v":"3206","n":"安次区"},{"v":"285","n":"永清县"},{"v":"286","n":"香河县"},{"v":"287","n":"大城县"},{"v":"288","n":"文安县"},{"v":"289","n":"大厂县"},{"v":"49708","n":"霸州市"}]},{"v":"275","n":"衡水市","c":[{"v":"291","n":"冀州市"},{"v":"292","n":"深州市"},{"v":"293","n":"饶阳县"},{"v":"294","n":"枣强县"},{"v":"41510","n":"桃城区"},{"v":"295","n":"故城县"},{"v":"296","n":"阜城县"},{"v":"297","n":"安平县"},{"v":"298","n":"武邑县"},{"v":"299","n":"景县"},{"v":"300","n":"武强县"}]},{"v":"142","n":"石家庄市","c":[{"v":"42540","n":"藁城市"},{"v":"42541","n":"鹿泉市"},{"v":"42542","n":"正定县"},{"v":"42543","n":"新华区"},{"v":"42544","n":"桥西区"},{"v":"42545","n":"桥东区"},{"v":"42546","n":"裕华区"},{"v":"42547","n":"长安区"},{"v":"143","n":"辛集市"},{"v":"145","n":"晋州市"},{"v":"146","n":"新乐市"},{"v":"4158","n":"平山县"},{"v":"3182","n":"井陉矿区"},{"v":"153","n":"井陉县"},{"v":"154","n":"栾城县"},{"v":"156","n":"行唐县"},{"v":"157","n":"灵寿县"},{"v":"158","n":"高邑县"},{"v":"159","n":"赵县"},{"v":"160","n":"赞皇县"},{"v":"161","n":"深泽县"},{"v":"162","n":"无极县"},{"v":"163","n":"元氏县"}]},{"v":"148","n":"邯郸市","c":[{"v":"34049","n":"丛台区"},{"v":"34050","n":"邯山区"},{"v":"34051","n":"复兴区"},{"v":"34052","n":"武安市"},{"v":"3077","n":"临漳县"},{"v":"3187","n":"永年县"},{"v":"167","n":"邯郸县"},{"v":"168","n":"峰峰矿区"},{"v":"169","n":"曲周县"},{"v":"170","n":"馆陶县"},{"v":"171","n":"魏县"},{"v":"172","n":"成安县"},{"v":"173","n":"大名县"},{"v":"174","n":"涉县"},{"v":"175","n":"鸡泽县"},{"v":"176","n":"邱县"},{"v":"177","n":"广平县"},{"v":"178","n":"肥乡县"},{"v":"180","n":"磁县"}]},{"v":"164","n":"邢台市","c":[{"v":"257","n":"宁晋县"},{"v":"3098","n":"威县"},{"v":"47712","n":"桥西区"},{"v":"47713","n":"桥东区"},{"v":"183","n":"邢台县"},{"v":"184","n":"南宫市"},{"v":"185","n":"沙河市"},{"v":"186","n":"柏乡县"},{"v":"187","n":"任县"},{"v":"188","n":"清河县"},{"v":"189","n":"隆尧县"},{"v":"190","n":"临城县"},{"v":"191","n":"广宗县"},{"v":"192","n":"临西县"},{"v":"193","n":"内丘县"},{"v":"194","n":"平乡县"},{"v":"195","n":"巨鹿县"},{"v":"196","n":"新河县"},{"v":"197","n":"南和县"}]},{"v":"199","n":"保定市","c":[{"v":"47213","n":"涿州市"},{"v":"47214","n":"定州市"},{"v":"47215","n":"徐水县"},{"v":"47216","n":"高碑店市"},{"v":"3190","n":"新市区"},{"v":"3191","n":"北市区"},{"v":"3192","n":"南市区"},{"v":"203","n":"安国市"},{"v":"3193","n":"安新县"},{"v":"205","n":"满城县"},{"v":"206","n":"清苑县"},{"v":"207","n":"涞水县"},{"v":"208","n":"阜平县"},{"v":"210","n":"定兴县"},{"v":"211","n":"唐县"},{"v":"212","n":"高阳县"},{"v":"213","n":"容城县"},{"v":"214","n":"涞源县"},{"v":"215","n":"望都县"},{"v":"217","n":"易县"},{"v":"218","n":"曲阳县"},{"v":"219","n":"蠡县"},{"v":"220","n":"顺平县"},{"v":"221","n":"博野县"},{"v":"222","n":"雄县"}]},{"v":"224","n":"张家口市","c":[{"v":"230","n":"怀安县"},{"v":"3156","n":"沽源县"},{"v":"4046","n":"宣化区"},{"v":"225","n":"宣化县"},{"v":"226","n":"康保县"},{"v":"227","n":"张北县"},{"v":"228","n":"阳原县"},{"v":"229","n":"赤城县"},{"v":"232","n":"崇礼县"},{"v":"233","n":"尚义县"},{"v":"234","n":"蔚县"},{"v":"235","n":"涿鹿县"},{"v":"236","n":"万全县"},{"v":"238","n":"下花园区"},{"v":"34298","n":"桥西区"},{"v":"34299","n":"桥东区"},{"v":"231","n":"怀来县"}]},{"v":"239","n":"承德市","c":[{"v":"3197","n":"双滦区"},{"v":"3198","n":"鹰手营子矿区"},{"v":"2767","n":"隆化县"},{"v":"241","n":"兴隆县"},{"v":"242","n":"平泉县"},{"v":"243","n":"滦平县"},{"v":"245","n":"丰宁县"},{"v":"246","n":"围场县"},{"v":"247","n":"宽城县"},{"v":"48379","n":"双桥区"},{"v":"3092","n":"承德县"}]},{"v":"248","n":"秦皇岛市","c":[{"v":"261","n":"卢龙县"},{"v":"262","n":"青龙县"},{"v":"263","n":"昌黎县"},{"v":"2990","n":"北戴河区"},{"v":"48377","n":"海港区"},{"v":"48378","n":"山海关区"},{"v":"4093","n":"抚宁县"}]}]},{"v":"6","n":"山西","c":[{"v":"3074","n":"长治市","c":[{"v":"3075","n":"长治县"},{"v":"3109","n":"潞城市"},{"v":"3222","n":"郊区"},{"v":"3223","n":"襄垣县"},{"v":"3224","n":"屯留县"},{"v":"3225","n":"平顺县"},{"v":"3226","n":"黎城县"},{"v":"3227","n":"壶关县"},{"v":"3228","n":"长子县"},{"v":"3229","n":"武乡县"},{"v":"3230","n":"沁县"},{"v":"3231","n":"沁源县"},{"v":"32505","n":"城区"}]},{"v":"303","n":"太原市","c":[{"v":"36780","n":"小店区"},{"v":"36781","n":"迎泽区"},{"v":"36782","n":"晋源区"},{"v":"36783","n":"万柏林区"},{"v":"36784","n":"尖草坪区"},{"v":"36785","n":"杏花岭区"},{"v":"305","n":"古交市"},{"v":"304","n":"阳曲县"},{"v":"306","n":"娄烦县"},{"v":"307","n":"清徐县"}]},{"v":"309","n":"大同市","c":[{"v":"310","n":"大同县"},{"v":"311","n":"天镇县"},{"v":"312","n":"灵丘县"},{"v":"313","n":"阳高县"},{"v":"314","n":"左云县"},{"v":"315","n":"浑源县"},{"v":"316","n":"广灵县"},{"v":"32061","n":"城区"},{"v":"3214","n":"新荣区"},{"v":"3216","n":"南郊区"},{"v":"3217","n":"矿区"}]},{"v":"318","n":"阳泉市","c":[{"v":"319","n":"盂县"},{"v":"320","n":"平定县"},{"v":"321","n":"郊区"},{"v":"44144","n":"城区"},{"v":"3219","n":"矿区"}]},{"v":"325","n":"晋城市","c":[{"v":"3073","n":"城区"},{"v":"326","n":"高平市"},{"v":"327","n":"阳城县"},{"v":"328","n":"沁水县"},{"v":"329","n":"陵川县"},{"v":"2967","n":"泽州县"}]},{"v":"330","n":"朔州市","c":[{"v":"3118","n":"平鲁区"},{"v":"331","n":"山阴县"},{"v":"332","n":"右玉县"},{"v":"333","n":"应县"},{"v":"334","n":"怀仁县"},{"v":"335","n":"朔城区"}]},{"v":"336","n":"晋中市","c":[{"v":"338","n":"介休市"},{"v":"339","n":"昔阳县"},{"v":"341","n":"祁县"},{"v":"342","n":"左权县"},{"v":"343","n":"寿阳县"},{"v":"344","n":"太谷县"},{"v":"345","n":"和顺县"},{"v":"346","n":"灵石县"},{"v":"347","n":"平遥县"},{"v":"348","n":"榆社县"},{"v":"44145","n":"榆次区"}]},{"v":"350","n":"忻州市","c":[{"v":"351","n":"原平市"},{"v":"352","n":"代县"},{"v":"353","n":"神池县"},{"v":"354","n":"五寨县"},{"v":"358","n":"五台县"},{"v":"359","n":"偏关县"},{"v":"360","n":"宁武县"},{"v":"361","n":"静乐县"},{"v":"362","n":"繁峙县"},{"v":"363","n":"河曲县"},{"v":"364","n":"保德县"},{"v":"365","n":"定襄县"},{"v":"366","n":"忻府区"},{"v":"367","n":"岢岚县"}]},{"v":"368","n":"吕梁市","c":[{"v":"369","n":"离石区"},{"v":"370","n":"孝义市"},{"v":"371","n":"汾阳市"},{"v":"372","n":"文水县"},{"v":"373","n":"中阳县"},{"v":"374","n":"兴县"},{"v":"375","n":"临县"},{"v":"376","n":"方山县"},{"v":"377","n":"柳林县"},{"v":"378","n":"岚县"},{"v":"3235","n":"交口县"},{"v":"3236","n":"交城县"},{"v":"3237","n":"石楼县"}]},{"v":"379","n":"临汾市","c":[{"v":"3136","n":"曲沃县"},{"v":"380","n":"侯马市"},{"v":"381","n":"霍州市"},{"v":"382","n":"汾西县"},{"v":"383","n":"吉县"},{"v":"384","n":"安泽县"},{"v":"386","n":"浮山县"},{"v":"387","n":"大宁县"},{"v":"388","n":"古县"},{"v":"389","n":"隰县"},{"v":"390","n":"襄汾县"},{"v":"391","n":"翼城县"},{"v":"392","n":"永和县"},{"v":"393","n":"乡宁县"},{"v":"395","n":"洪洞县"},{"v":"396","n":"蒲县"},{"v":"32206","n":"尧都区"}]},{"v":"398","n":"运城市","c":[{"v":"32360","n":"盐湖区"},{"v":"399","n":"河津市"},{"v":"400","n":"永济市"},{"v":"402","n":"新绛县"},{"v":"403","n":"平陆县"},{"v":"404","n":"垣曲县"},{"v":"405","n":"绛县"},{"v":"406","n":"稷山县"},{"v":"407","n":"芮城县"},{"v":"408","n":"夏县"},{"v":"409","n":"临猗县"},{"v":"410","n":"万荣县"},{"v":"3233","n":"闻喜县"}]}]},{"v":"7","n":"河南","c":[{"v":"517","n":"商丘市","c":[{"v":"518","n":"永城市"},{"v":"519","n":"宁陵县"},{"v":"520","n":"虞城县"},{"v":"521","n":"民权县"},{"v":"522","n":"夏邑县"},{"v":"523","n":"柘城县"},{"v":"524","n":"睢县"},{"v":"34751","n":"睢阳区"},{"v":"34752","n":"梁园区"}]},{"v":"527","n":"周口市","c":[{"v":"529","n":"项城市"},{"v":"530","n":"商水县"},{"v":"531","n":"淮阳县"},{"v":"532","n":"太康县"},{"v":"533","n":"鹿邑县"},{"v":"534","n":"西华县"},{"v":"535","n":"扶沟县"},{"v":"536","n":"沈丘县"},{"v":"537","n":"郸城县"},{"v":"35108","n":"川汇区"},{"v":"34926","n":"东新区"},{"v":"34927","n":"经济开发区"}]},{"v":"538","n":"驻马店市","c":[{"v":"540","n":"确山县"},{"v":"541","n":"新蔡县"},{"v":"542","n":"上蔡县"},{"v":"543","n":"泌阳县"},{"v":"544","n":"西平县"},{"v":"545","n":"遂平县"},{"v":"546","n":"汝南县"},{"v":"547","n":"平舆县"},{"v":"548","n":"正阳县"},{"v":"35189","n":"驿城区"}]},{"v":"549","n":"信阳市","c":[{"v":"551","n":"潢川县"},{"v":"552","n":"淮滨县"},{"v":"553","n":"息县"},{"v":"554","n":"新县"},{"v":"556","n":"固始县"},{"v":"557","n":"罗山县"},{"v":"558","n":"光山县"},{"v":"3119","n":"商城县"},{"v":"34548","n":"平桥区"},{"v":"34549","n":"浉河区"}]},{"v":"412","n":"郑州市","c":[{"v":"3547","n":"二七区"},{"v":"3548","n":"中原区"},{"v":"4337","n":"郑东新区"},{"v":"3546","n":"管城区"},{"v":"3545","n":"金水区"},{"v":"47300","n":"经济开发区"},{"v":"47301","n":"高新技术开发区"},{"v":"46820","n":"新郑市"},{"v":"46821","n":"巩义市"},{"v":"46822","n":"荥阳市"},{"v":"46823","n":"中牟县"},{"v":"415","n":"新密市"},{"v":"416","n":"登封市"},{"v":"3544","n":"惠济区"},{"v":"2782","n":"上街区"}]},{"v":"420","n":"开封市","c":[{"v":"45533","n":"金明区"},{"v":"45534","n":"龙亭区"},{"v":"45535","n":"顺河区"},{"v":"45536","n":"鼓楼区"},{"v":"45537","n":"禹王台区"},{"v":"3127","n":"通许县"},{"v":"421","n":"开封县"},{"v":"422","n":"杞县"},{"v":"423","n":"兰考县"},{"v":"425","n":"尉氏县"}]},{"v":"427","n":"洛阳市","c":[{"v":"3556","n":"涧西区"},{"v":"3559","n":"西工区"},{"v":"45532","n":"洛龙区"},{"v":"4150","n":"嵩县"},{"v":"428","n":"偃师市"},{"v":"429","n":"孟津县"},{"v":"430","n":"汝阳县"},{"v":"431","n":"伊川县"},{"v":"432","n":"洛宁县"},{"v":"434","n":"宜阳县"},{"v":"435","n":"栾川县"},{"v":"436","n":"新安县"},{"v":"45531","n":"伊滨区"},{"v":"3555","n":"吉利区"},{"v":"3557","n":"瀍河区"},{"v":"3558","n":"老城区"}]},{"v":"438","n":"平顶山市","c":[{"v":"35965","n":"湛河区"},{"v":"35966","n":"卫东区"},{"v":"35967","n":"新华区"},{"v":"439","n":"汝州市"},{"v":"440","n":"舞钢市"},{"v":"441","n":"郏县"},{"v":"442","n":"叶县"},{"v":"443","n":"鲁山县"},{"v":"444","n":"宝丰县"},{"v":"3560","n":"石龙区"}]},{"v":"446","n":"焦作市","c":[{"v":"447","n":"沁阳市"},{"v":"448","n":"孟州市"},{"v":"449","n":"修武县"},{"v":"450","n":"温县"},{"v":"451","n":"武陟县"},{"v":"452","n":"博爱县"},{"v":"453","n":"山阳区"},{"v":"3566","n":"解放区"},{"v":"37371","n":"马村区"},{"v":"37372","n":"中站区"}]},{"v":"454","n":"鹤壁市","c":[{"v":"35591","n":"淇滨区"},{"v":"455","n":"浚县"},{"v":"456","n":"淇县"},{"v":"457","n":"鹤山区"},{"v":"3567","n":"山城区"}]},{"v":"458","n":"新乡市","c":[{"v":"37456","n":"牧野区"},{"v":"37457","n":"红旗区"},{"v":"37458","n":"卫滨区"},{"v":"459","n":"卫辉市"},{"v":"460","n":"辉县市"},{"v":"461","n":"新乡县"},{"v":"462","n":"获嘉县"},{"v":"463","n":"原阳县"},{"v":"464","n":"长垣县"},{"v":"465","n":"延津县"},{"v":"466","n":"封丘县"},{"v":"3570","n":"凤泉区"}]},{"v":"468","n":"安阳市","c":[{"v":"35470","n":"龙安区"},{"v":"35471","n":"殷都区"},{"v":"35472","n":"文峰区"},{"v":"35473","n":"开发区"},{"v":"35474","n":"北关区"},{"v":"469","n":"林州市"},{"v":"470","n":"安阳县"},{"v":"471","n":"滑县"},{"v":"472","n":"汤阴县"},{"v":"473","n":"内黄县"}]},{"v":"475","n":"濮阳市","c":[{"v":"476","n":"濮阳县"},{"v":"477","n":"南乐县"},{"v":"478","n":"台前县"},{"v":"479","n":"清丰县"},{"v":"480","n":"范县"},{"v":"481","n":"华龙区"}]},{"v":"2780","n":"济源市","c":[{"v":"52305","n":"城区"},{"v":"35178","n":"五龙口镇"},{"v":"35179","n":"下冶镇"},{"v":"35180","n":"轵城镇"},{"v":"35181","n":"王屋镇"},{"v":"35182","n":"思礼镇"},{"v":"35183","n":"邵原镇"},{"v":"35184","n":"坡头镇"},{"v":"35185","n":"梨林镇"},{"v":"35186","n":"克井镇"},{"v":"35187","n":"大峪镇"},{"v":"35188","n":"承留镇"}]},{"v":"482","n":"许昌市","c":[{"v":"488","n":"魏都区"},{"v":"483","n":"禹州市"},{"v":"484","n":"长葛市"},{"v":"485","n":"许昌县"},{"v":"486","n":"鄢陵县"},{"v":"487","n":"襄城县"}]},{"v":"489","n":"漯河市","c":[{"v":"490","n":"郾城区"},{"v":"492","n":"临颍县"},{"v":"493","n":"召陵区"},{"v":"494","n":"舞阳县"},{"v":"3576","n":"源汇区"}]},{"v":"495","n":"三门峡市","c":[{"v":"3113","n":"渑池县"},{"v":"35637","n":"湖滨区"},{"v":"496","n":"义马市"},{"v":"497","n":"灵宝市"},{"v":"498","n":"陕县"},{"v":"499","n":"卢氏县"}]},{"v":"502","n":"南阳市","c":[{"v":"512","n":"社旗县"},{"v":"515","n":"西峡县"},{"v":"35751","n":"卧龙区"},{"v":"35752","n":"宛城区"},{"v":"503","n":"邓州市"},{"v":"504","n":"桐柏县"},{"v":"505","n":"方城县"},{"v":"506","n":"淅川县"},{"v":"507","n":"镇平县"},{"v":"508","n":"唐河县"},{"v":"509","n":"南召县"},{"v":"510","n":"内乡县"},{"v":"511","n":"新野县"}]}]},{"v":"8","n":"辽宁","c":[{"v":"560","n":"沈阳市","c":[{"v":"567","n":"苏家屯区"},{"v":"569","n":"新民市"},{"v":"570","n":"法库县"},{"v":"571","n":"辽中县"},{"v":"572","n":"康平县"},{"v":"50819","n":"皇姑区"},{"v":"50820","n":"铁西区"},{"v":"50821","n":"大东区"},{"v":"50822","n":"沈河区"},{"v":"50823","n":"东陵区"},{"v":"50824","n":"于洪区"},{"v":"50825","n":"和平区"},{"v":"50826","n":"浑南新区"},{"v":"50827","n":"沈北新区"}]},{"v":"573","n":"大连市","c":[{"v":"4468","n":"中山区"},{"v":"3261","n":"沙河口区"},{"v":"3263","n":"西岗区"},{"v":"5909","n":"甘井子区"},{"v":"6561","n":"高新园区"},{"v":"6627","n":"大连开发区"},{"v":"46824","n":"金州区"},{"v":"46825","n":"旅顺口区"},{"v":"574","n":"普兰店市"},{"v":"575","n":"瓦房店市"},{"v":"576","n":"庄河市"},{"v":"577","n":"长海县"}]},{"v":"579","n":"鞍山市","c":[{"v":"3264","n":"铁东区"},{"v":"3266","n":"立山区"},{"v":"580","n":"台安县"},{"v":"581","n":"海城市"},{"v":"583","n":"岫岩县"},{"v":"37581","n":"铁西区"},{"v":"37582","n":"千山区"}]},{"v":"584","n":"抚顺市","c":[{"v":"3268","n":"望花区"},{"v":"3269","n":"东洲区"},{"v":"3270","n":"新抚区"},{"v":"3271","n":"顺城区"},{"v":"585","n":"抚顺县"},{"v":"586","n":"新宾县"},{"v":"587","n":"清原县"}]},{"v":"589","n":"本溪市","c":[{"v":"591","n":"桓仁县"},{"v":"41341","n":"本溪县"},{"v":"41342","n":"平山区"},{"v":"41343","n":"溪湖区"},{"v":"41344","n":"明山区"},{"v":"3275","n":"南芬区"}]},{"v":"593","n":"丹东市","c":[{"v":"20171","n":"元宝区"},{"v":"20172","n":"振兴区"},{"v":"20173","n":"振安区"},{"v":"20174","n":"东港市"},{"v":"20175","n":"凤城市"},{"v":"596","n":"宽甸县"}]},{"v":"598","n":"锦州市","c":[{"v":"4913","n":"凌河区"},{"v":"4912","n":"古塔区"},{"v":"4914","n":"太和区"},{"v":"599","n":"义县"},{"v":"600","n":"凌海市"},{"v":"601","n":"北镇市"},{"v":"602","n":"黑山县"},{"v":"6790","n":"经济技术开发区"}]},{"v":"604","n":"葫芦岛市","c":[{"v":"3300","n":"龙港区"},{"v":"20524","n":"连山区"},{"v":"20525","n":"兴城市"},{"v":"606","n":"绥中县"},{"v":"607","n":"建昌县"},{"v":"608","n":"南票区"}]},{"v":"609","n":"营口市","c":[{"v":"3283","n":"西市区"},{"v":"6628","n":"站前区"},{"v":"610","n":"大石桥市"},{"v":"611","n":"盖州市"},{"v":"3282","n":"老边区"},{"v":"20183","n":"鲅鱼圈区"}]},{"v":"613","n":"盘锦市","c":[{"v":"614","n":"盘山县"},{"v":"615","n":"大洼县"},{"v":"20661","n":"兴隆台区"},{"v":"20662","n":"双台子区"}]},{"v":"617","n":"阜新市","c":[{"v":"618","n":"阜新县"},{"v":"619","n":"彰武县"},{"v":"20658","n":"海州区"},{"v":"20659","n":"太平区"},{"v":"20660","n":"细河区"},{"v":"3286","n":"清河门区"},{"v":"3288","n":"新邱区"}]},{"v":"621","n":"辽阳市","c":[{"v":"623","n":"辽阳县"},{"v":"43963","n":"白塔区"},{"v":"43964","n":"文圣区"},{"v":"43965","n":"灯塔市"},{"v":"3290","n":"太子河区"},{"v":"3291","n":"弓长岭区"},{"v":"3292","n":"宏伟区"}]},{"v":"632","n":"朝阳市","c":[{"v":"633","n":"凌源市"},{"v":"634","n":"北票市"},{"v":"635","n":"喀喇沁左翼县"},{"v":"636","n":"朝阳县"},{"v":"20348","n":"双塔区"},{"v":"637","n":"建平县"},{"v":"3299","n":"龙城区"}]},{"v":"6858","n":"铁岭市","c":[{"v":"6859","n":"银州区"},{"v":"6860","n":"清河区"},{"v":"6862","n":"开原市"},{"v":"6863","n":"铁岭县"},{"v":"6864","n":"西丰县"},{"v":"6865","n":"昌图县"},{"v":"44027","n":"调兵山市"}]}]},{"v":"9","n":"吉林","c":[{"v":"639","n":"长春市","c":[{"v":"3172","n":"德惠市"},{"v":"640","n":"榆树市"},{"v":"641","n":"九台市"},{"v":"642","n":"农安县"},{"v":"38630","n":"朝阳区"},{"v":"38631","n":"南关区"},{"v":"38632","n":"宽城区"},{"v":"38633","n":"二道区"},{"v":"3306","n":"双阳区"},{"v":"38634","n":"绿园区"},{"v":"38635","n":"净月区"},{"v":"38636","n":"汽车产业开发区"},{"v":"38637","n":"高新技术开发区"},{"v":"38638","n":"经济技术开发区"}]},{"v":"644","n":"吉林市","c":[{"v":"24069","n":"昌邑区"},{"v":"24070","n":"龙潭区"},{"v":"24071","n":"船营区"},{"v":"24072","n":"丰满区"},{"v":"645","n":"舒兰市"},{"v":"646","n":"桦甸市"},{"v":"647","n":"蛟河市"},{"v":"648","n":"磐石市"},{"v":"649","n":"永吉县"}]},{"v":"651","n":"四平市","c":[{"v":"6641","n":"铁东区"},{"v":"6642","n":"铁西区"},{"v":"652","n":"公主岭市"},{"v":"653","n":"双辽市"},{"v":"654","n":"梨树县"},{"v":"656","n":"伊通县"}]},{"v":"657","n":"通化市","c":[{"v":"3311","n":"东昌区"},{"v":"658","n":"梅河口市"},{"v":"659","n":"集安市"},{"v":"660","n":"通化县"},{"v":"661","n":"辉南县"},{"v":"662","n":"柳河县"},{"v":"663","n":"二道江区"}]},{"v":"664","n":"白山市","c":[{"v":"24074","n":"浑江区"},{"v":"665","n":"临江市"},{"v":"669","n":"江源区"},{"v":"671","n":"靖宇县"},{"v":"672","n":"抚松县"},{"v":"673","n":"长白县"}]},{"v":"674","n":"松原市","c":[{"v":"24075","n":"宁江区"},{"v":"24076","n":"前郭县"},{"v":"675","n":"乾安县"},{"v":"676","n":"长岭县"},{"v":"677","n":"扶余县"}]},{"v":"681","n":"白城市","c":[{"v":"682","n":"大安市"},{"v":"683","n":"洮南市"},{"v":"684","n":"通榆县"},{"v":"685","n":"镇赉县"},{"v":"686","n":"洮北区"}]},{"v":"687","n":"延边州","c":[{"v":"24073","n":"延吉市"},{"v":"3312","n":"图们市"},{"v":"3313","n":"敦化市"},{"v":"3314","n":"珲春市"},{"v":"3315","n":"龙井市"},{"v":"3316","n":"和龙市"},{"v":"3317","n":"汪清县"},{"v":"3318","n":"安图县"}]},{"v":"2992","n":"辽源市","c":[{"v":"2993","n":"龙山区"},{"v":"2994","n":"西安区"},{"v":"2995","n":"东丰县"},{"v":"2996","n":"东辽县"}]}]},{"v":"10","n":"黑龙江","c":[{"v":"773","n":"七台河市","c":[{"v":"774","n":"勃利县"},{"v":"3364","n":"桃山区"},{"v":"3365","n":"新兴区"},{"v":"3366","n":"茄子河区"},{"v":"53287","n":"金沙新区"}]},{"v":"776","n":"黑河市","c":[{"v":"777","n":"北安市"},{"v":"778","n":"五大连池市"},{"v":"779","n":"逊克县"},{"v":"780","n":"孙吴县"},{"v":"3096","n":"嫩江县"},{"v":"3371","n":"爱辉区"}]},{"v":"782","n":"绥化市","c":[{"v":"6712","n":"北林区"},{"v":"784","n":"安达市"},{"v":"785","n":"肇东市"},{"v":"786","n":"海伦市"},{"v":"787","n":"绥棱县"},{"v":"788","n":"兰西县"},{"v":"789","n":"明水县"},{"v":"790","n":"青冈县"},{"v":"791","n":"庆安县"},{"v":"792","n":"望奎县"}]},{"v":"793","n":"大兴安岭地区","c":[{"v":"4114","n":"加格达奇区"},{"v":"4115","n":"松岭区"},{"v":"4116","n":"呼中区"},{"v":"794","n":"呼玛县"},{"v":"795","n":"塔河县"},{"v":"796","n":"漠河县"},{"v":"11432","n":"新林区"}]},{"v":"698","n":"哈尔滨市","c":[{"v":"699","n":"阿城区"},{"v":"700","n":"尚志市"},{"v":"701","n":"双城市"},{"v":"702","n":"五常市"},{"v":"704","n":"方正县"},{"v":"705","n":"宾县"},{"v":"706","n":"依兰县"},{"v":"707","n":"巴彦县"},{"v":"708","n":"通河县"},{"v":"709","n":"木兰县"},{"v":"710","n":"延寿县"},{"v":"45814","n":"呼兰区"},{"v":"45815","n":"松北区"},{"v":"45816","n":"道里区"},{"v":"45817","n":"南岗区"},{"v":"45818","n":"道外区"},{"v":"45819","n":"香坊区"},{"v":"45820","n":"平房区"}]},{"v":"712","n":"齐齐哈尔市","c":[{"v":"33404","n":"建华区"},{"v":"33405","n":"龙沙区"},{"v":"33406","n":"铁锋区"},{"v":"713","n":"梅里斯区"},{"v":"714","n":"昂昂溪区"},{"v":"715","n":"富拉尔基区"},{"v":"716","n":"碾子山区"},{"v":"717","n":"讷河市"},{"v":"718","n":"富裕县"},{"v":"719","n":"拜泉县"},{"v":"720","n":"甘南县"},{"v":"721","n":"依安县"},{"v":"722","n":"克山县"},{"v":"723","n":"龙江县"},{"v":"724","n":"克东县"},{"v":"725","n":"泰来县"}]},{"v":"727","n":"鹤岗市","c":[{"v":"3334","n":"兴山区"},{"v":"3335","n":"向阳区"},{"v":"3336","n":"工农区"},{"v":"3337","n":"南山区"},{"v":"3338","n":"兴安区"},{"v":"3339","n":"东山区"},{"v":"728","n":"萝北县"},{"v":"729","n":"绥滨县"}]},{"v":"731","n":"双鸭山市","c":[{"v":"3340","n":"尖山区"},{"v":"3341","n":"岭东区"},{"v":"3342","n":"四方台区"},{"v":"3343","n":"宝山区"},{"v":"733","n":"集贤县"},{"v":"734","n":"宝清县"},{"v":"735","n":"友谊县"},{"v":"736","n":"饶河县"}]},{"v":"737","n":"鸡西市","c":[{"v":"3329","n":"恒山区"},{"v":"3330","n":"滴道区"},{"v":"3331","n":"梨树区"},{"v":"3332","n":"城子河区"},{"v":"3333","n":"麻山区"},{"v":"33163","n":"鸡冠区"},{"v":"739","n":"密山市"},{"v":"740","n":"虎林市"},{"v":"741","n":"鸡东县"}]},{"v":"742","n":"大庆市","c":[{"v":"744","n":"萨尔图区"},{"v":"745","n":"龙凤区"},{"v":"746","n":"让胡路区"},{"v":"747","n":"红岗区"},{"v":"748","n":"大同区"},{"v":"749","n":"林甸县"},{"v":"750","n":"肇州县"},{"v":"751","n":"肇源县"},{"v":"752","n":"杜尔伯特县"}]},{"v":"753","n":"伊春市","c":[{"v":"3344","n":"伊春区"},{"v":"3345","n":"南岔区"},{"v":"3346","n":"友好区"},{"v":"3347","n":"西林区"},{"v":"3348","n":"翠峦区"},{"v":"3349","n":"新青区"},{"v":"3350","n":"美溪区"},{"v":"3351","n":"金山屯区"},{"v":"3352","n":"五营区"},{"v":"3353","n":"乌马河区"},{"v":"3354","n":"汤旺河区"},{"v":"3355","n":"带岭区"},{"v":"3356","n":"乌伊岭区"},{"v":"3357","n":"红星区"},{"v":"3358","n":"上甘岭区"},{"v":"754","n":"铁力市"},{"v":"755","n":"嘉荫县"}]},{"v":"757","n":"牡丹江市","c":[{"v":"3367","n":"爱民区"},{"v":"3368","n":"东安区"},{"v":"3369","n":"阳明区"},{"v":"3370","n":"西安区"},{"v":"4148","n":"绥芬河市"},{"v":"758","n":"海林市"},{"v":"760","n":"宁安市"},{"v":"761","n":"穆棱市"},{"v":"762","n":"林口县"},{"v":"763","n":"东宁县"}]},{"v":"765","n":"佳木斯市","c":[{"v":"768","n":"桦川县"},{"v":"769","n":"抚远县"},{"v":"770","n":"桦南县"},{"v":"771","n":"汤原县"},{"v":"33269","n":"前进区"},{"v":"33270","n":"向阳区"},{"v":"33271","n":"东风区"},{"v":"33272","n":"郊区"},{"v":"766","n":"同江市"},{"v":"767","n":"富锦市"}]}]},{"v":"11","n":"内蒙古","c":[{"v":"799","n":"呼和浩特市","c":[{"v":"3240","n":"玉泉区"},{"v":"3241","n":"赛罕区"},{"v":"801","n":"土默特左旗"},{"v":"802","n":"和林格尔县"},{"v":"803","n":"武川县"},{"v":"804","n":"托克托县"},{"v":"3133","n":"清水河县"},{"v":"32652","n":"回民区"},{"v":"32653","n":"新城区"}]},{"v":"805","n":"包头市","c":[{"v":"807","n":"固阳县"},{"v":"808","n":"土默特右旗"},{"v":"809","n":"达茂联合旗"},{"v":"38251","n":"东河区"},{"v":"38252","n":"九原区"},{"v":"38253","n":"青山区"},{"v":"38254","n":"昆都仑区"},{"v":"3245","n":"石拐区"},{"v":"3246","n":"白云矿区"}]},{"v":"810","n":"乌海市","c":[{"v":"811","n":"海勃湾区"},{"v":"3248","n":"海南区"},{"v":"3249","n":"乌达区"}]},{"v":"812","n":"赤峰市","c":[{"v":"814","n":"宁城县"},{"v":"815","n":"敖汉旗"},{"v":"816","n":"喀喇沁旗"},{"v":"817","n":"翁牛特旗"},{"v":"818","n":"巴林右旗"},{"v":"819","n":"林西县"},{"v":"820","n":"克什克腾旗"},{"v":"821","n":"巴林左旗"},{"v":"822","n":"阿鲁科尔沁旗"},{"v":"3199","n":"元宝山区"},{"v":"32937","n":"红山区"},{"v":"3251","n":"松山区"}]},{"v":"823","n":"乌兰察布市","c":[{"v":"824","n":"集宁区"},{"v":"825","n":"丰镇市"},{"v":"826","n":"兴和县"},{"v":"827","n":"卓资县"},{"v":"828","n":"商都县"},{"v":"829","n":"凉城县"},{"v":"830","n":"化德县"},{"v":"831","n":"察哈尔右翼前旗"},{"v":"832","n":"察哈尔右翼中旗"},{"v":"833","n":"察哈尔右翼后旗"},{"v":"834","n":"四子王旗"}]},{"v":"835","n":"锡林郭勒盟","c":[{"v":"836","n":"锡林浩特市"},{"v":"837","n":"二连浩特市"},{"v":"838","n":"多伦县"},{"v":"839","n":"阿巴嘎旗"},{"v":"840","n":"西乌珠穆沁旗"},{"v":"841","n":"东乌珠穆沁旗"},{"v":"842","n":"苏尼特右旗"},{"v":"843","n":"苏尼特左旗"},{"v":"844","n":"太仆寺旗"},{"v":"845","n":"正镶白旗"},{"v":"846","n":"正蓝旗"},{"v":"847","n":"镶黄旗"}]},{"v":"848","n":"呼伦贝尔市","c":[{"v":"849","n":"海拉尔区"},{"v":"850","n":"满洲里市"},{"v":"851","n":"牙克石市"},{"v":"852","n":"扎兰屯市"},{"v":"853","n":"根河市"},{"v":"854","n":"额尔古纳市"},{"v":"855","n":"陈巴尔虎旗"},{"v":"856","n":"阿荣旗"},{"v":"857","n":"新巴尔虎左旗"},{"v":"858","n":"新巴尔虎右旗"},{"v":"859","n":"鄂伦春旗"},{"v":"860","n":"莫力达瓦旗"},{"v":"861","n":"鄂温克族旗"}]},{"v":"870","n":"鄂尔多斯市","c":[{"v":"871","n":"东胜区"},{"v":"872","n":"准格尔旗"},{"v":"874","n":"伊金霍洛旗"},{"v":"875","n":"乌审旗"},{"v":"876","n":"杭锦旗"},{"v":"877","n":"鄂托克旗"},{"v":"878","n":"鄂托克前旗"},{"v":"879","n":"达拉特旗"},{"v":"18374","n":"康巴什新区"}]},{"v":"880","n":"巴彦淖尔市","c":[{"v":"881","n":"临河区"},{"v":"882","n":"五原县"},{"v":"883","n":"磴口县"},{"v":"884","n":"杭锦后旗"},{"v":"885","n":"乌拉特中旗"},{"v":"888","n":"乌拉特后旗 "},{"v":"890","n":"乌拉特前旗"}]},{"v":"891","n":"阿拉善盟","c":[{"v":"892","n":"阿拉善右旗"},{"v":"893","n":"阿拉善左旗"},{"v":"894","n":"额济纳旗"}]},{"v":"895","n":"兴安盟","c":[{"v":"896","n":"乌兰浩特市"},{"v":"897","n":"阿尔山市"},{"v":"898","n":"突泉县"},{"v":"899","n":"扎赉特旗"},{"v":"900","n":"科尔沁右翼前旗"},{"v":"901","n":"科尔沁右翼中旗"}]},{"v":"902","n":"通辽市","c":[{"v":"32769","n":"科尔沁区"},{"v":"3142","n":"霍林郭勒市"},{"v":"3252","n":"开鲁县"},{"v":"3253","n":"库伦旗"},{"v":"3254","n":"奈曼旗"},{"v":"3255","n":"扎鲁特旗"},{"v":"3256","n":"科尔沁左翼中旗"},{"v":"3258","n":"科尔沁左翼后旗"}]}]},{"v":"12","n":"江苏","c":[{"v":"904","n":"南京市","c":[{"v":"3373","n":"玄武区"},{"v":"3375","n":"秦淮区"},{"v":"3376","n":"建邺区"},{"v":"3377","n":"鼓楼区"},{"v":"3378","n":"栖霞区"},{"v":"905","n":"江宁区"},{"v":"908","n":"六合区"},{"v":"3379","n":"雨花台区"},{"v":"907","n":"高淳区"},{"v":"3024","n":"溧水区"},{"v":"50647","n":"浦口区"}]},{"v":"911","n":"徐州市","c":[{"v":"3388","n":"贾汪区"},{"v":"4223","n":"金山桥开发区"},{"v":"4224","n":"铜山经济技术开发区"},{"v":"4228","n":"八段工业园区"},{"v":"23686","n":"鼓楼区"},{"v":"23687","n":"邳州市"},{"v":"23688","n":"泉山区"},{"v":"23689","n":"新沂市"},{"v":"23690","n":"云龙区"},{"v":"914","n":"铜山区"},{"v":"915","n":"睢宁县"},{"v":"916","n":"沛县"},{"v":"917","n":"丰县"}]},{"v":"919","n":"连云港市","c":[{"v":"23684","n":"海州区"},{"v":"920","n":"赣榆区"},{"v":"4248","n":"连云区"},{"v":"921","n":"灌云县"},{"v":"922","n":"东海县"},{"v":"923","n":"灌南县"}]},{"v":"925","n":"淮安市","c":[{"v":"4305","n":"经济开发区"},{"v":"926","n":"楚州区"},{"v":"929","n":"洪泽县"},{"v":"930","n":"金湖县"},{"v":"931","n":"盱眙县"},{"v":"36560","n":"清河区"},{"v":"36561","n":"淮阴区"},{"v":"36562","n":"清浦区"},{"v":"36563","n":"涟水县"}]},{"v":"933","n":"宿迁市","c":[{"v":"3407","n":"宿城区"},{"v":"8558","n":"沭阳县"},{"v":"8559","n":"泗阳县"},{"v":"934","n":"宿豫区"},{"v":"937","n":"泗洪县"},{"v":"40649","n":"宿迁经济开发区"}]},{"v":"939","n":"盐城市","c":[{"v":"23681","n":"射阳县"},{"v":"23682","n":"亭湖区"},{"v":"23683","n":"盐都区"},{"v":"940","n":"东台市"},{"v":"941","n":"大丰区"},{"v":"945","n":"建湖县"},{"v":"946","n":"响水县"},{"v":"948","n":"阜宁县"},{"v":"949","n":"滨海县"}]},{"v":"951","n":"扬州市","c":[{"v":"955","n":"广陵区"},{"v":"956","n":"邗江区"},{"v":"957","n":"宝应县"},{"v":"42218","n":"仪征市"},{"v":"42219","n":"高邮市"},{"v":"42220","n":"江都区"}]},{"v":"959","n":"泰州市","c":[{"v":"3406","n":"海陵区"},{"v":"3405","n":"高港区"},{"v":"960","n":"泰兴市"},{"v":"962","n":"靖江市"},{"v":"963","n":"兴化市"},{"v":"40174","n":"姜堰区"}]},{"v":"965","n":"南通市","c":[{"v":"3394","n":"港闸区"},{"v":"3395","n":"崇川区"},{"v":"967","n":"通州区"},{"v":"4385","n":"南通经济技术开发区"},{"v":"970","n":"如东县"},{"v":"2774","n":"海安县"},{"v":"38364","n":"如皋市"},{"v":"38365","n":"海门市"},{"v":"38366","n":"启东市"}]},{"v":"972","n":"镇江市","c":[{"v":"3403","n":"润州区"},{"v":"3404","n":"京口区"},{"v":"976","n":"丹徒区"},{"v":"4916","n":"镇江新区"},{"v":"38517","n":"丹阳市"},{"v":"38518","n":"句容市"},{"v":"973","n":"扬中市"},{"v":"51180","n":"丹徒新区"}]},{"v":"978","n":"常州市","c":[{"v":"3392","n":"钟楼区"},{"v":"3393","n":"天宁区"},{"v":"4459","n":"武进区"},{"v":"2927","n":"新北区"},{"v":"980","n":"金坛区"},{"v":"981","n":"溧阳市"}]},{"v":"984","n":"无锡市","c":[{"v":"3381","n":"崇安区"},{"v":"3382","n":"南长区"},{"v":"3383","n":"北塘区"},{"v":"3384","n":"锡山区"},{"v":"3385","n":"惠山区"},{"v":"4029","n":"新区"},{"v":"13989","n":"江阴市"},{"v":"15943","n":"宜兴市"},{"v":"40035","n":"滨湖区"}]},{"v":"988","n":"苏州市","c":[{"v":"993","n":"常熟市"},{"v":"994","n":"张家港市"},{"v":"4346","n":"太仓市"},{"v":"3082","n":"相城区"},{"v":"3083","n":"金阊区"},{"v":"3085","n":"虎丘区"},{"v":"3087","n":"平江区"},{"v":"3088","n":"沧浪区"},{"v":"3444","n":"工业园区"},{"v":"3742","n":"高新区"},{"v":"39628","n":"吴江区"},{"v":"40034","n":"吴中区"},{"v":"47821","n":"昆山市"}]}]},{"v":"13","n":"山东","c":[{"v":"1025","n":"东营市","c":[{"v":"1026","n":"河口区"},{"v":"1027","n":"广饶县"},{"v":"1028","n":"利津县"},{"v":"1029","n":"垦利区"},{"v":"36884","n":"东营区"}]},{"v":"1032","n":"潍坊市","c":[{"v":"28921","n":"潍城区"},{"v":"28922","n":"奎文区"},{"v":"28923","n":"高新区"},{"v":"28924","n":"寒亭区"},{"v":"28925","n":"寿光市"},{"v":"1033","n":"青州市"},{"v":"1034","n":"诸城市"},{"v":"1036","n":"安丘市"},{"v":"1037","n":"高密市"},{"v":"1038","n":"昌邑市"},{"v":"1039","n":"昌乐县"},{"v":"1041","n":"临朐县"},{"v":"3530","n":"坊子区"}]},{"v":"1042","n":"烟台市","c":[{"v":"3528","n":"莱山区"},{"v":"3126","n":"芝罘区"},{"v":"51029","n":"开发区"},{"v":"46504","n":"福山区"},{"v":"46505","n":"牟平区"},{"v":"46506","n":"龙口市"},{"v":"46507","n":"莱州市"},{"v":"1044","n":"莱阳市"},{"v":"1047","n":"招远市"},{"v":"1048","n":"蓬莱市"},{"v":"1049","n":"栖霞市"},{"v":"1050","n":"海阳市"},{"v":"1051","n":"长岛县"}]},{"v":"1053","n":"威海市","c":[{"v":"28928","n":"荣成市"},{"v":"28929","n":"文登市"},{"v":"1054","n":"乳山市"},{"v":"28926","n":"环翠区"}]},{"v":"1058","n":"莱芜市","c":[{"v":"1059","n":"莱城区"},{"v":"3539","n":"钢城区"}]},{"v":"1060","n":"德州市","c":[{"v":"3542","n":"德城区"},{"v":"1069","n":"临邑县"},{"v":"25879","n":"齐河县"},{"v":"1061","n":"乐陵市"},{"v":"1062","n":"禹城市"},{"v":"1063","n":"陵县"},{"v":"1064","n":"宁津县"},{"v":"1066","n":"武城县"},{"v":"1067","n":"庆云县"},{"v":"1068","n":"平原县"},{"v":"1071","n":"夏津县"}]},{"v":"1072","n":"临沂市","c":[{"v":"52023","n":"兰陵县"},{"v":"28930","n":"兰山区"},{"v":"28931","n":"河东区"},{"v":"1073","n":"沂南县"},{"v":"1074","n":"沂水县"},{"v":"1076","n":"费县"},{"v":"1077","n":"平邑县"},{"v":"1078","n":"蒙阴县"},{"v":"1079","n":"临沭县"},{"v":"2926","n":"莒南县"},{"v":"2974","n":"郯城县"},{"v":"3540","n":"罗庄区"}]},{"v":"1081","n":"聊城市","c":[{"v":"25880","n":"东昌府区"},{"v":"1082","n":"临清市"},{"v":"1084","n":"阳谷县"},{"v":"1085","n":"茌平县"},{"v":"1086","n":"莘县"},{"v":"1087","n":"东阿县"},{"v":"1088","n":"冠县"},{"v":"4043","n":"高唐县"}]},{"v":"1090","n":"滨州市","c":[{"v":"25877","n":"北海新区"},{"v":"25878","n":"滨城区"},{"v":"1092","n":"邹平县"},{"v":"1093","n":"沾化县"},{"v":"1094","n":"惠民县"},{"v":"1095","n":"博兴县"},{"v":"1096","n":"阳信县"},{"v":"2772","n":"无棣县"}]},{"v":"1099","n":"菏泽市","c":[{"v":"3543","n":"牡丹区"},{"v":"1101","n":"单县"},{"v":"1102","n":"曹县"},{"v":"1103","n":"定陶县"},{"v":"1104","n":"巨野县"},{"v":"1105","n":"成武县"},{"v":"1106","n":"东明县"},{"v":"1107","n":"郓城县"},{"v":"2773","n":"鄄城县"}]},{"v":"1108","n":"日照市","c":[{"v":"4113","n":"岚山区"},{"v":"4196","n":"新市区"},{"v":"2934","n":"五莲县"},{"v":"28920","n":"东港区"},{"v":"3068","n":"莒县"}]},{"v":"2900","n":"济宁市","c":[{"v":"2908","n":"梁山县"},{"v":"2910","n":"兖州市"},{"v":"2912","n":"微山县"},{"v":"2913","n":"汶上县"},{"v":"2914","n":"泗水县"},{"v":"2915","n":"嘉祥县"},{"v":"2916","n":"鱼台县"},{"v":"2917","n":"金乡县"},{"v":"25713","n":"邹城市"},{"v":"25714","n":"市中区"},{"v":"25715","n":"曲阜市"},{"v":"25728","n":"高新区"},{"v":"3533","n":"任城区"}]},{"v":"1112","n":"泰安市","c":[{"v":"3132","n":"东平县"},{"v":"46665","n":"岱岳区"},{"v":"46666","n":"泰山区"},{"v":"46667","n":"肥城市"},{"v":"46668","n":"新泰市"},{"v":"3535","n":"宁阳县"}]},{"v":"1000","n":"济南市","c":[{"v":"4277","n":"高新区"},{"v":"1002","n":"长清区"},{"v":"40488","n":"历城区"},{"v":"40489","n":"天桥区"},{"v":"40490","n":"槐荫区"},{"v":"40491","n":"历下区"},{"v":"40492","n":"市中区"},{"v":"40493","n":"章丘市"},{"v":"1003","n":"平阴县"},{"v":"1004","n":"济阳县"},{"v":"1005","n":"商河县"}]},{"v":"1007","n":"青岛市","c":[{"v":"3519","n":"四方区"},{"v":"3520","n":"市北区"},{"v":"3521","n":"市南区"},{"v":"5505","n":"黄岛区"},{"v":"4909","n":"李沧区"},{"v":"37916","n":"即墨市"},{"v":"37917","n":"城阳区"},{"v":"37918","n":"崂山区"},{"v":"37919","n":"胶州市"},{"v":"37920","n":"平度市"},{"v":"1014","n":"莱西市"}]},{"v":"1016","n":"淄博市","c":[{"v":"2969","n":"临淄区"},{"v":"47166","n":"张店区"},{"v":"2924","n":"周村区"},{"v":"2962","n":"淄川区"},{"v":"2968","n":"博山区"},{"v":"1019","n":"高青县"},{"v":"1020","n":"沂源县"},{"v":"1021","n":"桓台县"}]},{"v":"1022","n":"枣庄市","c":[{"v":"28932","n":"滕州市"},{"v":"3522","n":"山亭区"},{"v":"3523","n":"台儿庄区"},{"v":"3524","n":"峄城区"},{"v":"3525","n":"薛城区"},{"v":"3526","n":"市中区"}]}]},{"v":"14","n":"安徽","c":[{"v":"1114","n":"铜陵市","c":[{"v":"52830","n":"铜官区"},{"v":"52832","n":"枞阳县"},{"v":"19784","n":"郊区"},{"v":"19786","n":"义安区"}]},{"v":"1116","n":"合肥市","c":[{"v":"3431","n":"包河区"},{"v":"3432","n":"蜀山区"},{"v":"3433","n":"瑶海区"},{"v":"3434","n":"庐阳区"},{"v":"6118","n":"滨湖新区"},{"v":"4173","n":"经济技术开发区"},{"v":"4192","n":"高新技术开发区"},{"v":"6120","n":"新站综合开发试验区"},{"v":"36173","n":"肥西县"},{"v":"6119","n":"政务文化新区"},{"v":"49709","n":"巢湖市"},{"v":"49710","n":"长丰县"},{"v":"1119","n":"肥东县"},{"v":"1190","n":"庐江县"},{"v":"6117","n":"北城新区"}]},{"v":"1121","n":"淮南市","c":[{"v":"4960","n":"淮南高新技术开发区"},{"v":"3447","n":"田家庵区"},{"v":"3448","n":"大通区"},{"v":"3449","n":"谢家集区"},{"v":"3450","n":"八公山区"},{"v":"52831","n":"寿县"},{"v":"1122","n":"凤台县"},{"v":"3451","n":"潘集区"}]},{"v":"1124","n":"淮北市","c":[{"v":"19223","n":"杜集区"},{"v":"19224","n":"烈山区"},{"v":"19225","n":"濉溪县"},{"v":"19226","n":"相山区"}]},{"v":"1127","n":"芜湖市","c":[{"v":"3438","n":"镜湖区"},{"v":"4172","n":"弋江区"},{"v":"1189","n":"无为县"},{"v":"1128","n":"芜湖县"},{"v":"1129","n":"繁昌县"},{"v":"1130","n":"南陵县"},{"v":"49137","n":"鸠江区"},{"v":"49138","n":"三山区"}]},{"v":"1132","n":"蚌埠市","c":[{"v":"3442","n":"蚌山区"},{"v":"1133","n":"怀远县"},{"v":"1134","n":"固镇县"},{"v":"1135","n":"五河县"},{"v":"18549","n":"淮上区"},{"v":"18550","n":"龙子湖区"},{"v":"18551","n":"禹会区"}]},{"v":"1137","n":"马鞍山市","c":[{"v":"6963","n":"博望区"},{"v":"49253","n":"花山区"},{"v":"49254","n":"雨山区"},{"v":"1138","n":"当涂县"},{"v":"1187","n":"含山县"},{"v":"1188","n":"和县"}]},{"v":"1140","n":"安庆市","c":[{"v":"1141","n":"桐城市"},{"v":"1142","n":"宿松县"},{"v":"1144","n":"太湖县"},{"v":"1145","n":"怀宁县"},{"v":"1146","n":"岳西县"},{"v":"1147","n":"望江县"},{"v":"1148","n":"潜山县"},{"v":"18375","n":"大观区"},{"v":"18376","n":"宜秀区"},{"v":"18377","n":"迎江区"}]},{"v":"1151","n":"黄山市","c":[{"v":"19227","n":"徽州区"},{"v":"19228","n":"屯溪区"},{"v":"1153","n":"休宁县"},{"v":"1154","n":"歙县"},{"v":"1155","n":"黟县"},{"v":"1156","n":"祁门县"},{"v":"3464","n":"黄山区"}]},{"v":"1159","n":"滁州市","c":[{"v":"18715","n":"琅琊区"},{"v":"18716","n":"天长市"},{"v":"1161","n":"明光市"},{"v":"1162","n":"全椒县"},{"v":"1163","n":"来安县"},{"v":"3467","n":"南谯区"},{"v":"1164","n":"定远县"},{"v":"1165","n":"凤阳县"}]},{"v":"1167","n":"阜阳市","c":[{"v":"4832","n":"经济开发区"},{"v":"1168","n":"界首市"},{"v":"1169","n":"太和县"},{"v":"1170","n":"阜南县"},{"v":"1171","n":"颍上县"},{"v":"1172","n":"临泉县"},{"v":"19158","n":"颍泉区"},{"v":"19159","n":"颍州区"},{"v":"19160","n":"颍东区"}]},{"v":"1174","n":"亳州市","c":[{"v":"1176","n":"利辛县"},{"v":"1177","n":"蒙城县"},{"v":"1178","n":"涡阳县"},{"v":"18627","n":"谯城区"}]},{"v":"2971","n":"宣城市","c":[{"v":"3128","n":"旌德县"},{"v":"3147","n":"宁国市"},{"v":"3477","n":"郎溪县"},{"v":"3478","n":"广德县"},{"v":"3479","n":"绩溪县"},{"v":"2972","n":"泾县"},{"v":"19684","n":"宣州区"}]},{"v":"1180","n":"宿州市","c":[{"v":"6006","n":"经济开发区"},{"v":"19575","n":"埇桥区"},{"v":"1181","n":"灵璧县"},{"v":"1182","n":"泗县"},{"v":"1183","n":"萧县"},{"v":"1184","n":"砀山县"}]},{"v":"1201","n":"池州市","c":[{"v":"18714","n":"贵池区"},{"v":"1202","n":"东至县"},{"v":"1203","n":"石台县"},{"v":"1204","n":"青阳县"}]},{"v":"1206","n":"六安市","c":[{"v":"1208","n":"霍山县"},{"v":"1209","n":"金寨县"},{"v":"1210","n":"霍邱县"},{"v":"1211","n":"舒城县"},{"v":"18912","n":"金安区"},{"v":"18913","n":"裕安区"}]}]},{"v":"15","n":"浙江","c":[{"v":"1280","n":"丽水市","c":[{"v":"1281","n":"龙泉市"},{"v":"1282","n":"缙云县"},{"v":"1283","n":"遂昌县"},{"v":"1284","n":"松阳县"},{"v":"1285","n":"景宁县"},{"v":"1286","n":"云和县"},{"v":"1288","n":"青田县"},{"v":"22043","n":"莲都区"},{"v":"3045","n":"庆元县"}]},{"v":"1290","n":"台州市","c":[{"v":"1291","n":"临海市"},{"v":"1294","n":"三门县"},{"v":"1295","n":"天台县"},{"v":"1296","n":"仙居县"},{"v":"22046","n":"黄岩区"},{"v":"22047","n":"椒江区"},{"v":"22048","n":"路桥区"},{"v":"22049","n":"温岭市"},{"v":"22050","n":"玉环县"}]},{"v":"1298","n":"舟山市","c":[{"v":"1300","n":"岱山县"},{"v":"1301","n":"嵊泗县"},{"v":"42565","n":"普陀区"},{"v":"42566","n":"定海区"}]},{"v":"1158","n":"宁波市","c":[{"v":"3412","n":"海曙区"},{"v":"3413","n":"江东区"},{"v":"4253","n":"高新科技开发区"},{"v":"1224","n":"慈溪市"},{"v":"46341","n":"北仑区"},{"v":"46342","n":"镇海区"},{"v":"46343","n":"鄞州区"},{"v":"46344","n":"江北区"},{"v":"46345","n":"余姚市"},{"v":"1226","n":"奉化市"},{"v":"1227","n":"宁海县"},{"v":"1228","n":"象山县"}]},{"v":"1213","n":"杭州市","c":[{"v":"3408","n":"上城区"},{"v":"3409","n":"下城区"},{"v":"3410","n":"拱墅区"},{"v":"3411","n":"西湖区"},{"v":"2963","n":"江干区"},{"v":"4285","n":"下沙区"},{"v":"1214","n":"余杭区"},{"v":"1215","n":"萧山区"},{"v":"3038","n":"滨江区"},{"v":"49711","n":"临安市"},{"v":"1217","n":"富阳区"},{"v":"1218","n":"桐庐县"},{"v":"1219","n":"建德市"},{"v":"1220","n":"淳安县"}]},{"v":"1233","n":"温州市","c":[{"v":"3416","n":"龙湾区"},{"v":"4342","n":"茶山高教园区"},{"v":"42321","n":"瑞安市"},{"v":"42322","n":"乐清市"},{"v":"42323","n":"鹿城区"},{"v":"42324","n":"瓯海区"},{"v":"42325","n":"永嘉县"},{"v":"1237","n":"文成县"},{"v":"1238","n":"平阳县"},{"v":"1239","n":"泰顺县"},{"v":"1240","n":"洞头区"},{"v":"1241","n":"苍南县"}]},{"v":"1243","n":"嘉兴市","c":[{"v":"4429","n":"桐乡市"},{"v":"4430","n":"平湖市"},{"v":"4431","n":"嘉善县"},{"v":"3418","n":"南湖区"},{"v":"3419","n":"秀洲区"},{"v":"1244","n":"海宁市"},{"v":"1248","n":"海盐县"}]},{"v":"1250","n":"湖州市","c":[{"v":"4130","n":"南浔区"},{"v":"44189","n":"吴兴区"},{"v":"1251","n":"长兴县"},{"v":"1252","n":"德清县"},{"v":"1253","n":"安吉县"}]},{"v":"1255","n":"绍兴市","c":[{"v":"15944","n":"柯桥区"},{"v":"44188","n":"越城区"},{"v":"1257","n":"诸暨市"},{"v":"1258","n":"上虞区"},{"v":"1259","n":"嵊州市"},{"v":"1260","n":"新昌县"}]},{"v":"1262","n":"金华市","c":[{"v":"1263","n":"金东区"},{"v":"1265","n":"婺城区"},{"v":"1264","n":"兰溪市"},{"v":"1269","n":"武义县"},{"v":"1270","n":"浦江县"},{"v":"1271","n":"磐安县"},{"v":"1266","n":"义乌市"},{"v":"1268","n":"永康市"},{"v":"1267","n":"东阳市"}]},{"v":"1273","n":"衢州市","c":[{"v":"22044","n":"柯城区"},{"v":"22045","n":"衢江区"},{"v":"1275","n":"江山市"},{"v":"1276","n":"常山县"},{"v":"1277","n":"开化县"},{"v":"1278","n":"龙游县"}]}]},{"v":"16","n":"福建","c":[{"v":"1303","n":"福州市","c":[{"v":"3483","n":"台江区"},{"v":"3484","n":"鼓楼区"},{"v":"48712","n":"晋安区"},{"v":"48713","n":"仓山区"},{"v":"48714","n":"马尾区"},{"v":"48715","n":"福清市"},{"v":"48716","n":"闽侯县"},{"v":"1305","n":"长乐市"},{"v":"1308","n":"平潭县"},{"v":"1309","n":"连江县"},{"v":"1312","n":"罗源县"},{"v":"1313","n":"永泰县"},{"v":"1314","n":"闽清县"}]},{"v":"1315","n":"厦门市","c":[{"v":"1316","n":"思明区"},{"v":"3486","n":"湖里区"},{"v":"3489","n":"翔安区"},{"v":"46763","n":"海沧区"},{"v":"46764","n":"集美区"},{"v":"46765","n":"同安区"}]},{"v":"1317","n":"三明市","c":[{"v":"1319","n":"永安市"},{"v":"1320","n":"明溪县"},{"v":"1321","n":"将乐县"},{"v":"1322","n":"大田县"},{"v":"1323","n":"宁化县"},{"v":"1324","n":"建宁县"},{"v":"1325","n":"沙县"},{"v":"1326","n":"尤溪县"},{"v":"1327","n":"清流县"},{"v":"1328","n":"泰宁县"},{"v":"22463","n":"梅列区"},{"v":"22464","n":"三元区"}]},{"v":"1329","n":"莆田市","c":[{"v":"1331","n":"仙游县"},{"v":"46146","n":"城厢区"},{"v":"46147","n":"荔城区"},{"v":"3492","n":"秀屿区"},{"v":"3022","n":"涵江区"}]},{"v":"1332","n":"泉州市","c":[{"v":"3117","n":"泉港区"},{"v":"1334","n":"石狮市"},{"v":"1336","n":"南安市"},{"v":"1337","n":"惠安县"},{"v":"1338","n":"安溪县"},{"v":"1339","n":"德化县"},{"v":"1340","n":"永春县"},{"v":"3495","n":"金门县"},{"v":"3498","n":"洛江区"},{"v":"42930","n":"鲤城区"},{"v":"42931","n":"丰泽区"},{"v":"42932","n":"晋江市"}]},{"v":"1341","n":"漳州市","c":[{"v":"3499","n":"芗城区"},{"v":"3500","n":"龙文区"},{"v":"1343","n":"龙海市"},{"v":"1344","n":"平和县"},{"v":"1345","n":"南靖县"},{"v":"1346","n":"诏安县"},{"v":"1347","n":"漳浦县"},{"v":"1348","n":"华安县"},{"v":"1349","n":"云霄县"},{"v":"1350","n":"东山县"},{"v":"1351","n":"长泰县"}]},{"v":"1352","n":"南平市","c":[{"v":"1354","n":"建瓯市"},{"v":"1355","n":"邵武市"},{"v":"1356","n":"武夷山市"},{"v":"1357","n":"建阳市"},{"v":"1358","n":"松溪县"},{"v":"1359","n":"顺昌县"},{"v":"1360","n":"浦城县"},{"v":"1361","n":"政和县"},{"v":"2956","n":"光泽县"},{"v":"22465","n":"延平区"}]},{"v":"1362","n":"龙岩市","c":[{"v":"44319","n":"新罗区"},{"v":"1364","n":"漳平市"},{"v":"1365","n":"长汀县"},{"v":"1366","n":"武平县"},{"v":"1367","n":"永定县"},{"v":"1368","n":"上杭县"},{"v":"1369","n":"连城县"}]},{"v":"1370","n":"宁德市","c":[{"v":"46145","n":"蕉城区"},{"v":"46164","n":"东侨开发区"},{"v":"1372","n":"福安市"},{"v":"1373","n":"福鼎市"},{"v":"1374","n":"寿宁县"},{"v":"1375","n":"霞浦县"},{"v":"1376","n":"柘荣县"},{"v":"1377","n":"屏南县"},{"v":"1378","n":"古田县"},{"v":"1379","n":"周宁县"}]}]},{"v":"17","n":"湖北","c":[{"v":"3154","n":"神农架林区","c":[{"v":"23610","n":"松柏镇"},{"v":"23611","n":"阳日镇"},{"v":"23612","n":"木鱼镇"},{"v":"23613","n":"红坪镇"},{"v":"23614","n":"新华镇"},{"v":"23615","n":"宋洛乡"},{"v":"23616","n":"九湖乡"},{"v":"23617","n":"下谷坪乡"}]},{"v":"1381","n":"武汉市","c":[{"v":"3583","n":"硚口区"},{"v":"3079","n":"武昌区"},{"v":"4424","n":"武汉经济技术开发区"},{"v":"1386","n":"江岸区"},{"v":"3582","n":"江汉区"},{"v":"50712","n":"蔡甸区"},{"v":"50713","n":"江夏区"},{"v":"50714","n":"新洲区"},{"v":"50715","n":"黄陂区"},{"v":"50716","n":"汉阳区"},{"v":"50717","n":"青山区"},{"v":"50718","n":"洪山区"},{"v":"50719","n":"汉南区"},{"v":"50720","n":"东西湖区"}]},{"v":"2922","n":"潜江市","c":[{"v":"23585","n":"园林"},{"v":"23586","n":"杨市"},{"v":"23587","n":"周矶"},{"v":"23588","n":"广华"},{"v":"23589","n":"泰丰"},{"v":"23590","n":"竹根滩镇"},{"v":"23591","n":"高石碑镇"},{"v":"23592","n":"积玉口镇"},{"v":"23593","n":"渔洋镇"},{"v":"23594","n":"王场镇"},{"v":"23595","n":"熊口镇"},{"v":"23596","n":"老新镇"},{"v":"23597","n":"浩口镇"},{"v":"23598","n":"张金镇"},{"v":"23599","n":"龙湾镇"},{"v":"23600","n":"江汉石油管理局"},{"v":"23601","n":"潜江经济开发区"},{"v":"23602","n":"西大垸管理区"},{"v":"23603","n":"运粮湖管理区"},{"v":"23604","n":"周矶管理区"},{"v":"23605","n":"后湖管理区"},{"v":"23606","n":"熊口管理区"},{"v":"23607","n":"总口管理区"},{"v":"23608","n":"高场原种场"},{"v":"23609","n":"浩口原种场"}]},{"v":"1387","n":"黄石市","c":[{"v":"1389","n":"黄石港区"},{"v":"43272","n":"下陆区"},{"v":"43273","n":"西塞山区"},{"v":"1392","n":"铁山区"},{"v":"1393","n":"大冶市"},{"v":"1394","n":"阳新县"},{"v":"43291","n":"经济技术开发区"}]},{"v":"1396","n":"襄阳市","c":[{"v":"1397","n":"老河口市"},{"v":"1398","n":"枣阳市"},{"v":"1399","n":"宜城市"},{"v":"1401","n":"南漳县"},{"v":"1402","n":"保康县"},{"v":"1403","n":"谷城县"},{"v":"23282","n":"樊城区"},{"v":"23283","n":"襄城区"},{"v":"23284","n":"襄州区"}]},{"v":"1405","n":"十堰市","c":[{"v":"1406","n":"丹江口市"},{"v":"1407","n":"房县"},{"v":"1408","n":"竹山县"},{"v":"1409","n":"竹溪县"},{"v":"1410","n":"郧县"},{"v":"1411","n":"郧西县"},{"v":"23429","n":"茅箭区"},{"v":"23430","n":"张湾区"}]},{"v":"1413","n":"荆州市","c":[{"v":"3593","n":"沙市区"},{"v":"4078","n":"荆州区"},{"v":"1414","n":"江陵县"},{"v":"1415","n":"洪湖市"},{"v":"1416","n":"石首市"},{"v":"1417","n":"松滋市"},{"v":"1418","n":"监利县"},{"v":"1419","n":"公安县"}]},{"v":"1421","n":"宜昌市","c":[{"v":"3597","n":"伍家岗区"},{"v":"3598","n":"西陵区"},{"v":"3594","n":"宜都市"},{"v":"3595","n":"猇亭区"},{"v":"3596","n":"点军区"},{"v":"1423","n":"当阳市"},{"v":"1424","n":"枝江市"},{"v":"1425","n":"夷陵区"},{"v":"1426","n":"秭归县"},{"v":"1427","n":"兴山县"},{"v":"1428","n":"远安县"},{"v":"1429","n":"五峰土家族自治县"},{"v":"1430","n":"长阳土家族自治县"}]},{"v":"1432","n":"孝感市","c":[{"v":"1435","n":"汉川市"},{"v":"1437","n":"云梦县"},{"v":"1438","n":"大悟县"},{"v":"1439","n":"孝昌县"},{"v":"45215","n":"孝南区"},{"v":"45216","n":"应城市"},{"v":"45217","n":"安陆市"}]},{"v":"1441","n":"黄冈市","c":[{"v":"41908","n":"黄州区"},{"v":"41909","n":"蕲春县"},{"v":"41910","n":"麻城市"},{"v":"41911","n":"武穴市"},{"v":"41912","n":"浠水县"},{"v":"1444","n":"红安县"},{"v":"1445","n":"罗田县"},{"v":"1447","n":"黄梅县"},{"v":"1448","n":"英山县"},{"v":"1449","n":"团风县"}]},{"v":"2980","n":"天门市","c":[{"v":"23618","n":"侨乡街道开发区"},{"v":"23619","n":"竟陵街道"},{"v":"23620","n":"杨林街道"},{"v":"23621","n":"佛子山镇"},{"v":"23622","n":"多宝镇"},{"v":"23623","n":"拖市镇"},{"v":"23624","n":"张港镇"},{"v":"23625","n":"蒋场镇"},{"v":"23626","n":"汪场镇"},{"v":"23627","n":"渔薪镇"},{"v":"23628","n":"黄潭镇"},{"v":"23629","n":"岳口镇"},{"v":"23630","n":"横林镇"},{"v":"23631","n":"彭市镇"},{"v":"23632","n":"麻洋镇"},{"v":"23633","n":"多祥镇"},{"v":"23634","n":"干驿镇"},{"v":"23635","n":"马湾镇"},{"v":"23636","n":"卢市镇"},{"v":"23637","n":"小板镇"},{"v":"23638","n":"九真镇"},{"v":"23639","n":"皂市镇"},{"v":"23640","n":"胡市镇"},{"v":"23641","n":"石河镇"},{"v":"23642","n":"净潭乡"},{"v":"23643","n":"蒋湖农场"},{"v":"23644","n":"白茅湖农场"},{"v":"23645","n":"沉湖管委会"}]},{"v":"2983","n":"仙桃市","c":[{"v":"52306","n":"城区"},{"v":"23649","n":"郑场镇"},{"v":"23650","n":"毛嘴镇"},{"v":"23651","n":"豆河镇"},{"v":"23652","n":"三伏潭镇"},{"v":"23653","n":"胡场镇"},{"v":"23654","n":"长埫口镇"},{"v":"23655","n":"西流河镇"},{"v":"23656","n":"沙湖镇"},{"v":"23657","n":"杨林尾镇"},{"v":"23658","n":"彭场镇"},{"v":"23659","n":"张沟镇"},{"v":"23660","n":"郭河镇"},{"v":"23661","n":"沔城镇"},{"v":"23662","n":"通海口镇"},{"v":"23663","n":"陈场镇"},{"v":"23664","n":"工业园区"},{"v":"23665","n":"九合垸原种场"},{"v":"23666","n":"沙湖原种场"},{"v":"23667","n":"排湖渔场"},{"v":"23668","n":"五湖渔场"},{"v":"23669","n":"赵西垸林场"},{"v":"23670","n":"刘家垸林场"},{"v":"23671","n":"畜禽良种场"}]},{"v":"1458","n":"咸宁市","c":[{"v":"43387","n":"咸安区"},{"v":"43388","n":"赤壁市"},{"v":"1461","n":"嘉鱼县"},{"v":"1462","n":"通山县"},{"v":"1463","n":"崇阳县"},{"v":"1464","n":"通城县"}]},{"v":"1466","n":"恩施州","c":[{"v":"1467","n":"恩施市"},{"v":"1468","n":"利川市"},{"v":"1469","n":"建始县"},{"v":"1470","n":"来凤县"},{"v":"1471","n":"巴东县"},{"v":"1472","n":"鹤峰县"},{"v":"1473","n":"宣恩县"},{"v":"1474","n":"咸丰县"}]},{"v":"1475","n":"鄂州市","c":[{"v":"3601","n":"梁子湖区"},{"v":"3602","n":"华容区"},{"v":"41907","n":"鄂城区"}]},{"v":"1477","n":"荆门市","c":[{"v":"3600","n":"东宝区"},{"v":"3599","n":"掇刀区"},{"v":"2973","n":"钟祥市"},{"v":"1478","n":"京山县"},{"v":"3055","n":"沙洋县"}]},{"v":"1479","n":"随州市","c":[{"v":"3164","n":"曾都区"},{"v":"3163","n":"广水市"},{"v":"7357","n":"随县"}]}]},{"v":"18","n":"湖南","c":[{"v":"1540","n":"张家界市","c":[{"v":"1541","n":"慈利县"},{"v":"1542","n":"桑植县"},{"v":"1543","n":"武陵源区"},{"v":"3622","n":"永定区"}]},{"v":"1544","n":"郴州市","c":[{"v":"1545","n":"资兴市"},{"v":"1546","n":"宜章县"},{"v":"1547","n":"安仁县"},{"v":"1548","n":"汝城县"},{"v":"1549","n":"嘉禾县"},{"v":"1550","n":"临武县"},{"v":"1551","n":"桂东县"},{"v":"1552","n":"永兴县"},{"v":"1553","n":"桂阳县"},{"v":"29465","n":"北湖区"},{"v":"29466","n":"苏仙区"}]},{"v":"1555","n":"益阳市","c":[{"v":"1556","n":"南县"},{"v":"1557","n":"桃江县"},{"v":"1558","n":"安化县"},{"v":"29463","n":"赫山区"},{"v":"29464","n":"资阳区"},{"v":"1565","n":"沅江市"}]},{"v":"1560","n":"永州市","c":[{"v":"29454","n":"冷水滩区"},{"v":"1563","n":"祁阳县"},{"v":"1564","n":"双牌县"},{"v":"1566","n":"道县"},{"v":"1567","n":"江永县"},{"v":"1568","n":"江华县"},{"v":"1569","n":"宁远县"},{"v":"1570","n":"新田县"},{"v":"1571","n":"蓝山县"},{"v":"1572","n":"东安县"},{"v":"1573","n":"零陵区"}]},{"v":"1574","n":"怀化市","c":[{"v":"29455","n":"鹤城区"},{"v":"1575","n":"洪江市"},{"v":"1576","n":"会同县"},{"v":"1578","n":"溆浦县"},{"v":"3626","n":"中方县"},{"v":"1579","n":"辰溪县"},{"v":"1580","n":"靖州县"},{"v":"1581","n":"通道县"},{"v":"1582","n":"芷江县"},{"v":"1583","n":"新晃县"},{"v":"1584","n":"麻阳县"},{"v":"3070","n":"沅陵县"}]},{"v":"1586","n":"娄底市","c":[{"v":"29456","n":"娄星区"},{"v":"1588","n":"冷水江市"},{"v":"1589","n":"涟源市"},{"v":"1590","n":"新化县"},{"v":"1591","n":"双峰县"}]},{"v":"1592","n":"湘西州","c":[{"v":"1593","n":"吉首市"},{"v":"1594","n":"古丈县"},{"v":"1595","n":"龙山县"},{"v":"1596","n":"永顺县"},{"v":"1597","n":"泸溪县"},{"v":"1598","n":"凤凰县"},{"v":"1599","n":"花垣县"},{"v":"1600","n":"保靖县"}]},{"v":"1482","n":"长沙市","c":[{"v":"3606","n":"芙蓉区"},{"v":"48936","n":"岳麓区"},{"v":"48937","n":"雨花区"},{"v":"48938","n":"开福区"},{"v":"48939","n":"天心区"},{"v":"48941","n":"浏阳市"},{"v":"48942","n":"长沙县"},{"v":"48943","n":"宁乡县"},{"v":"1485","n":"望城区"}]},{"v":"1488","n":"株洲市","c":[{"v":"29444","n":"天元区"},{"v":"29445","n":"石峰区"},{"v":"29446","n":"芦淞区"},{"v":"29447","n":"荷塘区"},{"v":"1489","n":"醴陵市"},{"v":"1490","n":"株洲县"},{"v":"1491","n":"攸县"},{"v":"1492","n":"茶陵县"},{"v":"1493","n":"炎陵县"}]},{"v":"1495","n":"湘潭市","c":[{"v":"29448","n":"雨湖区"},{"v":"29449","n":"岳塘区"},{"v":"1496","n":"湘乡市"},{"v":"1497","n":"湘潭县"},{"v":"1498","n":"韶山市"}]},{"v":"1501","n":"衡阳市","c":[{"v":"29450","n":"蒸湘区"},{"v":"29451","n":"石鼓区"},{"v":"29452","n":"珠晖区"},{"v":"29453","n":"雁峰区"},{"v":"1502","n":"常宁市"},{"v":"1503","n":"衡阳县"},{"v":"1504","n":"耒阳市"},{"v":"1505","n":"衡东县"},{"v":"1506","n":"衡南县"},{"v":"1507","n":"衡山县"},{"v":"1508","n":"祁东县"},{"v":"1509","n":"南岳区"}]},{"v":"1511","n":"邵阳市","c":[{"v":"29457","n":"大祥区"},{"v":"29458","n":"双清区"},{"v":"29459","n":"北塔区"},{"v":"1512","n":"武冈市"},{"v":"1513","n":"邵东县"},{"v":"1514","n":"洞口县"},{"v":"1515","n":"新邵县"},{"v":"1516","n":"绥宁县"},{"v":"1517","n":"新宁县"},{"v":"1518","n":"邵阳县"},{"v":"1519","n":"隆回县"},{"v":"1520","n":"城步县"}]},{"v":"1522","n":"岳阳市","c":[{"v":"29460","n":"岳阳楼区"},{"v":"3619","n":"君山区"},{"v":"3620","n":"云溪区"},{"v":"1523","n":"临湘市"},{"v":"1524","n":"汨罗市"},{"v":"1525","n":"岳阳县"},{"v":"1526","n":"湘阴县"},{"v":"1527","n":"华容县"},{"v":"1528","n":"平江县"}]},{"v":"1530","n":"常德市","c":[{"v":"1536","n":"汉寿县"},{"v":"1537","n":"石门县"},{"v":"1538","n":"安乡县"},{"v":"29461","n":"鼎城区"},{"v":"29462","n":"武陵区"},{"v":"1532","n":"津市市"},{"v":"1533","n":"澧县"},{"v":"1534","n":"临澧县"},{"v":"1535","n":"桃源县"}]}]},{"v":"19","n":"广东","c":[{"v":"1601","n":"广州市","c":[{"v":"3633","n":"天河区"},{"v":"3634","n":"海珠区"},{"v":"3635","n":"荔湾区"},{"v":"3637","n":"越秀区"},{"v":"36953","n":"番禺区"},{"v":"50256","n":"花都区"},{"v":"50257","n":"萝岗区"},{"v":"50258","n":"白云区"},{"v":"50259","n":"南沙区"},{"v":"50283","n":"黄埔区"},{"v":"50284","n":"增城区"},{"v":"50285","n":"从化区"},{"v":"51091","n":"广州大学城"}]},{"v":"1607","n":"深圳市","c":[{"v":"3638","n":"罗湖区"},{"v":"3639","n":"福田区"},{"v":"3155","n":"南山区"},{"v":"4773","n":"宝安区"},{"v":"6675","n":"光明新区"},{"v":"40152","n":"龙岗区"},{"v":"6736","n":"坪山新区"},{"v":"47387","n":"盐田区"},{"v":"47388","n":"龙华新区"},{"v":"6737","n":"大鹏新区"}]},{"v":"1609","n":"珠海市","c":[{"v":"41653","n":"斗门区"},{"v":"41654","n":"金湾区"},{"v":"41655","n":"香洲区"}]},{"v":"1611","n":"汕头市","c":[{"v":"19916","n":"龙湖区"},{"v":"19917","n":"金平区"},{"v":"19918","n":"澄海区"},{"v":"19919","n":"潮阳区"},{"v":"19920","n":"潮南区"},{"v":"19921","n":"濠江区"},{"v":"1614","n":"南澳县"}]},{"v":"1617","n":"韶关市","c":[{"v":"3643","n":"武江区"},{"v":"3644","n":"浈江区"},{"v":"1618","n":"南雄市"},{"v":"1619","n":"乐昌市"},{"v":"1620","n":"仁化县"},{"v":"1621","n":"始兴县"},{"v":"1622","n":"翁源县"},{"v":"1624","n":"新丰县"},{"v":"1625","n":"乳源瑶族自治县"},{"v":"1626","n":"曲江区"}]},{"v":"1627","n":"河源市","c":[{"v":"1628","n":"和平县"},{"v":"1629","n":"龙川县"},{"v":"1630","n":"紫金县"},{"v":"1631","n":"连平县"},{"v":"37864","n":"源城区"},{"v":"37865","n":"东源县"}]},{"v":"1634","n":"梅州市","c":[{"v":"1642","n":"梅江区"},{"v":"1635","n":"兴宁市"},{"v":"1636","n":"梅县"},{"v":"1637","n":"蕉岭县"},{"v":"1638","n":"大埔县"},{"v":"1639","n":"丰顺县"},{"v":"1640","n":"五华县"},{"v":"1641","n":"平远县"}]},{"v":"1643","n":"惠州市","c":[{"v":"36174","n":"惠阳区"},{"v":"36175","n":"大亚湾区"},{"v":"36176","n":"惠城区"},{"v":"36177","n":"惠东县"},{"v":"36178","n":"博罗县"},{"v":"1647","n":"龙门县"}]},{"v":"1650","n":"汕尾市","c":[{"v":"20051","n":"城区"},{"v":"20052","n":"陆丰市"},{"v":"1653","n":"陆河县"},{"v":"3037","n":"海丰县"}]},{"v":"1655","n":"东莞市","c":[{"v":"4760","n":"长安镇"},{"v":"4255","n":"莞城区"},{"v":"4256","n":"南城区"},{"v":"4866","n":"寮步镇"},{"v":"4871","n":"大岭山镇"},{"v":"5905","n":"横沥镇"},{"v":"4886","n":"常平镇"},{"v":"4910","n":"厚街镇"},{"v":"4911","n":"万江区"},{"v":"4932","n":"樟木头镇"},{"v":"5457","n":"塘厦镇"},{"v":"5473","n":"凤岗镇"},{"v":"4980","n":"大朗镇"},{"v":"3041","n":"东坑镇"},{"v":"5869","n":"清溪镇"},{"v":"3105","n":"企石镇"},{"v":"3171","n":"茶山镇"},{"v":"36102","n":"东城区"},{"v":"39462","n":"虎门镇"},{"v":"39461","n":"黄江镇"},{"v":"3104","n":"石排镇"},{"v":"3078","n":"道滘镇"},{"v":"3097","n":"沙田镇"},{"v":"3100","n":"高埗镇"},{"v":"3102","n":"石龙镇"},{"v":"3111","n":"石碣镇"},{"v":"3116","n":"洪梅镇"},{"v":"3120","n":"麻涌镇"},{"v":"4147","n":"松山湖"},{"v":"3134","n":"桥头镇"},{"v":"3151","n":"望牛墩镇"},{"v":"2950","n":"中堂镇"},{"v":"4087","n":"谢岗镇"}]},{"v":"1657","n":"中山市","c":[{"v":"52093","n":"城区"},{"v":"4852","n":"火炬开发区"},{"v":"2902","n":"小榄镇"},{"v":"2957","n":"古镇"},{"v":"3016","n":"三乡镇"},{"v":"8540","n":"民众镇"},{"v":"3067","n":"东凤镇"},{"v":"4102","n":"板芙镇"},{"v":"4127","n":"神湾镇"},{"v":"3112","n":"横栏镇"},{"v":"4141","n":"港口镇"},{"v":"3143","n":"三角镇"},{"v":"4190","n":"大涌镇"},{"v":"3176","n":"南头镇"},{"v":"3743","n":"沙溪镇"},{"v":"3001","n":"坦洲镇"},{"v":"3007","n":"黄圃镇"},{"v":"4042","n":"五桂山镇"},{"v":"2777","n":"南朗镇"},{"v":"39653","n":"沙朗镇"},{"v":"4076","n":"阜沙镇"},{"v":"4080","n":"东升镇"}]},{"v":"1659","n":"江门市","c":[{"v":"37258","n":"台山市"},{"v":"37259","n":"新会区"},{"v":"37260","n":"鹤山市"},{"v":"37261","n":"江海区"},{"v":"37262","n":"蓬江区"},{"v":"37263","n":"开平市"},{"v":"37264","n":"恩平市"}]},{"v":"1666","n":"佛山市","c":[{"v":"1669","n":"顺德区"},{"v":"36264","n":"禅城区"},{"v":"36265","n":"高明区"},{"v":"36266","n":"三水区"},{"v":"36267","n":"南海区"}]},{"v":"1672","n":"阳江市","c":[{"v":"19827","n":"江城区"},{"v":"19828","n":"阳东县"},{"v":"1673","n":"阳春市"},{"v":"1674","n":"阳西县"}]},{"v":"1677","n":"湛江市","c":[{"v":"19377","n":"赤坎区"},{"v":"19378","n":"霞山区"},{"v":"19379","n":"经济技术开发区"},{"v":"19380","n":"麻章区"},{"v":"19381","n":"遂溪县"},{"v":"19382","n":"廉江市"},{"v":"3646","n":"坡头区"},{"v":"1679","n":"雷州市"},{"v":"1680","n":"吴川市"},{"v":"1682","n":"徐闻县"}]},{"v":"1684","n":"茂名市","c":[{"v":"19465","n":"茂南区"},{"v":"19466","n":"电白县"},{"v":"19467","n":"高州市"},{"v":"19468","n":"化州市"},{"v":"19469","n":"茂港区"},{"v":"1687","n":"信宜市"}]},{"v":"1690","n":"肇庆市","c":[{"v":"4781","n":"端州区"},{"v":"39723","n":"四会市"},{"v":"39725","n":"高要市"},{"v":"1693","n":"广宁县"},{"v":"1694","n":"德庆县"},{"v":"1695","n":"怀集县"},{"v":"1696","n":"封开县"},{"v":"1697","n":"鼎湖区"}]},{"v":"1698","n":"云浮市","c":[{"v":"19829","n":"云城区"},{"v":"19830","n":"罗定市"},{"v":"1700","n":"云安县"},{"v":"1701","n":"新兴县"},{"v":"1702","n":"郁南县"}]},{"v":"1704","n":"清远市","c":[{"v":"1795","n":"连州市"},{"v":"1796","n":"佛冈县"},{"v":"1797","n":"阳山县"},{"v":"1798","n":"清新县"},{"v":"1799","n":"连山县"},{"v":"1800","n":"连南县"},{"v":"37734","n":"清城区"},{"v":"37735","n":"英德市"}]},{"v":"1705","n":"潮州市","c":[{"v":"19991","n":"湘桥区"},{"v":"4238","n":"枫溪区"},{"v":"19992","n":"潮安区"},{"v":"1707","n":"饶平县"}]},{"v":"1709","n":"揭阳市","c":[{"v":"5484","n":"东山区"},{"v":"5864","n":"普宁市"},{"v":"20093","n":"榕城区"},{"v":"20094","n":"揭东县"},{"v":"1712","n":"揭西县"},{"v":"1713","n":"惠来县"}]}]},{"v":"20","n":"广西","c":[{"v":"1792","n":"贺州市","c":[{"v":"23040","n":"八步区"},{"v":"1803","n":"钟山县"},{"v":"1804","n":"昭平县"},{"v":"1805","n":"富川县"},{"v":"22850","n":"平桂管理区"}]},{"v":"1806","n":"百色市","c":[{"v":"1807","n":"右江区"},{"v":"1808","n":"平果县"},{"v":"1809","n":"乐业县"},{"v":"1810","n":"田阳县"},{"v":"1811","n":"西林县"},{"v":"1812","n":"田林县"},{"v":"1813","n":"德保县"},{"v":"1814","n":"靖西县"},{"v":"1815","n":"田东县"},{"v":"1816","n":"那坡县"},{"v":"1817","n":"隆林县"},{"v":"3678","n":"凌云县"}]},{"v":"1818","n":"河池市","c":[{"v":"1820","n":"宜州市"},{"v":"1821","n":"天峨县"},{"v":"1822","n":"凤山县"},{"v":"1823","n":"南丹县"},{"v":"1824","n":"东兰县"},{"v":"1825","n":"巴马县"},{"v":"1826","n":"环江县"},{"v":"3152","n":"大化县"},{"v":"3679","n":"都安县"},{"v":"3680","n":"金城江区"},{"v":"2991","n":"罗城县"}]},{"v":"3168","n":"崇左市","c":[{"v":"3169","n":"江州区"},{"v":"3681","n":"凭祥市"},{"v":"3682","n":"扶绥县"},{"v":"3683","n":"大新县"},{"v":"3684","n":"天等县"},{"v":"3685","n":"宁明县"},{"v":"3686","n":"龙州县"}]},{"v":"1715","n":"南宁市","c":[{"v":"43114","n":"良庆区"},{"v":"43115","n":"江南区"},{"v":"43116","n":"兴宁区"},{"v":"43117","n":"青秀区"},{"v":"43118","n":"西乡塘区"},{"v":"3650","n":"横县"},{"v":"3651","n":"上林县"},{"v":"3652","n":"隆安县"},{"v":"3653","n":"马山县"},{"v":"1716","n":"武鸣区"},{"v":"1724","n":"邕宁区"},{"v":"3005","n":"宾阳县"}]},{"v":"1720","n":"柳州市","c":[{"v":"3659","n":"融安县"},{"v":"3660","n":"三江县"},{"v":"3661","n":"融水县"},{"v":"22906","n":"鱼峰区"},{"v":"22907","n":"城中区"},{"v":"22908","n":"柳南区"},{"v":"22909","n":"柳北区"},{"v":"1721","n":"柳江县"},{"v":"1722","n":"柳城县"},{"v":"1725","n":"鹿寨县"}]},{"v":"1726","n":"桂林市","c":[{"v":"3670","n":"象山区"},{"v":"3666","n":"恭城县"},{"v":"22883","n":"秀峰区"},{"v":"22884","n":"叠彩区"},{"v":"22885","n":"七星区"},{"v":"4457","n":"雁山区"},{"v":"1727","n":"阳朔县"},{"v":"1728","n":"临桂县"},{"v":"1729","n":"灵川县"},{"v":"1730","n":"全州县"},{"v":"1731","n":"平乐县"},{"v":"1732","n":"兴安县"},{"v":"1733","n":"灌阳县"},{"v":"1734","n":"荔浦县"},{"v":"1735","n":"资源县"},{"v":"1736","n":"永福县"},{"v":"1738","n":"龙胜县"}]},{"v":"1740","n":"梧州市","c":[{"v":"53521","n":"龙圩区"},{"v":"1741","n":"岑溪市"},{"v":"1742","n":"苍梧县"},{"v":"1743","n":"藤县"},{"v":"1744","n":"蒙山县"},{"v":"23037","n":"万秀区"},{"v":"23038","n":"蝶山区"},{"v":"23039","n":"长洲区"}]},{"v":"1746","n":"北海市","c":[{"v":"22851","n":"海城区"},{"v":"22852","n":"银海区"},{"v":"1747","n":"合浦县"},{"v":"1748","n":"铁山港区"}]},{"v":"1749","n":"防城港市","c":[{"v":"25190","n":"防城区"},{"v":"25191","n":"港口区"},{"v":"1750","n":"东兴市"},{"v":"1751","n":"上思县"}]},{"v":"1753","n":"钦州市","c":[{"v":"25189","n":"钦南区"},{"v":"2999","n":"钦北区"},{"v":"1754","n":"浦北县"},{"v":"1755","n":"灵山县"}]},{"v":"1757","n":"贵港市","c":[{"v":"25192","n":"港南区"},{"v":"25193","n":"港北区"},{"v":"1758","n":"桂平市"},{"v":"1759","n":"平南县"},{"v":"1760","n":"覃塘区"}]},{"v":"1761","n":"玉林市","c":[{"v":"25188","n":"玉州区"},{"v":"1762","n":"北流市"},{"v":"1763","n":"容县"},{"v":"1764","n":"博白县"},{"v":"1765","n":"陆川县"},{"v":"1766","n":"兴业县"}]},{"v":"3044","n":"来宾市","c":[{"v":"3046","n":"兴宾区"},{"v":"3047","n":"合山市"},{"v":"3048","n":"忻城县"},{"v":"3049","n":"武宣县"},{"v":"3050","n":"象州县"},{"v":"3051","n":"金秀县"}]}]},{"v":"21","n":"江西","c":[{"v":"1827","n":"南昌市","c":[{"v":"3505","n":"青云谱区"},{"v":"3506","n":"西湖区"},{"v":"3507","n":"东湖区"},{"v":"4101","n":"昌北区"},{"v":"1828","n":"南昌县"},{"v":"1829","n":"进贤县"},{"v":"1830","n":"安义县"},{"v":"40846","n":"青山湖区"},{"v":"40847","n":"红谷滩新区"},{"v":"3502","n":"新建县"},{"v":"3504","n":"湾里区"},{"v":"4039","n":"高新区"}]},{"v":"1832","n":"景德镇市","c":[{"v":"3508","n":"珠山区"},{"v":"1833","n":"乐平市"},{"v":"1834","n":"浮梁县"},{"v":"24947","n":"昌江区"}]},{"v":"1836","n":"萍乡市","c":[{"v":"1837","n":"湘东区"},{"v":"1838","n":"莲花县"},{"v":"1839","n":"上栗县"},{"v":"1840","n":"芦溪县"},{"v":"18317","n":"安源区"}]},{"v":"1842","n":"新余市","c":[{"v":"1843","n":"分宜县"},{"v":"26455","n":"渝水区"}]},{"v":"1845","n":"九江市","c":[{"v":"25482","n":"浔阳区"},{"v":"23679","n":"八里湖新区"},{"v":"23678","n":"经济技术开发区"},{"v":"1852","n":"修水县"},{"v":"1847","n":"瑞昌市"},{"v":"1850","n":"彭泽县"},{"v":"1853","n":"湖口县"},{"v":"4161","n":"共青城市"},{"v":"1846","n":"九江县"},{"v":"25481","n":"濂溪区"},{"v":"1854","n":"德安县"},{"v":"1855","n":"都昌县"},{"v":"1851","n":"永修县"},{"v":"1849","n":"武宁县"},{"v":"1848","n":"庐山市"},{"v":"23680","n":"庐山风景名胜区"}]},{"v":"1857","n":"鹰潭市","c":[{"v":"51245","n":"龙虎山风景旅游区"},{"v":"1858","n":"余江县"},{"v":"1859","n":"贵溪市"},{"v":"1860","n":"月湖区"}]},{"v":"1861","n":"上饶市","c":[{"v":"1863","n":"德兴市"},{"v":"1864","n":"广丰县"},{"v":"1865","n":"鄱阳县"},{"v":"1866","n":"婺源县"},{"v":"1867","n":"余干县"},{"v":"1868","n":"横峰县"},{"v":"1869","n":"弋阳县"},{"v":"1870","n":"铅山县"},{"v":"1871","n":"玉山县"},{"v":"1872","n":"万年县"},{"v":"26449","n":"信州区"},{"v":"26450","n":"上饶县"}]},{"v":"1874","n":"宜春市","c":[{"v":"1875","n":"丰城市"},{"v":"1876","n":"樟树市"},{"v":"26452","n":"袁州区"},{"v":"1877","n":"高安市"},{"v":"1878","n":"铜鼓县"},{"v":"1879","n":"靖安县"},{"v":"1880","n":"宜丰县"},{"v":"1881","n":"奉新县"},{"v":"1882","n":"万载县"},{"v":"1883","n":"上高县"}]},{"v":"1885","n":"抚州市","c":[{"v":"1887","n":"南丰县"},{"v":"1888","n":"乐安县"},{"v":"1889","n":"金溪县"},{"v":"1890","n":"南城县"},{"v":"1891","n":"东乡县"},{"v":"1892","n":"资溪县"},{"v":"1893","n":"宜黄县"},{"v":"1894","n":"崇仁县"},{"v":"1895","n":"黎川县"},{"v":"1896","n":"广昌县"},{"v":"24946","n":"临川区"}]},{"v":"1898","n":"吉安市","c":[{"v":"26453","n":"青原区"},{"v":"26454","n":"吉州区"},{"v":"1899","n":"井冈山市"},{"v":"1900","n":"吉安县"},{"v":"1901","n":"永丰县"},{"v":"1902","n":"永新县"},{"v":"1903","n":"新干县"},{"v":"1904","n":"泰和县"},{"v":"1905","n":"峡江县"},{"v":"1906","n":"遂川县"},{"v":"1907","n":"安福县"},{"v":"1908","n":"吉水县"},{"v":"1909","n":"万安县"}]},{"v":"1911","n":"赣州市","c":[{"v":"26451","n":"章贡区"},{"v":"1912","n":"南康市"},{"v":"1913","n":"瑞金市"},{"v":"1914","n":"石城县"},{"v":"1915","n":"安远县"},{"v":"1916","n":"赣县"},{"v":"1917","n":"宁都县"},{"v":"1918","n":"寻乌县"},{"v":"1919","n":"兴国县"},{"v":"1920","n":"定南县"},{"v":"1921","n":"上犹县"},{"v":"1922","n":"于都县"},{"v":"1923","n":"龙南县"},{"v":"1924","n":"崇义县"},{"v":"1925","n":"大余县"},{"v":"1926","n":"信丰县"},{"v":"1927","n":"全南县"},{"v":"1928","n":"会昌县"}]}]},{"v":"22","n":"四川","c":[{"v":"2058","n":"眉山市","c":[{"v":"2060","n":"仁寿县"},{"v":"2061","n":"彭山区"},{"v":"2062","n":"洪雅县"},{"v":"2063","n":"丹棱县"},{"v":"2064","n":"青神县"},{"v":"41029","n":"东坡区"}]},{"v":"2065","n":"资阳市","c":[{"v":"3905","n":"雁江区"},{"v":"2068","n":"安岳县"},{"v":"2069","n":"乐至县"},{"v":"44342","n":"简阳市"}]},{"v":"2070","n":"阿坝州","c":[{"v":"2071","n":"马尔康县"},{"v":"2072","n":"九寨沟县"},{"v":"2073","n":"红原县"},{"v":"2075","n":"阿坝县"},{"v":"2076","n":"理县"},{"v":"2077","n":"若尔盖县"},{"v":"2078","n":"金川县"},{"v":"2079","n":"小金县"},{"v":"2080","n":"黑水县"},{"v":"2081","n":"松潘县"},{"v":"2082","n":"壤塘县"},{"v":"2083","n":"茂县"},{"v":"27498","n":"汶川县"}]},{"v":"2084","n":"甘孜州","c":[{"v":"2085","n":"康定县"},{"v":"2086","n":"泸定县"},{"v":"2087","n":"九龙县"},{"v":"2088","n":"丹巴县"},{"v":"2089","n":"道孚县"},{"v":"2090","n":"炉霍县"},{"v":"2091","n":"色达县"},{"v":"2092","n":"甘孜县"},{"v":"2093","n":"新龙县"},{"v":"2094","n":"白玉县"},{"v":"2095","n":"德格县"},{"v":"2096","n":"石渠县"},{"v":"2097","n":"雅江县"},{"v":"2098","n":"理塘县"},{"v":"2099","n":"巴塘县"},{"v":"2100","n":"稻城县"},{"v":"2101","n":"乡城县"},{"v":"2102","n":"得荣县"}]},{"v":"2103","n":"凉山州","c":[{"v":"2105","n":"美姑县"},{"v":"2106","n":"昭觉县"},{"v":"2107","n":"会理县"},{"v":"2108","n":"会东县"},{"v":"2109","n":"普格县"},{"v":"2110","n":"宁南县"},{"v":"2111","n":"德昌县"},{"v":"2112","n":"冕宁县"},{"v":"2113","n":"盐源县"},{"v":"2114","n":"金阳县"},{"v":"2115","n":"布拖县"},{"v":"2116","n":"雷波县"},{"v":"2117","n":"越西县"},{"v":"2118","n":"喜德县"},{"v":"2119","n":"甘洛县"},{"v":"2120","n":"木里县"},{"v":"27500","n":"西昌市"}]},{"v":"1930","n":"成都市","c":[{"v":"50947","n":"武侯区"},{"v":"50946","n":"金牛区"},{"v":"50944","n":"青羊区"},{"v":"50948","n":"成华区"},{"v":"50949","n":"高新区"},{"v":"50945","n":"锦江区"},{"v":"49322","n":"郫县"},{"v":"49324","n":"双流县"},{"v":"4284","n":"高新西区"},{"v":"49316","n":"龙泉驿区"},{"v":"49314","n":"新都区"},{"v":"49315","n":"温江区"},{"v":"49321","n":"都江堰市"},{"v":"49318","n":"彭州市"},{"v":"49317","n":"青白江区"},{"v":"49319","n":"崇州市"},{"v":"49327","n":"金堂县"},{"v":"49323","n":"新津县"},{"v":"49320","n":"邛崃市"},{"v":"49325","n":"大邑县"},{"v":"49326","n":"蒲江县"}]},{"v":"1946","n":"自贡市","c":[{"v":"1949","n":"自流井区"},{"v":"3895","n":"沿滩区"},{"v":"1947","n":"荣县"},{"v":"1948","n":"富顺县"},{"v":"43224","n":"大安区"},{"v":"43225","n":"贡井区"}]},{"v":"1950","n":"攀枝花市","c":[{"v":"1953","n":"仁和区"},{"v":"3896","n":"西区"},{"v":"27502","n":"东区"},{"v":"1951","n":"米易县"},{"v":"1952","n":"盐边县"}]},{"v":"1954","n":"泸州市","c":[{"v":"3898","n":"纳溪区"},{"v":"39014","n":"江阳区"},{"v":"39015","n":"龙马潭区"},{"v":"1955","n":"泸县"},{"v":"1956","n":"合江县"},{"v":"1957","n":"叙永县"},{"v":"1958","n":"古蔺县"}]},{"v":"1960","n":"绵阳市","c":[{"v":"38573","n":"江油市"},{"v":"38574","n":"涪城区"},{"v":"38575","n":"游仙区"},{"v":"38576","n":"高新区"},{"v":"38577","n":"经开区"},{"v":"1970","n":"盐亭县"},{"v":"1971","n":"三台县"},{"v":"1972","n":"平武县"},{"v":"1973","n":"北川县"},{"v":"1974","n":"安县"},{"v":"1975","n":"梓潼县"}]},{"v":"1962","n":"德阳市","c":[{"v":"39010","n":"广汉市"},{"v":"39011","n":"什邡市"},{"v":"39012","n":"旌阳区"},{"v":"39013","n":"绵竹市"},{"v":"1965","n":"罗江县"},{"v":"1966","n":"中江县"}]},{"v":"1977","n":"广元市","c":[{"v":"3901","n":"昭化区"},{"v":"3902","n":"朝天区"},{"v":"27499","n":"利州区"},{"v":"1978","n":"青川县"},{"v":"1979","n":"旺苍县"},{"v":"1980","n":"剑阁县"},{"v":"1981","n":"苍溪县"}]},{"v":"1983","n":"遂宁市","c":[{"v":"4961","n":"船山区"},{"v":"1984","n":"射洪县"},{"v":"1985","n":"蓬溪县"},{"v":"1986","n":"大英县"},{"v":"1987","n":"安居区"}]},{"v":"1988","n":"内江市","c":[{"v":"3121","n":"东兴区"},{"v":"1989","n":"资中县"},{"v":"1990","n":"隆昌县"},{"v":"1991","n":"威远县"},{"v":"1992","n":"市中区"}]},{"v":"1993","n":"乐山市","c":[{"v":"36983","n":"市中区"},{"v":"36984","n":"峨眉山市"},{"v":"1994","n":"五通桥区"},{"v":"1995","n":"沙湾区"},{"v":"1996","n":"金口河区"},{"v":"1998","n":"夹江县"},{"v":"1999","n":"井研县"},{"v":"2000","n":"犍为县"},{"v":"2001","n":"沐川县"},{"v":"2002","n":"峨边县"},{"v":"2003","n":"马边县"}]},{"v":"2005","n":"宜宾市","c":[{"v":"2006","n":"宜宾县"},{"v":"2007","n":"南溪区"},{"v":"2008","n":"江安县"},{"v":"2009","n":"长宁县"},{"v":"2010","n":"兴文县"},{"v":"2011","n":"珙县"},{"v":"36315","n":"翠屏区"},{"v":"2012","n":"高县"},{"v":"2013","n":"屏山县"},{"v":"2015","n":"筠连县"}]},{"v":"2016","n":"广安市","c":[{"v":"52607","n":"前锋区"},{"v":"2017","n":"岳池县"},{"v":"2018","n":"武胜县"},{"v":"2019","n":"邻水县"},{"v":"2020","n":"广安区"},{"v":"2021","n":"华蓥市"}]},{"v":"2022","n":"南充市","c":[{"v":"43226","n":"顺庆区"},{"v":"43227","n":"高坪区"},{"v":"43228","n":"嘉陵区"},{"v":"43229","n":"西充县"},{"v":"43230","n":"阆中市"},{"v":"36936","n":"南部县"},{"v":"2028","n":"仪陇县"},{"v":"2029","n":"蓬安县"},{"v":"2030","n":"营山县"}]},{"v":"2033","n":"达州市","c":[{"v":"2034","n":"通川区"},{"v":"2035","n":"达川区"},{"v":"2036","n":"大竹县"},{"v":"2037","n":"渠县"},{"v":"2038","n":"万源市"},{"v":"2039","n":"宣汉县"},{"v":"2040","n":"开江县"}]},{"v":"2042","n":"巴中市","c":[{"v":"3904","n":"巴州区"},{"v":"52623","n":"恩阳区"},{"v":"2044","n":"南江县"},{"v":"2045","n":"平昌县"},{"v":"2046","n":"通江县"}]},{"v":"2047","n":"雅安市","c":[{"v":"2049","n":"芦山县"},{"v":"2052","n":"石棉县"},{"v":"2053","n":"名山区"},{"v":"2054","n":"天全县"},{"v":"2055","n":"荥经县"},{"v":"2056","n":"汉源县"},{"v":"2057","n":"宝兴县"},{"v":"41028","n":"雨城区"}]}]},{"v":"23","n":"海南","c":[{"v":"3115","n":"琼海市","c":[{"v":"3720","n":"嘉积镇"},{"v":"3721","n":"万泉镇"},{"v":"3722","n":"石壁镇"},{"v":"3723","n":"中原镇"},{"v":"3724","n":"博鳌镇"},{"v":"3725","n":"阳江镇"},{"v":"3727","n":"龙江镇"},{"v":"3728","n":"潭门镇"},{"v":"3729","n":"塔洋镇"},{"v":"3730","n":"长坡镇"},{"v":"3731","n":"大路镇"},{"v":"3732","n":"会山镇"},{"v":"12747","n":"彬村山华侨农场"},{"v":"12748","n":"东太农场"},{"v":"12749","n":"东红农场"},{"v":"12750","n":"东升农场"},{"v":"12751","n":"南俸农场"}]},{"v":"3137","n":"万宁市","c":[{"v":"53111","n":"兴隆镇"},{"v":"53112","n":"南林农场"},{"v":"3768","n":"万城镇"},{"v":"3769","n":"龙滚镇"},{"v":"3770","n":"和乐镇"},{"v":"3771","n":"后安镇"},{"v":"3772","n":"大茂镇"},{"v":"3773","n":"东澳镇"},{"v":"3774","n":"礼纪镇"},{"v":"3775","n":"长丰镇"},{"v":"3776","n":"山根镇"},{"v":"3777","n":"北大镇"},{"v":"3778","n":"南桥镇"},{"v":"3779","n":"三更罗镇"},{"v":"12775","n":"六连林场"},{"v":"12776","n":"东兴农场"},{"v":"12777","n":"东和农场"},{"v":"12778","n":"新中农场"},{"v":"12779","n":"兴隆华侨农场"}]},{"v":"2121","n":"海口市","c":[{"v":"22466","n":"秀英区"},{"v":"22467","n":"龙华区"},{"v":"22468","n":"琼山区"},{"v":"22469","n":"美兰区"}]},{"v":"3173","n":"东方市","c":[{"v":"3780","n":"八所镇"},{"v":"3781","n":"东河镇"},{"v":"3782","n":"大田镇"},{"v":"3783","n":"感城镇"},{"v":"3784","n":"板桥镇"},{"v":"3785","n":"三家镇"},{"v":"3786","n":"四更镇"},{"v":"3787","n":"新龙镇"},{"v":"3788","n":"天安乡"},{"v":"3789","n":"江边乡"},{"v":"12780","n":"广坝农场"},{"v":"12781","n":"东方华侨农场"}]},{"v":"3690","n":"三亚市","c":[{"v":"4182","n":"崖城镇"},{"v":"3693","n":"海棠湾镇"},{"v":"3694","n":"吉阳镇"},{"v":"3695","n":"凤凰镇"},{"v":"3696","n":"天涯镇"},{"v":"3697","n":"育才镇"},{"v":"22470","n":"河西区"},{"v":"22471","n":"河东区"},{"v":"22503","n":"南田农场"},{"v":"22504","n":"南新农场"},{"v":"22505","n":"南岛农场"},{"v":"22506","n":"立才农场"},{"v":"22507","n":"南滨农场"}]},{"v":"3698","n":"文昌市","c":[{"v":"3752","n":"文城镇"},{"v":"3753","n":"重兴镇"},{"v":"3754","n":"蓬莱镇"},{"v":"3755","n":"会文镇"},{"v":"3756","n":"东路镇"},{"v":"3757","n":"潭牛镇"},{"v":"3758","n":"东阁镇"},{"v":"3759","n":"文教镇"},{"v":"3760","n":"东郊镇"},{"v":"3761","n":"龙楼镇"},{"v":"3762","n":"昌洒镇"},{"v":"3763","n":"翁田镇"},{"v":"3764","n":"抱罗镇"},{"v":"3765","n":"冯坡镇"},{"v":"3766","n":"锦山镇"},{"v":"3767","n":"铺前镇"},{"v":"12762","n":"公坡镇"},{"v":"12763","n":"迈号镇"},{"v":"12764","n":"清谰镇"},{"v":"12765","n":"南阳镇"},{"v":"12766","n":"新桥镇"},{"v":"12767","n":"头苑镇"},{"v":"12768","n":"宝芳乡"},{"v":"12769","n":"龙马乡"},{"v":"12770","n":"湖山乡"},{"v":"12771","n":"东路农场"},{"v":"12772","n":"南阳农场"},{"v":"12773","n":"罗豆农场"},{"v":"12774","n":"橡胶研究所"}]},{"v":"3699","n":"五指山市","c":[{"v":"3712","n":"通什镇"},{"v":"3713","n":"南圣镇"},{"v":"3714","n":"毛阳镇"},{"v":"3715","n":"番阳镇"},{"v":"3716","n":"畅好乡"},{"v":"3717","n":"毛道乡"},{"v":"3719","n":"水满乡"},{"v":"12746","n":"畅好农场"}]},{"v":"3701","n":"临高县","c":[{"v":"39884","n":"城区"},{"v":"3790","n":"临城镇"},{"v":"3791","n":"波莲镇"},{"v":"3792","n":"东英镇"},{"v":"3793","n":"博厚镇"},{"v":"3794","n":"皇桐镇"},{"v":"3795","n":"多文镇"},{"v":"3796","n":"和舍镇"},{"v":"3797","n":"南宝镇"},{"v":"3798","n":"新盈镇"},{"v":"3799","n":"调楼镇"},{"v":"3800","n":"加来镇"},{"v":"12791","n":"红华农场"},{"v":"12792","n":"加来农场"}]},{"v":"3702","n":"澄迈县","c":[{"v":"39886","n":"城区"},{"v":"3801","n":"金江镇"},{"v":"3802","n":"老城镇"},{"v":"3803","n":"瑞溪镇"},{"v":"3804","n":"永发镇"},{"v":"3805","n":"加乐镇"},{"v":"3806","n":"文儒镇"},{"v":"3807","n":"中兴镇"},{"v":"3808","n":"仁兴镇"},{"v":"3809","n":"福山镇"},{"v":"3810","n":"桥头镇"},{"v":"12787","n":"大丰镇"},{"v":"12788","n":"红光农场"},{"v":"12789","n":"西达农场"},{"v":"12790","n":"金安农场"}]},{"v":"3703","n":"定安县","c":[{"v":"4498","n":"黄竹镇"},{"v":"39887","n":"城区"},{"v":"3811","n":"定城镇"},{"v":"3812","n":"新竹镇"},{"v":"3813","n":"龙湖镇"},{"v":"3814","n":"雷鸣镇"},{"v":"3815","n":"龙门镇"},{"v":"3816","n":"龙河镇"},{"v":"3817","n":"岭口镇"},{"v":"3818","n":"翰林镇"},{"v":"3819","n":"富文镇"},{"v":"12782","n":"金鸡岭农场"},{"v":"12783","n":"中瑞农场"},{"v":"12784","n":"南海农场"}]},{"v":"3704","n":"屯昌县","c":[{"v":"39889","n":"县城内"},{"v":"3820","n":"屯城镇"},{"v":"3821","n":"新兴镇"},{"v":"3822","n":"枫木镇"},{"v":"3823","n":"乌坡镇"},{"v":"3824","n":"南吕镇"},{"v":"3825","n":"南坤镇"},{"v":"12785","n":"中建农场"},{"v":"3826","n":"坡心镇"},{"v":"12786","n":"中坤农场"},{"v":"3827","n":"西昌镇"}]},{"v":"3705","n":"昌江县","c":[{"v":"12800","n":"红林农场"},{"v":"39890","n":"城区"},{"v":"3828","n":"石碌镇"},{"v":"3829","n":"叉河镇"},{"v":"3830","n":"十月田镇"},{"v":"3831","n":"乌烈镇"},{"v":"3832","n":"昌化镇"},{"v":"3833","n":"海尾镇"},{"v":"12796","n":"七叉镇"},{"v":"12797","n":"王下乡"},{"v":"12798","n":"海南矿业公司"},{"v":"12799","n":"霸王岭林场"}]},{"v":"3706","n":"白沙县","c":[{"v":"3840","n":"南开乡"},{"v":"3841","n":"阜龙乡"},{"v":"3842","n":"青松乡"},{"v":"3843","n":"金波乡"},{"v":"3844","n":"荣邦乡"},{"v":"39892","n":"城区"},{"v":"12793","n":"白沙农场"},{"v":"3834","n":"牙叉镇"},{"v":"12794","n":"龙江农场"},{"v":"3835","n":"七坊镇"},{"v":"12795","n":"邦溪农场"},{"v":"3836","n":"邦溪镇"},{"v":"3837","n":"打安镇"},{"v":"3838","n":"细水乡"},{"v":"3839","n":"元门乡"}]},{"v":"3707","n":"琼中县","c":[{"v":"12813","n":"吊罗山乡"},{"v":"12814","n":"黎母山林业公司"},{"v":"12815","n":"阳江农场"},{"v":"12816","n":"乌石农场"},{"v":"12817","n":"加钗农场"},{"v":"12818","n":"长征农场"},{"v":"3878","n":"营根镇"},{"v":"3879","n":"湾岭镇"},{"v":"3880","n":"黎母山镇"},{"v":"3881","n":"和平镇"},{"v":"3882","n":"长征镇"},{"v":"3883","n":"红毛镇"},{"v":"3884","n":"中平镇"},{"v":"3885","n":"上安乡"},{"v":"3886","n":"什运乡"},{"v":"39893","n":"城区"}]},{"v":"3708","n":"陵水县","c":[{"v":"53109","n":"东华镇"},{"v":"53110","n":"南平镇"},{"v":"12806","n":"吊罗山林业公司"},{"v":"12807","n":"岭门农场"},{"v":"12808","n":"南平农场"},{"v":"3858","n":"椰林镇"},{"v":"3859","n":"光坡镇"},{"v":"3860","n":"三才镇"},{"v":"3861","n":"英州镇"},{"v":"3862","n":"隆广镇"},{"v":"3863","n":"文罗镇"},{"v":"3864","n":"本号镇"},{"v":"3865","n":"新村镇"},{"v":"3866","n":"黎安镇"},{"v":"3867","n":"提蒙乡"},{"v":"3868","n":"群英乡"},{"v":"39895","n":"城区"}]},{"v":"3709","n":"保亭县","c":[{"v":"12809","n":"保亭研究所"},{"v":"12810","n":"新星农场"},{"v":"12811","n":"金江农场"},{"v":"12812","n":"三道农场"},{"v":"3869","n":"保城镇"},{"v":"3870","n":"什玲镇"},{"v":"3871","n":"加茂镇"},{"v":"3872","n":"响水镇"},{"v":"3873","n":"新政镇"},{"v":"3874","n":"三道镇"},{"v":"3875","n":"六弓乡"},{"v":"3876","n":"南林乡"},{"v":"3877","n":"毛感乡"}]},{"v":"3710","n":"乐东县","c":[{"v":"12801","n":"尖峰岭林业公司"},{"v":"12802","n":"莺歌海盐场"},{"v":"12803","n":"山荣农场"},{"v":"12804","n":"乐光农场"},{"v":"3845","n":"抱由镇"},{"v":"12805","n":"保国农场"},{"v":"3846","n":"万冲镇"},{"v":"3847","n":"大安镇"},{"v":"3849","n":"志仲镇"},{"v":"3851","n":"千家镇"},{"v":"3852","n":"九所镇"},{"v":"3853","n":"利国镇"},{"v":"3854","n":"黄流镇"},{"v":"3855","n":"佛罗镇"},{"v":"3856","n":"尖峰镇"},{"v":"3857","n":"莺歌海镇"},{"v":"39897","n":"城区"}]},{"v":"3711","n":"三沙市","c":[{"v":"12819","n":"中沙群岛"},{"v":"3887","n":"西沙群岛"},{"v":"3888","n":"南沙群岛"}]},{"v":"3034","n":"儋州市","c":[{"v":"12824","n":"热作学院"},{"v":"3125","n":"那大镇"},{"v":"4214","n":"富克镇"},{"v":"3733","n":"和庆镇"},{"v":"3734","n":"南丰镇"},{"v":"3735","n":"大成镇"},{"v":"3736","n":"雅星镇"},{"v":"3737","n":"兰洋镇"},{"v":"3738","n":"光村镇"},{"v":"3739","n":"木棠镇"},{"v":"3740","n":"海头镇"},{"v":"3741","n":"峨蔓镇"},{"v":"3744","n":"三都镇"},{"v":"3745","n":"王五镇"},{"v":"3746","n":"白马井镇"},{"v":"3747","n":"中和镇"},{"v":"3748","n":"排浦镇"},{"v":"3749","n":"东成镇"},{"v":"3750","n":"新州镇"},{"v":"3751","n":"洋浦经济开发区"},{"v":"12752","n":"西培农场"},{"v":"12753","n":"西联农场"},{"v":"12754","n":"蓝洋农场"},{"v":"12755","n":"八一农场"},{"v":"12756","n":"西华农场"},{"v":"12757","n":"西庆农场"},{"v":"12758","n":"西流农场"},{"v":"12759","n":"新盈农场"},{"v":"12760","n":"龙山农场"},{"v":"12761","n":"红岭农场"}]}]},{"v":"24","n":"贵州","c":[{"v":"2144","n":"贵阳市","c":[{"v":"3906","n":"南明区"},{"v":"21037","n":"云岩区"},{"v":"21038","n":"花溪区"},{"v":"21039","n":"小河区"},{"v":"3909","n":"白云区"},{"v":"2145","n":"清镇市"},{"v":"2146","n":"开阳县"},{"v":"2147","n":"修文县"},{"v":"2148","n":"息烽县"},{"v":"2149","n":"乌当区"},{"v":"24463","n":"观山湖区"}]},{"v":"2150","n":"六盘水市","c":[{"v":"2151","n":"盘县"},{"v":"2152","n":"六枝特区"},{"v":"2153","n":"水城县"},{"v":"2154","n":"钟山区"}]},{"v":"2155","n":"遵义市","c":[{"v":"21035","n":"红花岗区"},{"v":"21036","n":"汇川区"},{"v":"2156","n":"赤水市"},{"v":"2157","n":"仁怀市"},{"v":"2158","n":"遵义县"},{"v":"2159","n":"桐梓县"},{"v":"2160","n":"绥阳县"},{"v":"2161","n":"习水县"},{"v":"2162","n":"凤冈县"},{"v":"2163","n":"正安县"},{"v":"2164","n":"湄潭县"},{"v":"2165","n":"余庆县"},{"v":"2166","n":"道真县"},{"v":"2167","n":"务川县"}]},{"v":"2169","n":"铜仁市","c":[{"v":"2170","n":"碧江区"},{"v":"2171","n":"德江县"},{"v":"2172","n":"江口县"},{"v":"2173","n":"思南县"},{"v":"2174","n":"万山区"},{"v":"2175","n":"石阡县"},{"v":"2176","n":"玉屏侗族自治县"},{"v":"2177","n":"松桃苗族自治县"},{"v":"2178","n":"印江土家族苗族自治县"},{"v":"2179","n":"沿河土家族自治县"}]},{"v":"2180","n":"毕节市","c":[{"v":"8891","n":"七星关区"},{"v":"2182","n":"黔西县"},{"v":"2183","n":"大方县"},{"v":"2184","n":"织金县"},{"v":"2185","n":"金沙县"},{"v":"2186","n":"赫章县"},{"v":"2187","n":"纳雍县"},{"v":"2188","n":"威宁彝族回族苗族自治县"}]},{"v":"2189","n":"安顺市","c":[{"v":"2190","n":"西秀区"},{"v":"2191","n":"普定县"},{"v":"2192","n":"平坝县"},{"v":"2193","n":"镇宁布依族苗族自治县"},{"v":"2194","n":"关岭布依族苗族自治县"},{"v":"2195","n":"紫云苗族布依族自治县"}]},{"v":"2196","n":"黔西南州","c":[{"v":"2197","n":"兴义市"},{"v":"2198","n":"望谟县"},{"v":"2199","n":"兴仁县"},{"v":"2200","n":"普安县"},{"v":"2201","n":"册亨县"},{"v":"2202","n":"晴隆县"},{"v":"2203","n":"贞丰县"},{"v":"2204","n":"安龙县"}]},{"v":"2205","n":"黔东南州","c":[{"v":"2206","n":"凯里市"},{"v":"2207","n":"施秉市"},{"v":"2208","n":"从江县"},{"v":"2209","n":"锦屏县"},{"v":"2210","n":"镇远县"},{"v":"2211","n":"麻江县"},{"v":"2212","n":"台江县"},{"v":"2213","n":"天柱县"},{"v":"2214","n":"黄平县"},{"v":"2215","n":"榕江县"},{"v":"2216","n":"剑河县"},{"v":"2217","n":"三穗县"},{"v":"2218","n":"雷山县"},{"v":"2219","n":"黎平县"},{"v":"2220","n":"岑巩县"},{"v":"2221","n":"丹寨县"}]},{"v":"2222","n":"黔南州","c":[{"v":"2223","n":"都匀市"},{"v":"2224","n":"福泉市"},{"v":"2225","n":"贵定县"},{"v":"2226","n":"惠水县"},{"v":"2227","n":"罗甸县"},{"v":"2228","n":"瓮安县"},{"v":"2229","n":"荔波县"},{"v":"2230","n":"龙里县"},{"v":"2231","n":"平塘县"},{"v":"2232","n":"长顺县"},{"v":"2233","n":"独山县"},{"v":"2234","n":"三都县"}]}]},{"v":"25","n":"云南","c":[{"v":"2304","n":"丽江市","c":[{"v":"2305","n":"玉龙县"},{"v":"2306","n":"华坪县"},{"v":"2307","n":"永胜县"},{"v":"2308","n":"宁蒗县"},{"v":"21033","n":"古城区"}]},{"v":"2309","n":"文山州","c":[{"v":"2310","n":"文山市"},{"v":"2311","n":"麻栗坡县"},{"v":"2312","n":"砚山县"},{"v":"2313","n":"广南县"},{"v":"2314","n":"马关县"},{"v":"2315","n":"富宁县"},{"v":"2316","n":"西畴县"},{"v":"2317","n":"丘北县"}]},{"v":"4108","n":"迪庆州","c":[{"v":"6823","n":"香格里拉县"},{"v":"6824","n":"德钦县"},{"v":"6825","n":"维西县"}]},{"v":"2318","n":"红河州","c":[{"v":"2319","n":"个旧市"},{"v":"2320","n":"开远市"},{"v":"2321","n":"弥勒县"},{"v":"2322","n":"红河县"},{"v":"2323","n":"绿春县"},{"v":"2324","n":"蒙自市"},{"v":"2325","n":"泸西县"},{"v":"2326","n":"建水县"},{"v":"2327","n":"元阳县"},{"v":"2328","n":"石屏县"},{"v":"2329","n":"金平县"},{"v":"2330","n":"屏边县"},{"v":"2331","n":"河口县"}]},{"v":"2332","n":"西双版纳州","c":[{"v":"2333","n":"景洪市"},{"v":"2334","n":"勐海县"},{"v":"2335","n":"勐腊县"}]},{"v":"2336","n":"楚雄州","c":[{"v":"2338","n":"元谋县"},{"v":"2339","n":"南华县"},{"v":"2340","n":"牟定县"},{"v":"2341","n":"武定县"},{"v":"2342","n":"大姚县"},{"v":"2343","n":"双柏县"},{"v":"2344","n":"禄丰县"},{"v":"2345","n":"永仁县"},{"v":"3917","n":"姚安县"},{"v":"20817","n":"楚雄市"}]},{"v":"2347","n":"大理州","c":[{"v":"2349","n":"剑川县"},{"v":"2350","n":"弥渡县"},{"v":"2351","n":"云龙县"},{"v":"2352","n":"洱源县"},{"v":"2353","n":"鹤庆县"},{"v":"2354","n":"宾川县"},{"v":"2355","n":"祥云县"},{"v":"2356","n":"永平县"},{"v":"2357","n":"巍山县"},{"v":"2358","n":"漾濞县"},{"v":"2359","n":"南涧县"},{"v":"20818","n":"大理市"}]},{"v":"2360","n":"德宏州","c":[{"v":"2361","n":"芒市"},{"v":"2362","n":"瑞丽市"},{"v":"2363","n":"盈江县"},{"v":"2364","n":"梁河县"},{"v":"2365","n":"陇川县"}]},{"v":"2366","n":"怒江州","c":[{"v":"2367","n":"泸水县"},{"v":"2368","n":"福贡县"},{"v":"2369","n":"兰坪县"},{"v":"2370","n":"贡山县"}]},{"v":"2235","n":"昆明市","c":[{"v":"2246","n":"盘龙区"},{"v":"3912","n":"五华区"},{"v":"3914","n":"西山区"},{"v":"3913","n":"官渡区"},{"v":"27497","n":"呈贡区"},{"v":"2236","n":"东川区"},{"v":"2237","n":"安宁市"},{"v":"2238","n":"富民县"},{"v":"2239","n":"嵩明县"},{"v":"2241","n":"晋宁县"},{"v":"2242","n":"宜良县"},{"v":"2243","n":"禄劝县"},{"v":"2244","n":"石林县"},{"v":"2245","n":"寻甸县"}]},{"v":"2247","n":"曲靖市","c":[{"v":"21034","n":"麒麟区"},{"v":"2249","n":"马龙县"},{"v":"2250","n":"宣威市"},{"v":"2251","n":"富源县"},{"v":"2252","n":"会泽县"},{"v":"2253","n":"陆良县"},{"v":"2254","n":"师宗县"},{"v":"2255","n":"罗平县"},{"v":"2256","n":"沾益县"}]},{"v":"2258","n":"玉溪市","c":[{"v":"2259","n":"红塔区"},{"v":"2260","n":"华宁县"},{"v":"2261","n":"澄江县"},{"v":"2262","n":"易门县"},{"v":"2263","n":"通海县"},{"v":"2264","n":"江川县"},{"v":"2265","n":"元江县"},{"v":"2266","n":"新平县"},{"v":"2267","n":"峨山县"}]},{"v":"2270","n":"昭通市","c":[{"v":"3002","n":"鲁甸县"},{"v":"3003","n":"绥江县"},{"v":"2271","n":"昭阳区"},{"v":"2272","n":"镇雄县"},{"v":"2273","n":"永善县"},{"v":"2274","n":"大关县"},{"v":"2275","n":"盐津县"},{"v":"2276","n":"彝良县"},{"v":"2277","n":"水富县"},{"v":"2278","n":"巧家县"},{"v":"2279","n":"威信县"}]},{"v":"2281","n":"普洱市","c":[{"v":"2958","n":"孟连县"},{"v":"2282","n":"思茅区"},{"v":"2283","n":"宁洱县"},{"v":"2284","n":"景东县"},{"v":"2285","n":"镇沅县"},{"v":"2286","n":"景谷县"},{"v":"2287","n":"墨江县"},{"v":"2288","n":"澜沧县"},{"v":"2289","n":"西盟县"},{"v":"2290","n":"江城县"}]},{"v":"2291","n":"临沧市","c":[{"v":"3915","n":"双江县"},{"v":"3916","n":"沧源县"},{"v":"2292","n":"临翔区"},{"v":"2293","n":"镇康县"},{"v":"2294","n":"凤庆县"},{"v":"2295","n":"云县"},{"v":"2296","n":"永德县"},{"v":"2297","n":"耿马县"}]},{"v":"2298","n":"保山市","c":[{"v":"2299","n":"隆阳区"},{"v":"2300","n":"施甸县"},{"v":"2301","n":"昌宁县"},{"v":"2302","n":"龙陵县"},{"v":"2303","n":"腾冲县"}]}]},{"v":"26","n":"西藏","c":[{"v":"3107","n":"那曲地区","c":[{"v":"53091","n":"双湖县"},{"v":"3108","n":"索县"},{"v":"3961","n":"那曲县"},{"v":"3962","n":"嘉黎县"},{"v":"3963","n":"比如县"},{"v":"3964","n":"聂荣县"},{"v":"3965","n":"安多县"},{"v":"3966","n":"申扎县"},{"v":"3967","n":"班戈县"},{"v":"3968","n":"巴青县"},{"v":"3969","n":"尼玛县"}]},{"v":"3129","n":"山南地区","c":[{"v":"3130","n":"贡嘎县"},{"v":"3934","n":"扎囊县"},{"v":"3935","n":"乃东县"},{"v":"3936","n":"桑日县"},{"v":"3937","n":"琼结县"},{"v":"3938","n":"曲松县"},{"v":"3939","n":"措美县"},{"v":"3940","n":"洛扎县"},{"v":"3941","n":"加查县"},{"v":"3942","n":"隆子县"},{"v":"3943","n":"错那县"},{"v":"3944","n":"浪卡子县"}]},{"v":"3138","n":"昌都地区","c":[{"v":"3139","n":"昌都县"},{"v":"3924","n":"江达县"},{"v":"3925","n":"贡觉县"},{"v":"3926","n":"类乌齐县"},{"v":"3927","n":"丁青县"},{"v":"3928","n":"察雅县"},{"v":"3929","n":"八宿县"},{"v":"3930","n":"左贡县"},{"v":"3931","n":"芒康县"},{"v":"3932","n":"洛隆县"},{"v":"3933","n":"边坝县"}]},{"v":"3144","n":"日喀则地区","c":[{"v":"3160","n":"聂拉木县"},{"v":"3166","n":"昂仁县"},{"v":"3945","n":"日喀则市"},{"v":"3946","n":"南木林县"},{"v":"3947","n":"江孜县"},{"v":"3948","n":"定日县"},{"v":"3949","n":"萨迦县　"},{"v":"3950","n":"拉孜县"},{"v":"3951","n":"谢通门县"},{"v":"3952","n":"白朗县"},{"v":"3953","n":"仁布县"},{"v":"3954","n":"康马县"},{"v":"3955","n":"定结县"},{"v":"3956","n":"仲巴县"},{"v":"3957","n":"亚东县"},{"v":"3958","n":"吉隆县"},{"v":"3959","n":"萨嘎县"},{"v":"3960","n":"岗巴县"}]},{"v":"3970","n":"阿里地区","c":[{"v":"3972","n":"噶尔县"},{"v":"3973","n":"普兰县"},{"v":"3974","n":"札达县　"},{"v":"3975","n":"日土县"},{"v":"3976","n":"革吉县"},{"v":"3977","n":"改则县"},{"v":"3978","n":"措勤县"}]},{"v":"3971","n":"林芝地区","c":[{"v":"3979","n":"林芝县"},{"v":"3980","n":"工布江达县"},{"v":"3981","n":"米林县"},{"v":"3982","n":"墨脱县"},{"v":"3983","n":"波密县"},{"v":"3984","n":"察隅县"},{"v":"3985","n":"朗县"}]},{"v":"2951","n":"拉萨市","c":[{"v":"2952","n":"城关区"},{"v":"3123","n":"林周县"},{"v":"3918","n":"当雄县"},{"v":"3919","n":"尼木县"},{"v":"3920","n":"曲水县"},{"v":"3921","n":"堆龙德庆县"},{"v":"3922","n":"达孜县"},{"v":"3923","n":"墨竹工卡县"}]}]},{"v":"27","n":"陕西","c":[{"v":"2376","n":"西安市","c":[{"v":"51881","n":"新城区"},{"v":"4343","n":"雁塔区"},{"v":"50230","n":"未央区"},{"v":"50231","n":"长安区"},{"v":"50232","n":"灞桥区"},{"v":"50233","n":"碑林区"},{"v":"50235","n":"莲湖区"},{"v":"50236","n":"临潼区"},{"v":"50237","n":"阎良区"},{"v":"52075","n":"西安武警工程学院"},{"v":"2380","n":"高陵县"},{"v":"2381","n":"蓝田县"},{"v":"2382","n":"户县"},{"v":"2383","n":"周至县"}]},{"v":"2386","n":"铜川市","c":[{"v":"2387","n":"印台区"},{"v":"2388","n":"宜君县"},{"v":"2389","n":"王益区"},{"v":"3989","n":"耀州区"}]},{"v":"2390","n":"宝鸡市","c":[{"v":"2401","n":"渭滨区"},{"v":"3990","n":"金台区"},{"v":"2392","n":"岐山县"},{"v":"2393","n":"太白县"},{"v":"2394","n":"凤翔县"},{"v":"2395","n":"陇县"},{"v":"2396","n":"麟游县"},{"v":"2397","n":"千阳县"},{"v":"2398","n":"扶风县"},{"v":"2399","n":"凤县"},{"v":"2400","n":"眉县"},{"v":"40650","n":"陈仓区"}]},{"v":"2402","n":"咸阳市","c":[{"v":"44320","n":"秦都区"},{"v":"44321","n":"渭城区"},{"v":"2403","n":"兴平市"},{"v":"2404","n":"礼泉县"},{"v":"2405","n":"泾阳县"},{"v":"2406","n":"永寿县"},{"v":"2407","n":"三原县"},{"v":"2408","n":"彬县"},{"v":"2409","n":"旬邑县"},{"v":"2411","n":"长武县"},{"v":"2412","n":"乾县"},{"v":"2413","n":"武功县"},{"v":"2414","n":"淳化县"},{"v":"44514","n":"杨陵区"}]},{"v":"2416","n":"渭南市","c":[{"v":"2417","n":"韩城市"},{"v":"2418","n":"华阴市"},{"v":"2419","n":"蒲城县"},{"v":"2420","n":"华县"},{"v":"2421","n":"潼关县"},{"v":"2422","n":"大荔县"},{"v":"2423","n":"澄城县"},{"v":"2424","n":"合阳县"},{"v":"2425","n":"白水县"},{"v":"2426","n":"富平县"},{"v":"38094","n":"临渭区"}]},{"v":"2428","n":"延安市","c":[{"v":"31523","n":"宝塔区"},{"v":"2429","n":"安塞县"},{"v":"2430","n":"洛川县"},{"v":"2431","n":"子长县"},{"v":"2432","n":"黄陵县"},{"v":"2433","n":"延长县"},{"v":"2434","n":"宜川县"},{"v":"2435","n":"延川县"},{"v":"2436","n":"甘泉县"},{"v":"2437","n":"富县"},{"v":"2438","n":"志丹县"},{"v":"2439","n":"黄龙县"},{"v":"2440","n":"吴起县"}]},{"v":"2442","n":"汉中市","c":[{"v":"53107","n":"经济开发区南区"},{"v":"31864","n":"汉台区"},{"v":"2443","n":"南郑县"},{"v":"2444","n":"城固县"},{"v":"2445","n":"洋县"},{"v":"2446","n":"佛坪县"},{"v":"2447","n":"留坝县"},{"v":"2448","n":"镇巴县"},{"v":"2449","n":"西乡县"},{"v":"2450","n":"勉县"},{"v":"2451","n":"略阳县"},{"v":"2452","n":"宁强县"}]},{"v":"2454","n":"榆林市","c":[{"v":"2456","n":"清涧县"},{"v":"2457","n":"绥德县"},{"v":"2459","n":"佳县"},{"v":"2460","n":"神木县"},{"v":"2461","n":"府谷县"},{"v":"2462","n":"子洲县"},{"v":"2464","n":"横山县"},{"v":"2465","n":"米脂县"},{"v":"2466","n":"吴堡县"},{"v":"2467","n":"定边县"},{"v":"31680","n":"榆阳区"},{"v":"4081","n":"靖边县"}]},{"v":"2468","n":"商洛市","c":[{"v":"2469","n":"商州区"},{"v":"2470","n":"镇安县"},{"v":"2471","n":"山阳县"},{"v":"2472","n":"洛南县"},{"v":"2473","n":"商南县"},{"v":"2474","n":"丹凤县"},{"v":"2475","n":"柞水县"}]},{"v":"2476","n":"安康市","c":[{"v":"3993","n":"汉滨区"},{"v":"2478","n":"紫阳县"},{"v":"2479","n":"岚皋县"},{"v":"2480","n":"旬阳县"},{"v":"2481","n":"镇坪县"},{"v":"2482","n":"平利县"},{"v":"2483","n":"宁陕县"},{"v":"2484","n":"汉阴县"},{"v":"2485","n":"石泉县"},{"v":"2486","n":"白河县"}]}]},{"v":"28","n":"甘肃","c":[{"v":"2564","n":"甘南州","c":[{"v":"2565","n":"合作市"},{"v":"2566","n":"夏河县"},{"v":"2567","n":"碌曲县"},{"v":"2568","n":"舟曲县"},{"v":"2569","n":"玛曲县"},{"v":"2570","n":"迭部县"},{"v":"2571","n":"临潭县"},{"v":"2572","n":"卓尼县"}]},{"v":"3080","n":"定西市","c":[{"v":"3081","n":"岷县"},{"v":"4002","n":"安定区"},{"v":"4003","n":"通渭县"},{"v":"4004","n":"临洮县"},{"v":"4005","n":"漳县"},{"v":"4006","n":"渭源县"},{"v":"4007","n":"陇西县"}]},{"v":"2573","n":"临夏州","c":[{"v":"2574","n":"临夏县"},{"v":"2575","n":"康乐县"},{"v":"2576","n":"永靖县"},{"v":"2577","n":"和政县"},{"v":"2578","n":"东乡族自治县"},{"v":"2579","n":"积石山县"},{"v":"3175","n":"临夏市"},{"v":"4008","n":"广河县"}]},{"v":"2487","n":"兰州市","c":[{"v":"21646","n":"七里河区"},{"v":"21647","n":"安宁区"},{"v":"21648","n":"城关区"},{"v":"3995","n":"西固区"},{"v":"3997","n":"红古区"},{"v":"2488","n":"永登县"},{"v":"2489","n":"榆中县"},{"v":"2490","n":"皋兰县"}]},{"v":"2492","n":"金昌市","c":[{"v":"2493","n":"永昌县"},{"v":"2494","n":"金川区"}]},{"v":"2495","n":"白银市","c":[{"v":"2496","n":"白银区"},{"v":"2497","n":"平川区"},{"v":"2498","n":"靖远县"},{"v":"2499","n":"景泰县"},{"v":"2500","n":"会宁县"}]},{"v":"2501","n":"天水市","c":[{"v":"21644","n":"麦积区"},{"v":"21645","n":"秦州区"},{"v":"2504","n":"甘谷县"},{"v":"2505","n":"武山县"},{"v":"2506","n":"清水县"},{"v":"2507","n":"秦安县"},{"v":"2508","n":"张家川县"}]},{"v":"2509","n":"嘉峪关市","c":[{"v":"16899","n":"长城区"},{"v":"16923","n":"镜铁区"},{"v":"2970","n":"雄关区"}]},{"v":"2518","n":"平凉市","c":[{"v":"3998","n":"静宁县"},{"v":"3023","n":"崆峒区"},{"v":"2519","n":"华亭县"},{"v":"2520","n":"崇信县"},{"v":"2521","n":"泾川县"},{"v":"2522","n":"灵台县"},{"v":"2524","n":"庄浪县"}]},{"v":"2525","n":"庆阳市","c":[{"v":"4001","n":"庆城县"},{"v":"2526","n":"西峰区"},{"v":"2528","n":"镇原县"},{"v":"2529","n":"合水县"},{"v":"2530","n":"华池县"},{"v":"2531","n":"环县"},{"v":"2532","n":"宁县"},{"v":"2533","n":"正宁县"}]},{"v":"2534","n":"陇南市","c":[{"v":"2535","n":"成县"},{"v":"2536","n":"礼县"},{"v":"2537","n":"康县"},{"v":"2538","n":"武都区"},{"v":"2539","n":"文县"},{"v":"2540","n":"两当县"},{"v":"2541","n":"徽县"},{"v":"2542","n":"宕昌县"},{"v":"2543","n":"西和县"}]},{"v":"2544","n":"武威市","c":[{"v":"2545","n":"凉州区"},{"v":"2546","n":"古浪县"},{"v":"2547","n":"天祝县"},{"v":"2548","n":"民勤县"}]},{"v":"2549","n":"张掖市","c":[{"v":"2550","n":"甘州区"},{"v":"2551","n":"山丹县"},{"v":"2552","n":"临泽县"},{"v":"2553","n":"高台县"},{"v":"2554","n":"肃南县"},{"v":"2555","n":"民乐县"}]},{"v":"2556","n":"酒泉市","c":[{"v":"2560","n":"金塔县"},{"v":"2562","n":"阿克塞县"},{"v":"2563","n":"肃北县"},{"v":"3999","n":"瓜州县"},{"v":"4000","n":"肃州区"},{"v":"2558","n":"玉门市"},{"v":"2559","n":"敦煌市"}]}]},{"v":"29","n":"青海","c":[{"v":"2580","n":"西宁市","c":[{"v":"2581","n":"湟中县"},{"v":"2582","n":"湟源县"},{"v":"2583","n":"大通县"},{"v":"21652","n":"城中区"},{"v":"21653","n":"城东区"},{"v":"21654","n":"城西区"},{"v":"21655","n":"城北区"}]},{"v":"2585","n":"海东地区","c":[{"v":"2586","n":"平安县"},{"v":"2587","n":"乐都县"},{"v":"2588","n":"民和县"},{"v":"2589","n":"互助县"},{"v":"2590","n":"化隆县"},{"v":"2591","n":"循化县"}]},{"v":"2592","n":"海北州","c":[{"v":"2593","n":"海晏县"},{"v":"2594","n":"祁连县"},{"v":"2595","n":"刚察县"},{"v":"2596","n":"门源县"}]},{"v":"2597","n":"黄南州","c":[{"v":"2598","n":"尖扎县"},{"v":"2599","n":"同仁县"},{"v":"2600","n":"泽库县"},{"v":"2602","n":"河南县"}]},{"v":"2603","n":"海南州","c":[{"v":"4012","n":"共和县"},{"v":"4013","n":"同德县"},{"v":"4014","n":"贵德县"},{"v":"4015","n":"兴海县"},{"v":"4016","n":"贵南县"}]},{"v":"2605","n":"果洛州","c":[{"v":"2606","n":"玛沁县"},{"v":"2607","n":"甘德县"},{"v":"2608","n":"达日县"},{"v":"2609","n":"班玛县"},{"v":"2610","n":"久治县"},{"v":"2611","n":"玛多县"}]},{"v":"2612","n":"玉树州","c":[{"v":"2613","n":"玉树县"},{"v":"2614","n":"称多县"},{"v":"2615","n":"囊谦县"},{"v":"2616","n":"杂多县"},{"v":"2617","n":"治多县"},{"v":"2618","n":"曲麻莱县"}]},{"v":"2620","n":"海西州","c":[{"v":"2621","n":"德令哈市"},{"v":"2622","n":"乌兰县"},{"v":"2623","n":"天峻县"},{"v":"2624","n":"都兰县"},{"v":"2625","n":"大柴旦行委"},{"v":"2626","n":"冷湖行委"},{"v":"2627","n":"茫崖行委"},{"v":"3021","n":"格尔木市"}]}]},{"v":"30","n":"宁夏","c":[{"v":"2628","n":"银川市","c":[{"v":"2629","n":"灵武市"},{"v":"2630","n":"永宁县"},{"v":"2631","n":"贺兰县"},{"v":"21649","n":"兴庆区"},{"v":"21650","n":"金凤区"},{"v":"21651","n":"西夏区"}]},{"v":"2632","n":"石嘴山市","c":[{"v":"2633","n":"平罗县"},{"v":"2635","n":"惠农区"},{"v":"2636","n":"大武口区"}]},{"v":"2637","n":"吴忠市","c":[{"v":"2638","n":"青铜峡市"},{"v":"2641","n":"同心县"},{"v":"2642","n":"盐池县"},{"v":"2643","n":"红寺堡开发区"},{"v":"2966","n":"利通区"}]},{"v":"2644","n":"固原市","c":[{"v":"2647","n":"西吉县"},{"v":"2648","n":"隆德县"},{"v":"2649","n":"泾源县"},{"v":"2650","n":"彭阳县"},{"v":"2651","n":"原州区"}]},{"v":"3071","n":"中卫市","c":[{"v":"3072","n":"中宁县"},{"v":"3148","n":"海原县"},{"v":"4020","n":"沙坡头区"}]}]},{"v":"31","n":"新疆","c":[{"v":"4110","n":"五家渠市","c":[{"v":"4122","n":"五家渠市"}]},{"v":"15945","n":"阿拉尔市","c":[{"v":"15948","n":"阿拉尔市"}]},{"v":"15946","n":"图木舒克市","c":[{"v":"15947","n":"图木舒克市"}]},{"v":"2652","n":"乌鲁木齐市","c":[{"v":"36684","n":"天山区"},{"v":"4024","n":"头屯河区"},{"v":"4025","n":"达坂城区"},{"v":"4026","n":"米东区"},{"v":"36685","n":"新市区"},{"v":"36686","n":"沙依巴克区"},{"v":"36687","n":"水磨沟区"},{"v":"2653","n":"乌鲁木齐县"}]},{"v":"2654","n":"克拉玛依市","c":[{"v":"2655","n":"克拉玛依区"},{"v":"2930","n":"独山子区"},{"v":"4027","n":"乌尔禾区"},{"v":"3006","n":"白碱滩区"}]},{"v":"2656","n":"石河子市","c":[{"v":"2657","n":"石河子市"}]},{"v":"2658","n":"吐鲁番地区","c":[{"v":"2659","n":"吐鲁番市"},{"v":"2660","n":"托克逊县"},{"v":"2661","n":"鄯善县"}]},{"v":"53090","n":"铁门关市","c":[{"v":"53108","n":"铁门关市"}]},{"v":"2662","n":"哈密地区","c":[{"v":"2663","n":"哈密市"},{"v":"2664","n":"巴里坤县"},{"v":"2665","n":"伊吾县"}]},{"v":"2666","n":"和田地区","c":[{"v":"14848","n":"和田县"},{"v":"2667","n":"和田市"},{"v":"2669","n":"墨玉县"},{"v":"2670","n":"洛浦县"},{"v":"2671","n":"策勒县"},{"v":"2672","n":"于田县"},{"v":"2673","n":"民丰县"},{"v":"2674","n":"皮山县"}]},{"v":"2675","n":"阿克苏地区","c":[{"v":"2676","n":"阿克苏市"},{"v":"2678","n":"温宿县"},{"v":"2679","n":"沙雅县"},{"v":"2680","n":"拜城县"},{"v":"2681","n":"阿瓦提县"},{"v":"2682","n":"库车县"},{"v":"2683","n":"柯坪县"},{"v":"2684","n":"新和县"},{"v":"2685","n":"乌什县"}]},{"v":"2686","n":"喀什地区","c":[{"v":"2687","n":"喀什市"},{"v":"2688","n":"巴楚县"},{"v":"2689","n":"泽普县"},{"v":"2690","n":"伽师县"},{"v":"2691","n":"叶城县"},{"v":"2692","n":"岳普湖县"},{"v":"2693","n":"疏附县"},{"v":"2694","n":"疏勒县"},{"v":"2695","n":"英吉沙县"},{"v":"2696","n":"麦盖提县"},{"v":"2697","n":"莎车县"},{"v":"2698","n":"塔什库尔干县"}]},{"v":"2699","n":"克孜勒苏州","c":[{"v":"2700","n":"阿图什市"},{"v":"2701","n":"阿合奇县"},{"v":"2702","n":"乌恰县"},{"v":"2703","n":"阿克陶县"}]},{"v":"2704","n":"巴音郭楞州","c":[{"v":"2705","n":"库尔勒市"},{"v":"2706","n":"尉犁县"},{"v":"2707","n":"和静县"},{"v":"2708","n":"博湖县"},{"v":"2709","n":"和硕县"},{"v":"2710","n":"轮台县"},{"v":"2711","n":"若羌县"},{"v":"2712","n":"且末县"},{"v":"2713","n":"焉耆县"}]},{"v":"2714","n":"昌吉州","c":[{"v":"2715","n":"昌吉市"},{"v":"2716","n":"阜康市"},{"v":"2718","n":"奇台县"},{"v":"2719","n":"玛纳斯县"},{"v":"2720","n":"吉木萨尔县"},{"v":"2721","n":"呼图壁县"},{"v":"2722","n":"木垒县"}]},{"v":"2723","n":"博尔塔拉州","c":[{"v":"52790","n":"阿拉山口市"},{"v":"2724","n":"博乐市"},{"v":"2725","n":"精河县"},{"v":"2726","n":"温泉县"}]},{"v":"2727","n":"伊犁州","c":[{"v":"4499","n":"伊宁县"},{"v":"2728","n":"伊宁市"},{"v":"2729","n":"特克斯县"},{"v":"2730","n":"尼勒克县"},{"v":"2731","n":"昭苏县"},{"v":"2732","n":"新源县"},{"v":"2733","n":"霍城县"},{"v":"2734","n":"察布查尔县"},{"v":"2735","n":"巩留县"},{"v":"4028","n":"奎屯市"}]},{"v":"2736","n":"塔城地区","c":[{"v":"2737","n":"塔城市"},{"v":"2738","n":"乌苏市"},{"v":"2739","n":"额敏县"},{"v":"2740","n":"裕民县"},{"v":"2741","n":"沙湾县"},{"v":"2742","n":"托里县"},{"v":"2743","n":"和布克赛尔县"}]},{"v":"2744","n":"阿勒泰地区","c":[{"v":"6822","n":"北屯市"},{"v":"2745","n":"阿勒泰市"},{"v":"2746","n":"富蕴县"},{"v":"2747","n":"青河县"},{"v":"2748","n":"吉木乃县"},{"v":"2749","n":"布尔津县"},{"v":"2750","n":"福海县"},{"v":"2751","n":"哈巴河县"}]}]},{"v":"32","n":"台湾","c":[{"v":"2768","n":"台湾","c":[{"v":"53504","n":"金门"},{"v":"53505","n":"连江"},{"v":"53506","n":"苗栗"},{"v":"53507","n":"南投"},{"v":"53508","n":"澎湖"},{"v":"53509","n":"屏东"},{"v":"53510","n":"台东"},{"v":"53511","n":"台中"},{"v":"53512","n":"台南"},{"v":"53513","n":"台北"},{"v":"53514","n":"桃园"},{"v":"53515","n":"云林"},{"v":"53516","n":"新北"},{"v":"53497","n":"彰化"},{"v":"53498","n":"嘉义"},{"v":"53499","n":"新竹"},{"v":"53500","n":"花莲"},{"v":"53501","n":"宜兰"},{"v":"53502","n":"高雄"},{"v":"53503","n":"基隆"}]}]},{"v":"84","n":"钓鱼岛","c":[{"v":"1310","n":"钓鱼岛","c":[{"v":"53263","n":"钓鱼岛县1"},{"v":"53281","n":"钓鱼岛全区"},{"v":"53262","n":"钓鱼岛县"}]}]},{"v":"52993","n":"港澳","c":[{"v":"52994","n":"香港特别行政区","c":[{"v":"52996","n":"中西区"},{"v":"52997","n":"东区"},{"v":"52998","n":"九龙城区"},{"v":"52999","n":"观塘区"},{"v":"53000","n":"深水埗区"},{"v":"53001","n":"湾仔区"},{"v":"53002","n":"黄大仙区"},{"v":"53003","n":"油尖旺区"},{"v":"53004","n":"离岛区"},{"v":"53005","n":"葵青区"},{"v":"53006","n":"北区"},{"v":"53007","n":"西贡区"},{"v":"53008","n":"沙田区"},{"v":"53009","n":"屯门区"},{"v":"53010","n":"大埔区"},{"v":"53011","n":"荃湾区"},{"v":"53012","n":"元朗区"},{"v":"53013","n":"香港"},{"v":"53014","n":"九龙"},{"v":"53015","n":"新界"}]},{"v":"52995","n":"澳门特别行政区","c":[{"v":"53016","n":"澳门特别行政区"},{"v":"53017","n":"澳门半岛"},{"v":"53018","n":"凼仔"},{"v":"53019","n":"路凼城"},{"v":"53020","n":"路环"}]}]}];if(true){!(__WEBPACK_AMD_DEFINE_FACTORY__ = (district),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else{window.YDUI_DISTRICT=district}}();

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(12);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(7);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(28);
var dispatchRequest = __webpack_require__(29);
var isAbsoluteURL = __webpack_require__(37);
var combineURLs = __webpack_require__(35);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(32);
var isCancel = __webpack_require__(13);
var defaults = __webpack_require__(7);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(14);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(44)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/*! vue-ydui v1.0.4 by YDCSS (c) 2017 Licensed MIT */\n@-webkit-keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@-webkit-keyframes notify-downin{0%{opacity:0;-webkit-transform:translate3d(0,-50px,0);transform:translate3d(0,-50px,0)}50%{opacity:.5}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes notify-downin{0%{opacity:0;-webkit-transform:translate3d(0,-50px,0);transform:translate3d(0,-50px,0)}50%{opacity:.5}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes notify-upout{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}50%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-50px,0);transform:translate3d(0,-50px,0)}}@keyframes notify-upout{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}50%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-50px,0);transform:translate3d(0,-50px,0)}}@-webkit-keyframes rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.yd-dialog-black-mask{background-color:rgba(0,0,0,.4)}.yd-dialog-black-mask,.yd-dialog-white-mask{position:fixed;z-index:2000;bottom:0;right:0;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-dialog-white-mask{background-color:transparent}.yd-confirm{width:85%;background-color:#fafafa;border-radius:2px;font-size:15px;-webkit-animation:zoomIn .15s ease forwards;animation:zoomIn .15s ease forwards}.yd-confirm-hd{text-align:left;padding:15px 20px 5px}.yd-confirm-title{font-weight:400;color:#444;word-break:break-all}.yd-confirm-bd{text-align:left;padding:0 20px;font-size:14px;color:#888;line-height:20px;word-break:break-all}.yd-confirm-ft{position:relative;line-height:40px;margin-top:14px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-confirm-ft:after{content:\"\";position:absolute;z-index:0;top:0;left:0;width:100%;border-top:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-confirm-ft>a{position:relative;text-align:center;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:0 2px}.yd-confirm-ft>a:not(:last-child):after{content:\"\";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-confirm-ft>a.default{color:#353535}.yd-confirm-ft>a.primary{color:#0bb20c}.yd-alert{-webkit-animation:zoomIn .15s ease forwards;animation:zoomIn .15s ease forwards}.yd-alert .yd-confirm-bd{text-align:center;padding:20px 20px 0}.yd-alert .yd-confirm-ft{margin-top:14px}.yd-toast{min-width:130px;max-width:80%;padding-top:20px;background:rgba(40,40,40,.8);text-align:center;border-radius:3px;color:#fff;-webkit-animation:zoomIn .06s ease forwards;animation:zoomIn .06s ease forwards}.yd-toast-none-icon{padding-top:10px;border-radius:3px}.yd-toast-none-icon .yd-toast-content{padding:0 36px 10px}.yd-toast-content{font-size:15px;padding:0 15px 15px;line-height:22px;word-break:break-all}.yd-toast-error-icon,.yd-toast-success-icon{display:block;margin-bottom:10px}.yd-toast-error-icon:after,.yd-toast-success-icon:after{display:inline-block;content:\"\"}.yd-toast-success-icon:after{width:43px;height:35px;background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABSCAMAAACVH4HWAAACH1BMVEX////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9O2oTAAAAtHRSTlMAAQIEBQYHCAkKCw0ODxAREhQVFhcYGRobHB0gISIkJSYnKCkqKy4vMDM1Nzg5Ojw+QEJDREZHSElKTE9VVldYWltdXl9gYWJlZmdoaWprbG5zd3h6e3x9fn+AgoOFhoiJiouNjpCSlJWYmZqbnJ2eoKKjpKaoqausrq+wtLa3ubq7vL2+wcLFxsfIy83Oz9DR0tPV19jZ2tvc3d7f4OHm5+jp6uvs7e7v8PL19/j5+vv8/f6CNheHAAACzElEQVQYGbXBCVtMUQAG4G9KJUok2cmSCNkqIbIURbRIlrIrRAhZUgoJpc1ehKK0yGR8P9CD1F3O3Lkzc877QqlFJTV7A6BUeMkgyYYYKBT3ln81h0CZjYMcVQJVNo/wvyoospvjjkGNPI57MRFKFFNjH5Qoo8YdKFFJjTdhUCD0PjU+L4MC0Y3UcG6AAvM6qbUNCqz4QK0jUGD1ELUuQ4HkAWrVTYB8O35Rqy0c8uVQp38J5DtFneFEyFdGvQxI57hDvQJIN/Eu9cohXVgT9aoh3bwm6rVMg2yxPdTrnQvZ1vdSz5UC2Tb/oMF2yJZBowLIlkOjS5DtEI3qIdtZGrXMgFwBN2j0aT7kCrpHI1ci5Ip+QpNMWAieG+WAdyLbaVIE9yafeD3wpX4LvLH8PU0uwL0FzfzrSjBsS/hKkzoH3Apq5aj2xbBpk5Mm7dPg3n6O6U+BLalOmnTHwcJNapyGDbk0+5kAK1epdXsKPMmjQBYsZVDnXQysXaBAPqxFfqRO31ZYuUaBCnhykAZH4VZoDQVq4Nl9GlSFQSy8gQKdEfBszhcadKyCyMwWCnyMhR2pNBpOhdnCVxRwrYc952hS6oBBfC9FdsGmwGc0eRQFnaQBihTDtqW9NOlaCY2dFLoCL2TQ7HsmxhygUHUAvFFCgVKMKqTQyzB4JeQpBR7OwR9nKNQXBy/F9VOgJwFAOYWcSfBaGoXSUUmxHfDBRYoMtI5Q6DB8EdJIL1yHb5YN0bb6YPgom3Y9j4DPymlPfwx8N+kN7XBthD/WOWnDHvgni54Vwl+V9OQq/BbeTGu1kCB+hFZaoiFDLi18i4EcFXQvGZJM7aA76ZAmmW4UQaJ8CpVDqloKPA6EVLM6adI2HZIl0ag7FtIVUc+1FgrcpU42VJjdRY3jUGMDx12EKof4X50DyhTzn4YIKJTWTdJ1MghKzTj/4NYa+Os3kb93+haplFoAAAAASUVORK5CYII=\") no-repeat;background-size:43px 35px}.yd-toast-error-icon:after{width:35px;height:35px;background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAACWFBMVEX///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+SCbtoAAAAx3RSTlMAAQIDBAUGBwgKDA4PEBESExQVFhcYGRobHB4fICEiIyQlJikqLC0uLzAxMjM0NTY3ODo7PD0/QEFCREVGSElLTE1OT1BRUlNUVVlaW1xdXl9iY2RlZ2hpamttbnBxc3R1dnh5fYCBhIeIiouMj5CRk5SVlpeYmZqbnJ2eoKGjpKaoqaqrrLCxsrS1tre4ubq8vb7AwsPFxsfIycrOz9HS09TV1tjZ2tvd3t/g4uPk5efo6err7e7v8PHy8/T19vf4+fr7/P3+xMlmOwAABJZJREFUGBntwf1jTWUAB/Dv2d2u7W5ZjcXMYuJWGFuaSFmW0SIKIRkaFauksCQieemFNBOmWKWZl43ptnXNLp3tOt9/K8bmPM9z7rnnnHv6zeeDhx56yI3w2TVB/M9md5OtVfBLKBeqVXHedbIMfgiu7KiHLH0b7zPqhyJVaa+1kn3FEOX8yAeuLUBqnv+Vd30NQdHvFBwdA+9G7ec9RgnMPqPk5to0eBOsjXHAUQhqein5eQy8KD9Hk3IIpl2hpGe5Breytxs02TYEorxjlB0eAXdmtdEk9joUgTrKIrPhQqjeoEnLBFhZcJMS48MMODWlhWYHs2FtUhtlp4vgSNr6XpoY72lIZNhxyqJz4cCoRpp1vwIbwS8oMz4IIJmKTpq1joe9dXHKDufCVmCTQbPGXCQzt4eyC8/ARv4xCnZkILnJHZTFqpFQeQfNbq+DI4V/UGZs0GBteS/NeirhUO5xKvZmwkLGdgquTYVjmQeoOJkPRd5xClqegAtpn1BxeTwk4csUnHgU7tQalHWVQ/BSNwXfZsKtZXHKbs2HyfI+Cr5Kh3vVOmW338GAtDqKtmjwYlYPFZs09Ms8QNH78Kisi4rPA7jjkUYKjNXwbOLfVOwLAo+fpSD+BlIwvoOKI1njLlHw71ykZFwbFb9EKLgxEykafZFJXJ+GlBVepK1oGXxQeJE2/pkCXxReYkJdk+CTwktMIDoZvilqp6XoVPiouIMWup+FryZEqKqGzyZGqWh+DD77iKrTOfDVUoMWGrPgo0VxWvo+CN/MjzOBbwLwSYXOhL7U4IsXbtHGx/BDeYy2apG6iVHaMxYiVcURJqPPRGoK2imKtFPRU4pU5J2jKFYa7qYiMhbeZTVRZMwDKuNUtObBq2ADJbW4YyVVTVnwRttDyTb020rVoQA82UhJQxD9AoeoqoMXtZT8loP7cpqpWgH3FhoUdY7FoNERKuKVcGumTlF8Fkxm9FHRHYY74SglNRCsoqp9JNwoaKdkFyQ7qWrKgnM5zZQ0DYEkeIqqvRqcCjZQcnUkFCOuULUBDml7KOl9Dham6VQY1XBmI2U1sFRDVawETqygbL8GS9p+qtqHI7nKOCUt2Uggu4WqE0EkUxqjJBZGQuEYVTuQRFGEskWwsZgW3oatnGbKdsHWbqr06bARbKDszxBshc5TFSlEQtoeyvRJSGKyTtWZLCSykYrVSGoNLezTYG0FFd9pSEo7QgvrYakyTlnHMDgw/C+q4hWwUBqjzKiAI1W0EH0SirERKurh0G5aaM2FpKCVigshODS0nRYaAhDkNFNhTIdjLxq08CnMQiep2gwXttLKW3ggq5GqyyG4EGqjBX0GBh2ihdlw5WWq+jY/jUFTrlKxFy7to+xCGcwKzlDSOQwu5XdR9EM2RKGDFC2Ba8so2BKALK2OZqc0uKad4gPGGlhZqnPQ7RJ4UGJwQHwJrE3v5ICd8GQX79OrkUhxC++5ng9P8q+znz4PiQ39if3WwqN3eZdeBTsZO3hHWyY8ymwjqVchiZo4uQSevUnqVUhqzo3WdHiWfj7+Khx4ag5SsGgxVP8B5afAD5V2CgcAAAAASUVORK5CYII=\") no-repeat;background-size:35px 35px}.yd-notify{position:fixed;top:0;left:0;width:100%;background-color:rgba(40,40,40,.8);line-height:.28rem;font-size:.26rem;color:#fff;padding:.3rem .24rem;opacity:0;-webkit-animation:notify-downin .2s linear forwards;animation:notify-downin .2s linear forwards;word-break:break-all;text-align:center;z-index:2000}.yd-notify-out{opacity:1;-webkit-animation:notify-upout .15s linear forwards;animation:notify-upout .15s linear forwards}.yd-loading{border-radius:5px;color:#fff;background-color:rgba(40,40,40,.8);-webkit-animation:zoomIn .1s ease forwards;animation:zoomIn .1s ease forwards;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 23px 0 24px;height:48px}.yd-loading-icon{width:28px;height:28px;background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAGzUExURUxpcaSmo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo6Smo7OajWMAAACQdFJOUwDzVSjxAgf0ChUBCd/hpyn6+ai70Qz1uB92XuuOR5xNbnBc0ulZd4eNIdsW/myUA1iBhMgnbQiWb7zsJM/l1hqqFEjOqQ3GrbH4LGQrr/CK49NdjIncrLNiaRtbtRl1771FUHjQj0aQBt5axWCTHeRmt57dnbTyg6vV7eIgEk4mUdcwOvceDgQRiPylmZgL2vNJv00AAAM1SURBVFjDrZl3WxpBEMaPQ3ovKiAKSreABREVLLEbTewaY4mJJb333nvhIwd2jqNzbeYvHnb2d+zd7Du3LxRVPyaPeqK2Mb8sY3n5yG6L9hxNUuJD7Tk57s6URffxiUcthqZoNaoyNUJlbFUIxDW26zN1Q9/eKACnO2jJcEaLU8eX12sontiUmu5P7tD0TrJ/OtVUPGLo5YVzPChMaZhPLmqLB7WL3vmGwnizg5vXweab9+iqi9LRe2b2ih0cuMRj9km6d2un7brZCniYqMfrmmXSLBua+lfWbFiY1Nmu2lmRTSZpOM59b+LDTPJmpFaKKQ0ZMhe/anDJID9tqj4+ugLjq3K+9SVfhRkro1XvSieMWgXsVJ0R5nRWuePXB2AsrBWyRbXrMGtAWTHUBiN9QkWkD+a1VdQzfD8kXJaGYGZZhTtgf8zFhANjW7BnSndhM/nSJ0o51T7Y1yX6AvUnF6fscqjHQNE1QK9clMhwgZoV1ueE/Sa++zwhACer90SfF+TigZHPOcJIvisMEv5FCf2RChHEINPfbhCl10gBaog+6qEXthK6m5IU7ixi4hN8JhvcPC4NOH4Y/pKvGfJr5yiJ8Y39dJWs+C2FFn9yvAtKPOC/HHACj9dFVnweD3iOAE14wGukqhV4QCL9djwedYV0OkTghxwwhAj054BBRODTHPASIpBUzWVEoAUbOIK9ZD32Q/Fhlw16YaNvPXRxQJcvdIGlOpFbAPUbu0lBG/XgAf+SRr+FuGYrxqtIZeG48YAKog+qSTwiwgtnmQVCNHEhjkeEl3YbHpA5VqzhEQOSDj7VAo5mdjUa8DUcHp/H0Ihroo+3dVuBiAN4zVAyFsG6FouYNzGMCSzi6D0g+tCqx/RKmBHEHXdfMO6T7R2PIy2fTvnmVt5MC3GZaT8sqe98nvUd1u4L79dO2w9n+8bPX1/5LPv9IWtIbtNVe6GS3mYMyQNeN9LRXGSZLnuXSi3TJe9ywTJNf+SpPSWmrmrK+sx7m755P9hvnSqxtg0Bvk9b5+RjOwd1AgpohtsYnxHaC3Gte+gMnjN75Z8L9jOPFB3WnJK/P7I/VuUfs0V7TrncmP8jtvO4FdRBjgAAAABJRU5ErkJggg==\") no-repeat;background-size:28px 28px;-webkit-animation:rotate-loading .45s linear forwards infinite;animation:rotate-loading .45s linear forwards infinite;margin-right:10px}.yd-loading-txt{font-size:15px;color:#fff;max-width:140px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media screen and (min-width:768px){.yd-confirm{width:40%}}.yd-view{margin:0 auto;max-width:750px;min-width:300px}.yd-view:before{height:.9rem}.yd-view:after,.yd-view:before{content:\"\";display:block;width:100%}.yd-view:after{height:1.5rem}.yd-flexview{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 auto;max-width:750px;min-width:300px}.yd-scrollview{width:100%;height:100%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;position:relative;margin-bottom:-1px}.yd-scrollview:after{content:\"\";display:block;width:100%;height:.5rem}.ios .yd-scrollview{margin-top:1px}.hairline .yd-scrollview{margin-top:.5px}.yd-button{padding:0 .24rem}.yd-btn{height:.6rem;font-size:.26rem;display:inline-block;padding:0 .2rem;box-sizing:content-box}.yd-btn,.yd-btn-block{text-align:center;position:relative;border:none;pointer-events:auto;border-radius:3px}.yd-btn-block{width:100%;display:block;font-size:.36rem;height:1rem;margin-top:.5rem}.yd-btn-circle{border-radius:200px}.yd-btn-primary{background-color:#04be02;color:#fff}.yd-btn-primary:active{background-color:#04ab02}.yd-btn-danger{background-color:#ef4f4f;color:#fff}.yd-btn-danger:active{background-color:#d74747}.yd-btn-warning{background-color:#ffb400;color:#fff}.yd-btn-warning:active{background-color:#e6a200}.yd-btn-disabled{background-color:#ccc;color:#f0f0f0;pointer-events:none}.yd-btn-disabled:active{background-color:#b8b8b8}.yd-btn-hollow{background-color:#fff;color:#454545;border:1px solid #eaeaea}.yd-btn-hollow:active{background-color:#f7f7f7}.hairline .yd-btn-hollow{border:.5px solid #dedede}.yd-navbar{height:.9rem;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-navbar:after{content:\"\";position:absolute;z-index:2;bottom:0;left:0;width:100%;border-bottom:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-navbar-fixed{position:fixed;top:0;left:0;width:100%;z-index:100}.yd-navbar-item{-webkit-box-flex:0;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;padding:0 .2rem;font-size:.3rem;white-space:nowrap;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:inherit}.yd-navbar-item:first-child{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1;margin-right:-25%}.yd-navbar-item:last-child{-webkit-box-ordinal-group:4;-webkit-order:3;-ms-flex-order:3;order:3}.yd-navbar-item:last-child,.yd-navbar-item:last-child>a{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.yd-navbar-item>a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:.9rem;min-width:25%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.yd-navbar-center-box{-webkit-box-ordinal-group:3;-webkit-order:2;-ms-flex-order:2;order:2;height:.9rem;width:50%;margin-left:25%}.yd-navbar-center{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:inherit}.yd-navbar-center-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.yd-navbar-center img{height:60%}.yd-back-icon:before,.yd-next-icon:before{display:inline-block;font-family:YDUI-INLAY;font-size:.36rem;color:inherit}.yd-back-icon:before{content:\"\\E607\"}.yd-next-icon:before{content:\"\\E608\"}.yd-cell-box{margin-bottom:.35rem}.yd-cell{background-color:#fff;position:relative;z-index:5}.yd-cell:after{content:\"\";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-cell a.yd-cell-item,.yd-cell label.yd-cell-item{background-color:#fff}.yd-cell a.yd-cell-item:active,.yd-cell label.yd-cell-item:active{background-color:#f5f5f5}.yd-cell-item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding-left:.24rem;overflow:hidden}.yd-cell-item:not(:last-child):after{margin-left:.24rem;content:\"\";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-cell-left{color:#333;font-size:.3rem;white-space:nowrap;-ms-flex-align:center}.yd-cell-left,.yd-cell-right{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.yd-cell-right{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:100%;min-height:1rem;color:#525252;text-align:right;font-size:.26rem;padding-right:.24rem;-ms-flex-align:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.yd-cell-right input[type=date],.yd-cell-right input[type=datetime-local],.yd-cell-right input[type=time]{line-height:1rem}.yd-cell-right input[type=checkbox]:not(.yd-switch),.yd-cell-right input[type=radio]{position:absolute;left:-9999em}.yd-cell-right input[type=checkbox]:not(.yd-switch)+.yd-cell-checkbox-icon:after,.yd-cell-right input[type=checkbox]:not(.yd-switch)+.yd-cell-radio-icon:after,.yd-cell-right input[type=radio]+.yd-cell-checkbox-icon:after,.yd-cell-right input[type=radio]+.yd-cell-radio-icon:after{font-family:YDUI-INLAY;font-size:.44rem}.yd-cell-right input[type=checkbox]:not(.yd-switch)+.yd-cell-radio-icon:after,.yd-cell-right input[type=radio]+.yd-cell-radio-icon:after{content:\"\\E600\";color:#4cd864;display:none}.yd-cell-right input[type=checkbox]:not(.yd-switch)+.yd-cell-checkbox-icon:after,.yd-cell-right input[type=radio]+.yd-cell-checkbox-icon:after{content:\"\\E604\";color:#d9d9d9}.yd-cell-right input[type=checkbox]:not(.yd-switch):checked+.yd-cell-radio-icon:after,.yd-cell-right input[type=radio]:checked+.yd-cell-radio-icon:after{display:inline-block}.yd-cell-right input[type=checkbox]:not(.yd-switch):checked+.yd-cell-checkbox-icon:after,.yd-cell-right input[type=radio]:checked+.yd-cell-checkbox-icon:after{color:#4cd864;content:\"\\E601\"}.yd-cell-right:active{background:none}.yd-cell-right .yd-input-clear,.yd-cell-right .yd-input-password{height:1rem}.yd-cell-right .yd-datetime-input,.yd-cell-right input[type=date],.yd-cell-right input[type=datetime-local],.yd-cell-right input[type=email],.yd-cell-right input[type=number]:not(.yd-spinner-input),.yd-cell-right input[type=password],.yd-cell-right input[type=tel],.yd-cell-right input[type=text],.yd-cell-right input[type=time],.yd-cell-right input[type=url]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:1rem;border:none;font-size:.3rem;background:transparent;color:#555;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:left}.yd-cell-right select{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:1rem;border:none;display:block;color:#a9a9a9;font-size:.3rem;margin-left:-.08rem}.yd-cell-icon{display:block;margin-right:.1rem}.yd-cell-icon img{height:.4rem}.yd-cell-arrow:after{margin-left:.05rem;margin-right:-.08rem;display:block;font-family:YDUI-INLAY;font-size:.34rem;color:#c9c9c9;content:\"\\E608\"}.yd-cell-title{padding:0 .24rem .1rem;font-size:.3rem;text-align:left;color:#888;position:relative;z-index:1;background-color:#f5f5f5}.yd-cell-title:after{content:\"\";position:absolute;z-index:3;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-switch{position:relative;z-index:10;display:block;width:52px;height:32px;left:0;border:1px solid #dfdfdf;border-radius:16px;background-color:#dfdfdf;-webkit-appearance:none;-moz-appearance:none}.yd-switch:after,.yd-switch:before{content:\"\";position:absolute;top:0;left:0;height:30px;border-radius:15px;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.yd-switch:before{width:50px;background-color:#fdfdfd}.yd-switch:after{width:30px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4)}.yd-switch:checked{border-color:currentColor;background-color:currentColor}.yd-switch:checked:before{-webkit-transform:scale(0);transform:scale(0)}.yd-switch:checked:after{-webkit-transform:translateX(20px);transform:translateX(20px)}.yd-switch[disabled]{opacity:.5}.yd-grids-2{overflow:hidden;position:relative;background-color:#fff}.yd-grids-2:before{content:\"\";position:absolute;z-index:1;bottom:0;left:0;width:100%;border-bottom:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-grids-2 .yd-grids-item{width:50%}.yd-grids-2 .yd-grids-item:not(:nth-child(2n)):before{content:\"\";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-grids-3{overflow:hidden;position:relative;background-color:#fff}.yd-grids-3:before{content:\"\";position:absolute;z-index:1;bottom:0;left:0;width:100%;border-bottom:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-grids-3 .yd-grids-item{width:33.333333%}.yd-grids-3 .yd-grids-item:not(:nth-child(3n)):before{content:\"\";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-grids-4{overflow:hidden;position:relative;background-color:#fff}.yd-grids-4:before{content:\"\";position:absolute;z-index:1;bottom:0;left:0;width:100%;border-bottom:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-grids-4 .yd-grids-item{width:25%}.yd-grids-4 .yd-grids-item:not(:nth-child(4n)):before{content:\"\";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-grids-5{overflow:hidden;position:relative;background-color:#fff}.yd-grids-5:before{content:\"\";position:absolute;z-index:1;bottom:0;left:0;width:100%;border-bottom:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-grids-5 .yd-grids-item{width:20%}.yd-grids-5 .yd-grids-item:not(:nth-child(5n)):before{content:\"\";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-grids-item{width:25%;float:left;position:relative;z-index:0;padding:.35rem 0;font-size:.28rem}.yd-grids-item-center{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-grids-item:after{content:\"\";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-grids-icon{height:.68rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-grids-icon :after,.yd-grids-icon :before{font-size:.54rem}.yd-grids-icon img{height:70%}.yd-grids-txt{word-wrap:normal;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;text-align:center;color:#333;padding:0 .2rem}.yd-gridstitle{padding:.35rem .24rem .1rem;font-size:.3rem;text-align:left;color:#888;position:relative;z-index:1;background-color:#f5f5f5}.yd-gridstitle:after{content:\"\";position:absolute;z-index:3;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}@font-face{font-family:YDUI-ICONS;src:url(\"//at.alicdn.com/t/font_1461139240_0312312.ttf\") format(\"truetype\")}[class*=\" yd-icon-\"]:before,[class^=yd-icon-]:before{font-family:YDUI-ICONS;font-size:inherit}[class*=\" icon-custom-\"]:before,[class^=icon-custom-]:before{font-size:inherit}.yd-icon-footmark:before{content:\"\\E636\"}.yd-icon-discount:before{content:\"\\E633\"}.yd-icon-verifycode:before{content:\"\\E632\"}.yd-icon-star-outline:before{content:\"\\E630\"}.yd-icon-star:before{content:\"\\E631\"}.yd-icon-weibo:before{content:\"\\E62F\"}.yd-icon-download:before{content:\"\\E62E\"}.yd-icon-next:before{content:\"\\E62D\"}.yd-icon-home-outline:before{content:\"\\E62C\"}.yd-icon-home:before{content:\"\\E63D\"}.yd-icon-weixin:before{content:\"\\E629\"}.yd-icon-refresh:before{content:\"\\E628\"}.yd-icon-tencent-weibo:before{content:\"\\E627\"}.yd-icon-search:before{content:\"\\E626\"}.yd-icon-time:before{content:\"\\E625\"}.yd-icon-prev:before{content:\"\\E624\"}.yd-icon-like-outline:before{content:\"\\E639\"}.yd-icon-like:before{content:\"\\E63A\"}.yd-icon-setting:before{content:\"\\E623\"}.yd-icon-delete:before{content:\"\\E622\"}.yd-icon-sortlist:before{content:\"\\E621\"}.yd-icon-sortlarger:before{content:\"\\E620\"}.yd-icon-sortlargest:before{content:\"\\E61F\"}.yd-icon-qq:before{content:\"\\E62A\"}.yd-icon-more:before{content:\"\\E618\"}.yd-icon-shopcart-outline:before{content:\"\\E61A\"}.yd-icon-shopcart:before{content:\"\\E619\"}.yd-icon-checkoff:before{content:\"\\E617\"}.yd-icon-bad:before{content:\"\\E61C\"}.yd-icon-video:before{content:\"\\E61D\"}.yd-icon-clock:before{content:\"\\E61E\"}.yd-icon-ucenter-outline:before{content:\"\\E616\"}.yd-icon-ucenter:before{content:\"\\E615\"}.yd-icon-warn-outline:before{content:\"\\E613\"}.yd-icon-warn:before{content:\"\\E614\"}.yd-icon-share1:before{content:\"\\E610\"}.yd-icon-share2:before{content:\"\\E60E\"}.yd-icon-share3:before{content:\"\\E60D\"}.yd-icon-feedback:before{content:\"\\E60F\"}.yd-icon-type:before{content:\"\\E60C\"}.yd-icon-discover:before{content:\"\\E60B\"}.yd-icon-good:before{content:\"\\E61B\"}.yd-icon-shield-outline:before{content:\"\\E608\"}.yd-icon-shield:before{content:\"\\E60A\"}.yd-icon-qrscan:before{content:\"\\E609\"}.yd-icon-location:before{content:\"\\E607\"}.yd-icon-phone1:before{content:\"\\E606\"}.yd-icon-phone2:before{content:\"\\E637\"}.yd-icon-phone3:before{content:\"\\E63B\"}.yd-icon-error-outline:before{content:\"\\E602\"}.yd-icon-error:before{content:\"\\E603\"}.yd-icon-play:before{content:\"\\E601\"}.yd-icon-compose:before{content:\"\\E600\"}.yd-icon-question:before{content:\"\\E62B\"}.yd-icon-order:before{content:\"\\E638\"}.yd-list{overflow:hidden;position:relative}.yd-list-item:active{background:none}.yd-list-img{height:0;width:100%;padding:50% 0;overflow:hidden}.yd-list-img img{width:100%;margin-top:-50%;border:none;display:block}.yd-list-img img,.yd-list-mes{background-color:#fff}.yd-list-title{color:#505050;font-size:.26rem;text-align:justify;font-weight:800}.yd-list-other{overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#999}.yd-list-theme1{padding:0 2px}.yd-list-theme1 .yd-list-item{width:50%;float:left;padding:0 2px;margin-top:4px}.yd-list-theme1 .yd-list-item .yd-list-mes{padding:.1rem}.yd-list-theme1 .yd-list-item .yd-list-title{word-wrap:normal;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;text-align:justify;height:.36rem}.yd-list-theme2 .yd-list-item{width:50%;float:left;padding-top:4px}.yd-list-theme2 .yd-list-item:nth-child(odd){padding-right:2px}.yd-list-theme2 .yd-list-item:nth-child(2n){padding-left:2px}.yd-list-theme2 .yd-list-item .yd-list-mes{padding:.1rem}.yd-list-theme2 .yd-list-item .yd-list-title{word-wrap:normal;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;text-align:justify;height:.36rem}.yd-list-theme3 .yd-list-item{width:50%;float:left;padding:.2rem;position:relative;z-index:0;background-color:#fff}.yd-list-theme3 .yd-list-item:before{content:\"\";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-list-theme3 .yd-list-item:nth-child(odd):after{content:\"\";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-list-theme3 .yd-list-item .yd-list-mes{padding-top:.1rem}.yd-list-theme3 .yd-list-item .yd-list-title{word-wrap:normal;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;text-align:justify;height:.36rem}.yd-list-theme3 .yd-list-item:active{background:#fff}.yd-list-theme4{padding:0 7px;background-color:#fff}.yd-list-theme4 .yd-list-item{overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:7px 0 8px;position:relative}.yd-list-theme4 .yd-list-item:not(:last-child):after{content:\"\";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-list-theme4 .yd-list-item .yd-list-img{width:2rem;padding:1rem 0}.yd-list-theme4 .yd-list-item .yd-list-mes{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding-left:7px}.yd-list-theme4 .yd-list-item .yd-list-title{overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;word-break:break-all;text-overflow:ellipsis;line-height:.38rem;max-height:1.34rem}.yd-list-theme4 .yd-list-item .yd-list-other{padding-top:.1rem}.yd-list-theme5{background-color:#fff}.yd-list-theme5 .yd-list-item{display:block;position:relative;z-index:1;padding:.2rem .2rem 0}.yd-list-theme5 .yd-list-item:after{content:\"\";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-list-theme5 .yd-list-item .yd-list-mes{padding:.2rem 0 .15rem}.yd-list-theme5 .yd-list-item .yd-list-other{padding-top:.06rem}@media screen and (min-width:768px){.yd-list-theme1{padding:0 4px}.yd-list-theme1 .yd-list-item{padding:0 4px;margin-top:8px}.yd-list-theme2 .yd-list-item{padding-top:8px}.yd-list-theme2 .yd-list-item:nth-child(odd){padding-right:4px}.yd-list-theme2 .yd-list-item:nth-child(2n){padding-left:4px}.yd-list-theme4{padding:0 9px}.yd-list-theme4 .yd-list-item{padding:9px 0 10px}.yd-list-theme4 .yd-list-item .yd-list-mes{padding-left:9px}}.yd-list-loading{padding:.1rem 0;text-align:center;font-size:.26rem;color:#999;height:.66rem;box-sizing:content-box}.yd-list-loading-box{height:.66rem;overflow:hidden;line-height:.66rem}.yd-list-loading img{height:.66rem;display:inline-block}.yd-list-loading svg{width:.66rem;height:.66rem}.yd-list-donetip{font-size:.24rem;text-align:center;padding:.25rem 0;color:#777}@-webkit-keyframes backRotateAnimation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(-1turn);transform:rotate(-1turn)}}@keyframes backRotateAnimation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(-1turn);transform:rotate(-1turn)}}.yd-pullrefresh-animation-timing{-webkit-transition:-webkit-transform .15s;transition:-webkit-transform .15s;transition:transform .15s;transition:transform .15s,-webkit-transform .15s}.yd-pullrefresh-dragtip{position:absolute;top:-46px;left:50%;z-index:996;-webkit-transform:translateZ(0);transform:translateZ(0);width:42px;height:42px;line-height:42px;margin-left:-21px;border-radius:50%;text-align:center;background-color:#fff;box-shadow:0 1px 4px rgba(0,0,0,.35)}.yd-pullrefresh-dragtip>span{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:inherit}.yd-pullrefresh-dragtip>span:after{content:\"\";display:block;width:20px;height:20px;background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAABa1BMVEVTfvH///9TfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFAPDq2AAAAeHRSTlMAAAECAwQGBwkLDQ8QERMUFRkiIyYnLS4vMjM1Njc4OTpAQUJDREVGTVJWXmBiZmdoaWpxc3V8f4GCg4SGiIyNj5aXmZqbnJ+go6SlpqmqrK+wub2/wMHCxMXJzM3P0tPU1djd3t/n6Orr7O7w8fP09fb3+Pn6/f5+D/4+AAABqklEQVQ4y43V+T8CQRQA8GklUeQmhESuHBHJUY5EIWeHECGrcpVV++eb2Z3Y2d22eT+9mfm2n880894AQIRpKnDxVCh/sanD+c7/aS8PdDoCOqPfvCRu3c1VKaOOFC+P3LJBlAQ1h3m1uB8UpJRan/FaOX3i39jaj5fw+OeIJ6nzQ1y4crXhGeP43qfk63/UwQnjxDCxS4ufU9DeNzQqLTBAFn1y2vKIBi9WoAivnAZR/tqtJTG1lWFaHNKUmF6i1K0tRWpDWZLRliINoWykjhRo0ztMYqBuQGpHv3FR0TV07q1U9AzSO0BFM5BG6GgO0nU6ikpkhY5y9DQPqY9+W2E6ek7/Z/noj2CM/mCF6xKnouIlHKWiwtW+ZmqjGV8XpmLBLNWUHXm+Ep+VlGHJVkMaYuhLO/WKG4b+GC2yZqJlsCotAxhPhcqaBrJGtKjYW39akAEA6rS3dr/YxCN6CQWTuGkmXBY802gP4bndBiClYKDaiisP0e3NwEGyWG3NqwwgKWzwFbUGn52QnJbms+ExAjWqeIwyHhN5BxRPXLbAc+xNcK5Hdl1+ASkP8ND4fLD1AAAAAElFTkSuQmCC\") no-repeat;background-size:20px 20px}.yd-pullrefresh-loading:after{background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAABcVBMVEVTfvH///9TfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvG7eWgbAAAAenRSTlMAAAECAwQGBwkKCw0PEBETFBUZIiMmJy0uLzIzNTY3ODk6QEFCQ0RFRktNUlZeYGJmZ2hpanFzdXyBgoOEhoiMjY+Wl5mam5yfoKOkpqmqrK+wuLm6vb/AwcLExcnMzc/S09TV2N3e3+fo6uvs7vDx8/T19vf4+fr9/naKfqcAAAGISURBVDjLjZVVW0JBEEBXDLC7FbsVuzDAwO7E7sAORDi/3od7/T72Ajrztjvn4c7dmTNKaZHV7t2+eQ5/BI4Xewq1TFKSdmxZ+yIqTvszEqCNx1jjcTAtDpq9RLy4qIpBK27NXPh81TM+OecPmufvNgva8mYk9ly55o2jafYdYMuuo40hAA5qtCrzPCF20vUPKH0BCPbalCXKfOl6WZnXAPcV6q8wUB/AQ7H6H3WGgc9qJUB3AfqVAHUCHNok6DxArRKg9ldgX0nQegCXCB0FwjkidAM4UyL0CliWoY/AmAz9AoZlaEiOPgFueVlLMnRT/rPc8idokD+s/RXwi1CjCeuUuLWP/mjtTneRNjADCcmCJyL+rqgxDDoTkGn7ANOC4U5ZAQhka8oIxFOGYx2ADquI+mJqKz8HwPuv3vI9hsSXU6Kl2WpK88CVZ96k1s+bdzPJuoorf1UcuVybmvAuHH7+qnnEFiv4SDzB3zVL18aQQ7aMroayEu4tY8XdPRMKnPi6Syzt8gMGxsBO8KgZSQAAAABJRU5ErkJggg==\") no-repeat;background-size:20px 20px;-webkit-animation:backRotateAnimation .4s linear infinite;animation:backRotateAnimation .4s linear infinite}.yd-pullrefresh-draghelp{width:100%;height:100%;position:fixed;top:0;left:0;z-index:500;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-pullrefresh-draghelp>div{width:2.3rem;height:2.3rem;background-color:rgba(0,0,0,.8)}.yd-pullrefresh-draghelp>div:before{content:\"\\E60D\";font-family:YDUI-INLAY;font-size:.88rem;text-align:center;color:#fff;display:block;padding-top:.36rem}.yd-pullrefresh-draghelp>div>span{text-align:center;color:#fff;font-size:.28rem;display:block;padding-top:.2rem}.yd-badge{color:#fff;font-size:12px;position:relative;display:inline-block;border-radius:1000px;line-height:1;padding:3px 6px;white-space:nowrap;background-color:#d0d0d0}.yd-badge-radius{border-radius:2px}.yd-badge-primary{background-color:#04be02;color:#fff}.yd-badge-danger{background-color:#ef4f4f;color:#fff}.yd-badge-warning{background-color:#ffb400;color:#fff}.yd-badge-hollow{background-color:#fbfbfb;color:#b2b2b2}.yd-badge-hollow:after{content:\"\";width:200%;height:200%;border:1px solid #b2b2b2;position:absolute;top:0;left:0;border-radius:1rem;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5)}.yd-badge-radius:after{border-radius:2px}.yd-tabbar{width:100%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:.104rem 0 .07rem;background-color:hsla(0,0%,100%,.96)}.yd-tabbar:after{content:\"\";position:absolute;z-index:0;top:0;left:0;width:100%;border-top:1px solid #c9c9c9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-tabbar-fixed{position:fixed;bottom:0;left:0;z-index:100}.yd-tabbar-item{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-tabbar-active,.yd-tabbar-active .yd-tabbar-icon{color:inherit}.yd-tabbar-badge{top:-.02rem;margin-left:-.15rem}.yd-tabbar-badge,.yd-tabbar-dot{position:absolute;left:100%;z-index:999}.yd-tabbar-dot{display:block;width:10px;height:10px;background-color:#ef4f4f;border-radius:50%;top:.02rem;margin-left:-.11rem}.yd-tabbar-icon{height:.5832rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative}.yd-tabbar-icon img{height:70%}.yd-tabbar-txt{display:inline-block;font-size:inherit}.yd-tab-nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;z-index:0}.yd-tab-nav:after{content:\"\";position:absolute;z-index:3;bottom:0;left:0;width:100%;border-bottom:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-tab-nav-item{width:1%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;text-align:center;color:#585858;font-size:.28rem;line-height:.85rem;display:block;background-color:#fff}.yd-tab-nav-item:active{background-color:#f7f7f7}.yd-tab-nav-item>a{display:inherit;color:inherit}.yd-tab-nav-item:not(:last-child):after{position:absolute;top:35%;right:0;content:\"\";width:1px;height:30%;-webkit-transform:scaleX(.5);transform:scaleX(.5);border-right:1px solid #d9d9d9}.yd-tab-nav .yd-tab-active{color:currentColor;background-color:#fff}.yd-tab-nav .yd-tab-active:active{background-color:#fff}.yd-tab-nav .yd-tab-active:before{content:\"\";width:70%;height:2px;position:absolute;left:50%;bottom:0;margin-left:-35%;z-index:4;background-color:currentColor}.yd-tab-panel{position:relative;overflow:hidden;background-color:#fff}.yd-tab-panel-item{width:100%;position:absolute;top:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.yd-tab-panel-item.yd-tab-active{position:relative;-webkit-transition:-webkit-transform .15s;transition:-webkit-transform .15s;transition:transform .15s;transition:transform .15s,-webkit-transform .15s;-webkit-transform:translateX(0);transform:translateX(0)}.yd-tab-panel-item.yd-tab-active~.yd-tab-panel-item{-webkit-transform:translateX(100%);transform:translateX(100%)}.yd-scrolltab{position:absolute;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-scrolltab-nav{height:100%;background-color:#f5f5f5;overflow-y:auto;-webkit-overflow-scrolling:touch;position:relative;z-index:1}.yd-scrolltab-nav:after{content:\"\";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #dfdfdf;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-scrolltab-item{padding:0 .3rem;height:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;z-index:1}.yd-scrolltab-item:after{content:\"\";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #dfdfdf;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-scrolltab-item:before{content:\"\";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #dfdfdf;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-scrolltab-item:active{background:none}.yd-scrolltab-active{background-color:#fff}.yd-scrolltab-active:before{content:\"\";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #fff;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-scrolltab-active:active{background-color:#fff}.yd-scrolltab-icon{margin-right:.2rem;font-size:.32rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.yd-scrolltab-icon>img{height:.4rem;display:inline-block}.yd-scrolltab-title{font-size:.3rem;color:#666;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:1.6rem}.yd-scrolltab-content{height:100%;background-color:#fff;overflow-y:auto;-webkit-overflow-scrolling:touch;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:0 .24rem .24rem;position:relative}.yd-scrolltab-content-title{font-size:.3rem;font-weight:400;color:#555;display:block;padding-bottom:.1rem;padding-top:.32rem;margin-bottom:.2rem;position:relative;z-index:1}.yd-scrolltab-content-title:after{content:\"\";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-actionsheet-mask{background-color:rgba(0,0,0,.4);right:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-actionsheet,.yd-actionsheet-mask{position:fixed;z-index:1502;bottom:0;left:0}.yd-actionsheet{text-align:center;width:100%;background-color:#efeff4;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.yd-actionsheet-item{display:block;position:relative;font-size:.28rem;color:#555;height:1rem;line-height:1rem;background-color:#fff}.yd-actionsheet-item:after{content:\"\";position:absolute;z-index:2;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-actionsheet-action{display:block;margin-top:.15rem;font-size:.28rem;color:#555;height:1rem;line-height:1rem;background-color:#fff}.yd-actionsheet-active{-webkit-transform:translate(0);transform:translate(0)}.yd-keyboard-mask{background-color:rgba(0,0,0,.4);right:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-keyboard,.yd-keyboard-mask{position:fixed;z-index:1502;bottom:0;left:0}.yd-keyboard{width:100%;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;background-color:#f7f7f7}.yd-keyboard-active{-webkit-transform:translate(0);transform:translate(0)}.yd-keyboard-content{background-color:#fff;margin-top:.3rem;position:relative}.yd-keyboard-content:before{content:\"\";position:absolute;z-index:0;top:0;left:0;width:100%;border-top:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-keyboard-title{overflow:hidden;padding:.2rem 0 .12rem;color:#222;margin-bottom:1px;font-size:.24rem;text-align:center;background-color:#fff}.yd-keyboard-title:before{font-family:YDUI-INLAY;content:\"\\E60A\";font-size:.26rem;color:#ff2424;line-height:1;margin-right:.06rem}.yd-keyboard-numbers{font-size:.48rem;background-color:#fff}.yd-keyboard-numbers>li{width:100%}.yd-keyboard-numbers>li,.yd-keyboard-numbers>li>a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-keyboard-numbers>li>a{width:1%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;color:#222;height:1rem;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;overflow:hidden}.yd-keyboard-numbers>li>a:not(:last-child):after{content:\"\";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-keyboard-numbers>li>a:before{content:\"\";position:absolute;z-index:0;top:0;left:0;width:100%;border-top:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-keyboard-numbers>li:last-child>a:last-child,.yd-keyboard-numbers>li:last-child>a:nth-last-child(3){background-color:#f7f7f7;font-size:.3rem;color:#686868}.yd-keyboard-numbers>li:last-child>a:last-child:after{font-family:YDUI-INLAY;content:\"\\E609\";font-size:.6rem}.yd-keyboard-head{height:.8rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#1f2324;font-size:.3rem;position:relative}.yd-keyboard-head:after{content:\"\";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-keyboard-password{margin:0 .8rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;background-color:#fff}.yd-keyboard-password:after{content:\"\";width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);position:absolute;border:1px solid #d9d9d9;top:0;left:0;-webkit-transform-origin:0 0;transform-origin:0 0;border-radius:4px}.yd-keyboard-password li{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:1rem}.yd-keyboard-password li:not(:last-child):after{content:\"\";width:1px;height:50%;position:absolute;right:0;top:25%;background-color:#d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.yd-keyboard-password li i{width:6px;height:6px;border-radius:50%;background-color:#000}.yd-keyboard-error{padding:2px .8rem;color:red;overflow:hidden;height:.5rem;line-height:.5rem;font-size:.24rem;text-align:left}@-webkit-keyframes slider-pagination-opacity{0%{opacity:0}to{opacity:1}}@keyframes slider-pagination-opacity{0%{opacity:0}to{opacity:1}}.yd-slider{width:100%;overflow:hidden;position:relative}.yd-slider-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);position:relative;z-index:1;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.yd-slider-wrapper-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.yd-slider-item{width:100%;height:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.yd-slider-item a{display:block}.yd-slider-item img{width:100%;display:block}.yd-slider-pagination{position:absolute;width:100%;z-index:2;left:0;bottom:.1rem;pointer-events:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;opacity:0;-webkit-animation:slider-pagination-opacity .3s linear .4s forwards;animation:slider-pagination-opacity .3s linear .4s forwards}.yd-slider-pagination,.yd-slider-pagination-vertical{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.yd-slider-pagination-vertical{width:0;height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;bottom:0;left:auto;right:.1rem}.yd-slider-pagination-item{margin:.05rem;width:6px;height:6px;display:inline-block;border-radius:100%;background-color:#b7d0e1}.yd-slider-pagination-item-active{background-color:#ff0005}.yd-spinner{border:1px solid #eae8e8;border-radius:1px;display:inline-block;overflow:hidden}.yd-spinner>a{float:left;width:25%;height:inherit;text-align:center;font-weight:700;color:#666;letter-spacing:0;position:relative;background-color:#f8f8f8;overflow:hidden}.yd-spinner>a:active{background-color:#ececec}.yd-spinner>a:after{font-family:YDUI-INLAY;color:#777;font-size:.18rem;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.yd-spinner>a:first-child:after{content:\"\\E60B\"}.yd-spinner>a:last-child:after{content:\"\\E602\"}.yd-spinner>input{letter-spacing:0;float:left;width:50%;height:inherit;text-align:center;color:#666;border:none;font-size:.26rem;background-color:#fff}.yd-cityselect-mask{background-color:rgba(0,0,0,.4);right:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-cityselect,.yd-cityselect-mask{position:fixed;z-index:1502;bottom:0;left:0}.yd-cityselect{width:100%;height:75%;background-color:#fff;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.yd-cityselect-active{-webkit-transform:translate(0);transform:translate(0)}.yd-cityselect-move-animate{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.yd-cityselect-next{-webkit-transform:translate(-50%);transform:translate(-50%)}.yd-cityselect-prev{-webkit-transform:translate(0);transform:translate(0)}.yd-cityselect-header{position:absolute;top:0;left:0;width:100%;z-index:1}.yd-cityselect-header:after{content:\"\";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #bdbdbd;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-cityselect-title{width:100%;font-size:.3rem;text-align:center;height:45px;line-height:45px;position:relative}.yd-cityselect-title:after{content:\"\";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-cityselect-nav{width:100%;padding-left:10px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-cityselect-nav>a{font-size:13px;color:#222;display:block;height:40px;line-height:46px;padding:0 8px;position:relative;margin-right:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:40%}.yd-cityselect-nav-active{color:#f23030!important}.yd-cityselect-nav-active:after{content:\"\";width:100%;height:2px;background-color:#f23030;position:absolute;bottom:1px;left:0;z-index:2}.yd-cityselect-content{height:100%;padding-top:85px;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-cityselect-item{display:block;height:inherit;width:50%;-webkit-box-flex:0;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;overflow-y:auto;-webkit-overflow-scrolling:touch;background-color:#fff}.yd-cityselect-item::-webkit-scrollbar{width:0}.yd-cityselect-item:nth-child(2n){background-color:#f5f5f5}.yd-cityselect-item-active{color:#f23030!important}.yd-cityselect-item-active:after{display:block;content:\"\\E600\";font-family:YDUI-INLAY}.yd-cityselect-item-box{width:100%;height:inherit;display:block;padding:0 20px}.yd-cityselect-item-box>a{color:#333;font-size:13px;height:40px;line-height:40px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;position:relative;z-index:1}.yd-cityselect-item-box>a:before{content:\"\";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-cityselect-item-box>a:active{background:none}.yd-cityselect-item-box>a span{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:block;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-all;text-overflow:ellipsis;line-height:16px;max-height:32.2px;font-size:13px}.yd-cityselect-loading{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:.26rem;color:#999}.yd-cityselect-loading svg{width:36px;height:36px}.yd-progressbar{position:relative;color:#333;width:100%;height:100%}.yd-progressbar>svg{width:100%}.yd-progressbar>svg>path{-webkit-transition:all 1s linear;transition:all 1s linear}.yd-progressbar-content{position:absolute;top:50%;left:50%;font-size:.3rem;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.yd-rate{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-rate a:after{content:\"\\E7AD\";font-family:YDUI-INLAY;font-size:inherit;color:inherit}.yd-rate a.rate-active:after{content:\"\\E7AC\"}.yd-rate-text{color:#657180;margin-left:.1rem;font-size:.3rem}.yd-textarea{padding:.2rem 0;background-color:#fff;width:100%}.yd-textarea textarea{border:none;width:100%;display:block;height:1.5rem;font-size:.3rem}.yd-textarea-counter{font-size:.32rem;color:#b2b2b2;text-align:right;padding-top:.06rem}.yd-popup-mask{background-color:rgba(0,0,0,.4);z-index:1500;bottom:0;right:0;left:0;top:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-popup,.yd-popup-mask{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-popup{background-color:#fff;z-index:1501;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;pointer-events:none;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.yd-popup-content{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch}.yd-popup-left{-webkit-transform:translate(-100%);transform:translate(-100%);left:0;top:0;height:100%}.yd-popup-right{-webkit-transform:translate(100%);transform:translate(100%);right:0;top:0;height:100%}.yd-popup-bottom{-webkit-transform:translateY(100%);transform:translateY(100%);right:0;bottom:0}.yd-popup-show{pointer-events:auto;-webkit-transform:translate(0);transform:translate(0)}.yd-popup-center{background-color:#fff;z-index:1502;position:fixed;top:50%;left:50%;opacity:0;-webkit-transform:translate(-50%,-50%) scale(.8);transform:translate(-50%,-50%) scale(.8);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:all .1s;transition:all .1s;border-radius:2px}.yd-popup-center,.yd-popup-center *{pointer-events:none}.yd-popup-center.yd-popup-show{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);pointer-events:auto}.yd-popup-center.yd-popup-show *{pointer-events:auto}.yd-rollnotice{overflow:hidden;width:100%;background-color:#fff}.yd-rollnotice-box{height:inherit}.yd-rollnotice-align-left{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.yd-rollnotice-align-right{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.yd-rollnotice-align-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.yd-rollnotice-item{height:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:inherit;-webkit-justify-content:inherit;-ms-flex-pack:inherit;justify-content:inherit}.yd-input{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-input>input{display:block;width:100%;height:100%;border:none;font-size:inherit}.yd-input>input::-webkit-search-cancel-button{-webkit-appearance:none}.yd-input-clear,.yd-input-error,.yd-input-password,.yd-input-success,.yd-input-warn{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-input-clear:after,.yd-input-error:after,.yd-input-password:after,.yd-input-success:after,.yd-input-warn:after{font-family:YDUI-INLAY}.yd-input-clear{height:100%;padding-right:.15rem;padding-left:.2rem}.yd-input-clear:after{content:\"\\E60C\";color:#b2b2b2;font-size:.3rem}.yd-input-error:after{content:\"\\E614\";color:#f43530;font-size:.4rem}.yd-input-warn:after{content:\"\\E614\";color:#10aeff;font-size:.4rem}.yd-input-success:after{content:\"\\E601\";color:#09bb07;font-size:.4rem}.yd-input-password:after{content:\"\\E77E\";color:#b2b2b2;font-size:.45rem}.yd-input-password-open:after{content:\"\\E77D\";color:#434343}.yd-flexbox{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-flexbox-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%}.yd-flexbox-vertical .yd-flexbox-item{width:100%}.yd-flexbox-item{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.yd-flexbox-item-start{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;justify-self:flex-end}.yd-flexbox-item-center{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.yd-flexbox-item-end{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end}.yd-radio{display:inline-block;padding-right:10px}.yd-radio-icon{border:1px solid #ccc;border-radius:50%;display:inline-block;position:relative;z-index:10;vertical-align:bottom;pointer-events:none}.yd-radio-icon>i{content:\"\";position:absolute;left:50%;top:50%;border-radius:50%;background-color:currentColor;opacity:0;-webkit-transform:translate(-50%,-50%) scale(.1);transform:translate(-50%,-50%) scale(.1)}.yd-radio-text{margin-left:1px;font-size:15px;color:#666;pointer-events:none}.yd-radio>input[type=radio]{position:absolute;left:-9999em}.yd-radio>input[type=radio]:checked+.yd-radio-icon{border-color:currentColor}.yd-radio>input[type=radio]:checked+.yd-radio-icon>i{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.yd-radio>input[type=radio]:disabled~.yd-radio-text{color:#ccc}.yd-radio>input[type=radio]:disabled+.yd-radio-icon{border-color:#ccc;background-color:#f3f3f3}.yd-radio>input[type=radio]:disabled+.yd-radio-icon>i{background-color:#ccc}.yd-checkbox{display:inline-block;padding-right:10px}.yd-checkbox>input[type=checkbox]{position:absolute;left:-9999em}.yd-checkbox>input[type=checkbox]:checked+.yd-checkbox-icon{background-color:currentColor;border-color:currentColor}.yd-checkbox>input[type=checkbox]:checked+.yd-checkbox-icon>i{-webkit-transform:translate(-50%,-50%) rotate(45deg) scale(1);transform:translate(-50%,-50%) rotate(45deg) scale(1);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.yd-checkbox>input[type=checkbox]:disabled~.yd-checkbox-text{color:#ccc}.yd-checkbox>input[type=checkbox]:disabled+.yd-checkbox-icon{border-color:#ccc;background-color:#f3f3f3}.yd-checkbox>input[type=checkbox]:disabled+.yd-checkbox-icon>i{border-color:#ccc}.yd-checkbox-icon{border:1px solid #ccc;border-radius:2px;display:inline-block;position:relative;z-index:10;vertical-align:bottom;pointer-events:none}.yd-checkbox-icon>i{content:\"\";position:absolute;top:45%;left:50%;border:2px solid #fff;border-top:0;border-left:0;-webkit-transform:translate(-50%,-50%) rotate(45deg) scale(0);transform:translate(-50%,-50%) rotate(45deg) scale(0)}.yd-checkbox-text{margin-left:1px;font-size:15px;color:#666;pointer-events:none}.yd-checkbox-circle .yd-checkbox-icon{border-radius:50%}.yd-backtop{border:1px solid silver;width:1rem;height:1rem;background-color:hsla(0,0%,100%,.85);position:fixed;border-radius:50%;right:5%;bottom:5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:1000}.yd-backtop:after{font-family:YDUI-INLAY;content:\"\\E788\";font-size:.5rem;color:silver}.yd-accordion{background-color:#fff}.yd-accordion-head{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;-webkit-user-select:none;-ms-user-select:none;user-select:none;padding:0 .24rem;overflow:hidden}.yd-accordion-head:after{content:\"\";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-accordion-head-content{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-accordion-head>i{overflow:hidden}.yd-accordion-head>i:after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:7px solid #a0a0a0;display:block;-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.yd-accordion-head>i.yd-accordion-rotated:after{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.yd-accordion-title{min-height:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:.28rem;color:#444}.yd-accordion-title-full{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.yd-accordion-content{position:relative;overflow:hidden;-webkit-transition:height .1s linear;transition:height .1s linear}.yd-accordion-content:after{content:\"\";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-datetime-mask{background-color:rgba(0,0,0,.4);right:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-datetime,.yd-datetime-mask{position:fixed;z-index:1502;bottom:0;left:0}.yd-datetime{width:100%;background-color:#fff;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .25s;transition:-webkit-transform .25s;transition:transform .25s;transition:transform .25s,-webkit-transform .25s;-ms-touch-action:none;touch-action:none}.yd-datetime-active{-webkit-transform:translate(0);transform:translate(0)}.yd-datetime-input{width:100%}.yd-datetime-head{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;position:relative;background-color:#fbfbfb}.yd-datetime-head:after{content:\"\";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-datetime-head>a{height:43px;padding:0 30px;font-size:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#555}.yd-datetime-head>a:last-child{color:#0bb20c}.yd-datetime-content{position:relative;width:100%;height:266px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-datetime-item{font-size:16px;height:100%;position:relative;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.yd-datetime-item-content>span{width:100%;display:block;height:38px;line-height:38px;text-align:center}.yd-datetime-item-box{height:100%}.yd-datetime-indicator,.yd-datetime-shade{pointer-events:none;position:absolute;left:0;top:0;height:100%;width:100%}.yd-datetime-shade{z-index:3;-webkit-transform:translateZ(0);transform:translateZ(0);background-image:-webkit-linear-gradient(top,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6)),-webkit-linear-gradient(bottom,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6));background-image:linear-gradient(180deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6)),linear-gradient(0deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6));background-position:top,bottom;background-size:100% 114px;background-repeat:no-repeat}.yd-datetime-indicator{z-index:4;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.yd-datetime-indicator>span{display:block;width:100%;height:38px;position:relative}.yd-datetime-indicator>span:after{top:0;border-top:1px solid #d9d9d9}.yd-datetime-indicator>span:after,.yd-datetime-indicator>span:before{content:\"\";position:absolute;z-index:0;left:0;width:100%;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-datetime-indicator>span:before{bottom:0;border-bottom:1px solid #d9d9d9}.yd-lightbox{position:fixed;top:0;left:0;right:0;bottom:0;z-index:1502;background-color:#000}.yd-lightbox-head{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:#fff;height:.9rem;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:absolute;top:0;left:0;width:100%;z-index:1503;background-color:rgba(0,0,0,.3);-webkit-transform:translate(0);transform:translate(0);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.yd-lightbox-head>span{margin-left:25%;width:50%;text-align:center;font-size:.3rem}.yd-lightbox-head>a{-webkit-box-flex:0;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;height:inherit;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-right:.24rem;font-size:13px}.yd-lightbox-head>a,.yd-lightbox-img{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-lightbox-img{width:100%;height:100%}.yd-lightbox-foot{-webkit-transform:translate(0);transform:translate(0);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;position:absolute;bottom:0;left:0;width:100%;color:#fff;z-index:1502;background-color:rgba(0,0,0,.3);padding:.24rem}.yd-lightbox-scroller{-webkit-overflow-scrolling:touch;max-height:2rem;overflow-y:auto;line-height:.34rem}.yd-lightbox-up-hide{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.yd-lightbox-down-hide{-webkit-transform:translateY(100%);transform:translateY(100%)}.yd-lightbox-loading{width:30px;height:30px;position:absolute;top:50%;left:50%;z-index:0;margin-left:-15px;margin-top:-15px}.yd-timeline{background-color:#fff;font-size:13px;color:#6e6e6e;overflow:hidden;position:relative;z-index:1}.yd-timeline:after{content:\"\";position:absolute;z-index:0;top:0;left:0;width:100%;border-top:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-timeline-content{margin-left:16px;border-left:1px solid #e4e5e9}.yd-timeline-custom-item,.yd-timeline-item{padding:16px 12px 16px 0;margin-left:16px;position:relative}.yd-timeline-custom-item:not(:last-child):after,.yd-timeline-item:not(:last-child):after{content:\"\";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-timeline-custom-item .yd-timeline-icon,.yd-timeline-item .yd-timeline-icon{content:\"\";position:absolute;z-index:1;left:-16px;display:block;top:19px;-webkit-transform:translate(-50%);transform:translate(-50%)}.yd-timeline-custom-item:first-child,.yd-timeline-item:first-child{margin-top:16px;padding-top:0;color:#000}.yd-timeline-custom-item:first-child>.yd-timeline-icon,.yd-timeline-item:first-child>.yd-timeline-icon{top:3px}.yd-timeline-custom-item:last-child:before,.yd-timeline-item:last-child:before{content:\"\";width:1px;height:100%;background-color:#fff;position:absolute;left:-17px;top:19px}.yd-timeline-item .yd-timeline-icon{width:8px;height:8px;border-radius:99px;background-color:#e4e5e9}.yd-timeline-item:first-child>.yd-timeline-icon{background-color:#f23030;width:10px;height:10px}.yd-timeline-item:first-child:before{content:\"\";width:16px;height:16px;position:absolute;z-index:0;top:0;left:-24px;background-color:#fbbfbf;border-radius:99px}.yd-timeline-custom-item:first-child>.yd-timeline-icon{top:0}.yd-step{font-size:13px}.yd-step-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-step-item{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative}.yd-step-item:not(:first-child):before{content:\"\";height:2px;position:absolute;top:-1px;background-color:#ccc}.yd-step-item>em{border-radius:50%;position:absolute;top:50%;left:50%;background-color:#ccc}.yd-step-item-bottom,.yd-step-item-top{position:absolute;left:0;text-align:center;white-space:nowrap;text-overflow:ellipsis;width:100%;padding:0 4px}.yd-step-item-top-text>span{color:#989898}.yd-step-item-bottom{color:#333}.yd-step-theme1 .yd-step-content{padding:10px 0 42px}.yd-step-theme1 .yd-step-item:not(:first-child):before{width:70%;left:-35%}.yd-step-theme1 .yd-step-item>em{width:20px;height:20px;margin-left:-10px;margin-top:-10px;text-align:center;line-height:20px;font-size:12px}.yd-step-theme1 .yd-step-item>em>i{color:#fff}.yd-step-theme1 .yd-step-item-top{bottom:18px}.yd-step-theme1 .yd-step-item-bottom{top:18px}.yd-step-theme1 .yd-step-item-current:before,.yd-step-theme1 .yd-step-item-current>em{background-color:currentColor}.yd-step-theme1 .yd-step-item-current>em.yd-step-checkmark:after{content:\"\";position:absolute;top:4px;left:8px;border:1px solid #fff;border-top:0;border-left:0;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:5px;height:10px}.yd-step-theme1 .yd-step-item-current .yd-step-item-bottom{color:currentColor}.yd-step-theme2 .yd-step-content{padding:42px 0}.yd-step-theme2 .yd-step-item:not(:first-child):before{width:80%;left:-40%}.yd-step-theme2 .yd-step-item>em{width:10px;height:10px;margin-left:-5px;margin-top:-5px}.yd-step-theme2 .yd-step-item-top{bottom:15px}.yd-step-theme2 .yd-step-item-bottom{top:15px}.yd-step-theme2 .yd-step-item-current .yd-step-item-top-text{display:inline-block;background-color:currentColor;padding:5px 11px 3px;border-radius:100px;position:relative;z-index:1}.yd-step-theme2 .yd-step-item-current .yd-step-item-top-text>span{color:#fff}.yd-step-theme2 .yd-step-item-current>em{background-color:currentColor}.yd-step-theme2 .yd-step-item-current>em:after{content:\"\";width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid currentColor;position:absolute;top:-10px;left:50%;margin-left:-6px}.yd-checklist{background-color:#fff;position:relative;z-index:1}.yd-checklist:after{content:\"\";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-checklist-alignright .yd-checklist-content{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.yd-checklist-alignright .yd-checklist-item-icon{margin-left:0}.yd-checklist-item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;z-index:1;margin-left:12px}.yd-checklist-item:not(:last-child):after{content:\"\";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-checklist-item-icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:12px;margin-left:-12px}.yd-checklist-item-icon>input[type=checkbox]{position:absolute;left:-9999em}.yd-checklist-item-icon>input[type=checkbox]:checked+.yd-checklist-icon{background-color:currentColor;border-color:currentColor}.yd-checklist-item-icon>input[type=checkbox]:checked+.yd-checklist-icon>i{-webkit-transform:translate(-50%,-50%) rotate(45deg) scale(1);transform:translate(-50%,-50%) rotate(45deg) scale(1);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.yd-checklist-item-icon>input[type=checkbox]:disabled+.yd-checklist-icon{border-color:#ccc;background-color:#f3f3f3}.yd-checklist-item-icon>input[type=checkbox]:disabled+.yd-checklist-icon>i{border-color:#ccc}.yd-checklist-icon{border:1px solid #ccc;border-radius:100px;display:block;position:relative;z-index:10;pointer-events:none;width:20px;height:20px}.yd-checklist-icon>i{width:6px;height:12px;content:\"\";position:absolute;top:45%;left:50%;border:2px solid #fff;border-top:0;border-left:0;-webkit-transform:translate(-50%,-50%) rotate(45deg) scale(0);transform:translate(-50%,-50%) rotate(45deg) scale(0)}.yd-checklist-content{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;color:#333;padding-right:12px}.yd-search{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.yd-search-fly{width:100%;height:100%;position:fixed;left:0;z-index:1500;-webkit-transition:opacity .15s;transition:opacity .15s;opacity:0;pointer-events:none}.yd-search-show{opacity:1;pointer-events:auto}.yd-search-input{background-color:#efeff4;border-left:none;border-right:none;padding:10px 0 10px 10px;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-search-input:after{bottom:0;border-bottom:1px solid #d8d8d8}.yd-search-input:after,.yd-search-input:before{content:\"\";position:absolute;z-index:0;left:0;width:100%;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-search-input:before{top:0;border-top:1px solid #d8d8d8}.yd-search-input>.search-input{width:100%;height:30px;background-color:#fff;border:none;border-radius:3px;margin-right:10px;padding-top:1px;overflow:hidden}.yd-search-input>.search-input,.yd-search-input>.search-input .search-icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-search-input>.search-input .search-icon{padding-left:8px;padding-right:5px;line-height:28px}.yd-search-input>.search-input .search-icon:after{content:\"\\E626\";font-family:YDUI-INLAY;font-size:15px;color:#b2b2b2}.yd-search-input>.cancel-text{display:block;white-space:nowrap;padding-left:10px;height:30px;line-height:32px;color:#0bb20c;font-size:14px;padding-right:10px;margin-left:-10px}.yd-search-list{overflow:auto;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;background-color:#fff;-webkit-overflow-scrolling:touch}.yd-search-list-item{position:relative;height:45px;line-height:45px;margin-left:12px;padding-left:4px;overflow:hidden;white-space:nowrap;padding-right:12px;text-overflow:ellipsis}.yd-search-list-item:after{content:\"\";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}", ""]);

// exports


/***/ }),

/***/ 43:
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {/*!
 * Vue.js v2.5.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.functionalOptions = undefined;
  this.functionalScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode, deep) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  if (deep && vnode.children) {
    cloned.children = cloneVNodes(vnode.children);
  }
  return cloned
}

function cloneVNodes (vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this) : parentVal
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn.call(this, parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (process.env.NODE_ENV !== 'production' && inject) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (process.env.NODE_ENV !== 'production') {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (process.env.NODE_ENV !== 'production') {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if (inBrowser && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both micro and macro tasks.
// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
// micro tasks have too high a priority and fires in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using macro tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use micro task by default, but expose a way to force macro task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) Task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine MicroTask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a Task instead of a MicroTask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                process.env.NODE_ENV !== 'production'
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      data && data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject).filter(function (key) {
          /* istanbul ignore next */
          return Object.getOwnPropertyDescriptor(inject, key).enumerable
        })
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (process.env.NODE_ENV !== 'production') {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && process.env.NODE_ENV !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias,
  eventKeyName
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (keyCodes) {
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  // static trees can be rendered once and cached on the contructor options
  // so every instance shares the same cached trees
  var renderFns = this.$options.staticRenderFns;
  var cached = renderFns.cached || (renderFns.cached = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = renderFns[index].call(this._renderProxy, null, this);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm = Object.create(parent);
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode) {
        vnode.functionalScopeId = options._scopeId;
        vnode.functionalContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    vnode.functionalContext = contextVm;
    vnode.functionalOptions = options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }

  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (process.env.NODE_ENV !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
        applyNS(child, ns, force);
      }
    }
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // if the parent didn't update, the slot nodes will be the ones from
      // last render. They need to be cloned to ensure "freshness" for this render.
      for (var key in vm.$slots) {
        var slot = vm.$slots[key];
        if (slot._rendered) {
          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
        }
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && cached$$1 !== current) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }

      var ref = this;
      var cache = ref.cache;
      var keys = ref.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.5.2';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(
            config.ignoredElements.length &&
            config.ignoredElements.some(function (ignore) {
              return isRegExp(ignore)
                ? ignore.test(tag)
                : ignore === tag
            })
          ) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.functionalScopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.functionalContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
        } else {
          vnodeToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !vnodeToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true
    }
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed
              ) {
                bailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed
              ) {
                bailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE9 || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    process.env.NODE_ENV !== 'production' && warn &&
    modifiers && modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers && modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (process.env.NODE_ENV !== 'production') {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (process.env.NODE_ENV !== 'production') {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$options._renderChildren;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
Vue$3.nextTick(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (process.env.NODE_ENV !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if (process.env.NODE_ENV !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\"/>";
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (process.env.NODE_ENV !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (process.env.NODE_ENV !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (process.env.NODE_ENV !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        process.env.NODE_ENV !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (process.env.NODE_ENV !== 'production') {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (process.env.NODE_ENV !== 'production') {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$1 = 0; i$1 < postTransforms.length; i$1++) {
        postTransforms[i$1](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (process.env.NODE_ENV !== 'production') {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (process.env.NODE_ENV !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      process.env.NODE_ENV !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (process.env.NODE_ENV !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (process.env.NODE_ENV !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (!el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (process.env.NODE_ENV !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (process.env.NODE_ENV !== 'production') {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      process.env.NODE_ENV !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (map['v-model'] && (map['v-bind:type'] || map[':type'])) {
      var typeBinding = getBindingAttr(el, 'type');
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });
      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

var model$2 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$2
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    var handler = events[name];
    // #5330: warn click.right, since right clicks do not actually fire click events.
    if (process.env.NODE_ENV !== 'production' &&
      name === 'click' &&
      handler && handler.modifiers && handler.modifiers.right
    ) {
      warn(
        "Use \"contextmenu\" instead of \"click.right\" since right clicks " +
        "do not actually fire \"click\" events."
      );
    }
    res += "\"" + name + "\":" + (genHandler(name, handler)) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var code = keyCodes[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(code)) + "," +
    "$event.key)"
  )
}

/*  */

function on (el, dir) {
  if (process.env.NODE_ENV !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      process.env.NODE_ENV !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (process.env.NODE_ENV !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (process.env.NODE_ENV !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (process.env.NODE_ENV !== 'production') {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (process.env.NODE_ENV !== 'production') {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["default"] = (Vue$3);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2), __webpack_require__(8), __webpack_require__(23).setImmediate))

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js!./bind.css", function() {
			var newContent = require("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js!./bind.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "html{\r\n\t\r\n}\r\n.form-cnt{\r\n\tpadding: 10px;\r\n}\r\n.form-cnt ul *{\r\n\tfont-size: 13px !important;\r\n}\r\n.bind-btn{\r\n\tmargin: 10px 0;\r\n}\r\n.hide{\r\n\topacity: 0;\r\n}\r\n.show{\r\n\topacity: 1;\r\n}\r\n.required{\r\n\tcolor: red;\r\n}\r\n.barcode_form{\r\n\tposition: relative;\r\n}\r\n.input_state{\r\n\tposition: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n}\r\n::-webkit-input-placeholder { /* WebKit browsers */  \r\n\tcolor: #969696; \r\n}  \r\n:-moz-placeholder { /* Mozilla Firefox 4 to 18 */  \r\n\tcolor: #969696; \r\n}  \r\n::-moz-placeholder { /* Mozilla Firefox 19+ */  \r\n\tcolor: #969696;  \r\n}  \r\n:-ms-input-placeholder { /* Internet Explorer 10+ */  \r\n\tcolor: #969696;  \r\n}  \r\ninput:-webkit-autofill { /* 谷歌浏览器-文本框边框阴影遮住了背景颜色浅黄*/  \r\n\tcolor: #969696;  \r\n}  \r\n.header{\r\n\theight: 50px;\r\n}\r\n.logo{\r\n    text-align: center;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 50px;\r\n    z-index: 10;\r\n    background: #fff;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n.logo img{\r\n    width: 110px;\r\n    height: 31px;\r\n    margin-top: 10px;\r\n}\r\n\r\n/*验证码*/\r\n.captcha_wrap{\r\n\tposition: relative;\r\n}\r\n.captcha_ico{\r\n\tposition: absolute;\r\n    width: 23px;\r\n    height: 23px;\r\n    top: 13.5px;\r\n    left: 13.5px;\r\n}\r\n.captcha_input{\r\n\tmargin-left: 30px;\r\n}", ""]);

// exports


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(22);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(39);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(11);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(11);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_bustCache_bind_vue__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_3c5d472b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_bustCache_bind_vue__ = __webpack_require__(215);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(242)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_bustCache_bind_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_3c5d472b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_bustCache_bind_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\bind.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c5d472b", Component.options)
  } else {
    hotAPI.reload("data-v-3c5d472b", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ydui_district_dist_jd_province_city_area_id__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ydui_district_dist_jd_province_city_area_id___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ydui_district_dist_jd_province_city_area_id__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ydui_district_dist_gov_province_city_id_js__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ydui_district_dist_gov_province_city_id_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ydui_district_dist_gov_province_city_id_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_ydui_dist_lib_rem_datetime__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_ydui_dist_lib_rem_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_ydui_dist_lib_rem_datetime__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_3_vue_ydui_dist_lib_rem_datetime__["DateTime"].name, __WEBPACK_IMPORTED_MODULE_3_vue_ydui_dist_lib_rem_datetime__["DateTime"]);

//  计算今天时间
var myDate = new Date();
var year = myDate.getFullYear();
var month = myDate.getMonth() + 1 < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1;
var date = myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate();

var today = year + '-' + month + '-' + date;

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            show1: false,
            show2: false,
            location: '', //  所在地 默认值
            address_provance: '', //  所在地 省
            address_city: '', //  所在地 市
            address_area: '', //  所在地 区
            district: __WEBPACK_IMPORTED_MODULE_1_ydui_district_dist_jd_province_city_area_id___default.a,
            city: __WEBPACK_IMPORTED_MODULE_2_ydui_district_dist_gov_province_city_id_js___default.a,
            ethnicityArray: ["其他", "汉族", "蒙古族", "回族", "藏族", "维吾尔族", "苗族", //	名族
            "彝族", "壮族", "布依族", "朝鲜族", "满族", "侗族", "瑶族", "白族", "土家族", "哈尼族", "哈萨克族", "傣族", "黎族", "傈僳族", "佤族", "畲族", "高山族", "拉祜族", "水族", "东乡族", "纳西族", "景颇族", "柯尔克孜族", "土族", "达斡尔族", "仫佬族", "羌族", "布朗族", "撒拉族", "毛难族", "仡佬族", "锡伯族", "阿昌族", "普米族", "塔吉克族", "怒族", "乌孜别克族", "俄罗斯族", "鄂温克族", "崩龙族", "保安族", "裕固族", "京族", "塔塔尔族", "独龙族", "鄂伦春族", "赫哲族", "门巴族", "珞巴族", "基诺族"],
            start: false, //  是否触发发送验证码
            barcode: '', //	条形码
            product: '', //	检测产品
            name: '', //	姓名
            dob: today, //	出生日期
            tel: '', //	手机
            height: '', //	身高
            weight: '', //	体重
            email: '', //	邮箱
            country: '', //	国籍
            pob: '', //	籍贯
            gender: 'male', //  性别
            ethnicity: '', //  民族
            disease: '', //	家族病史
            area: '', //	所在地区
            address: '', //	详细地址
            isdob: false, //	判断是否显示出生日期
            captcha: '', //  验证码
            today: today,
            access_token: '', //  用户标识
            barcode_success: false, //  条形码正确
            phoneIn: true //  手机是否可以输入  ( 默认不可以 )
        };
    },
    created: function created() {

        //var vConsole = new VConsole();


        //	获取 url 参数
        this.access_token = this.GetQueryString("access_token");

        //  请求微信配置信息
        this.getWxConfig();

        //  获取手机
        this.tel = this.GetQueryString("tel");

        if (!this.tel) {
            this.phoneIn = false; //  如果没有绑定手机  则手动输入，解除不可输入限制
        }
    },

    methods: {

        //  请求微信配置信息
        getWxConfig: function getWxConfig() {

            var self = this;

            var url = encodeURIComponent(location.href);

            this.$axios({
                url: '/wx_jssdk',
                data: { url: url },
                method: 'post'
            }).then(function (res) {

                var data = res.data.data;
                var isSuccess = res.data.success;

                if (!isSuccess) {
                    self.$dialog.toast({
                        mes: data.error,
                        icon: 'error',
                        timeout: 1500
                    });
                    return false;
                }

                //  微信配置  SDK
                wx.config(data);

                wx.ready(function () {

                    //  获取地理位置
                    wx.getLocation({
                        type: 'wgs84',
                        success: function success(res) {

                            var lat = res.latitude;
                            var lnt = res.longitude;

                            // 地址解析:http://lbs.qq.com/javascript_v2/guide-service.html#link-four
                            //  通过获取的  经纬度 解析成地址
                            var geocoder = new qq.maps.Geocoder({
                                complete: function complete(result) {

                                    //  给地址赋值
                                    var province = result.detail.addressComponents.province.replace('省', ''); //  省
                                    var city = result.detail.addressComponents.city; //  市
                                    var district = result.detail.addressComponents.district; //  区

                                    //  所在地 选项
                                    self.address_provance = province;
                                    self.address_city = city;
                                    self.address_area = district;

                                    //  所在地  赋值
                                    self.location = province + ' ' + city + ' ' + district;

                                    console.log(result);
                                }
                            });
                            var coord = new qq.maps.LatLng(lat, lnt);
                            geocoder.getAddress(coord);
                        }
                    });
                });
            });
        },


        //	获取 url 参数
        GetQueryString: function GetQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        },


        //	今天日期
        today_m: function today_m() {
            var myDate = new Date();
            return myDate.toLocaleDateString();
        },
        result1: function result1(ret) {
            this.location = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
        },
        result2: function result2(ret) {
            this.pob = ret.itemName1 + ' ' + ret.itemName2;
        },


        //	手机短信验证
        sendCode1: function sendCode1() {

            var self = this;

            if (this.tel.length == '11' && !isNaN(this.tel)) {
                this.$dialog.loading.open('发送中...');

                this.$axios({
                    url: '/send_sms?tel=' + this.tel
                }).then(function (res) {

                    var data = res.data.data;
                    var isSuccess = res.data.success;

                    if (isSuccess) {

                        self.start = true;
                        self.$dialog.loading.close();
                        self.$dialog.toast({
                            mes: '已发送',
                            icon: 'success',
                            timeout: 1500
                        });
                    } else {

                        self.$dialog.toast({
                            mes: data.error,
                            icon: 'error',
                            timeout: 1500
                        });
                    }
                });
            } else {

                self.$dialog.loading.close();

                self.$dialog.toast({
                    mes: '手机号格式错误',
                    icon: 'error',
                    timeout: 1500
                });
            }
        },


        //	根据条形码  检索  检测产品
        outproduct: function outproduct() {

            var self = this;

            var reg = /[a-zA-Z0-9]{8,}/;
            var isPass = reg.test(this.barcode);

            //  清空检测产品
            self.product = '';

            //  格式验证
            if (!isPass) {

                this.$dialog.notify({
                    mes: '条形码至少8位大小写英文数字！',
                    timeout: 5000
                });

                self.barcode_success = false;

                return false;
            }

            var data = {
                access_token: this.access_token,
                barcode: this.barcode
            };

            this.$axios({
                url: '/orders/check_barcode',
                method: 'post',
                data: data
            }).then(function (res) {

                var data = res.data.data;
                var isSuccess = res.data.success;

                if (isSuccess) {

                    //  检测产品
                    self.product = data.tests.products_label.join(',');

                    self.barcode_success = true;
                } else {

                    self.$dialog.notify({
                        mes: data.error,
                        timeout: 5000
                    });

                    self.barcode_success = false;
                }
            });
        },


        //  绑定信息验证
        validate: function validate() {

            if (!this.barcode_success) {
                //  条形码  
                this.$dialog.notify({
                    mes: '条形码错误',
                    timeout: 5000
                });
                return false;
            }

            var tel = this.tel; //  手机
            var reg = /[0-9]{11}/;

            if (!reg.test(tel)) {
                this.$dialog.notify({
                    mes: '手机格式错误',
                    timeout: 5000
                });
                return false;
            }

            var captcha = this.captcha; //  验证码
            var reg = /[0-9]{4}/;

            if (!reg.test(captcha)) {
                this.$dialog.notify({
                    mes: '验证码格式错误',
                    timeout: 5000
                });
                return false;
            }

            var name = this.name; //  姓名
            var reg = /\S{2,}/;

            if (!reg.test(name)) {
                this.$dialog.notify({
                    mes: '姓名请填写两位以上',
                    timeout: 5000
                });
                return false;
            }

            var gender = this.gender; //  性别
            if (!gender) {
                this.$dialog.notify({
                    mes: '请选择性别',
                    timeout: 5000
                });
                return false;
            }

            var dob = this.dob; //  出生日期
            if (!dob) {
                this.$dialog.notify({
                    mes: '请选择出生日期',
                    timeout: 5000
                });
                return false;
            }

            var ethnicity = this.ethnicity; //  民族
            if (!ethnicity) {
                this.$dialog.notify({
                    mes: '请选择民族',
                    timeout: 5000
                });
                return false;
            }

            var height = this.height; //  身高
            if (!height) {
                this.$dialog.notify({
                    mes: '请填写身高',
                    timeout: 5000
                });
                return false;
            }

            var weight = this.weight; //  体重
            if (!weight) {
                this.$dialog.notify({
                    mes: '请填写体重',
                    timeout: 5000
                });
                return false;
            }

            return true;
        },


        //	绑定
        bind: function bind() {

            //  表单验证
            if (!this.validate()) {
                return false;
            }

            var self = this;

            var data = {
                access_token: this.access_token, //  用户标识
                barcode: this.barcode, //	条形码
                product: this.product, //	检测产品
                name: this.name, //	姓名
                dob: this.dob, //	出生日期
                tel: this.tel, //	手机
                gender: this.gender, //  性别
                ethnicity: this.ethnicity, //  民族
                height: this.height, //	身高
                weight: this.weight, //	体重
                email: this.email, //	邮箱
                country: this.country, //	国籍
                pob: this.pob, //	籍贯
                disease: this.disease, //	家族病史
                province: this.area.split(' ')[0], //	所在地区
                city: this.area.split(' ')[1], //  所在地区
                district: this.area.split(' ')[2], //  所在地区
                address: this.address, //	详细地址
                captcha: this.captcha //  验证码
            };

            this.$axios({
                url: '/orders/bind',
                method: 'post',
                data: data
            }).then(function (res) {

                var data = res.data.data;
                var isSuccess = res.data.success;

                if (!isSuccess) {

                    this.$dialog.notify({
                        mes: data.error,
                        timeout: 5000
                    });

                    return false;
                }

                self.$dialog.toast({
                    mes: '绑定成功',
                    timeout: 3000,
                    icon: 'success'
                });

                setTimeout(function () {
                    location.href = '/orders';
                }, 2000);
            });
        },


        //  扫一扫
        qrscan: function qrscan() {

            var self = this;

            wx.scanQRCode({
                needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function success(res) {
                    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                    self.barcode = result.split(',')[1];

                    //  触发验证  条码正确性
                    self.outproduct();
                }
            });
        }
    },
    watch: {
        dob: function dob(curVal, oldVal) {
            this.isdob = true;
        }
    }
});

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js!./base.css", function() {
			var newContent = require("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js!./base.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

/******/ });