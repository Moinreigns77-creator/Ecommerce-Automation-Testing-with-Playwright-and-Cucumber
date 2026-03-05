Feature: User Registration

    Scenario: User registers with valid credentials
        Given I launch the application
        When I navigate to register page
        And I fill in the register form with valid details
        Then I should see a confirmation message and I click the continue button
        Then I should be logged into the application