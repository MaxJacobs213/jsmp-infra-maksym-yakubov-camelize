module.exports = {
  roots: ['<rootDir>/test'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  coverageReporters: ['json-summary', 'text', 'lcov'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};
