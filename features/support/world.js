import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium, webkit } from 'playwright';
class CustomWorld {
async init() {
this.browser = await chromium.launch({ headless: false });
this.context = await this.browser.newContext();
this.page = await this.context.newPage();
	// Increase Playwright default timeouts for actions and navigation
	this.context.setDefaultTimeout(60000);
	this.context.setDefaultNavigationTimeout(60000);
	this.page.setDefaultTimeout(60000);
}
async close() {
await this.browser.close();
}
}
setWorldConstructor(CustomWorld);
