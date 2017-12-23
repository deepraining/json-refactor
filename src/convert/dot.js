
'use strict';

var clone = require('../util/clone');

module.exports = (target, fromKey) => {
    // [key, subKey, subSubKey]
    var fromKeyItems = fromKey.split('.');
    var result;

    var tempTarget = target, tempKey;
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
    return result && typeof result == 'object' ? clone(result) : result;
};
