const jestBase = require('../../jest.config.js');

module.exports = {
  ...jestBase,
  collectCoverageFrom: ['src/**/*.js', '!src/*.js']
};
