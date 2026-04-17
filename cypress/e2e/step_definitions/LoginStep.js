import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../Pages/LoginPage";


const login = new LoginPage();

Given("User navigate to facebook login page", () => {
  cy.visit("https://www.facebook.com/");
});

When("User enters username and password", () => {
  login.enterUsername("admin");
  login.enterPassword("admin123");
});

When("User clicks login button", () => {
  login.clickLogin();
});

Then("User should see dashboard", () => {
  cy.url().should("include", "/dashboard");
});