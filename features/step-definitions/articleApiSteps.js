import { Given, When, Then } from '@cucumber/cucumber';
import { request } from '@playwright/test';
import ArticleApiPage from '../pages/articleApi.page.js';

let apiContext;
let articleApiPage;

Given('user hit the article endpoint', async function () {
  apiContext = await request.newContext();
  articleApiPage = new ArticleApiPage(apiContext);

  await articleApiPage.hitArticleEndpoint();
});

When('Verify the api response', async function () {
  await articleApiPage.verifyApiResponse();
});

Then('the response should return 200 OK', async function () {
  await articleApiPage.verifyStatusCode(200);
});