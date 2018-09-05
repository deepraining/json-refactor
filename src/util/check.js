const logger = require('./logger');

module.exports = (target, keysMap) => {
  if (!target || typeof target !== 'object') {
    logger.error('target is invalid, it should be a map or an array');
    logger.error(`target: ${JSON.stringify(target)}`);
    return !1;
  }

  if (!keysMap || typeof keysMap !== 'object') {
    logger.error('keysMap is invalid, it should be a map or an array');
    logger.error(`keysMap: ${JSON.stringify(keysMap)}`);
    return !1;
  }

  if (
    (target instanceof Array && !(keysMap instanceof Array)) ||
    (keysMap instanceof Array && !(target instanceof Array))
  ) {
    logger.error('target and keysMap are not the same type, they both should be Array or Object[map]');
    logger.error(`target: ${JSON.stringify(target)}`);
    logger.error(`keysMap: ${JSON.stringify(keysMap)}`);
    return !1;
  }

  return !0;
};
