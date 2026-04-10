const { Given, When, Then } = require("@cucumber/cucumber");

When('I navigate to the login form', { timeout: 15 * 1000 }, async function () {
    this.loginPage = this.poManager.getLoginPage();
    await this.loginPage.navigateToLoginPage();

});

When('I enter the email {string} and password {string}', { timeout: 15 * 1000 }, async function (email, password) {
    await this.loginPage.loginWithValidCredentials(email, password);
});

Then('I should be logged in as username {string}', { timeout: 15 * 1000 }, async function (name) {
    // await this.loginPage.verifyValidLogin(name)
    this.dashboardPage = await this.poManager.getDashboardPage();
    await this.dashboardPage.verifyLogin(name);
});

Then('I should the error message', { timeout: 15 * 1000 }, async function () {
    await this.loginPage.verifyInvalidLogin();
})

When('I click on logout button and I should be logged out of the application', { timeout: 15 * 1000 }, async function () {
    await this.dashboardPage.logoutUser();
});
