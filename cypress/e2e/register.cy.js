/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')

describe("Registration functionality - Gallery App", () => {
  it.only("Unsuccessful registration - invalid email address", () => {

    cy.visit("/register");

    //ASERTACIJE
    // provera da li smo na ispravnoj adresi
    cy.url().should("contain", "/register");
    //provera da li je neki tekst tacan
    cy.get("h1").should("have.text", "Register");
    cy.get("label").eq(0).should("have.text", "First Name");
    cy.get("label").eq(1).should("have.text", "Last Name");
    
    // hvatanje elemenata preko ID-ja === #vrednost ID-ja
    cy.get("#first-name").type("Marko");
    cy.get("#last-name").type("Djuric");
    cy.get("#email").type("markoqa13+22312321@gmail.com");
    cy.get("#password").type("Marko123");
    cy.get("#password-confirmation").type("Marko123");
    
    // hvatanje elemenata preko klase === .nazivKlase
    cy.get(".form-check-input").check();
    
    // hvatanje elementa pomocu taga + vrednost nekog njegovog atributa
    // cy.get('a[role="button "]');
    
    // hvatanje elemenata preko html tag-a
    cy.get("button").click();
    cy.intercept('@successfulRegistration').then((response) => {
      cy.log(response)
    })
    
    //primer negativne asertacije - NE SADRZI
    cy.url().should("not.contain", "/register");
  });

  // KORISCENJE LOKATORA - umesto klasicnih getera

  it("Unsuccessful registration - password too short", () => {
    cy.visit("/register");

    cy.get(locators.registrationPage.firstNameInputField)
      .type("Marko");
    cy.get(locators.registrationPage.lastNameInputField)
      .type("Djuric");
    cy.get(locators.registrationPage.emailInputField)
      .type("markoqa13+2231@gmail.com");
    cy.get(locators.registrationPage.passwordInputField)
      .type("Marko");
    cy.get(locators.registrationPage.passwordConfirmationInputField)
      .type("Marko");
    cy.get(locators.registrationPage.termsCheckbox).check();
    cy.get(locators.registrationPage.submitButton).click();
  });

  it("Unsuccessful registration - wrong password confirmation", () => {
    cy.visit("/register");

    cy.get("#first-name").type("Marko");
    cy.get("#last-name").type("Djuric");
    cy.get("#email").type("markoqa13+22322@gmail.com");
    cy.get("#password").type("Marko123");
    cy.get("#password-confirmation").type("Marko1232");
    cy.get(".form-check-input").check();
    cy.get("button").click();
  });

  it("Successful registration", () => {
    cy.visit("/register");

    cy.get("#first-name").type("Marko");
    cy.get("#last-name").type("Djuric");
    cy.get("#email").type("markoqa13+22312321@gmail.com");
    cy.get("#password").type("Marko123");
    cy.get("#password-confirmation").type("Marko123");
    cy.get(".form-check-input").check();
    cy.get("button").click();

    // cy.wait(3000);

    cy.get("a").contains("Logout");
  });
});
