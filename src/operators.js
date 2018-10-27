import { warn } from './logger';

export const intOperator = {
  test: 'int',
  handler: value => parseInt(value, 10),
};

export const floatOperator = {
  test: 'float',
  handler: value => parseFloat(value),
};

export const boolOperator = {
  test: 'bool',
  handler: value => !!value,
};

export const stringOperator = {
  test: 'string',
  handler: value => `${value}`,
};

export const sumOperator = {
  test: /^sum!/,
  handler: (value, operator) => {
    const key = operator.split('!')[1];
    const sum = 0;

    if (!key) {
      warn(`operator ${operator} is invalid, and 0 will be returned`);
      return sum;
    }

    if (!value || !Array.isArray(value)) {
      warn(`value should be an array for operator ${operator}`, value);
      return sum;
    }

    return value
      .map(item => item[key])
      .reduce((total, current) => total + current);
  },
};

export const averageOperator = {
  test: /^average!/,
  handler: (value, operator) => {
    const key = operator.split('!')[1];
    const sum = 0;

    if (!key) {
      warn(`operator ${operator} is invalid, and 0 will be returned`);
      return sum;
    }

    if (!value || !Array.isArray(value)) {
      warn(`value should be an array for operator ${operator}`, value);
      return sum;
    }

    return (
      value.map(item => item[key]).reduce((total, current) => total + current) /
      value.length
    );
  },
};
