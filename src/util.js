import { warn } from './logger';

export const check = (target, rules) => {
  if (!target || typeof target !== 'object') {
    warn('target should be a map or an array', target);
    return !1;
  }

  if (!rules || typeof rules !== 'object') {
    warn('rules should be a map or an array', rules);
    return !1;
  }

  if (Array.isArray(target) !== Array.isArray(rules)) {
    warn('target and rules should both be map or array', target, rules);
    return !1;
  }

  return !0;
};

// placeholder
export default {};
