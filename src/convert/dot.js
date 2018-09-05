const clone = require('clone');

module.exports = (target, fromKey) => {
  // [key, subKey, subSubKey]
  const fromKeyItems = fromKey.split('.');
  let result;

  let tempTarget = target;
  let tempKey;

  for (let i = 0; i < fromKeyItems.length; i += 1) {
    tempKey = fromKeyItems[i];
    // has value, continue
    if (typeof tempTarget[tempKey] !== 'undefined') {
      tempTarget = tempTarget[tempKey];
      result = tempTarget;
    }
    // no value, break
    else {
      result = undefined;
      break;
    }
  }

  // not find
  if (typeof result === 'undefined') return;

  // is object/array and not null, clone it
  return result && typeof result === 'object' ? clone(result) : result;
};
