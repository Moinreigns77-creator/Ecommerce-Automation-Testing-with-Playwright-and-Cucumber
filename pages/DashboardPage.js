const { expect } = require("@playwright/test");
class DashboardPage {

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

        this.contactUsButton = this.page.locator("[href='/contact_us'']")
        this.getInTouchHeading = this.page.locator("h2:has-text('Get In Touch')")
        this.nameField = this.page.locator("[data-qa='name']");
        this.emailField = this.page.locator("[data-qa='email']");
        this.subjectField = this.page.getByPlaceholder("Subject");
        this.messgaeTextarea = this.page.locator("#message");
        this.fileButton = this.page.locator("[name='upload_file']");
        this.submitButton = this.page.locator("[data-qa='submit-button']");
        this.successStatusMsg - this.page.locator(".status.alert-success");
        this.homeButton = this.page.locator("span:has-text('Home')");



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

    async fillContactForm(dataTable) {
        await this.nameField.fill(dataTable.name);
        await this.emailField.fill(dataTable.email);
        await this.subjectField.fill(dataTable.subject);
        await this.messgaeTextarea.fill(dataTable.message);
        await this.page.once("dialog", (dailogWin) => {
            console.log(dailogWin.message());
            dailogWin.accept();
        })
        await this.submitButton.click();
    }
}

module.exports = DashboardPage;