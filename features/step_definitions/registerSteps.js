const { Given, When, Then } = require("@cucumber/cucumber");
const { RegisterData } = require("../../data/registerData.json")
Given('I launch the application', { timeout: 15 * 1000 }, async function () {

    await this.registerPage.navigateToHome("https://automationexercise.com/");

});

When('I navigate to register page', { timeout: 15 * 1000 }, async function () {
    await this.registerPage.gotoRegistrationForm();
});

When('I fill in the register form with valid details', { timeout: 15 * 1000 }, async function () {
    await this.registerPage.submitBasicSignupform(RegisterData.name, RegisterData.email);
    await this.registerPage.fillAccountInformation(RegisterData.title, RegisterData.password, RegisterData.dob, RegisterData.address)
});

Then('I should see a confirmation message and I click the continue button', { timeout: 15 * 1000 }, async function () {
    await this.registerPage.verifyAccountCreationAndContinue();
});

Then('I should be logged into the application', { timeout: 15 * 1000 }, async function () {
    await this.registerPage.verifyLogin(RegisterData.name);
});


