const logger = require('../util/logger');

module.exports = {
  test: /^average!/,
  handler: (originValue, operator) => {
    const field = operator.split('!')[1];

    let sum = 0;
    let count = 0;

    if (!field) {
      logger.error(`${operator} is not a valid operator.`);
      return sum;
    }

    if (!originValue || !(originValue instanceof Array)) {
      logger.error(`${JSON.stringify(originValue)} is not a valid target for operator ${operator}.`);
      return sum;
    }

    originValue.forEach(item => {
      sum += item[field];
      count += 1;
    });

    return sum / count;
  },
};
