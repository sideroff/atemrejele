Feature: Header

  Scenario: Showing the Header
    Given I have access to the application
    When I open the application on a any page
    Then the Header should display on top of the page
    And the Links specified in the config should be in it