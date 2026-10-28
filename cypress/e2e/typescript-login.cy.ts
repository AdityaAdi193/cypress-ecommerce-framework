/// <reference types="cypress" />

describe("E-Commerce - TypeScript Login Tests", () => {
  const username: string = "standard_user";
  const password: string = "secret_sauce";

  function enterCredentials(user: string, pass: string): void {
    cy.get('[data-test="username"]').type(user);
    cy.get('[data-test="password"]').type(pass);
    cy.get('[data-test="login-button"]').click();
  }

  beforeEach(() => {
    cy.visit("/");
  });

  it("TC_TS_001 - Logs in using typed test data", () => {
    enterCredentials(username, password);

    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("contain.text", "Products");
  });

  it("TC_TS_002 - Validates a missing username", () => {
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain.text", "Username is required");
  });
});
