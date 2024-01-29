/// <reference types="Cypress" />

describe("Create new gallery", () => {
  it("Succesfully create gallery with one image", () => {
    cy.visit("login");
    cy.get("#email").type("markoqa13@gmail.com");
    cy.get("#password").type("Marko123");
    cy.get("button").contains("Submit").click();

    cy.get('a[href="/create"]').should("be.visible").click();
    cy.get("h1").should("have.text", "Create Gallery");

    cy.get("#title").should("be.visible").type("Nova Galerija - Marko");
    cy.get("#description").should("be.visible").type("Galerija Yamaha");

    cy.get('input[type="url"]').type(
      "https://media.gazetadopovo.com.br/2009/05/f1ec0bfe587fe950b904c4267fb20ca9-gpLarge.jpg"
    );
    cy.contains("Submit").click();
  });
});
