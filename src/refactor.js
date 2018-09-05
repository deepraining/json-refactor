const clone = require('./util/clone');
const check = require('./util/check');
const handle = require('./handle');

/**
 * main
 *
 * @param target Target object
 * @param keysMap Keys map to refactor
 * @param returnNew Whether return new json, if true, a new clone target will be return, and the origin target will be not be modified
 */
module.exports = (target, keysMap, returnNew) => {
  if (!check(target, keysMap)) return target;

  const newTarget = returnNew ? clone(target) : target;

  handle(newTarget, keysMap);

  return newTarget;
};
