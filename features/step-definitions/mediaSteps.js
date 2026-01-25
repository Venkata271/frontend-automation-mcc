import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import MediaArticlePage from '../pages/mediaArticle.page.js';
let mediaPage;
/* -------- Lead Video -------- */
Given('user opens a lead video article', async function () {
await this.page.goto('https://qa1.kansas.com/hp-2020/article31558303.html');
mediaPage = new MediaArticlePage(this.page);
});
When('user verifies the lead video', async function () {
await mediaPage.leadVideo.waitFor();
});
Then('lead video should be visible', async function () {
await expect(mediaPage.leadVideo).toBeVisible();
console.log("lead video is visible");
});
/* -------- Lead Image -------- */
Given('user opens a lead image article', async function () {
await this.page.goto('https://qa1.kansas.com/jobs/article35335853.html');
mediaPage = new MediaArticlePage(this.page);
});
When('user verifies the lead image', async function () {
await mediaPage.leadImage.waitFor();
});
Then('lead image should be visible', async function () {
await expect(mediaPage.leadImage).toBeVisible();
});