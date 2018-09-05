const check = require('./util/check');
const logger = require('./util/logger');
const marker = require('./marker');
const convert = require('./convert');

/**
 * handle
 *
 * @param target Target to refactor
 * @param keysMap
 */
const handle = (target, keysMap) => {
  if (!check(target, keysMap)) return;

  // array
  if (Array.isArray(keysMap))
    target.forEach(item => {
      handle(item, keysMap[0]);
    });
  // object[map]
  else
    Object.keys(keysMap).forEach(toKey => {
      /**
       * just copy value of fromKey to toKey
       *
       * toKey: fromKey
       *
       * example:
       *     keysMap: {
       *         newKey: originKey
       *     }
       */
      const fromKey = keysMap[toKey];

      /**
       * more handling of value of toKey
       *
       * toKey: {...}/[...]
       *
       * example:
       *     keysMap: {
       *         originKey: {
       *             // more handling
       *         },
       *         originKey: [
       *             {
       *                 // more handling
       *             }
       *         ]
       *     }
       *
       */
      let originValue = target[toKey];

      if (toKey.slice(0, marker.keepOnHandling.length) === marker.keepOnHandling) {
        originValue = target[toKey.slice(marker.keepOnHandling.length)];
      }

      /**
       * fromKey is object
       *
       * example:
       *     target: {
       *         list: [
       *             {
       *                 id: id,
       *                 name: name
       *             }
       *         ]
       *     }
       *     keysMap: {
       *         list: [
       *             {
       *                 newId: 'id',
       *                 newName: 'name'
       *             }
       *         ]
       *     }
       */
      if (typeof fromKey === 'object') {
        if (!check(originValue, fromKey)) return;

        // is array
        if (fromKey instanceof Array) {
          originValue.forEach(item => {
            if (!check(item, fromKey[0])) return;

            handle(item, fromKey[0]);
          });
        }
        // is object
        else {
          handle(originValue, fromKey);
        }
      } else if (typeof fromKey === 'string') {
        /**
         * is string
         *
         * toKey: fromKey
         */
        convert(target, keysMap, toKey);
      }
      // other
      else {
        logger.error(`can't resolve key: \n${JSON.stringify(fromKey)}`);
      }
    });
};

module.exports = handle;
