Feature: Login functionality

Scenario: Valid Login

Given I open login page
When I enter username and password
And I click login button
Then I should see dashboard