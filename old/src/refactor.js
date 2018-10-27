import clone from 'clone';
import check from './util/check';
import handle from './handle';

/**
 * Main
 *
 * @param target Target to handle.
 * @param mapping Mapping rules to refactor.
 * @param cloneTarget Whether to clone target, if `true`, a new cloned target will be formatted, and the original target will not be modified. Default `false`, the original target will be modified.
 */
export default function(target, mapping, cloneTarget) {
  if (!check(target, mapping)) return target;

  const newTarget = cloneTarget ? clone(target) : target;

  handle(newTarget, mapping);

  return newTarget;
}
