// Shared setup executed before each spec file.
beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});
