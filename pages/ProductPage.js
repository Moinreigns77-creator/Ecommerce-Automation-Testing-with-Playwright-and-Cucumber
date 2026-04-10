const { expect } = require("@playwright/test")


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

}

module.exports = ProductPage