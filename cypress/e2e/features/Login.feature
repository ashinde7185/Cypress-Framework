Feature: Login.feature

    Scenario: Validate user should be able to login to facebook application with Valid cred
        Given User navigate to facebook login page
        When User enters username and password
        And User clicks login button
        Then User should see dashboard


        Some random changes
