
'use strict';

var logger = require('./util/logger');
var clone = require('./util/clone');
var check = require('./util/check');
var handle = require('./handle');

/**
 * main
 *
 * @param target Target object
 * @param keysMap Keys map to refactor
 * @param returnNew Whether return new json
 */
module.exports = (target, keysMap, returnNew) => {

    if (!check(target, keysMap)) return target;

    var newTarget = returnNew ? clone(target) : target;

    handle(newTarget, keysMap);

    return newTarget;
};