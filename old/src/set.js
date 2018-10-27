import marker from './marker';

/**
 * Set custom markers.
 *
 * @param options
 */
export default function(options) {
  if (!options || typeof options !== 'object') return;

  Object.keys(options).forEach(key => {
    marker[key] = options[key];
  });
}
