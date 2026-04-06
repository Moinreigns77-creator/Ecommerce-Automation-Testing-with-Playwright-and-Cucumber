const { Given, When, Then } = require("@cucumber/cucumber")
const { expect } = require("@playwright/test")
Given('I launch the application', { timeout: 15 * 1000 }, async function () {
        await this.poManager.launchApplication("https://automationexercise.com/")
});

When('I navigate to Contact Us form', { timeout: 15 * 1000 }, async function () {
        await this.page.locator("[href='/contact_us']").click()
        await expect(this.page.locator("h2:has-text('Get In Touch')")).toBeVisible();

});

When('I fill contact form with details', { timeout: 15 * 1000 }, async function (dataTable) {
        const data = dataTable.rowsHash();
        this.dashboard = await this.poManager.getDashboardPage();
        await this.dashboard.fillContactForm(data);

});

Then('I should see a success message and return to hompage', { timeout: 30 * 1000 }, async function () {
        await expect(this.page.locator(".status.alert-success")).toBeVisible();
        await this.page.locator("span:has-text('Home')").click();
});