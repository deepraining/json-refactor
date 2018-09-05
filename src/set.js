import marker from './marker';

/**
 * set custom markers
 *
 * @param option
 */
export default function(option) {
  if (!option || typeof option !== 'object') return;

  Object.keys(option).forEach(key => {
    marker[key] = option[key];
  });
}
