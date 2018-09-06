import check from './util/check';
import { error } from './util/logger';
import marker from './marker';
import convert from './convert';

/**
 * Handle function.
 *
 * @param target Target to handle.
 * @param keysMap Rules
 */
const handle = (target, keysMap) => {
  if (!check(target, keysMap)) return;

  // array
  if (Array.isArray(keysMap))
    target.forEach(item => {
      handle(item, keysMap[0]);
    });
  // map
  else
    Object.keys(keysMap).forEach(toKey => {
      /**
       * Just copy value of `fromKey` to `toKey`.
       *
       * @example
       *
       * ```
       * {toKey: fromKey}
       * ```
       */
      const fromKey = keysMap[toKey];

      let oldValue = target[toKey];

      // {data: 'list', _data: [{...}]}
      if (toKey.slice(0, marker.keepOnHandling.length) === marker.keepOnHandling) {
        oldValue = target[toKey.slice(marker.keepOnHandling.length)];
      }

      if (typeof fromKey === 'object') {
        /**
         * `fromKey` is object.
         *
         * @example
         *
         * ```
         * {key: {...}}
         * {key: [{...}]}
         * ```
         */

        if (!check(oldValue, fromKey)) return;

        // array
        if (Array.isArray(fromKey)) {
          oldValue.forEach(item => {
            if (!check(item, fromKey[0])) return;

            handle(item, fromKey[0]);
          });
        }
        // map
        else {
          handle(oldValue, fromKey);
        }
      } else if (typeof fromKey === 'string') {
        /**
         * `fromKey` is string.
         *
         * @example
         *
         * ```
         * {toKey: fromKey}
         * ```
         */

        convert(target, keysMap, toKey);
      } else {
        // Others.

        error(`can't resolve key: ${JSON.stringify(fromKey)}`);
      }
    });
};

export default handle;
