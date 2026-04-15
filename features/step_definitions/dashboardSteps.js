const { Given, When, Then } = require("@cucumber/cucumber")
const { expect } = require("@playwright/test")

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

//*Scenario:  Verify Test Cases Page
When('I navigate to Test cases Page', { timeout: 15 * 1000 }, async function () {
        await this.page.locator("a:has-text(' Test Cases')").first().click();
});

Then('I should see the Test Cases Title', { timeout: 15 * 1000 }, async function () {
        await expect(this.page.locator("//b[normalize-space()='Test Cases']")).toBeVisible();
});



//*Scenario:  Verify Subscription in home page
When('I enter the email {string} in the field and clicked Subscription button', { timeout: 15 * 1000 }, async function (email) {
        await expect(this.page.locator(".single-widget h2")).toBeVisible();
        await this.page.locator("#susbscribe_email").fill(email);
        await this.page.locator("#subscribe").click();
});

Then('I should see the success status', { timeout: 15 * 1000 }, async function () {
        await expect(this.page.locator("#success-subscribe")).toBeVisible();
});