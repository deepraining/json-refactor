const marker = require('./marker');

/**
 * set custom markers
 *
 * @param option
 */
module.exports = option => {
  if (!option || typeof option !== 'object') return;

  for (const attr in option) {
    if (option.hasOwnProperty(attr)) marker[attr] = option[attr]; // eslint-disable-line no-prototype-builtins
  }
};
