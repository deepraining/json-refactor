import clone from 'clone';

export default function(target, fromKey) {
  // [key, subKey, subSubKey, ...]
  const fromKeyItems = fromKey.split('.');
  let result;

  let tempTarget = target;
  let tempKey;

  for (let i = 0; i < fromKeyItems.length; i += 1) {
    tempKey = fromKeyItems[i];

    if (typeof tempTarget[tempKey] !== 'undefined') {
      // Has value, continue.

      tempTarget = tempTarget[tempKey];
      result = tempTarget;
    } else {
      // No value, break.

      result = undefined;
      break;
    }
  }

  // Not found.
  if (typeof result === 'undefined') return;

  // Is `object[array|map]` and not `null`, clone it.
  return result && typeof result === 'object' ? clone(result) : result;
}
