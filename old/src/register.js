import operations from './operations';

/**
 * Register an operator.
 *
 * @param test
 * @param handler
 */
export default function(test, handler) {
  if (!test) return;

  // string/regExp + handler
  if (test && handler) operations.push({ test, handler });
  // map or array
  else if (typeof test === 'object') {
    // [{test, handler}, {...}]
    if (Array.isArray(test)) operations.push(...test);
    // {test, handler}
    else operations.push(test);
  }
}
