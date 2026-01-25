import reporter from 'cucumber-html-reporter';
const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "Browser": "Chromium",
    "Platform": "Playwright",
    "Executed By": "Automation"
  }
};
reporter.generate(options);
