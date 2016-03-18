exports.config = {
  specs: [
    './specs/**/*.js'
  ],
  exclude: [],
  capabilities: [{}],

  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: 'http://doesnotexist',

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd'
  },

  reporters: ['dot'],
  reporterOptions: {
    outputDir: './test-reports/'
  },
}
