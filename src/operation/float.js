
'use strict';

module.exports = {
    test: 'float',
    handler: (originValue) => {
        return parseFloat(originValue);
    }
};
