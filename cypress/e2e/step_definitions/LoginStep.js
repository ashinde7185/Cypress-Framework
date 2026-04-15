import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../Pages/LoginPage";

const login = new LoginPage();

Given("I open login page", () => {
  cy.visit("https://example.com/login");
});

When("I enter username and password", () => {
  login.enterUsername("admin");
  login.enterPassword("admin123");
});

When("I click login button", () => {
  login.clickLogin();
});

Then("I should see dashboard", () => {
  cy.url().should("include", "/dashboard");
});