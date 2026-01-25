import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import AMPMediaArticlePage from '../pages/amp.page.js';

let ampmediaPage;

Given('user opens an amp lead video article', async function () {
  await this.page.goto('https://qa1-amp.kansas.com/hp-2020/article31558303.html?vsim=gfdrddsdsf45');
  ampmediaPage = new AMPMediaArticlePage(this.page);
});

When('user verify the amp lead video', async function () {
  await ampmediaPage.leadVideo.waitFor({ state: 'visible' });
});

Then('lead video should be visible in amp', async function () {
 await expect(ampmediaPage.leadVideo).toBeVisible();
 console.log("lead video is visible in amp"); 

});

Then('there should not be any errors', async function () {
  const amphtmlValidator = await import('amphtml-validator');
  const validator = await amphtmlValidator.default.getInstance();

  // Prefer the server-side HTML (no runtime-injected i-amphtml attributes)
  let html;
  try {
    const resp = await this.page.request.get(this.page.url());
    if (resp && resp.ok()) html = await resp.text();
  } catch (e) {
    // ignore and fall back to page content
  }

  if (!html) html = await this.page.content();

  const result = validator.validateString(html);

  if (result.status !== 'PASS') {
    console.log('Local AMP validator errors:', JSON.stringify(result.errors, null, 2));
    throw new Error('AMP validation failed (local)');
  }
});