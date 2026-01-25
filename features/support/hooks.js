import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';

// Increase Cucumber step timeout to 2 minutes
setDefaultTimeout(120000);

Before(async function () {
	await this.init();
});

After(async function () {
	await this.close();
});