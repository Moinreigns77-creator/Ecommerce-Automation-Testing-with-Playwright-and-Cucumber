Feature: Dashboard functionalities

    @only
    Scenario: Submit a feedback in the contact us form
        Given I launch the application
        When I navigate to Contact Us form
        When I fill contact form with details
            | name    | Moin                             |
            | email   | moin1@gmail.com                  |
            | subject | Product Out of stock             |
            | message | Please add Armani Kurta in stock |

        Then I should see a success message and return to hompage

