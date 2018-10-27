import cloneObj from 'clone';
import { operations, marker } from './app';
import { check } from './util';
import convert from './convert';
import { warn } from './logger';
import {
  intOperator,
  floatOperator,
  boolOperator,
  stringOperator,
  sumOperator,
  averageOperator,
} from './operators';

/**
 * register an operator
 *
 * @param test
 * @param handler
 */
const register = (test, handler) => {
  // string/regExp + handler
  if (test && handler) operations.push({ test, handler });
  // map or array
  else if (typeof test === 'object') {
    // [{test, handler}, {...}]
    if (Array.isArray(test)) operations.push(...test);
    // {test, handler}
    else operations.push(test);
  }
};

register(intOperator);
register(floatOperator);
register(boolOperator);
register(stringOperator);
register(sumOperator);
register(averageOperator);

/**
 * set custom markers
 *
 * @param options
 */
const set = options => {
  if (!options || typeof options !== 'object') return;

  Object.keys(options).forEach(key => {
    marker[key] = options[key];
  });
};

/**
 * handle
 *
 * @param target
 * @param rules
 */
const handle = (target, rules) => {
  if (!check(target, rules)) return;

  if (Array.isArray(rules)) {
    target.forEach(item => {
      handle(item, rules[0]);
    });
    return;
  }

  Object.keys(rules).forEach(toKey => {
    // {toKey: fromKey}
    const fromKey = rules[toKey];

    let oldValue = target[toKey];

    // {data: 'list', _data: [{...}]}
    if (
      toKey.slice(0, marker.keepOnHandling.length) === marker.keepOnHandling
    ) {
      oldValue = target[toKey.slice(marker.keepOnHandling.length)];
    }

    if (typeof fromKey === 'object') {
      handle(oldValue, fromKey);
    } else if (typeof fromKey === 'string') {
      convert(target, toKey, fromKey);
    } else {
      warn(`can't resolve key ${JSON.stringify(fromKey)}`);
    }
  });
};

/**
 * refactor target
 *
 * @param target
 * @param rules
 * @param clone
 */
const refactor = (target, rules, clone) => {
  if (!check(target, rules)) return target;

  const result = clone ? cloneObj(target) : target;

  handle(result, rules);

  return result;
};

refactor.set = set;
refactor.register = register;

export default refactor;
