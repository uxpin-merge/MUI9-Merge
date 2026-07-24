/**
 * Test setup for the prop-render suite (test/props-render.test.jsx).
 * Self-contained babel transform (inline presets) so the uxpin-merge webpack
 * build config stays untouched.
 */
module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/test'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      'babel-jest',
      {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
      },
    ],
  },
  // date-fns v3 and some @mui ESM helpers need transforming
  transformIgnorePatterns: ['/node_modules/(?!(@mui|date-fns|@babel/runtime)/)'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/test/mocks/styleMock.js',
  },
  setupFiles: ['<rootDir>/test/setup.js'],
  testTimeout: 30000,
};
