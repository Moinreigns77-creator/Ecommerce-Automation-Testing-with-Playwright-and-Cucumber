const { expect } = require("@playwright/test")
const { splitAndGetPrice } = require('../features/support/utils.js')

class ProductPage {
    constructor(page) {
        this.page = page;
        this.productName = this.page.locator(".product-information h2");
        this.category = this.page.locator(".product-information p:has-text('Category')");
        this.price = this.page.locator(".product-information span span");
        this.availability = this.page.locator(".product-information p:has-text('Availability')")
        this.condition = this.page.locator(".product-information p:has-text('Condition')")
        this.brand = this.page.locator(".product-information p:has-text('Brand')")

    }

    async verifyProductDetails(data) {
        const productName = await this.productName.textContent();
        await expect(productName).toContain(data.productName);

        const category = await this.category.textContent();
        await expect(category).toContain(data.category);

        const price = await this.price.textContent();
        await expect(price).toContain(data.price);

        const availability = await this.availability.textContent();
        await expect(availability).toContain(data.availability);

        const condition = await this.condition.textContent();
        await expect(condition).toContain(data.condition);

        const brand = await this.brand.textContent();
        await expect(brand).toContain(data.brand);

    }

    async navigateToProductsPage() {
        await this.page.locator("[href='/products']").click();
        await expect(this.page.locator("//h2[normalize-space()='All Products']")).toBeVisible();
    }

    async addProductToCartById(productId) {
        const product = {};
        const productInfoLocator = (productId) => this.page.locator(`//div[contains(@class,'productinfo')]/a[@data-product-id='${productId}']`);
        product.name = await productInfoLocator(productId).locator('xpath=preceding-sibling::p').textContent();
        const priceText = await productInfoLocator(productId).locator('xpath=preceding-sibling::h2').textContent();
        product.price = splitAndGetPrice(priceText);
        await productInfoLocator(productId).click();
        return product;
    }

    async clickContinueShopping() {
        await this.page.locator(".btn-success").click();
    }

    async clickViewCart() {
        await this.page.locator("a[href='/view_cart'] u").click();
    }

    async verifyProductInCart(productId, expectedName, expectedPrice, expectedQty) {
        const name = await this.page.locator(`#product-${productId} .cart_description h4`).textContent();
        await expect(name).toBe(expectedName);
        const priceText = await this.page.locator(`#product-${productId} .cart_price p`).textContent();
        const price = splitAndGetPrice(priceText);
        await expect(price).toBe(expectedPrice);
        const quantity = await this.page.locator(`#product-${productId} .cart_quantity button`).textContent();
        await expect(quantity).toBe(expectedQty);
        const totalPriceText = await this.page.locator(`#product-${productId} .cart_total p`).textContent();
        await expect(splitAndGetPrice(totalPriceText)).toBe(quantity * price);

    }
}

module.exports = ProductPage