const cp = require('child_process');
const path = require('path');

const APP_PATH = path.join(__dirname, '../src/index.ts');

let app;

function startApp() {
    const env = Object.assign({ NODE_ENV: 'development', WEBPACK_SERVE: true }, process.env);
    // fork app process
    app = cp.fork(APP_PATH, { env });
}

startApp();
