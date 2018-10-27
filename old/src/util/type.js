// from jquery[https://github.com/jquery/jquery/blob/master/src/core.js#L271]

const class2type = {};
const { toString } = class2type;

'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' ').forEach(name => {
  class2type[`[object ${name}]`] = name.toLowerCase();
});

export default function(obj) {
  if (obj === null) return `${obj}`;

  return typeof obj === 'object' || typeof obj === 'function' ? class2type[toString.call(obj)] || 'object' : typeof obj;
}
