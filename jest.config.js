module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/*.test.js', '**/*.spec.js'],
  moduleFileExtensions: [
    'js',
    'json',
    // tell Jest to handle `*.vue` files
    'vue',
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': 'vue-jest',
  },
  reporters: ['default', ['jest-junit', { outputDirectory: './coverage/' }]],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,vue}', '!src/main.js'],
  coverageReporters: ['cobertura', 'json', 'lcov', 'text', 'clover'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -35,
    },
  },
  setupFilesAfterEnv: ['./tests/unit/configs/setup.js'],
};
