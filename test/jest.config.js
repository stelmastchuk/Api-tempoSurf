/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const { resolve } = require('path');
const root = resolve(__dirname, '..');
const rootConfig = require(`${root}/jest.config.js`);

module.exports = {
  ...rootConfig,
  ...{
    rootDir: root,
    // eslint-disable-next-line prettier/prettier
    displayName: 'end2end-tests',
    // eslint-disable-next-line prettier/prettier
    setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
    // eslint-disable-next-line prettier/prettier
    testMatch: ['<rootDir>/test/**/*.test.ts'],
  },
};
