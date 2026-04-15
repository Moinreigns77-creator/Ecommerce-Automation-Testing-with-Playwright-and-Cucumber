Feature: Cart page to place the products to order

    
    @only
    Scenario:  Verify Subscription in cart page
        When I navigate to cart page
        When I enter the email "moin@gmail.com" in the field and clicked Subscription button
        Then I should see the success status