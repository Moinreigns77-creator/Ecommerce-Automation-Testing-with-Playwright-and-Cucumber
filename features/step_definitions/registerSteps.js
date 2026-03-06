const { Given, When, Then } = require("@cucumber/cucumber");
const { RegisterData,RegisterDataAndDelete } = require("../../data/registerData.json")

//*Scenario: User registers with valid credentials
Given('I launch the application to register', { timeout: 15 * 1000 }, async function () {

    this.registerPage = this.poManager.getRegisterPage();
    await this.poManager.launchApplication("https://automationexercise.com/");

});

When('I navigate to register page', { timeout: 15 * 1000 }, async function () {

    await this.registerPage.gotoRegistrationForm();

});

When('I fill in the register form with valid details', { timeout: 15 * 1000 }, async function () {
    await this.registerPage.submitBasicSignupform(RegisterData.name, RegisterDataAndDelete.email);
    await this.registerPage.fillAccountInformation(RegisterData.title, RegisterData.password, RegisterData.dob, RegisterData.address)
});

Then('I should see a confirmation message and I click the continue button', { timeout: 15 * 1000 }, async function () {

    await this.registerPage.verifyAccountCreationAndContinue();

});

Then('I should be logged into the application', { timeout: 15 * 1000 }, async function () {
    this.homePage = await this.poManager.getHomePage();
    await this.homePage.verifyLogin(RegisterData.name);
});

//* Scenario: User register with existing email
When('I fill the basic register form with existing email {string} and name {string} and I should see an error message', { timeout: 15 * 1000 }, async function (email, name) {
    await this.registerPage.submitBasicSignupformWithExistingEmail(name, email);
});


When('I click on delete user button and I should see account delete status and click continue to reach homepage', { timeout: 15 * 1000 }, async function () {
    await this.homePage.deleteUser();
})

