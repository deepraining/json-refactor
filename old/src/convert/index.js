import marker from '../marker';
import type from '../util/type';
import operations from '../operations';
import dotConvert from './dot';

/**
 * Convert target based on `mapping` and `toKey`.
 *
 * @param target
 * @param mapping
 * @param toKey
 */
export default function(target, mapping, toKey) {
  /* eslint-disable no-param-reassign */

  // `fromKey|operator1|operator2|operator3`
  const fullFromKey = mapping[toKey];

  // [fromKey, operator1, operator2, operator3]
  const fullFromKeyItems = fullFromKey.split(marker.operatorDelimiter);

  // Real from key.
  const fromKey = fullFromKeyItems.shift();

  // All operators.
  const operators = fullFromKeyItems;

  // Has dot mark.
  if (fromKey.indexOf('.') > -1) target[toKey] = dotConvert(target, fromKey);
  // Base.
  else target[toKey] = target[fromKey];

  // Operators and operations.
  operators.forEach(operator => {
    operations.forEach(operation => {
      if (typeof operation.test === 'string') {
        // string

        if (operator === operation.test) target[toKey] = operation.handler(target[toKey], operator);
      } else if (type(operation.test) === 'regexp') {
        // RegExp

        if (operation.test.test(operator)) target[toKey] = operation.handler(target[toKey], operator);
      }
    });
  });
}
