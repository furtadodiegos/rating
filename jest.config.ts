export default {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{ts, tsx, js, jsx}'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  preset: 'react-native',
  setupFilesAfterEnv: ['./__tests__/setup.ts'],
  testEnvironment: 'jsdom',
  testRegex: '(\\.|/)test\\.(ts|tsx|js|jsx)$',
  transformIgnorePatterns: ['node_modules/(?!(jest-)?@?react-native|@react-native-community)'],
  verbose: true,
};
