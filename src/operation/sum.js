
'use strict';

var logger = require('../util/logger');

module.exports = {
    test: /^sum!/,
    handler: (originValue, operator) => {
        var field = operator.split('!')[1];
        var sum = 0;

        if (!field) {
            logger.error(`${operator} is not a valid operator.`);
            return sum;
        }

        if (!originValue || !(originValue instanceof Array)) {
            logger.error(`${JSON.stringify(originValue)} is not a valid target for operator ${operator}.`);
            return sum;
        }

        originValue.forEach((item) => {sum += item[field];});

        return sum;
    }
};
