// class LoginPage {
// constructor(page) {
// this.page = page;
// // Landing page login entry
// 1
// this.loginEntryButton = page.getByText('Log In');
// this.emailButton = page.getByRole('button', { name: 'Email or Social Account' });
// // Login form
// this.usernameInput = page.getByRole('textbox', { name: 'Email address' });
// this.continueButton = page.locator('#_button-login-id').click();
// this.passwordInput = page.getByRole('textbox', { name: 'Password' });
// this.loginSubmitButton = page.locator('#submit');
// // Post-login
// this.welcomeText = page.locator('#mastheadVueContainer').getByRole('banner');
// }
// async openLandingPage() {
// await this.page.goto('https:/qa1.kansas.com');
// }
// async clickLoginEntry() {
// await this.loginEntryButton.click();
// }
// async emailButtonEntry() {
//     await this.emailButton.click();
// }
// async enterUsername() {
// await this.usernameInput.fill('a1@mailinator.com');
// }
// async continueEntry() {
//     await this.continueButton;
// }
// async enterPassword() {
// await this.passwordInput.fill('Infy@123');
// }
// async submitLogin() {
// await this.loginSubmitButton.click();
// }
// }
// module.exports = LoginPage;