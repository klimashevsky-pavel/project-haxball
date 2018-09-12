const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.config');

const DIST_PATH = path.join(__dirname, '../dist');
const ENTRY_PATH = path.resolve(__dirname, '../src/client');

module.exports = merge(baseConfig, {
    entry: {
        main: ENTRY_PATH
    },
    output: {
        filename: 'main.js',
        path: DIST_PATH
    },
    devServer: {
        publicPath: '/',
        contentBase: DIST_PATH,
        historyApiFallback: true,
        hot: true, 
        port: 3000,
        open: true,
    },
})