module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: [
      'features/step-definitions/**/*.js',
      'features/support/**/*.js'
    ],
    parallel: 0,
    publishQuiet: true,
    format: ['json:reports/cucumber-report.json']
  }
};
