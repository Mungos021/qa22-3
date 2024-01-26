/// <reference types="Cypress" />

describe("Registration functionality - Gallery App", () => {
    
  it("Unsuccessful registration - invalid email address", () => {
    cy.visit("https://gallery-app.vivifyideas.com/register");

    // hvatanje elemenata preko ID-ja === #vrednost ID-ja
    cy.get("#first-name").type("Marko");
    cy.get("#last-name").type("Djuric");
    cy.get("#email").type("markoqa13+223gmail.com");
    cy.get("#password").type("Marko123");
    cy.get("#password-confirmation").type("Marko123");

    // hvatanje elemenata preko klase === .nazivKlase
    cy.get(".form-check-input").check();

    // hvatanje elementa pomocu taga + vrednost nekog njegovog propertija
    cy.get('a[role="button "]');

    // hvatanje elemenata preko html tag-a
    cy.get("button").click();
  });

  it("Unsuccessful registration - password too short", () => {
    cy.visit("https://gallery-app.vivifyideas.com/register");

    cy.get("#first-name").type("Marko");
    cy.get("#last-name").type("Djuric");
    cy.get("#email").type("markoqa13+2231@gmail.com");
    cy.get("#password").type("Marko");
    cy.get("#password-confirmation").type("Marko");
    cy.get(".form-check-input").check();
    cy.get("button").click();
  });

  it("Unsuccessful registration - wrong password confirmation", () => {
    cy.visit("https://gallery-app.vivifyideas.com/register");

    cy.get("#first-name").type("Marko");
    cy.get("#last-name").type("Djuric");
    cy.get("#email").type("markoqa13+22322@gmail.com");
    cy.get("#password").type("Marko123");
    cy.get("#password-confirmation").type("Marko1232");
    cy.get(".form-check-input").check();
    cy.get("button").click();
  });

  it("Successful registration", () => {
    cy.visit("https://gallery-app.vivifyideas.com/register");

    cy.get("#first-name").type("Marko");
    cy.get("#last-name").type("Djuric");
    cy.get("#email").type("markoqa13+22312321@gmail.com");
    cy.get("#password").type("Marko123");
    cy.get("#password-confirmation").type("Marko123");
    cy.get(".form-check-input").check();
    cy.get("button").click();

    cy.wait(3000);

    cy.get("a").contains("Logout");
  });

});
