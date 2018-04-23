
'use strict';

var refactor = require('./refactor');
var set = require('./set');
var register = require('./register');

// built in operations
register(require('./operation/int'));
register(require('./operation/float'));
register(require('./operation/bool'));
register(require('./operation/string'));
register(require('./operation/sum'));
register(require('./operation/average'));

refactor.set = set;
refactor.register = register;

module.exports = refactor;
