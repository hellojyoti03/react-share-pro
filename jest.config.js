module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'text', 'lcov'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}', // Adjust this if your source files are located elsewhere
    '!src/components/**', // Exclude all files in the components directory
    '!src/helpers/**',    // Exclude all files in the helpers directory
    '!src/**/*.test.{js,jsx}', // Exclude test files
    '!**/node_modules/**'  // Exclude node_modules
  ],
};
