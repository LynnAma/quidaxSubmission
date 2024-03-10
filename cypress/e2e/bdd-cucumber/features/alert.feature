Feature: Alert
    
    Background:
    Given User Navigates to web page

    @Alert
    Scenario: Verfify page loads successfully
    When User is on the landing page
    And User clicks the top navigation Background
    And User clicks the Alerts and Modal dropdown
    And User selects the Boostrap alert dropdown item
    And The page loads successfully
    And User clicks the alert button
    Then The alert message is displayed
    And User can see the alert message
