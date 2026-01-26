class AMPMediaArticlePage {
constructor(page) {
this.page = page;
this.leadVideo = page.locator('iframe[name="amp_ifram2e1"]').contentFrame().locator('.cnx-ui-wrapper');
}
}
export default AMPMediaArticlePage;

