
"use strict";

const moment = require('moment');

const packageJson = require('./package.json');

module.exports = {
    // module definition
    modules: {
        index: {
            js: 'src/index.js',
            filename: 'json-refactor',
            library: 'JSONRefactor',
            libraryTarget: "umd"
        },
        demo: {
            html: 'demo/index.html',
            js: 'demo/index.js'
        },
        example: {
            html: 'example/index.html',
            js: 'example/index.js'
        }
    },
    banner: `
    json-refactor v${packageJson.version}

    https://github.com/senntyou/json-refactor

    @senntyou <jiangjinbelief@163.com>

    ${moment().format('YYYY-MM-DD HH:mm:ss')}
    `
};

