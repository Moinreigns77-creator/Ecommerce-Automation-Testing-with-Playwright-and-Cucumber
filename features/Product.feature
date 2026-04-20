Feature: Product page

    Scenario: Verify All products and Product detail page
        When I navigate to products page and verify ALL PRODUCTS is visible
        When I click View Product button of the First Product
        Then I should see the following details
            | productName  | Blue Top     |
            | category     | Women > Tops |
            | price        | Rs. 500      |
            | availability | In Stock     |
            | condition    | New          |
            | brand        | Polo         |


    Scenario: Search product in the products page
        When I navigate to products page and verify ALL PRODUCTS is visible
        When I search for the "Jeans" product
        Then I should see all the products related to "Jeans" are visible

    @only
    Scenario: Add first and second products to cart
        When I navigate to products page and verify ALL PRODUCTS is visible
        When I add first product to cart and click continue shopping button
        When I add second product to cart and click view cart button
        Then Verify both products are added to Cart with correct name, price, quantity and total price
       