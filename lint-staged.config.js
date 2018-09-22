module.exports = {
    '*.{ts,tsx}': ["prettier --write ./src/**/*.{ts,tsx}", "tslint --fix", "git add"],
};