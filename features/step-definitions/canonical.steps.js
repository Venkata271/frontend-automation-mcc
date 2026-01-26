import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PublicationPage } from '../pages/publication.page.js';

let publicationPage;
let canonicalUrl;
let currentUrl;

Given('User opens a publication', async function () {
  publicationPage = new PublicationPage(this.page);

  await publicationPage.open(
    'https://qa1.kansas.com/hp-2020/article31558452.html'
  );
});

When('user verifies the canonical URL in view page source', async function () {
  canonicalUrl = await publicationPage.getCanonicalUrlFromSource();
  currentUrl = await publicationPage.getCurrentUrl();
});

Then(
  'canonical URL should be present and match the page URL and screenshot should be taken',
  async function () {
    expect(canonicalUrl).toBeTruthy();
    expect(canonicalUrl).toBe(currentUrl);

    console.log('canonical url is displayed');

    await publicationPage.takeScreenshot('canonical-url-validation');
  }
);