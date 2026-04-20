const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test")
const { splitAndGetPrice } = require('../support/utils.js')

When('I navigate to products page and verify ALL PRODUCTS is visible', { timeout: 15 * 1000 }, async function () {
    this.productPage = this.poManager.getProductPage();
    await this.productPage.navigateToProductsPage();
});


When('I click View Product button of the First Product', { timeout: 15 * 1000 }, async function () {
    await this.page.locator("[href='/product_details/1']").click();
    await expect(this.page.url()).toContain("/product_details");
    console.log(this.page.url());

});

Then('I should see the following details', { timeout: 15 * 1000 }, async function (dataTable) {
    await this.productPage.verifyProductDetails(dataTable.rowsHash());
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

//! Scenario: Add prodcuts to cart
When('I add first product to cart and click continue shopping button', { timeout: 15 * 1000 }, async function () {
    this.product1 = await this.productPage.addProductToCartById('1');
    await this.productPage.clickContinueShopping();
});


When('I add second product to cart and click view cart button', { timeout: 15 * 1000 }, async function () {
    this.product2 = await this.productPage.addProductToCartById('2');
    await this.productPage.clickViewCart();
});

Then('Verify both products are added to Cart with correct name, price, quantity and total price', { timeout: 15 * 1000 }, async function () {
  await this.productPage.verifyProductInCart('1',this.product1.name,this.product1.price,'1')
  await this.productPage.verifyProductInCart('2',this.product2.name,this.product2.price,'1')
});



