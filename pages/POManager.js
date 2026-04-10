const RegisterPage = require("./RegisterPage");
const LoginPage = require("./LoginPage")
const DashboardPage = require("./DashboardPage")
const ProductPage = require("./ProductPage")
class POManager {

    constructor(page) {
        this.page = page;
    }

    async launchApplication(url) {
        await this.page.goto(url);
    }

    getRegisterPage() {
        return new RegisterPage(this.page);
    }

    getLoginPage() {
        return new LoginPage(this.page);
    }

    getDashboardPage() {
        return new DashboardPage(this.page);
    }

    getProductPage() {
        return new ProductPage(this.page);
    }
}

module.exports = POManager