function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var clone = _interopDefault(require('clone'));

var prefix = 'json-refactor: ';
var error = function (str) {
    var rest = [], len = arguments.length - 1;
    while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

    console.error.apply(console, [ prefix + str ].concat( rest ));
};

var class2type = {};
var toString = class2type.toString;
'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' ').forEach(function (name) {
    class2type[("[object " + name + "]")] = name.toLowerCase();
});
function type (obj) {
    if (obj === null) 
        { return ("" + obj); }
    return typeof obj === 'object' || typeof obj === 'function' ? class2type[toString.call(obj)] || 'object' : typeof obj;
}

function check (target, keysMap) {
    if (!target || typeof target !== 'object') {
        error('target is invalid, it should be a map or an array');
        error('target: ', target);
        return !1;
    }
    if (!keysMap || typeof keysMap !== 'object') {
        error('keysMap is invalid, it should be a map or an array');
        error('keysMap: ', keysMap);
        return !1;
    }
    if (type(target) !== type(keysMap)) {
        error('target and keysMap are not the same type, they both should be map or array');
        error('target: ', target);
        error('keysMap: ', keysMap);
        return !1;
    }
    return !0;
}

var marker = {
    keepOnHandling: '_',
    operatorDelimiter: '|'
};

var operations = [];

function dotConvert (target, fromKey) {
    var fromKeyItems = fromKey.split('.');
    var result;
    var tempTarget = target;
    var tempKey;
    for (var i = 0;i < fromKeyItems.length; i += 1) {
        tempKey = fromKeyItems[i];
        if (typeof tempTarget[tempKey] !== 'undefined') {
            tempTarget = tempTarget[tempKey];
            result = tempTarget;
        } else {
            result = undefined;
            break;
        }
    }
    if (typeof result === 'undefined') 
        { return; }
    return result && typeof result === 'object' ? clone(result) : result;
}

function convert (target, keysMap, toKey) {
    var fullFromKey = keysMap[toKey];
    var fullFromKeyItems = fullFromKey.split(marker.operatorDelimiter);
    var fromKey = fullFromKeyItems.shift();
    var operators = fullFromKeyItems;
    if (fromKey.indexOf('.') > -1) 
        { target[toKey] = dotConvert(target, fromKey); }
     else 
        { target[toKey] = target[fromKey]; }
    operators.forEach(function (operator) {
        operations.forEach(function (operation) {
            if (typeof operation.test === 'string') {
                if (operator === operation.test) 
                    { target[toKey] = operation.handler(target[toKey], operator); }
            } else if (type(operation.test) === 'regexp') {
                if (operation.test.test(operator)) 
                    { target[toKey] = operation.handler(target[toKey], operator); }
            }
        });
    });
}

var handle = function (target, keysMap) {
    if (!check(target, keysMap)) 
        { return; }
    if (Array.isArray(keysMap)) 
        { target.forEach(function (item) {
        handle(item, keysMap[0]);
    }); }
     else 
        { Object.keys(keysMap).forEach(function (toKey) {
        var fromKey = keysMap[toKey];
        var oldValue = target[toKey];
        if (toKey.slice(0, marker.keepOnHandling.length) === marker.keepOnHandling) {
            oldValue = target[toKey.slice(marker.keepOnHandling.length)];
        }
        if (typeof fromKey === 'object') {
            if (!check(oldValue, fromKey)) 
                { return; }
            if (Array.isArray(fromKey)) {
                oldValue.forEach(function (item) {
                    if (!check(item, fromKey[0])) 
                        { return; }
                    handle(item, fromKey[0]);
                });
            } else {
                handle(oldValue, fromKey);
            }
        } else if (typeof fromKey === 'string') {
            convert(target, keysMap, toKey);
        } else {
            error(("can't resolve key: " + (JSON.stringify(fromKey))));
        }
    }); }
};

function refactor (target, keysMap, returnNew) {
    if (!check(target, keysMap)) 
        { return target; }
    var newTarget = returnNew ? clone(target) : target;
    handle(newTarget, keysMap);
    return newTarget;
}

function set (options) {
    if (!options || typeof options !== 'object') 
        { return; }
    Object.keys(options).forEach(function (key) {
        marker[key] = options[key];
    });
}

function register (test, handler) {
    if (!test) 
        { return; }
    if (test && handler) 
        { operations.push({
        test: test,
        handler: handler
    }); }
     else if (typeof test === 'object') {
        if (Array.isArray(test)) 
            { operations.push.apply(operations, test); }
         else 
            { operations.push(test); }
    }
}

var intOperator = {
    test: 'int',
    handler: function (value) { return parseInt(value, 10); }
};

var floatOperator = {
    test: 'float',
    handler: function (value) { return parseFloat(value); }
};

var boolOperator = {
    test: 'bool',
    handler: function (value) { return !(!value); }
};

var stringOperator = {
    test: 'string',
    handler: function (value) { return ("" + value); }
};

var sumOperator = {
    test: /^sum!/,
    handler: function (value, operator) {
        var field = operator.split('!')[1];
        var sum = 0;
        if (!field) {
            error(("'" + operator + "' is not a valid operator."));
            return sum;
        }
        if (!value || !Array.isArray(value)) {
            error(("original value should be an array for operator '" + operator + "'."), value);
            return sum;
        }
        value.forEach(function (item) {
            sum += item[field];
        });
        return sum;
    }
};

var averageOperator = {
    test: /^average!/,
    handler: function (value, operator) {
        var field = operator.split('!')[1];
        var sum = 0;
        var count = 0;
        if (!field) {
            error(("'" + operator + "' is not a valid operator."));
            return sum;
        }
        if (!value || !Array.isArray(value)) {
            error(("original value should be an array for operator '" + operator + "'."), value);
            return sum;
        }
        value.forEach(function (item) {
            sum += item[field];
            count += 1;
        });
        return sum / count;
    }
};

register(intOperator);
register(floatOperator);
register(boolOperator);
register(stringOperator);
register(sumOperator);
register(averageOperator);
refactor.set = set;
refactor.register = register;

module.exports = refactor;
//# sourceMappingURL=json-refactor.js.map
