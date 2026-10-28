const loginPage = require("../pages/LoginPage");

describe("E-Commerce - Shopping Cart Tests", () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
  });

  it("TC_CART_001 - Adds a product to the cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get(".shopping_cart_badge").should("have.text", "1");
    cy.get(".shopping_cart_link").click();

    cy.get(".inventory_item_name")
      .should("contain.text", "Sauce Labs Backpack");
    cy.get(".inventory_item_price").should("be.visible");

    cy.screenshot("product-added-to-cart");
  });

  it("TC_CART_002 - Removes a product from the cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();

    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("not.exist");
    cy.get(".cart_item").should("not.exist");
  });

  it("TC_CART_003 - Returns to the products page", () => {
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="continue-shopping"]').click();

    cy.url().should("include", "/inventory.html");
  });

  it("TC_CHECKOUT_001 - Completes the demo checkout flow", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type("Test");
    cy.get('[data-test="lastName"]').type("User");
    cy.get('[data-test="postalCode"]').type("560001");
    cy.get('[data-test="continue"]').click();

    cy.get(".summary_info").should("be.visible");
    cy.get('[data-test="finish"]').click();

    cy.get(".complete-header")
      .should("contain.text", "Thank you for your order!");

    cy.screenshot("checkout-completed");
  });
});
