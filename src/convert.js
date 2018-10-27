/* eslint-disable no-param-reassign */
import { marker, operations } from './app';

const dot = (target, fromKey) => {
  // [key, subKey, subSubKey, ...]
  const fromKeys = fromKey.split('.');
  let result;

  let tempTarget = target;
  let tempKey;

  for (let i = 0; i < fromKeys.length; i += 1) {
    tempKey = fromKeys[i];

    if (typeof tempTarget[tempKey] !== 'undefined') {
      // has value, continue

      tempTarget = tempTarget[tempKey];
      result = tempTarget;
    } else {
      // no value, break

      result = undefined;
      break;
    }
  }

  return result;
};

export default (target, toKey, fromKey) => {
  // [realFromKey, operator1, operator2, operator3]
  const fromKeys = fromKey.split(marker.operatorDelimiter);

  // real from key
  const realFromKey = fromKeys.shift();

  // all operators
  const operators = fromKeys;

  // has dot mark
  if (realFromKey.indexOf('.') > -1) target[toKey] = dot(target, realFromKey);
  else target[toKey] = target[realFromKey];

  // operators and operations
  operators.forEach(operator => {
    operations.forEach(operation => {
      if (
        (typeof operation.test === 'string' && operator === operation.test) ||
        (operation.test instanceof RegExp && operation.test.test(operator))
      )
        target[toKey] = operation.handler(target[toKey], operator);
    });
  });
};
