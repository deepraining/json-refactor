import clone from 'clone';
import check from './util/check';
import handle from './handle';

/**
 * Main
 *
 * @param target Target to handle.
 * @param keysMap Keys map to refactor.
 * @param returnNew Whether return new json, if true, a new clone target will be return, and the original target will be not be modified.
 */
export default function(target, keysMap, returnNew) {
  if (!check(target, keysMap)) return target;

  const newTarget = returnNew ? clone(target) : target;

  handle(newTarget, keysMap);

  return newTarget;
}
