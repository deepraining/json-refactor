export const operations = [
  /**
   * {
   *   test: string/RegExp
   *   // value: original value of current key
   *   // operator: operator of current handling
   *   handler: (value, operator) => {
   *
   *     // should return a new value at last
   *     return newValue;
   *   }
   * }
   */
];

export const marker = {
  /**
   * make a new key, and keep on refactoring the new key
   *
   * @example
   *
   * ```
   * target: {list: [{}]}
   *
   * rules: {data: 'list', _data: [{}]}
   * ```
   */
  keepOnHandling: '_',
  /**
   * delimiter of operators
   *
   * @example
   *
   * ```
   * rules: {toKey: 'fromKey|operator1|operator2|operator3'}
   * ```
   */
  operatorDelimiter: '|',
};
