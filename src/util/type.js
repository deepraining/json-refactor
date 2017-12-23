
'use strict';

// from jquery[https://github.com/jquery/jquery/blob/master/src/core.js#L271]

var class2type = {};
var toString = class2type.toString;

"Boolean Number String Function Array Date RegExp Object Error Symbol".split( " ").forEach((name) => {
    class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

module.exports = (obj) => {
    if ( obj == null ) return obj + "";

    return typeof obj === "object" || typeof obj === "function" ?
    class2type[ toString.call( obj ) ] || "object" :
        typeof obj;
};
