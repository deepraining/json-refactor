import operations from './operations';

/**
 * register an operation
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
    // array
    if (test instanceof Array) operations.push(...test);
    // map
    else operations.push(test);
  }
}
