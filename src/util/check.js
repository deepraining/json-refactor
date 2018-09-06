import { error } from './logger';
import type from './type';

export default function(target, mapping) {
  if (!target || typeof target !== 'object') {
    error('target is invalid, it should be a map or an array');
    error('target: ', target);
    return !1;
  }

  if (!mapping || typeof mapping !== 'object') {
    error('mapping rules is invalid, it should be a map or an array');
    error('mapping rules: ', mapping);
    return !1;
  }

  if (type(target) !== type(mapping)) {
    error('target and mapping rules are not the same type, they both should be map or array');
    error('target: ', target);
    error('mapping rules: ', mapping);
    return !1;
  }

  return !0;
}
