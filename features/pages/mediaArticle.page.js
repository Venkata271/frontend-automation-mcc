class MediaArticlePage {
constructor(page) {
this.page = page;
this.leadVideo = page.locator('video').first();
this.leadImage = page.locator('article img').first();
}
}
module.exports = MediaArticlePage;