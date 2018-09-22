require('@babel/polyfill');
require('@babel/preset-env');
require('@babel/register')({
    presets: ['@babel/preset-env'],
    extensions: ['.ts']
});

require('app-module-path').addPath(require('path').join(__dirname, '../src'));
require('./server/app.ts');
