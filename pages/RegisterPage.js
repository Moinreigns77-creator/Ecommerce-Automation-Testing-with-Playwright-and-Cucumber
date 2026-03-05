const { expect } = require("@playwright/test")
class RegisterPage {

    constructor(page) {
        this.page = page;

        //Homepgae elements
        this.homeHeading = this.page.locator("h2:has-text('Features Items')");
        this.signupLoginButton = this.page.locator("a[href='/login']");

        //Signup Section
        this.newUserSignupHeading = this.page.locator("h2:has-text('New User Signup!')");
        this.nameInput = this.page.locator("[data-qa='signup-name']");
        this.emailInput = this.page.locator("[data-qa='signup-email']");
        this.signupButton = this.page.locator("[data-qa='signup-button']")

        //Account Information
        this.accountInfoHeading = this.page.locator("h2:has-text('Enter Account Information')");
        this.titleRadio = {
            Mr: this.page.getByLabel("Mr."),
            Mrs: this.page.getByLabel("Mrs.")
        }
        this.passwordInput = this.page.locator("#password");
        this.dob = {
            day: this.page.locator("#days"),
            month: this.page.locator("#months"),
            year: this.page.locator("#years")
        }

        this.newsletterCheckbox = this.page.locator("#newsletter");
        this.specialOffersCheckbox = this.page.locator("label:has-text('special offers')");
        this.firstname = this.page.locator("#first_name");
        this.lastname = this.page.locator("#last_name");
        this.company = this.page.locator("#company");
        this.address1 = this.page.locator("#address1");
        this.address2 = this.page.locator("#address2");
        this.countryDropdown = this.page.locator("select#country");
        this.state = this.page.locator("#state");
        this.city = this.page.locator("#city");
        this.zipcode = this.page.locator("#zipcode");
        this.mobile = this.page.locator("#mobile_number")
        this.createAccountButton = this.page.locator("button[data-qa='create-account']");

        //Post Registration
        this.accountCreatedStatus = this.page.locator("h2[data-qa='account-created']");
        this.continueButton = this.page.locator("a[data-qa='continue-button']");
        this.loggedInAsLabel = name => this.page.locator(`//a[contains(normalize-space(),'Logged in as ${name}')]`)
    }

    async navigateToHome(url) {
        await this.page.goto(url);
        await expect(this.homeHeading).toBeVisible();
    }

    async gotoRegistrationForm() {
        await this.signupLoginButton.click();
        await expect(this.newUserSignupHeading).toBeVisible();
    }

    async submitBasicSignupform(name, email) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.signupButton.click();
        await expect(this.accountInfoHeading).toBeVisible();
    }

    async fillAccountInformation(title, password, dob, address) {
        if (this.titleRadio[title]) {
            await this.titleRadio[title].check();
        }
        await this.passwordInput.fill(password);

        await this.dob.day.selectOption({ label: dob.day });
        await this.dob.month.selectOption({ label: dob.month });
        await this.dob.year.selectOption({ label: dob.year });

        await this.newsletterCheckbox.check();
        await this.specialOffersCheckbox.check();

        await this.firstname.fill(address.firstname);
        await this.lastname.fill(address.lastname);
        await this.company.fill(address.company);
        await this.address1.fill(address.address1);
        await this.address2.fill(address.address2);
        await this.countryDropdown.selectOption({ label: address.country });
        await this.state.fill(address.state);
        await this.city.fill(address.city);
        await this.zipcode.fill(address.zipcode);
        await this.mobile.fill(address.mobile);
        await this.createAccountButton.click();
    }

    async verifyAccountCreationAndContinue() {
        await expect(this.accountCreatedStatus).toBeVisible();
        await this.continueButton.click();
    }

    async verifyLogin(name) {
        await expect(this.loggedInAsLabel(name)).toBeVisible();
    }

}

module.exports = { RegisterPage }