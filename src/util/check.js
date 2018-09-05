import { error } from './logger';
import type from './type';

export default function(target, keysMap) {
  if (!target || typeof target !== 'object') {
    error('target is invalid, it should be a map or an array');
    error('target: ', target);
    return !1;
  }

  if (!keysMap || typeof keysMap !== 'object') {
    error('keysMap is invalid, it should be a map or an array');
    error('keysMap: ', keysMap);
    return !1;
  }

  if (type(target) !== type(keysMap)) {
    error('target and keysMap are not the same type, they both should be map or array');
    error('target: ', target);
    error('keysMap: ', keysMap);
    return !1;
  }

  return !0;
}
