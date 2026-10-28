const loginPage = require("../pages/LoginPage");

describe("E-Commerce - Login Tests", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it("TC_LOGIN_001 - Logs in with valid credentials", () => {
    loginPage.login("standard_user", "secret_sauce");

    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("have.text", "Products");
    cy.screenshot("successful-login");
  });

  it("TC_LOGIN_002 - Shows an error for an invalid password", () => {
    loginPage.login("standard_user", "wrong_password");

    loginPage.verifyError("Username and password do not match");
  });

  it("TC_LOGIN_003 - Requires a username", () => {
    loginPage.clickLogin();

    loginPage.verifyError("Username is required");
  });
});
