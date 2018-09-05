/**
 * clone object
 *
 * @param obj
 * @returns {*}
 */
const cloneObject = obj => {
  // empty value
  if (typeof obj === 'undefined' || obj === null) return {};

  // not object
  if (typeof obj !== 'object') return obj;

  let value;
  const result = {};

  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue; // eslint-disable-line no-continue,no-prototype-builtins

    value = obj[key];
    if (value instanceof Array) {
      result[key] = cloneArray(value);
    } else if (typeof value === 'object') {
      result[key] = cloneObject(value);
    } else {
      result[key] = value;
    }
  }

  return result;
};

/**
 * clone array
 *
 * @param arr
 * @returns {Array}
 */
let cloneArray = arr => {
  // empty value
  if (typeof arr === 'undefined' || arr === null) return [];

  // not array
  if (!(arr instanceof Array)) return [];

  const result = [];
  arr.forEach((item, index) => {
    if (item instanceof Array) result[index] = cloneArray(item);
    else if (item === 'object') result[index] = cloneObject(item);
    else result[index] = item;
  });

  return result;
};

/**
 * clone object or array
 *
 * @param target
 * @returns {*}
 */
module.exports = target => {
  if (!target || typeof target !== 'object') return target;

  if (target instanceof Array) return cloneArray(target);
  else return cloneObject(target);
};
