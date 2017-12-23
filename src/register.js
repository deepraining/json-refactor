
'use strict';

var operations = require('./operations');

/**
 * register a operation
 *
 * @param test
 * @param handler
 */
module.exports = (test, handler) => {
    if (!test) return;

    // map or array
    if (typeof test == 'object') {
        // array
        if (test instanceof Array) test.forEach((item) => {operations.push(item)});
        // map
        else operations.push(test);
    }
    // string/regExp + handler
    else operations.push({test: test, handler: handler});
};
