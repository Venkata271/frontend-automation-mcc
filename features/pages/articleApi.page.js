const { expect } = require('@playwright/test');

class ArticleApiPage {
  constructor(apiContext) {
    this.apiContext = apiContext;
    this.response = null;
  }

  async hitArticleEndpoint() {
    const endpoint = 'https://qa1-api.gcp.misitemgr.com/web/v1/content/31558303';
    this.response = await this.apiContext.get(endpoint);
  }

  async verifyApiResponse() {
    expect(this.response).toBeTruthy();
  }

  async verifyStatusCode(expectedStatus) {
    expect(this.response.status()).toBe(expectedStatus);
  }

  async getResponseBody() {
    return await this.response.json();
  }
}

module.exports = ArticleApiPage;