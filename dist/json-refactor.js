/*!
 * 
 *     json-refactor v0.1.4
 * 
 *     https://github.com/senntyou/json-refactor
 * 
 *     @senntyou <jiangjinbelief@163.com>
 * 
 *     2018-06-04 09:34:35
 *     
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JSONRefactor"] = factory();
	else
		root["JSONRefactor"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var prefix = 'json-refactor: ';

module.exports = {
    log: function log(str) {
        console.log(prefix + str);
    },
    info: function info(str) {
        console.info(prefix + str);
    },
    warn: function warn(str) {
        console.warn(prefix + str);
    },
    error: function error(str) {
        console.error(prefix + str);
    },
    throwError: function throwError(str) {
        throw new Error(prefix + str);
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = {
  /**
   * make a new key, and keep on refactoring the new key
   *
   * example:
   *     target: {
   *         list: [
   *             {
   *                 id: id,
   *                 name: name
   *             }
   *         ]
   *     }
   *     keysMap: {
   *         data: 'list',
   *         _data: [
   *             {
   *                 newId: 'id',
   *                 newName: 'name'
   *             }
   *         ]
   *     }
   */
  keepOnHandling: '_',
  /**
   * delimiter of operators
   *
   * example:
   *     keysMap: {
   *         toKey: 'fromKey|operator1|operator2|operator3'
   *     }
   */
  operatorDelimiter: '|'
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * clone object
 *
 * @param obj
 * @returns {*}
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var cloneObject = function cloneObject(obj) {
    // empty value
    if (typeof obj === 'undefined' || obj === null) return {};

    // not object
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return obj;

    var value,
        result = {};

    for (var key in obj) {
        if (!obj.hasOwnProperty(key)) continue;

        value = obj[key];
        if (value instanceof Array) {
            result[key] = cloneArray(value);
        } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
            result[key] = cloneObject(value);
        } else {
            result[key] = value;
        }
    }

    return result;
};

/**
 * clone array
 *
 * @param arr
 * @returns {Array}
 */
var cloneArray = function cloneArray(arr) {
    // empty value
    if (typeof arr === 'undefined' || arr === null) return [];

    // not array
    if (!(arr instanceof Array)) return [];

    var result = [];
    arr.forEach(function (item, index) {
        if (item instanceof Array) result[index] = cloneArray(item);else if (item == 'object') result[index] = cloneObject(item);else result[index] = item;
    });

    return result;
};

/**
 * clone object or array
 *
 * @param target
 * @returns {*}
 */
module.exports = function (target) {
    if (!target || (typeof target === 'undefined' ? 'undefined' : _typeof(target)) != 'object') return target;

    if (target instanceof Array) return cloneArray(target);else return cloneObject(target);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var logger = __webpack_require__(0);

module.exports = function (target, keysMap) {

    if (!target || (typeof target === 'undefined' ? 'undefined' : _typeof(target)) != 'object') {
        logger.error('target is invalid, it should be a map or an array');
        logger.error('target: ' + JSON.stringify(target));
        return !1;
    }

    if (!keysMap || (typeof keysMap === 'undefined' ? 'undefined' : _typeof(keysMap)) != 'object') {
        logger.error('keysMap is invalid, it should be a map or an array');
        logger.error('keysMap: ' + JSON.stringify(keysMap));
        return !1;
    }

    if (target instanceof Array && !(keysMap instanceof Array) || keysMap instanceof Array && !(target instanceof Array)) {
        logger.error('target and keysMap are not the same type, they both should be Array or Object[map]');
        logger.error('target: ' + JSON.stringify(target));
        logger.error('keysMap: ' + JSON.stringify(keysMap));
        return !1;
    }

    return !0;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * operations collection
 *
 * @type {Array}
 */

module.exports = [
  /**
   * {
   *     test: string/RegExp
   *     handler: (originValue, operator) => {
   *          // originValue: origin value of current key
   *          // operator: operator of current handling
   *
   *          // must return a new value at last
   *          return newValue;
   *     }
   * }
   */
];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var refactor = __webpack_require__(6);
var set = __webpack_require__(12);
var register = __webpack_require__(13);

// built in operations
register(__webpack_require__(14));
register(__webpack_require__(15));
register(__webpack_require__(16));
register(__webpack_require__(17));
register(__webpack_require__(18));
register(__webpack_require__(19));

refactor.set = set;
refactor.register = register;

module.exports = refactor;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var logger = __webpack_require__(0);
var clone = __webpack_require__(2);
var check = __webpack_require__(3);
var handle = __webpack_require__(7);

/**
 * main
 *
 * @param target Target object
 * @param keysMap Keys map to refactor
 * @param returnNew Whether return new json, if true, a new clone target will be return, and the origin target will be not be modified
 */
module.exports = function (target, keysMap, returnNew) {

  if (!check(target, keysMap)) return target;

  var newTarget = returnNew ? clone(target) : target;

  handle(newTarget, keysMap);

  return newTarget;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var check = __webpack_require__(3);
var logger = __webpack_require__(0);
var marker = __webpack_require__(1);
var convert = __webpack_require__(8);

/**
 * handle
 *
 * @param target Target to refactor
 * @param keysMap
 */
var handle = function handle(target, keysMap) {

    if (!check(target, keysMap)) return;

    // array
    if (Array.isArray(keysMap)) target.forEach(function (item) {
        handle(item, keysMap[0]);
    });

    // object[map]
    else Object.keys(keysMap).forEach(function (toKey) {
            /**
             * just copy value of fromKey to toKey
             *
             * toKey: fromKey
             *
             * example:
             *     keysMap: {
             *         newKey: originKey
             *     }
             */
            var fromKey = keysMap[toKey];

            /**
             * more handling of value of toKey
             *
             * toKey: {...}/[...]
             *
             * example:
             *     keysMap: {
             *         originKey: {
             *             // more handling
             *         },
             *         originKey: [
             *             {
             *                 // more handling
             *             }
             *         ]
             *     }
             *
             */
            var originValue = target[toKey];

            if (toKey.slice(0, marker.keepOnHandling.length) === marker.keepOnHandling) {
                originValue = target[toKey.slice(marker.keepOnHandling.length)];
            }

            /**
             * fromKey is object
             *
             * example:
             *     target: {
             *         list: [
             *             {
             *                 id: id,
             *                 name: name
             *             }
             *         ]
             *     }
             *     keysMap: {
             *         list: [
             *             {
             *                 newId: 'id',
             *                 newName: 'name'
             *             }
             *         ]
             *     }
             */
            if ((typeof fromKey === 'undefined' ? 'undefined' : _typeof(fromKey)) == 'object') {
                if (!check(originValue, fromKey)) return;

                // is array
                if (fromKey instanceof Array) {
                    originValue.forEach(function (item) {
                        if (!check(item, fromKey[0])) return;

                        handle(item, fromKey[0]);
                    });
                }
                // is object
                else {
                        handle(originValue, fromKey);
                    }
            }
            /**
             * is string
             *
             * toKey: fromKey
             */
            else if (typeof fromKey == 'string') {
                    convert(target, keysMap, toKey);
                }
                // other
                else {
                        logger.error('can\'t resolve key: \n' + JSON.stringify(fromKey));
                    }
        });
};

module.exports = handle;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var marker = __webpack_require__(1);
var type = __webpack_require__(9);
var operations = __webpack_require__(4);
var commonConvert = __webpack_require__(10);
var dotConvert = __webpack_require__(11);

/**
 * covert target based on keysMap and toKey
 *
 * @param target
 * @param keysMap
 * @param toKey
 */
module.exports = function (target, keysMap, toKey) {
    // fromKey|operator1|operator2|operator3
    var originFromKey = keysMap[toKey];
    // [fromKey, operator1, operator2, operator3]
    var originFromKeyItems = originFromKey.split(marker.operatorDelimiter);
    // real from key
    var fromKey = originFromKeyItems.shift();
    // all operators
    var operators = originFromKeyItems;

    // has dot mark
    if (fromKey.indexOf('.') > -1) target[toKey] = dotConvert(target, fromKey);
    // common
    else target[toKey] = commonConvert(target, fromKey);

    // handle operators and operations
    operators.forEach(function (operator) {
        operations.forEach(function (operation) {
            // is string
            if (typeof operation.test == 'string') {
                if (operator == operation.test) target[toKey] = operation.handler(target[toKey], operator);
            }
            // is RegExp
            else if (type(operation.test) == 'regexp') {
                    if (operation.test.test(operator)) target[toKey] = operation.handler(target[toKey], operator);
                }
        });
    });
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



// from jquery[https://github.com/jquery/jquery/blob/master/src/core.js#L271]

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var class2type = {};
var toString = class2type.toString;

"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function (name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
});

module.exports = function (obj) {
    if (obj == null) return obj + "";

    return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * common convert
 *
 * @param target
 * @param fromKey
 * @returns {*}
 */

module.exports = function (target, fromKey) {
  return target[fromKey];
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var clone = __webpack_require__(2);

module.exports = function (target, fromKey) {
    // [key, subKey, subSubKey]
    var fromKeyItems = fromKey.split('.');
    var result;

    var tempTarget = target,
        tempKey;
    for (var i = 0; i < fromKeyItems.length; i++) {
        tempKey = fromKeyItems[i];
        // has value, continue
        if (typeof tempTarget[tempKey] != 'undefined') {
            tempTarget = tempTarget[tempKey];
            result = tempTarget;
        }
        // no value, break
        else {
                result = void 0;
                break;
            }
    }

    // not find
    if (typeof result == 'undefined') return;

    // is object/array and not null, clone it
    return result && (typeof result === 'undefined' ? 'undefined' : _typeof(result)) == 'object' ? clone(result) : result;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var marker = __webpack_require__(1);

/**
 * set custom markers
 *
 * @param option
 */
module.exports = function (option) {
    if (!option || (typeof option === 'undefined' ? 'undefined' : _typeof(option)) != 'object') return;

    for (var attr in option) {
        if (option.hasOwnProperty(attr)) marker[attr] = option[attr];
    }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var operations = __webpack_require__(4);

/**
 * register a operation
 *
 * @param test
 * @param handler
 */
module.exports = function (test, handler) {
    if (!test) return;

    // string/regExp + handler
    if (test && handler) operations.push({ test: test, handler: handler });
    // map or array
    else if ((typeof test === 'undefined' ? 'undefined' : _typeof(test)) === 'object') {
            // array
            if (test instanceof Array) test.forEach(function (item) {
                operations.push(item);
            });
            // map
            else operations.push(test);
        }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = {
    test: 'int',
    handler: function handler(originValue) {
        return parseInt(originValue);
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = {
    test: 'float',
    handler: function handler(originValue) {
        return parseFloat(originValue);
    }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = {
    test: 'bool',
    handler: function handler(originValue) {
        return !!originValue;
    }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = {
    test: 'string',
    handler: function handler(originValue) {
        return originValue + '';
    }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var logger = __webpack_require__(0);

module.exports = {
    test: /^sum!/,
    handler: function handler(originValue, operator) {
        var field = operator.split('!')[1];
        var sum = 0;

        if (!field) {
            logger.error(operator + ' is not a valid operator.');
            return sum;
        }

        if (!originValue || !(originValue instanceof Array)) {
            logger.error(JSON.stringify(originValue) + ' is not a valid target for operator ' + operator + '.');
            return sum;
        }

        originValue.forEach(function (item) {
            sum += item[field];
        });

        return sum;
    }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var logger = __webpack_require__(0);

module.exports = {
    test: /^average!/,
    handler: function handler(originValue, operator) {
        var field = operator.split('!')[1];

        var sum = 0;
        var count = 0;

        if (!field) {
            logger.error(operator + ' is not a valid operator.');
            return sum;
        }

        if (!originValue || !(originValue instanceof Array)) {
            logger.error(JSON.stringify(originValue) + ' is not a valid target for operator ' + operator + '.');
            return sum;
        }

        originValue.forEach(function (item) {
            sum += item[field];count += 1;
        });

        return sum / count;
    }
};

/***/ })
/******/ ]);
});