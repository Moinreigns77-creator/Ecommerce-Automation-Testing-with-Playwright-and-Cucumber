const RegisterPage = require("./RegisterPage");
const LoginPage = require("./LoginPage")
const HomePage = require("./HomePage")
 class POManager {

    constructor(page) {
        this.page = page;
    }

   async launchApplication(url){
    await this.page.goto(url);
    }

    getRegisterPage() {
        return new RegisterPage(this.page);
    }

    getLoginPage(){
        return new LoginPage(this.page);
    }

    getHomePage(){
        return new HomePage(this.page);
    }
}

module.exports = POManager