Feature: Login functionality

    Scenario: Login with valid credentials
        When I navigate to the login form
        When I enter the email "Moin2@gmail.com" and password "Moin@123"
        Then I should be logged in as username "Moin"


    Scenario: Login with invalid credentials
        When I navigate to the login form
        When I enter the email "Moin4@gmail.com" and password "Moin@444"
        Then I should the error message



    Scenario: Login with valid credentails and logout from the application
        When I navigate to the login form
        When I enter the email "Moin@gmail.com" and password "Moin@123"
        Then I should be logged in as username "Moin"
        When I click on logout button and I should be logged out of the application