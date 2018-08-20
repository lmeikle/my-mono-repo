module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  resetMocks: true,
  verbose: true,
  setupTestFrameworkScriptFile: '../../jest/setupTests.js',
  transform: {
    '^.+\\.(js|jsx|mjs)$': '../../node_modules/babel-jest',
    '^.+\\.css$': '../../jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '../../jest/fileTransform.js'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$']
};
