Feature: Dashboard functionalities


    Scenario: Submit a feedback in the contact us form
        When I navigate to Contact Us form
        When I fill contact form with details
            | name    | Moin                             |
            | email   | moin1@gmail.com                  |
            | subject | Product Out of stock             |
            | message | Please add Armani Kurta in stock |

        Then I should see a success message and return to hompage

    Scenario: Verify Test Cases Page
        When I navigate to Test cases Page
        Then I should see the Test Cases Title

    
    Scenario:  Verify Subscription in home page
        When I enter the email "moin@gmail.com" in the field and clicked Subscription button
        Then I should see the success status
