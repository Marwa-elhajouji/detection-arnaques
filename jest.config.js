module.exports = {
  testEnvironment: 'node',
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  testMatch: ['**/test/**/*.test.js'],
  transformIgnorePatterns: ["<rootDir>/node_modules/"]
};
