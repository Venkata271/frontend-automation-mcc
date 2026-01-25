import { Given, Then } from '@cucumber/cucumber';
import HomePage from '../pages/homepage.js';

let homePage;

Given('User opens the homepage', async function () {
  homePage = new HomePage(this.page);
  await homePage.open();
});

Then(
  'verify below homepage components are visible in viewport',
  async function (dataTable) {

    const components = dataTable.rows().map(row => row[0]);

    for (const componentName of components) {
      await homePage.verifyComponentInViewport(componentName);
    }
  }
);