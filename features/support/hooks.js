const { Before, After } = require("@cucumber/cucumber");
const { chromium, webkit, firefox } = require("@playwright/test");
const  POManager  = require("../../pages/POManager");

Before(async function () {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
})

After(function () {
    console.log("Scenario Ended");

})