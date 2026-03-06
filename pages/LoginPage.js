const { expect } = require("@playwright/test");

class LoginPage {

    constructor(page) {
        this.page = page;

        //homepage elements
        this.homepageHeading = this.page.locator("h2:has-text('Features Items')");
        this.signupLoginButton = this.page.locator("[href='/login']");

        //LoginPage elements
        this.loginPageHeading = this.page.locator("h2:has-text('Login to your account')")
        this.emailInput = this.page.locator("[data-qa='login-email']");
        this.passwordInput = this.page.getByPlaceholder("Password");
        this.loginButton = this.page.locator("[data-qa='login-button']")
        
        this.invalidLoginMsg = this.page.locator("p:has-text('Your email or password is incorrect!')")


    }


    async navigateToLoginPage() {
        await this.signupLoginButton.click();
        await expect(this.loginPageHeading).toBeVisible();
    }

    async loginWithValidCredentials(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }


    async verifyInvalidLogin() {
        await expect(this.invalidLoginMsg).toBeVisible();
    }
}

module.exports = LoginPage 