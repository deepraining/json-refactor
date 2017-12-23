
'use strict';

var marker = require('../marker');
var type = require('../util/type');
var operations = require('../operations');
var commonConvert = require('./common');
var dotConvert = require('./dot');

/**
 * covert target based on keysMap and toKey
 *
 * @param target
 * @param keysMap
 * @param toKey
 */
module.exports = (target, keysMap, toKey) => {
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
    operators.forEach((operator) => {
        operations.forEach((operation) => {
            // is string
            if (typeof operation.test == 'string') {
                if (operator == operation.test) target[toKey] = operation.handler(target[toKey], operator)
            }
            // is RegExp
            else if (type(operation.test) == 'regexp') {
                if (operation.test.test(operator)) target[toKey] = operation.handler(target[toKey], operator)
            }
        })
    });
};
