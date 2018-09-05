const marker = require('../marker');
const type = require('../util/type');
const operations = require('../operations');
const commonConvert = require('./common');
const dotConvert = require('./dot');

/**
 * covert target based on keysMap and toKey
 *
 * @param target
 * @param keysMap
 * @param toKey
 */
module.exports = (target, keysMap, toKey) => {
  /* eslint-disable no-param-reassign */

  // fromKey|operator1|operator2|operator3
  const originFromKey = keysMap[toKey];
  // [fromKey, operator1, operator2, operator3]
  const originFromKeyItems = originFromKey.split(marker.operatorDelimiter);
  // real from key
  const fromKey = originFromKeyItems.shift();
  // all operators
  const operators = originFromKeyItems;

  // has dot mark
  if (fromKey.indexOf('.') > -1) target[toKey] = dotConvert(target, fromKey);
  // common
  else target[toKey] = commonConvert(target, fromKey);

  // handle operators and operations
  operators.forEach(operator => {
    operations.forEach(operation => {
      // is string
      if (typeof operation.test === 'string') {
        if (operator === operation.test) target[toKey] = operation.handler(target[toKey], operator);
      }
      // is RegExp
      else if (type(operation.test) === 'regexp') {
        if (operation.test.test(operator)) target[toKey] = operation.handler(target[toKey], operator);
      }
    });
  });
};
