const { expect } = require("@playwright/test");
class HomePage {

    constructor(page) {
        this.page = page;

        //Dashboard Elements
        this.logoutButton = this.page.locator("[href='/logout']");
        this.loginHeading = this.page.locator("h2:has-text('Login to your account')")
        this.loggedInAsLabel = name => this.page.locator(`//a[contains(normalize-space(),'Logged in as ${name}')]`)
        this.deleteAccountButton = this.page.locator("[href='/delete_account']");

        //HomePage
        this.accountDeleteMsg = this.page.locator("h2:has-text('Account Deleted!')");
        this.continueButton = this.page.locator("[data-qa='continue-button']")
        this.signupLoginButton = this.page.locator("a[href='/login']");

    }

    async verifyLogin(name) {
        await expect(this.loggedInAsLabel(name)).toBeVisible();
    }

    async logoutUser() {
        await this.logoutButton.click();
        await expect(this.loginHeading).toBeVisible();
    }

    async deleteUser() {
        await this.deleteAccountButton.click();
        await expect(this.accountDeleteMsg).toBeVisible();
        await this.continueButton.click();
        await expect(this.signupLoginButton).toBeVisible();
    }
}

module.exports = HomePage;