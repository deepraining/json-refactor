
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

    // string/regExp + handler
    if (test && handler) operations.push({test: test, handler: handler});
    // map or array
    else if (typeof test === 'object') {
        // array
        if (test instanceof Array) test.forEach((item) => {operations.push(item)});
        // map
        else operations.push(test);
    }
};
