module.exports = {
  test: 'int',
  handler: originValue => {
    return parseInt(originValue, 10);
  },
};
