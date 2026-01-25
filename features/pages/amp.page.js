class AMPMediaArticlePage {
constructor(page) {
this.page = page;
this.leadVideo = page.locator('iframe[name="amp_iframe1"]').contentFrame().locator('.cnx-ui-wrapper');
}
}
module.exports = AMPMediaArticlePage;

