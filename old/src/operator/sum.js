import { error } from '../util/logger';

export default {
  test: /^sum!/,
  handler: (value, operator) => {
    const field = operator.split('!')[1];
    let sum = 0;

    if (!field) {
      error(`'${operator}' is not a valid operator.`);
      return sum;
    }

    if (!value || !Array.isArray(value)) {
      error(`original value should be an array for operator '${operator}'.`, value);
      return sum;
    }

    value.forEach(item => {
      sum += item[field];
    });

    return sum;
  },
};
