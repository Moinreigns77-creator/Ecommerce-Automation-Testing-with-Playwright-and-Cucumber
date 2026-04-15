Feature: User Registration
    Scenario: User registers with valid credentials
        When I navigate to register page
        And I fill in the register form with valid details
        Then I should see a confirmation message and I click the continue button
        Then I should be logged into the application


    Scenario: User register with existing email
        When I navigate to register page
        When I fill the basic register form with existing email "Moin2@gmail.com" and name "Moin" and I should see an error message


    Scenario: Register user with valid credentials and validate login and delete the user account
        When I navigate to register page
        And I fill in the register form with valid details to delete
        Then I should see a confirmation message and I click the continue button
        Then I should be logged into the application
        When I click on delete user button and I should see account delete status and click continue to reach homepage