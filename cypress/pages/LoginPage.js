class LoginPage {
  visit() {
    cy.visit("/");
  }

  enterUsername(username) {
    cy.get('[data-test="username"]')
      .should("be.visible")
      .clear()
      .type(username);
  }

  enterPassword(password) {
    cy.get('[data-test="password"]')
      .should("be.visible")
      .clear()
      .type(password);
  }

  clickLogin() {
    cy.get('[data-test="login-button"]').click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  verifyError(message) {
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain.text", message);
  }
}

module.exports = new LoginPage();
