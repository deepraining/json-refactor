module.exports = {
  /**
   * make a new key, and keep on refactoring the new key
   *
   * example:
   *     target: {
   *         list: [
   *             {
   *                 id: id,
   *                 name: name
   *             }
   *         ]
   *     }
   *     keysMap: {
   *         data: 'list',
   *         _data: [
   *             {
   *                 newId: 'id',
   *                 newName: 'name'
   *             }
   *         ]
   *     }
   */
  keepOnHandling: '_',
  /**
   * delimiter of operators
   *
   * example:
   *     keysMap: {
   *         toKey: 'fromKey|operator1|operator2|operator3'
   *     }
   */
  operatorDelimiter: '|',
};
