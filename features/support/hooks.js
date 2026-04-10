const { Before, After, Given } = require("@cucumber/cucumber");
const { chromium, webkit, firefox ,expect} = require("@playwright/test");
const POManager = require("../../pages/POManager");

Before(async function () {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
    await this.poManager.launchApplication("https://automationexercise.com/");
    await expect(this.page.locator("//h2[normalize-space()='Features Items']")).toBeVisible();

})

After(function () {
    console.log("Scenario Ended");
})

