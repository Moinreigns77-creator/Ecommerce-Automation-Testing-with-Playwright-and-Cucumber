const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test")


When('I navigate to products page and verify ALL PRODUCTS is visible', { timeout: 15 * 1000 }, async function () {
    await this.page.locator("[href='/products']").click();
    await expect(this.page.locator("//h2[normalize-space()='All Products']")).toBeVisible();
});


When('I click View Product button of the First Product', { timeout: 15 * 1000 }, async function () {
    await this.page.locator("[href='/product_details/1']").click();
    await expect(this.page.url()).toContain("/product_details");
    console.log(this.page.url());

});

Then('I should see the following details', { timeout: 15 * 1000 }, async function (dataTable) {
    const productPage = await this.poManager.getProductPage();
    await productPage.verifyProductDetails(dataTable.rowsHash());
});


//! Scenario - Search product
When('I search for the {string} product', { timeout: 15 * 1000 }, async function (productName) {
    await this.page.locator("#search_product").fill(productName);
    await this.page.locator("#submit_search").click();
});

Then('I should see all the products related to {string} are visible', { timeout: 15 * 1000 }, async function (productName) {
    await expect(this.page.locator("h2:has-text('Searched Products')")).toBeVisible();
    const searchedProducts = await this.page.locator(".productinfo p").allTextContents();
    searchedProducts.forEach(element => {
         expect(element).toContain(productName);
    });

});