!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("clone")):"function"==typeof define&&define.amd?define(["clone"],t):e.JSONRefactor=t(e.clone)}(this,function(e){e=e&&e.hasOwnProperty("default")?e.default:e;var t=function(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];console.error.apply(console,["json-refactor: "+e].concat(t))},r={},n=r.toString;function o(e){return null===e?""+e:"object"==typeof e||"function"==typeof e?r[n.call(e)]||"object":typeof e}function a(e,r){return e&&"object"==typeof e?r&&"object"==typeof r?o(e)===o(r)||(t("target and mapping rules are not the same type, they should both be map or array"),t("target: ",e),t("mapping rules: ",r),!1):(t("mapping rules is invalid, it should be a map or an array"),t("mapping rules: ",r),!1):(t("target is invalid, it should be a map or an array"),t("target: ",e),!1)}"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(e){r["[object "+e+"]"]=e.toLowerCase()});var i={keepOnHandling:"_",operatorDelimiter:"|"},f=[];function l(t,r,n){var a=r[n].split(i.operatorDelimiter),l=a.shift(),u=a;t[n]=l.indexOf(".")>-1?function(t,r){for(var n,o,a=r.split("."),i=t,f=0;f<a.length;f+=1){if(void 0===i[o=a[f]]){n=void 0;break}n=i=i[o]}if(void 0!==n)return n&&"object"==typeof n?e(n):n}(t,l):t[l],u.forEach(function(e){f.forEach(function(r){"string"==typeof r.test?e===r.test&&(t[n]=r.handler(t[n],e)):"regexp"===o(r.test)&&r.test.test(e)&&(t[n]=r.handler(t[n],e))})})}var u=function(e,r){a(e,r)&&(Array.isArray(r)?e.forEach(function(e){u(e,r[0])}):Object.keys(r).forEach(function(n){var o=r[n],f=e[n];if(n.slice(0,i.keepOnHandling.length)===i.keepOnHandling&&(f=e[n.slice(i.keepOnHandling.length)]),"object"==typeof o){if(!a(f,o))return;Array.isArray(o)?f.forEach(function(e){a(e,o[0])&&u(e,o[0])}):u(f,o)}else"string"==typeof o?l(e,r,n):t("can't resolve key: "+JSON.stringify(o))}))};function c(t,r,n){if(!a(t,r))return t;var o=n?e(t):t;return u(o,r),o}function s(e,t){e&&(e&&t?f.push({test:e,handler:t}):"object"==typeof e&&(Array.isArray(e)?f.push.apply(f,e):f.push(e)))}var p={test:"float",handler:function(e){return parseFloat(e)}},y={test:/^sum!/,handler:function(e,r){var n=r.split("!")[1],o=0;return n?e&&Array.isArray(e)?(e.forEach(function(e){o+=e[n]}),o):(t("original value should be an array for operator '"+r+"'.",e),o):(t("'"+r+"' is not a valid operator."),o)}},d={test:/^average!/,handler:function(e,r){var n=r.split("!")[1],o=0,a=0;return n?e&&Array.isArray(e)?(e.forEach(function(e){o+=e[n],a+=1}),o/a):(t("original value should be an array for operator '"+r+"'.",e),o):(t("'"+r+"' is not a valid operator."),o)}};return s({test:"int",handler:function(e){return parseInt(e,10)}}),s(p),s({test:"bool",handler:function(e){return!!e}}),s({test:"string",handler:function(e){return""+e}}),s(y),s(d),c.set=function(e){e&&"object"==typeof e&&Object.keys(e).forEach(function(t){i[t]=e[t]})},c.register=s,c});
//# sourceMappingURL=json-refactor.umd.js.map
