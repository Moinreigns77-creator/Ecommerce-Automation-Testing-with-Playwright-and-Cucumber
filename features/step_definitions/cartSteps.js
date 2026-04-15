const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test')

When('I navigate to cart page', async function () {
   await this.page.locator("[href='/view_cart']").first().click();
   await expect(this.page.locator("li:has-text('Shopping Cart')")).toBeVisible();
});



