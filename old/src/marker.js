export default {
  /**
   * Make a new key, and keep on refactoring the new key.
   *
   * @example
   *
   * ```
   * target: {list: [{}]}
   *
   * mapping: {data: 'list', _data: [{}]}
   * ```
   */
  keepOnHandling: '_',
  /**
   * Delimiter of operators.
   *
   * @example
   *
   * ```
   * mapping: {toKey: 'fromKey|operator1|operator2|operator3'}
   * ```
   */
  operatorDelimiter: '|',
};
