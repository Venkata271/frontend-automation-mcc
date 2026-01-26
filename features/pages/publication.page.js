class PublicationPage {
  constructor(page) {
    this.page = page;
  }

  async open(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async getCanonicalUrlFromSource() {
    // Fetch full page HTML (view page source equivalent)
    const html = await this.page.content();

    const match = html.match(
      /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/
    );

    if (!match) {
      throw new Error('Canonical URL not found in page source');
    }

    return match[1];
  }

  async getCurrentUrl() {
    return this.page.url();
  }

  async takeScreenshot(name) {
    await this.page.screenshot({
      path: `screenshots/${name}.png`,
      fullPage: true,
    });
  }
}

export { PublicationPage };