const { Given, When, Then } = require('@cucumber/cucumber');
const { request } = require('@playwright/test');
const ArticleApiPage = require('../pages/articleApi.page.js');

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