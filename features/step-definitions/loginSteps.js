// const { Given, When, Then } = require('@cucumber/cucumber');
// const { expect } = require('@playwright/test');
// const LoginPage = require('../pages/login.page');
// let loginPage;
// Given('user opens a page', async function () {
// loginPage = new LoginPage(this.page);
// await loginPage.openLandingPage();
// });
// Given('user clicks on login button', async function () {
// await loginPage.clickLoginEntry();
// });
// Given('click on email button', async function(){
//     await loginPage.emailButtonEntry();
// });
// When('user enters username', async function
// () {
// await loginPage.enterUsername();
// });
// When('click on continue button', async function(){
//     await loginPage.continueEntry();
// });
// When('user enters password', async function() {
// await loginPage.enterPassword();
// });
// Then('user submits the login form', async function () {
// await loginPage.submitLogin();
// });
// Then('user should see the welcome page', async function () {
// await expect(loginPage.welcomeText).toBeVisible();
// });