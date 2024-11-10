import path from 'path';

export default {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest', // Transpile JavaScript and JSX files
  },
  testEnvironment: 'jsdom', // Emulate a browser-like environment for React components
  // setupFilesAfterEnv: ['<rootDir>/node_modules/@testing-library/jest-dom/extend-expect'], // Jest matchers for DOM assertions
  setupFilesAfterEnv: ['./node_modules/@testing-library/jest-dom/extend-expect'],
  moduleFileExtensions: ['js', 'jsx'],
};